// filepath: /basic_prompt.js
function toSnakeCase(text) {
    return text
        .replace(/[\s\-]+/g, '_')
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .toLowerCase();
}

module.exports = { toSnakeCase };
/*
Prompt: Write a function named `toCamelCase` that takes a string and converts it to camelCase format. The function should treat spaces, hyphens, and underscores as word separators. For example, `toCamelCase('my-example_string test')` should return `myExampleStringTest`.
*/