module.exports = {
  extends: './node-config.js',
  env: { mocha: true },
  plugins: ["mocha", "chai-friendly"],
  rules: {
    "mocha/no-identical-title": ["error"],
    "chai-friendly/no-unused-expressions": ["error"]
  }
};
