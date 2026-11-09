/**
 * Shared formatting utilities for game statistics and data display
 */

/**
 * Truncates average game length to 2 decimal places
 * Displays 'n/a' if value is 0
 * @param avgLength - Average game length as a decimal number
 * @returns Formatted string (e.g., "3.45" or "n/a")
 */
export function truncateAverageGameLength(avgLength: number): string {
  if (avgLength === 0) {
    return 'n/a';
  }
  return (Math.round(avgLength * Math.pow(10, 2)) / Math.pow(10, 2)).toString();
}

/**
 * Formats a percentage as a human-readable string
 * @param value - Decimal value (e.g., 0.573 for 57.3%)
 * @returns Formatted string (e.g., "57%")
 */
export function formatPercentage(value: number): string {
  return `${Math.round(value * 100)}%`;
}

/**
 * Safely truncates a string to a maximum length with ellipsis
 * @param str - String to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated string with ellipsis if needed
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength - 3) + '...';
}
