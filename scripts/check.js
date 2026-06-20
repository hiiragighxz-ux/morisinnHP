const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const required = [
  "LINEで無料相談する",
  "電話で相談する",
  "tel:0675083983",
  "医師の同意により、健康保険の対象になる場合があります",
  "保険適用には条件があります",
  "1回あたり 約400円〜700円前後",
  "守口市",
  "よくある質問"
];

const banned = [
  "誰でも健康保険が使えます",
  "必ず保険適用",
  "必ず改善",
  "完治",
  "治ります",
  "痛みが消えます",
  "寝たきり改善",
  "介護度が下がる",
  "医師の同意なしで保険利用可能"
];

const missing = required.filter((text) => !html.includes(text));
const foundBanned = banned.filter((text) => html.includes(text));

if (missing.length || foundBanned.length) {
  if (missing.length) {
    console.error("Missing required text:");
    missing.forEach((text) => console.error(`- ${text}`));
  }
  if (foundBanned.length) {
    console.error("Found banned text:");
    foundBanned.forEach((text) => console.error(`- ${text}`));
  }
  process.exit(1);
}

console.log("LP content check passed.");
