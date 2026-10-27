import { foodPresets } from './model';
import { estimateFoodByGrams, foodProfiles } from './food-ai';

type Match = { type: 'preset' | 'dish'; key: number | string; name: string; grams: number | null };
export type DescribedFood = Match;
export type DescriptionResult = { items: DescribedFood[]; unknown: string[] };

// Food names are intentionally explicit. A short description is never treated as a
// reliable measurement; missing weights must be supplied by the player.
const aliases: { keys: string[]; type: Match['type']; key: Match['key'] }[] = [
  { keys: ['kana', 'kanaa', 'kanan', 'chicken breast', 'chicken'], type: 'preset', key: 4 },
  { keys: ['riisi', 'riisiä', 'riisin', 'rice'], type: 'preset', key: 3 },
  { keys: ['kaurahiutale', 'kaurapuuro', 'oats', 'oatmeal'], type: 'preset', key: 0 },
  { keys: ['banaani', 'banaania', 'banana'], type: 'preset', key: 1 },
  { keys: ['rahka', 'quark'], type: 'preset', key: 2 },
  { keys: ['tofu', 'tofua'], type: 'preset', key: 5 },
  { keys: ['kasvikset', 'kasviksia', 'vihannekset', 'vegetables', 'veggies'], type: 'preset', key: 6 },
  { keys: ['peruna', 'perunaa', 'perunat', 'potato', 'potatoes'], type: 'preset', key: 7 },
  { keys: ['pasta', 'pastaa', 'spagetti', 'spaghetti'], type: 'preset', key: 8 },
  { keys: ['oliiviöljy', 'oliiviöljyä', 'olive oil'], type: 'preset', key: 9 },
  { keys: ['lohi', 'lohta', 'salmon'], type: 'dish', key: 'grilled_salmon' },
  { keys: ['pizza', 'pitsaa'], type: 'dish', key: 'pizza' },
  { keys: ['sushi', 'sushia'], type: 'dish', key: 'sushi' },
  { keys: ['hampurilainen', 'hampurilaisen', 'burger', 'hamburger'], type: 'dish', key: 'hamburger' },
  { keys: ['lasagne', 'lasagna'], type: 'dish', key: 'lasagna' },
  { keys: ['kanacurry', 'chicken curry'], type: 'dish', key: 'chicken_curry' },
];

function gramsFrom(text: string) {
  const amount = text.match(/(\d+(?:[.,]\d+)?)\s*(kg|g|grammaa?|grams?|rkl|tbsp|tl|tsp)\b/i);
  if (!amount) return null;
  const value = Number(amount[1].replace(',', '.'));
  const unit = amount[2].toLowerCase();
  const grams = Math.round(value * (unit === 'kg' ? 1000 : unit === 'rkl' || unit === 'tbsp' ? 14 : unit === 'tl' || unit === 'tsp' ? 5 : 1));
  return grams >= 1 && grams <= 3000 ? grams : null;
}

export function describeFood(text: string): DescriptionResult {
  const items: DescribedFood[] = [], unknown: string[] = [];
  for (const fragment of text.slice(0, 500).split(/[,;\n+]|\s+(?:ja|and)\s+/i).map(x => x.trim()).filter(Boolean)) {
    const name = fragment.toLocaleLowerCase('fi-FI');
    const match = aliases.find(alias => alias.keys.some(key => new RegExp(`(^|[^a-zåäö])${key}(?=$|[^a-zåäö])`, 'i').test(name)));
    if (!match) { unknown.push(fragment); continue; }
    const matchedName = match.keys.find(key => new RegExp(`(^|[^a-zåäö])${key}(?=$|[^a-zåäö])`, 'i').test(name))!;
    const extra = name.replace(matchedName, '').replace(/\d+(?:[.,]\d+)?\s*(?:kg|g|grammaa?|grams?|rkl|tbsp|tl|tsp)\b/i, '').replace(/\b(?:keitetty|kypsä|cooked|boiled)\b/g, '').trim();
    if (extra) unknown.push(extra);
    const resolvedName = match.type === 'preset' ? foodPresets[Number(match.key)].name : foodProfiles[String(match.key)].name;
    items.push({ type: match.type, key: match.key, name: resolvedName, grams: gramsFrom(fragment) });
  }
  return { items, unknown };
}

export function estimateDescription(items: DescribedFood[]) {
  if (!items.length || items.some(item => item.grams === null || item.grams < 1 || item.grams > 3000)) return null;
  const sum = items.reduce((total, item) => {
    const value = item.type === 'preset' ? (() => {
      const food = foodPresets[Number(item.key)], factor = Number(item.grams) / 100;
      return { kcal: food.kcal * factor, p: food.p * factor, c: food.c * factor, f: food.f * factor };
    })() : estimateFoodByGrams(String(item.key), Number(item.grams));
    return { kcal: total.kcal + value.kcal, p: total.p + value.p, c: total.c + value.c, f: total.f + value.f };
  }, { kcal: 0, p: 0, c: 0, f: 0 });
  return { name: items.map(item => item.name.split(',')[0]).join(' + ').slice(0, 80), kcal: Math.round(sum.kcal), p: Math.round(sum.p * 10) / 10, c: Math.round(sum.c * 10) / 10, f: Math.round(sum.f * 10) / 10 };
}
