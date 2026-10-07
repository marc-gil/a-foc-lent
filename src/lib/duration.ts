
export function formatDurationCompact(iso: string): string {
  const { hours, minutes } = parseIsoDuration(iso);
  return [hours && `${hours}h`, minutes && `${minutes}m`]
    .filter(Boolean)
    .join(" ");
}

export function formatDurationMinuteMark(iso: string): string {
  const { hours, minutes } = parseIsoDuration(iso);
  return [hours && `${hours}h`, minutes && `${minutes}'`]
    .filter(Boolean)
    .join(" ");
}

export function formatDurationHHMM(iso: string): string {
  const { hours, minutes } = parseIsoDuration(iso);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function parseIsoDuration(iso: string) {
  const hours = iso.match(/(\d+)H/)?.[1] ?? "0";
  const minutes = iso.match(/(\d+)M/)?.[1] ?? "0";
  return { hours: parseInt(hours), minutes: parseInt(minutes) };
}