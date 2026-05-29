import { InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy({"./includes/favicon": "./11ty/favicon"});
  eleventyConfig.addPassthroughCopy({"./includes/images": "./11ty/images"});
  eleventyConfig.addPassthroughCopy({"./includes/javascript": "./11ty/javascript"});
  eleventyConfig.addPassthroughCopy({"./includes/stylesheets": "./11ty/stylesheets"});
  eleventyConfig.addPassthroughCopy({"./includes/CNAME": "CNAME"});
};

export const config = {
  dir: {
    input: "./content",
    data: "./data",
    includes: "./includes",
    output: "./docs"
  }
};

