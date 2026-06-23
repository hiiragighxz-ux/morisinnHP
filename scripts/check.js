const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pages = [
  "index.html",
  "houmon.html",
  "self-pay.html",
  "about.html",
  "staff.html",
  "area.html",
  "faq.html",
  "contact.html"
];

const requiredFiles = [
  ...pages,
  "styles.css",
  "site-config.js",
  "app.js"
];

const banned = [
  "必ず治る",
  "必ず改善",
  "必ず保険が使える",
  "医師の同意なし",
  "完治",
  "治ります",
  "改善します"
];

const pageRequirements = {
  "index.html": [
    "通院が難しい方へ",
    "ご自宅・施設で受けられる訪問鍼灸マッサージ",
    "医師の同意により、健康保険の対象になる場合があります",
    "LINEで無料相談"
  ],
  "houmon.html": [
    "対象者",
    "医師の同意書",
    "介護保険との違い",
    "ご家族・関係者の方へ"
  ],
  "self-pay.html": ["院内施術", "自費施術", "YOLOZUYA"],
  "about.html": ["大阪府守口市大久保町3丁目23-4", "株式会社柊", "代表メッセージ"],
  "staff.html": ["国家資格者", "スタッフ紹介"],
  "area.html": ["守口市", "門真市", "寝屋川市", "訪問ルート・曜日・時間帯"],
  "faq.html": ["どんな人が対象ですか？", "医師の同意書とは何ですか？", "ケアマネジャーから相談してもいいですか？"],
  "contact.html": ["LINE", "電話", "Googleフォーム", "相談者の立場", "連絡希望方法"]
};

let failed = false;

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    console.error(`Missing file: ${file}`);
    failed = true;
  }
}

for (const page of pages) {
  const fullPath = path.join(root, page);
  if (!fs.existsSync(fullPath)) continue;
  const html = fs.readFileSync(fullPath, "utf8");
  const missing = pageRequirements[page].filter((text) => !html.includes(text));
  const foundBanned = banned.filter((text) => html.includes(text));

  if (!html.includes("./styles.css") || !html.includes("./site-config.js") || !html.includes("./app.js")) {
    console.error(`${page}: missing shared asset reference`);
    failed = true;
  }

  if (missing.length) {
    console.error(`${page}: missing required text`);
    missing.forEach((text) => console.error(`- ${text}`));
    failed = true;
  }

  if (foundBanned.length) {
    console.error(`${page}: found banned text`);
    foundBanned.forEach((text) => console.error(`- ${text}`));
    failed = true;
  }
}

const config = fs.readFileSync(path.join(root, "site-config.js"), "utf8");
["lineUrl", "googleFormUrl", "phone", "phoneDisplay"].forEach((key) => {
  if (!config.includes(key)) {
    console.error(`site-config.js: missing ${key}`);
    failed = true;
  }
});

if (failed) {
  process.exit(1);
}

console.log("Static site check passed.");
