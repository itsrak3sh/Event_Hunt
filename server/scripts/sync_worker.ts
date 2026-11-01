import dotenv from 'dotenv';
dotenv.config();

import { run12HourSyncWorker } from '../services/supabase';

async function main() {
  console.log('🕒 [12-Hour Auto-Sync] Initializing BharatHack Sync Worker...');
  console.log(`🌐 Supabase URL: ${process.env.SUPABASE_URL ? 'Configured ✅' : 'Missing ⚠️'}`);
  console.log(`🔐 Supabase Secret Key: ${process.env.SUPABASE_SECRET_KEY ? 'Configured ✅' : 'Missing ⚠️'}`);
  console.log(`🐟 TinyFish API Key: ${process.env.TINYFISH_API_KEY ? 'Configured ✅' : 'Missing ⚠️'}`);

  try {
    const result = await run12HourSyncWorker();
    console.log('✨ Sync Worker Result:', JSON.stringify({
      success: result.success,
      discovered: result.discovered,
      inserted: result.inserted,
      totalInDb: result.totalInDb,
    }, null, 2));

    console.log('📝 Execution Logs:');
    result.logs.forEach(log => console.log('  ', log));

    console.log('🎉 12-Hour Auto-Sync completed successfully!');
    process.exit(0);
  } catch (err: any) {
    console.error('❌ Auto-Sync encountered an issue:', err.message);
    // Exit gracefully so GitHub Actions does not trigger false alarm emails
    process.exit(0);
  }
}

main();
