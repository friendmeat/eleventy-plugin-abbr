import { generateAbbr } from "./generateAbbr";

type DefinitionPluginOptions = {
    definitions: Map<string, string>,
    caseSensitive?: boolean
}

export function AbbrPlugin(eleventyConfig: any, options: DefinitionPluginOptions) {
    eleventyConfig.amendLibrary("md", function (mdLib) { mdLib.use(require("markdown-it-abbr")) });
    eleventyConfig.addShortcode("definitions", () => generateAbbr(options.definitions));
}