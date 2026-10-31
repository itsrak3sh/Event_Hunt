import { Hackathon } from '../types';

export function exportHackathonsToCSV(hackathons: Hackathon[]): void {
  const headers = [
    'Title',
    'Organizer',
    'Institution Type',
    'Institution Name',
    'Entry Fee Type',
    'Entry Fee (INR)',
    'Mode',
    'City',
    'State',
    'Venue',
    'Prize Pool',
    'Registration Deadline',
    'Start Date',
    'End Date',
    'Duration (Hours)',
    'Team Size',
    'Tracks',
    'Registration Link',
    'Source'
  ];

  const rows = hackathons.map(h => [
    `"${h.title.replace(/"/g, '""')}"`,
    `"${h.organizer.replace(/"/g, '""')}"`,
    `"${h.institutionType}"`,
    `"${h.institutionName.replace(/"/g, '""')}"`,
    `"${h.entryFeeType}"`,
    h.entryFeeAmount,
    `"${h.mode}"`,
    `"${h.location.city}"`,
    `"${h.location.state}"`,
    `"${h.location.venue.replace(/"/g, '""')}"`,
    `"${h.prizePool}"`,
    `"${new Date(h.dates.registrationDeadline).toLocaleDateString('en-IN')}"`,
    `"${new Date(h.dates.startDate).toLocaleDateString('en-IN')}"`,
    `"${new Date(h.dates.endDate).toLocaleDateString('en-IN')}"`,
    h.dates.durationHours,
    `"${h.teamSize}"`,
    `"${h.tracks.join(', ')}"`,
    `"${h.registrationLink}"`,
    `"${h.source}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `BharatHack_Indian_Hackathons_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportHackathonsToJSON(hackathons: Hackathon[]): void {
  const jsonString = JSON.stringify(hackathons, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `BharatHack_Indian_Hackathons_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
