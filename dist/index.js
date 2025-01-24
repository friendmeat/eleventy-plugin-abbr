"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const markdown_it_abbr_1 = require("markdown-it-abbr");
const generateAbbr_1 = require("./generateAbbr");
function default_1(eleventyConfig, options) {
    eleventyConfig.amendLibrary((mdLib) => mdLib.use(markdown_it_abbr_1.default));
    eleventyConfig.addShortcode("definitions", () => (0, generateAbbr_1.generateAbbr)(options.definitions));
}
