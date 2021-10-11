"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Learning Generating NFTs";
const baseUri = "image.png";

const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {
  "symbol":"",
  "seller_fee_basis_points":0,//this defines your royalties (250-2.5%)
  "collection":{
    "name":"Solana Quest", // the name of your collection
    "family":"Largest Crypto Ecosystem"
  },
  "properties":{
    "files":[
      {
        "url":"image.png",
        "type":"image/png"
      }
    ],
    "category":"image",
    "creators":[
      {
        "address":"JD1eqRZpo4jD4GsESMNWJZoeuomnaDutjNxQDLKCVxAA",
        "share":100
      }
    ]
  }
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
