import { Hackathon } from '../types';

export function generateGoogleCalendarUrl(hackathon: Hackathon): string {
  const startDate = new Date(hackathon.dates.startDate)
    .toISOString()
    .replace(/-|:|\.\d\d\d/g, '');
  const endDate = new Date(hackathon.dates.endDate)
    .toISOString()
    .replace(/-|:|\.\d\d\d/g, '');

  const title = encodeURIComponent(`[Hackathon] ${hackathon.title}`);
  const details = encodeURIComponent(
    `${hackathon.tagline}\n\n` +
    `Entry Fee: ${hackathon.entryFeeType === 'free' ? 'FREE (₹0)' : `Paid (${hackathon.entryFeeCurrency}${hackathon.entryFeeAmount})`}\n` +
    `Mode: ${hackathon.mode.toUpperCase()}\n` +
    `Registration Deadline: ${new Date(hackathon.dates.registrationDeadline).toLocaleDateString('en-IN')}\n\n` +
    `Official Registration Link: ${hackathon.registrationLink}\n\n` +
    `Discovered via BharatHack (TinyFish AI)`
  );
  const location = encodeURIComponent(`${hackathon.location.venue}, ${hackathon.location.city}, ${hackathon.location.state}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
}

export function downloadIcsFile(hackathon: Hackathon): void {
  const formatIcsDate = (dateStr: string) => {
    return new Date(dateStr)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, '');
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//BharatHack//Hackathon Radar India//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${hackathon.id}@bharathack.in`,
    `DTSTAMP:${formatIcsDate(new Date().toISOString())}`,
    `DTSTART:${formatIcsDate(hackathon.dates.startDate)}`,
    `DTEND:${formatIcsDate(hackathon.dates.endDate)}`,
    `SUMMARY:[Hackathon] ${hackathon.title}`,
    `DESCRIPTION:${hackathon.tagline.replace(/\n/g, ' ')}\\n\\nOfficial Link: ${hackathon.registrationLink}`,
    `LOCATION:${hackathon.location.venue}, ${hackathon.location.city}, ${hackathon.location.state}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${hackathon.slug}-bharathack.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function shareToWhatsApp(hackathon: Hackathon): void {
  const text = encodeURIComponent(
    `🔥 Found an exciting Indian Hackathon on BharatHack!\n\n` +
    `🏆 *${hackathon.title}*\n` +
    `🏢 Host: ${hackathon.organizer} (${hackathon.institutionName})\n` +
    `💰 Prize Pool: ${hackathon.prizePool}\n` +
    `🎟️ Entry: ${hackathon.entryFeeType === 'free' ? 'FREE (₹0)' : `Paid (${hackathon.entryFeeCurrency}${hackathon.entryFeeAmount})`}\n` +
    `📍 Mode: ${hackathon.mode.toUpperCase()} (${hackathon.location.city})\n` +
    `⏰ Registration Deadline: ${new Date(hackathon.dates.registrationDeadline).toLocaleDateString('en-IN')}\n\n` +
    `🔗 Official Registration Link:\n${hackathon.registrationLink}`
  );
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}
