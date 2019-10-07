"use strict";

const { defaults } = require("jest-config");

module.exports = {
  setupFilesAfterEnv: ["./enzyme.config.js"],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "scss"]
};
