module.exports = {
  "extends": "airbnb",
  "env": {
    "amd": true,
    "browser": true,
    "es6": true,
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
    "comma-dangle": [2, "only-multiline"],
    "arrow-parens": [2, "always", { "requireForBlockBody": true }],
    "filenames/match-regex": [2, "^[a-z0-9\\-\\.]+$"],

    // warnings
    "indent": [1, 2, { "SwitchCase": 1 }],
    "quotes": [1, "single"],

    // disabled
    "valid-jsdoc": 0,
    "require-jsdoc": 0
  }
};
