module.exports = {
  "extends": "airbnb",
  "env": {
    "amd": true,
    "es6": true,
    "shared-node-browser": true,
    "jest": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "react",
    "filenames"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    },
  },
  "rules": {
    // errors
    "no-console": 2,
    "semi": [2, "always"],
    "comma-dangle": [2, "always-multiline"],
    "arrow-parens": [2, "always", { "requireForBlockBody": true }],
    "filenames/match-regex": [2, "^[a-z0-9\\-\\.]+$"],
    "prefer-arrow-callback": [2, { "allowNamedFunctions": true }],

    // warnings
    "indent": [1, 2, { "SwitchCase": 1 }],
    "quotes": [1, "single"],
    "radix": [1, "as-needed"],

    // disabled
    "valid-jsdoc": 0,
    "require-jsdoc": 0
  }
};
