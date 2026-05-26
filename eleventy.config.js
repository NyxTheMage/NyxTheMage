export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"includes/favicon": "favicon"});
  eleventyConfig.addPassthroughCopy({"includes/images": "images"});
  eleventyConfig.addPassthroughCopy({"includes/javascript": "javascript"});
  eleventyConfig.addPassthroughCopy({"includes/stylesheets": "stylesheets"});
  eleventyConfig.addPassthroughCopy({"includes/CNAME": "CNAME"});
};

export const config = {
  dir: {
    input: "pages",
    includes: "includes",
    output: "docs"
  }
};

