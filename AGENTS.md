# AGENTS.md

## Project overview

This repository contains the new website for:

* Site name: もりしんあんま鍼灸整骨院
* Main service: 訪問鍼灸マッサージ
* Primary area: 守口市
* Repository: hiiragighxz-ux/morisinnHP
* Local path: C:\GitHub\morisinnHP
* Preview site: https://hiiragighxz-ux.github.io/morisinnHP/
* Production domain candidate: https://morishin-hiiragi.com/

The GitHub Pages site is for review only.
Do not configure or replace the production domain unless explicitly instructed.

## Business objective

The primary objective is to increase qualified inquiries for home-visit acupuncture and massage services.

The main message is:

「通院が難しい方のための訪問鍼灸マッサージ」

The site should primarily address:

* 高齢者本人
* 家族
* ケアマネジャー
* 相談支援専門員
* 介護施設職員
* 病院・地域連携室
* 地域包括支援センター関係者

## Required insurance wording

When describing health insurance coverage, use wording equivalent to:

「医師の同意により、健康保険の対象になる場合があります」

Do not state or imply that insurance coverage is guaranteed.

## Prohibited claims

Do not use claims such as:

* 必ず治る
* 必ず改善する
* 必ず保険が使える
* 医師の同意なしで保険が使える
* 効果を保証する表現
* 誤解を招く過度なビフォーアフター表現

Avoid unsupported medical, legal, pricing, staffing, or service claims.

## Current structure

Main pages:

* index.html
* houmon.html
* self-pay.html
* about.html
* staff.html
* area.html
* faq.html
* contact.html

Shared files:

* app.js
* styles.css
* site-config.js
* scripts/check.js
* package.json

## Technical constraints

* Static HTML, CSS, and JavaScript
* No framework migration unless explicitly requested
* Preserve relative paths so GitHub Pages continues to work
* Preserve responsive behavior
* Prioritize smartphone usability
* Maintain accessibility and readable font sizes
* Keep page loading lightweight
* Do not add unnecessary dependencies

## Design rules

* Preserve the current green, white, and blue visual direction unless explicitly instructed
* Maintain a medical and care-sector tone
* Use generous spacing and large readable text
* Keep CTA buttons prominent
* Do not redesign the whole site when only a targeted change is requested
* Do not replace real business information with invented placeholder content

## CTA rules

Primary CTAs:

* LINEで無料相談
* 電話で相談
* 保険対象になるか確認する

Phone number:

* 06-7508-3983

Before changing LINE, form, phone, or external URLs, verify the current value in `site-config.js`.

Do not invent missing URLs.

## Area wording

The service area should communicate:

* 守口市を中心に対応
* 門真市・寝屋川市など周辺地域は要相談
* 訪問可否は訪問ルート、曜日、時間帯による

Do not imply unlimited service coverage over distant areas.

## Editing rules

Before making changes:

1. Read the relevant HTML, CSS, JavaScript, and configuration files.
2. Identify shared components or generated content.
3. Confirm whether the requested change affects multiple pages.
4. Avoid unrelated edits.

During changes:

1. Make the smallest safe change that satisfies the request.
2. Preserve existing links, IDs, classes, and responsive behavior unless modification is required.
3. Do not delete existing content without explicit instruction.
4. Do not modify `.git`, `.codex`, credentials, or system files.
5. Do not commit or push unless explicitly instructed.

After changes:

1. Run:

```bash
npm run build
```

2. Confirm that the output includes:

```text
Static site check passed.
```

3. Review changed files.
4. Report:

   * files changed
   * changes made
   * build result
   * unresolved items
5. Do not run `git commit` or `git push` automatically.

## Multi-PC workflow

Before starting work on any PC:

```bash
git status
git pull origin main
```

Only pull when there are no uncommitted local changes.

After approved work:

```bash
git add .
git commit -m "Describe the change"
git push origin main
```

Do not edit this project simultaneously on multiple PCs.

GitHub `main` is the source of truth.

## Missing information

If required information is unavailable, do not guess.

Examples:

* official LINE URL
* Google Form URL
* final pricing
* staff qualifications
* service hours
* exact service area
* final photographs

State clearly that the information is missing and ask for confirmation.

## Current status

* GitHub Pages preview is published
* Build check currently passes
* Some photographs are not yet installed
* Some external links may still require confirmation
* Production domain migration has not been performed
* Search Console submission has not been performed
