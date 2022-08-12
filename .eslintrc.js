module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
        "modules": true
    }
  },
  parser: "vue-eslint-parser",
  rules: {
    "space-before-function-paren": 0
  }
}