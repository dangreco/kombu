module.exports = {
  printWidth: 100,
  singleQuote: true,
  semi: true,
  importOrder: ["^@kombu/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
