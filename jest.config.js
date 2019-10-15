"use strict";

const { defaults } = require("jest-config");

module.exports = {
  setupFilesAfterEnv: ["./enzyme.config.js", "jest-extended"],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "scss"]
};
