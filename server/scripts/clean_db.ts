import dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://wudzzpcnxkbmjnxqefjy.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_ANON_KEY || '';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function clean() {
  const { data: hackathons, error } = await supabase.from('hackathons').select('*');
  if (error || !hackathons) {
    console.error('Error fetching hackathons:', error);
    return;
  }

  console.log(`Starting cleanup on ${hackathons.length} records in Supabase...`);

  const idsToDelete: string[] = [];
  const recordsToUpdate: any[] = [];

  const JUNK_PATTERNS = [
    'instagram.com',
    '/blogs/',
    '/blog/',
    'thita.ai',
    'insiderone.in',
    'cognizance-2024',
  ];

  // Generic non-event directory URLs that are not actual registration forms
  const GENERIC_DIRECTORIES = [
    'https://unstop.com/hackathons',
    'https://devfolio.co/hackathons',
    'https://devfolio.co/',
    'https://devfolio.co',
    'https://reskilll.com/allHacks',
    'https://reskilll.com/',
    'https://reskilll.com',
    'https://techfest.org/competitions',
    'https://techfest.org/competitions/',
  ];

  for (const h of hackathons) {
    const link = (h.registration_link || '').trim();
    const title = (h.title || '').trim();

    // Check if it's junk
    const isJunkPattern = JUNK_PATTERNS.some(pat => link.toLowerCase().includes(pat));
    const isGenericDir = GENERIC_DIRECTORIES.includes(link.replace(/\/$/, '')) || GENERIC_DIRECTORIES.includes(link);
    const isTitleGeneric = title.toLowerCase().includes('hackathons in india:') ||
                           title.toLowerCase().includes('upcoming hackathons in india') ||
                           title.toLowerCase().includes('find & join online hackathons') ||
                           title.toLowerCase().includes('2540+ hackathons') ||
                           title.toLowerCase().includes('devfolio - your one application');

    if (isJunkPattern || isGenericDir || isTitleGeneric) {
      idsToDelete.push(h.id);
      console.log(`🗑️ Deleting junk/blog: [${h.id}] "${title}" -> ${link}`);
      continue;
    }

    // Fix Misclassified Institutions:
    // If it's Smart India Hackathon (SIH), organizer is Ministry of Education, not IIT!
    let needsUpdate = false;
    let newInstType = h.institution_type;
    let newInstName = h.institution_name;

    if (h.id === 'hack-sih-2026' || title.toLowerCase().includes('smart india hackathon')) {
      newInstType = 'Tech School';
      newInstName = 'Ministry of Education & AICTE';
      needsUpdate = true;
    }

    // If an online event is tagged as IIT or NIT, but it's not held on campus
    if (h.mode === 'online' && (h.institution_type === 'IIT' || h.institution_type === 'NIT')) {
      if (!title.toLowerCase().includes('iit ') && !title.toLowerCase().includes('nit ')) {
        newInstType = 'Tech School';
        needsUpdate = true;
      }
    }

    if (needsUpdate) {
      recordsToUpdate.push({
        id: h.id,
        institution_type: newInstType,
        institution_name: newInstName,
      });
      console.log(`✏️ Updating [${h.id}] Institution: ${h.institution_type} -> ${newInstType}`);
    }
  }

  console.log(`\nIdentified ${idsToDelete.length} junk records to delete.`);
  console.log(`Identified ${recordsToUpdate.length} records to update.`);

  // 1. Delete junk records
  if (idsToDelete.length > 0) {
    const { error: delErr } = await supabase.from('hackathons').delete().in('id', idsToDelete);
    if (delErr) {
      console.error('Failed to delete records:', delErr.message);
    } else {
      console.log(`✅ Successfully deleted ${idsToDelete.length} junk records.`);
    }
  }

  // 2. Update corrected records
  for (const rec of recordsToUpdate) {
    await supabase.from('hackathons').update({
      institution_type: rec.institution_type,
      institution_name: rec.institution_name,
    }).eq('id', rec.id);
  }

  // Final count
  const { count } = await supabase.from('hackathons').select('*', { count: 'exact', head: true });
  console.log(`🎉 Cleanup complete! Active clean records remaining in Supabase: ${count}`);
}

clean();
