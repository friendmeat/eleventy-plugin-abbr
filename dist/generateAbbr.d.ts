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
export declare function generateAbbr(definitions: Map<string, string>): string;
