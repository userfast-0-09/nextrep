const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
function load(path, deps = {}) {
  const code = ts.transpileModule(fs.readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(code, { module, exports: module.exports, require: id => deps[id] || require(id), Intl }, { filename: path });
  return module.exports;
}
const model = load('app/model.ts');
const food = load('app/food-ai.ts');
const description = load('app/food-description.ts', { './model': model, './food-ai': food });
const language = load('app/ui-language.ts', { './food-ai': food });
const parsed = description.describeFood('150 g kanaa, 200 g riisiä ja 100 g kasviksia');
assert.equal(parsed.items.length, 3);
assert.equal(parsed.unknown.length, 0);
const estimate = description.estimateDescription(parsed.items);
assert.equal(estimate.kcal, 543);
assert.equal(estimate.p, 53.9);
assert.equal(description.estimateDescription(description.describeFood('kanaa ja riisiä').items), null);
assert.equal(description.describeFood('150 g kanaa ja kastiketta').unknown.length, 1);
assert.equal(description.describeFood('150 g kanaa kastikkeella').unknown[0], 'kastikkeella');
const oil = description.estimateDescription(description.describeFood('1 rkl oliiviöljyä').items);
assert.equal(oil.kcal, 124);
assert.equal(description.estimateDescription(description.describeFood('150 g chicken, 200 g rice').items).kcal, 508);
assert.equal(description.describeFood('5000 g kanaa').items[0].grams, null);
assert.equal(language.translateUi('Makrolaskuri'), 'Macro calculator');
assert.equal(language.translateUi(' 50 g riisiä '), ' 50 g riisiä '); // Unmapped text remains untouched.
assert.equal(language.translateUi('Kana, kypsä'), 'Cooked chicken');
console.log('PASS: bilingual food descriptions, ingredient weights, missing weights and unknown foods.');
