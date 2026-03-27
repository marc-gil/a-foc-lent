export function formatDuration(iso: string): string {
  const { hours, minutes } = parseDuration(iso);
  return [hours && `${hours}h`, minutes && `${minutes}m`]
    .filter(Boolean)
    .join(" ");
}

function parseDuration(iso: string) {
  const hours = iso.match(/(\d+)H/)?.[1] ?? "0";
  const minutes = iso.match(/(\d+)M/)?.[1] ?? "0";
  return { hours: parseInt(hours), minutes: parseInt(minutes) };
}