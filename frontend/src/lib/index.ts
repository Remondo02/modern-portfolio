export function formatDate(
  date: string,
  monthFormat: 'short' | 'long' = 'long',
  isDay: boolean = true,
) {
  return new Date(date).toLocaleDateString('en-US', {
    month: monthFormat,
    day: isDay ? 'numeric' : undefined,
    year: 'numeric',
  })
}
