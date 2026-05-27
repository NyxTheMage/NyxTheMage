import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy({"includes/favicon": "favicon"});
  eleventyConfig.addPassthroughCopy({"includes/images": "images"});
  eleventyConfig.addPassthroughCopy({"includes/javascript": "javascript"});
  eleventyConfig.addPassthroughCopy({"includes/stylesheets": "stylesheets"});
  eleventyConfig.addPassthroughCopy({"includes/CNAME": "CNAME"});
};

export const config = {
  dir: {
    input: "content",
    includes: "includes",
    output: "docs"
  }
};

