import abbr_plugin from "markdown-it-abbr";
import { generateAbbr } from "./generateAbbr";

type DefinitionPluginOptions = {
    definitions: Map<string, string>,
    caseSensitive?: boolean
}

export default function (eleventyConfig: any, options: DefinitionPluginOptions) {
    eleventyConfig.amendLibrary((mdLib) => mdLib.use(abbr_plugin));
    eleventyConfig.addShortcode("definitions", () => generateAbbr(options.definitions));
}