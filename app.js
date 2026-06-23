(function () {
  const config = window.MORISHIN_CONFIG;
  const navItems = [
    ["index.html", "トップ", "home"],
    ["houmon.html", "訪問施術", "houmon"],
    ["area.html", "対応エリア", "area"],
    ["faq.html", "FAQ", "faq"],
    ["staff.html", "スタッフ", "staff"],
    ["about.html", "当院について", "about"],
    ["self-pay.html", "院内・自費", "self-pay"],
    ["contact.html", "お問い合わせ", "contact"]
  ];

  function isActive(page) {
    return document.body.dataset.page === page ? ' aria-current="page"' : "";
  }

  function renderHeader() {
    const target = document.getElementById("site-header");
    if (!target) return;
    const nav = navItems
      .map(([href, label, page]) => `<a href="./${href}"${isActive(page)}>${label}</a>`)
      .join("");
    target.innerHTML = `
      <header class="site-header">
        <a class="brand" href="./index.html" aria-label="${config.clinicName} トップへ">
          <span class="brand__mark">森</span>
          <span class="brand__text">
            <strong>${config.clinicName}</strong>
            <small>守口市の訪問鍼灸マッサージ</small>
          </span>
        </a>
        <button class="menu-button" type="button" aria-controls="global-nav" aria-expanded="false">メニュー</button>
        <nav class="global-nav" id="global-nav" aria-label="グローバルナビ">
          ${nav}
        </nav>
        <a class="header-phone js-phone-link" href="tel:${config.phone}">${config.phoneDisplay}</a>
      </header>
    `;
  }

  function renderFooter() {
    const target = document.getElementById("site-footer");
    if (!target) return;
    target.innerHTML = `
      <footer class="site-footer">
        <div class="footer__main">
          <div>
            <strong>${config.clinicName}</strong>
            <p>〒${config.postalCode}<br>${config.address}</p>
            <p>電話: <a class="js-phone-link" href="tel:${config.phone}">${config.phoneDisplay}</a></p>
            <p>受付時間: ${config.reception}<br>${config.note}</p>
          </div>
          <div>
            <strong>訪問鍼灸マッサージ</strong>
            <a href="./houmon.html">訪問施術について</a>
            <a href="./area.html">対応エリア</a>
            <a href="./faq.html">よくある質問</a>
            <a href="./contact.html">お問い合わせ</a>
          </div>
          <div>
            <strong>院情報</strong>
            <a href="./about.html">当院について</a>
            <a href="./staff.html">スタッフ紹介</a>
            <a href="./self-pay.html">院内・自費施術</a>
            <a href="${config.yolozuyaUrl}">YOLOZUYA</a>
          </div>
        </div>
        <small>Copyright ${new Date().getFullYear()} ${config.clinicName}. All Rights Reserved.</small>
      </footer>
    `;
  }

  function renderFixedCta() {
    const target = document.getElementById("fixed-cta");
    if (!target) return;
    target.innerHTML = `
      <div class="fixed-cta" aria-label="固定相談ボタン">
        <a class="fixed-cta__line js-line-link" href="${config.lineUrl}">LINE相談</a>
        <a class="fixed-cta__phone js-phone-link" href="tel:${config.phone}">電話相談</a>
      </div>
    `;
  }

  function applyContactLinks() {
    document.querySelectorAll(".js-line-link").forEach((link) => {
      link.setAttribute("href", config.lineUrl);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
    document.querySelectorAll(".js-form-link").forEach((link) => {
      link.setAttribute("href", config.googleFormUrl);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
    document.querySelectorAll(".js-phone-link").forEach((link) => {
      link.setAttribute("href", `tel:${config.phone}`);
    });
  }

  function setupMenu() {
    const button = document.querySelector(".menu-button");
    const nav = document.getElementById("global-nav");
    if (!button || !nav) return;
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }

  function injectStructuredData() {
    const data = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: config.clinicName,
      telephone: config.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        postalCode: config.postalCode,
        addressRegion: "大阪府",
        addressLocality: "守口市",
        streetAddress: "大久保町3丁目23-4",
        addressCountry: "JP"
      },
      areaServed: ["守口市", "門真市", "寝屋川市", "摂津市", "大阪市旭区", "大阪市鶴見区", "大阪市城東区"],
      url: location.origin + location.pathname,
      medicalSpecialty: ["Acupuncture", "PhysicalTherapy"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "09:00",
          closes: "16:00"
        }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  renderHeader();
  renderFooter();
  renderFixedCta();
  applyContactLinks();
  setupMenu();
  injectStructuredData();
})();
