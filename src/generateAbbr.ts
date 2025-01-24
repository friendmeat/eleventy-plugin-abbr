/**
 * 
 * @param {string} phrase string to vary casing of
 * @returns {string[]} variations of string case 
 */
function _generateCaseVariations(phrase: string): string[] {
    const set = new Set([
        phrase,
        phrase.toLowerCase(),
        phrase.toUpperCase(),
        phrase.split(' ') // Split into words, then proper-case each word.
            .map(word => word.split('').map((c, i) => i == 0 ? c.toUpperCase() : c).join(''))
            .join(' ')
    ]);
    return Array.from(set);

}

/**
 * @param {Map<string, string>} definitions Object of definitions to generate
 * @returns {string} newline-delimited string of definitions following the markdown-it-abbr package format
 * @example const definitions = {
    "NPM":"Node Package Manager",
    "HTML": "Hypertext Markup Language",
    "W3C": "World Wide Web Consortium",
    "API": "Application Programming Interface",
    "Static site": "Website without processing capabilities",
    "GitHub": "Code repository site popular among coders"
    }
    console.log(generateAbbr(definitions))
    // *[NPM]:Node Package Manager
    // *[npm]:Node Package Manager
    // *[API]:Application programming interface
    // *[api]:Application programming interface
    // *[Static site]:Website without processing capabilities
    // *[static site]:Website without processing capabilities
    // *[STATIC SITE]:Website without processing capabilities
    // *[Static Site]:Website without processing capabilities
    // *[GitHub]:Code repository site popular among coders
    // *[github]:Code repository site popular among coders
    // *[GITHUB]:Code repository site popular among coders
 */
export function generateAbbr(definitions: Map<string, string>): string {
    return Object.keys(definitions)
        .map(word => {
            const def = definitions[word];
            return _generateCaseVariations(word).map(version => `*[${version}]:${def}`);
        })
        .flat()
        .join("\n");
}