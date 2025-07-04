function toKebabCase(input) {
    if (input === null || input === undefined) return '';
    if (typeof input !== 'string') throw new Error('Input must be a string');

    // Trim, lowercase, replace non-alphanumeric with hyphens
    let str = input.trim().toLowerCase();
    str = str.replace(/[^a-z0-9]+/g, '-'); // Replace underscores, spaces, etc. with hyphens
    str = str.replace(/^-+|-+$/g, '');     // Remove leading/trailing hyphens
    str = str.replace(/-+/g, '-');         // Replace multiple hyphens with one

    return str;
}

// Example usage:
// console.log(toKebabCase("User Name")); // "user-name"
// console.log(toKebabCase("screen_name")); // "screen-name"
// console.log(toKebabCase("  Mobile-Number  ")); // "mobile-number"
// console.log(toKebabCase(null)); // ""
// console.log(toKebabCase(123)); // throws "Input must be a string"