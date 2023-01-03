module.exports = {
    env: {
        node: true,
    },
    extends: [
        "plugin:react/recommended",
        "google",
        "prettier",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "require-jsdoc": "off",
    },
};

