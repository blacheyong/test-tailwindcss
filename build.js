const StyleDictionaryPackage = require("style-dictionary");
const { createArray } = require("./fns");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
  name: "css/variables",
  formatter: function (dictionary, config) {
    return `${this.selector} {\n${dictionary.allProperties
      .map((prop) => `  --${prop.name}: ${prop.value};`)
      .join("\n")}\n}`;
  },
});

StyleDictionaryPackage.registerTransform({
  name: "sizes/px",
  type: "value",
  matcher: function (prop) {
    // You can be more specific here if you only want 'em' units for font sizes
    return [
      "fontSizes",
      "spacing",
      "borderRadius",
      "borderWidth",
      "sizing",
    ].includes(prop.attributes.category);
  },
  transformer: function (prop) {
    // You can also modify the value here if you want to convert pixels to ems
    return parseFloat(prop.original.value) + "px";
  },
});

StyleDictionaryPackage.registerTransform({
  name: "typography/fontWeight",
  type: "value",
  matcher: function (prop) {
    return prop.type.includes("typography");
  },
  transformer: function (prop) {
    const thisValue = prop.value;
    
    if (thisValue.fontWeight === "Regular") {
      thisValue.fontWeight = 400;
    } else if (thisValue.fontWeight === "Bold") {
      thisValue.fontWeight = 700;
    } else if (thisValue.fontWeight === "Medium") {
      thisValue.fontWeight = 500;
    } else if (thisValue.fontWeight === "Thin") {
      thisValue.fontWeight = 100;
    } else if (thisValue.fontWeight === "Extra Light") {
      thisValue.fontWeight = 200;
    } else if (thisValue.fontWeight === "Light") {
      thisValue.fontWeight = 300;
    } else if (thisValue.fontWeight === "Semi Bold") {
      thisValue.fontWeight = 600;
    } else if (thisValue.fontWeight === "Extra Bold") {
      thisValue.fontWeight = 800;
    } else if (thisValue.fontWeight === "Heavy" || thisValue.fontWeight === "Black") {
      thisValue.fontWeight = 900;
    }

    return thisValue;
  },
});

function getStyleDictionaryConfig(theme) {
  return {
    source: [`tokens/${theme}.json`],
    format: {
      createArray,
    },
    platforms: {
      web: {
        transforms: ["attribute/cti", "name/cti/kebab", "sizes/px", "typography/fontWeight"],
        buildPath: `output/`,
        files: [
          {
            destination: `${theme}.json`,
            format: "createArray",
          },
          {
            destination: `${theme}.css`,
            format: "css/variables",
            selector: `.${theme}-theme`,
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

["_tokens"].map(function (theme) {
  console.log("\n==============================================");
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(theme)
  );

  StyleDictionary.buildPlatform("web");

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
