const CleanCSS = require("clean-css"); // minify CSS
const { minify } = require("terser"); // minify JS
const htmlmin = require("html-minifier"); // minify HTML

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("pki");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy({"assets": "/"});
    eleventyConfig.addTransform("minify-output", async function(content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        } else if (outputPath && outputPath.endsWith(".css")) {
            return new CleanCSS().minify(content).styles
        } else if (outputPath && outputPath.endsWith(".js")) {
            var result = await minify(content);
            return result.code
        } else {
            return content;
        }
    });
};