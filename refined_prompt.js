/**
 * Converts a given string to camelCase format.
 *
 * - Splits the input string by non-alphanumeric characters (spaces, underscores, hyphens, etc.).
 * - Lowercases all words.
 * - Capitalizes the first letter of each word except the first word.
 * - Joins the words together without separators.
 *
 * Examples:
 *   toCamelCase("first name")      // "firstName"
 *   toCamelCase("user_id")         // "userId"
 *   toCamelCase("SCREEN_NAME")     // "screenName"
 *   toCamelCase("  mobile-number") // "mobileNumber"
 *
 * @param {string} input - The string to convert to camelCase. If null or undefined, returns an empty string.
 * @returns {string} The camelCase formatted string, or an empty string if input is empty or only contains separators.
 * @throws {Error} If the input is not a string.
 */

/**
 * Converts a given string to dot.case format.
 *
 * - Inserts dots between camelCase boundaries.
 * - Replaces spaces, underscores, and hyphens with dots.
 * - Removes all other non-alphanumeric characters except dots.
 * - Converts the result to lowercase.
 * - Collapses multiple consecutive dots into a single dot.
 * - Removes leading and trailing dots.
 *
 * Examples:
 *   toDotCase("First Name")      // "first.name"
 *   toDotCase("user_id")         // "user.id"
 *   toDotCase("SCREEN_NAME")     // "screen.name"
 *   toDotCase("  mobile-number") // "mobile.number"
 *
 * @param {string} input - The string to convert to dot.case. If null or undefined, returns an empty string.
 * @returns {string} The dot.case formatted string, or an empty string if input is empty or only contains separators.
 * @throws {Error} If the input is not a string.
 */
function toCamelCase(input) {
    if (input === null || input === undefined) return '';
    if (typeof input !== 'string') throw new Error('Input must be a string');

    // Trim and handle empty string
    const trimmed = input.trim();
    if (trimmed === '') return '';

    // Split by non-alphanumeric characters
    const words = trimmed
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase all words
    const lowerWords = words.map(w => w.toLowerCase());

    // Capitalize all except the first word
    const camelCased = lowerWords[0] +
        lowerWords.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

    return camelCased;
}

/**
 * Converts a string to dot.case format.
 * Example: "First Name" -> "first.name", "user_id" -> "user.id"
 * @param {string} input
 * @returns {string}
 */
function toDotCase(input) {
    if (input === null || input === undefined) return '';
    if (typeof input !== 'string') throw new Error('Input must be a string');

    const trimmed = input.trim();
    if (trimmed === '') return '';

    // Insert dots between camelCase boundaries, replace spaces, underscores, hyphens with dots
    let result = trimmed
        .replace(/([a-z0-9])([A-Z])/g, '$1.$2') // camelCase to camel.Case
        .replace(/[\s_\-]+/g, '.')              // spaces, underscores, hyphens to dot
        .replace(/[^a-zA-Z0-9.]+/g, '')         // remove other non-alphanumerics except dot
        .toLowerCase();

    // Remove leading/trailing dots and collapse multiple dots
    result = result.replace(/\.{2,}/g, '.').replace(/^\.+|\.+$/g, '');

    return result;
}


// Example usage:
// console.log(toCamelCase("first name")); // "firstName"
// console.log(toCamelCase("user_id")); // "userId"
// console.log(toCamelCase("SCREEN_NAME")); // "screenName"
// console.log(toCamelCase("  mobile-number  ")); // "mobileNumber"
// console.log(toCamelCase(null)); // ""
// console.log(toCamelCase(123)); // throws Error

// console.log(toDotCase("First Name")); // "first.name"
// console.log(toDotCase("user_id")); // "user.id"
// console.log(toDotCase("SCREEN_NAME")); // "screen.name"
// console.log(toDotCase("  mobile-number  ")); // "mobile.number"
// console.log(toDotCase(null)); // ""
// console.log(toDotCase(123)); // throws Error