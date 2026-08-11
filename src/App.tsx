import { useState } from "react";

type Lang = "ja" | "en" | "zh" | "vi";

const LOGO_URL = "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/435229df-1a79-4dc2-82df-ed1318396242";

const businesses = [
  {
    id: "rigging",
    image: "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/08262251-d341-4ed1-a893-af3d5c22087c",
    url: "https://www.osr0115.com/company",
    english: "HEAVY RIGGING",
    icon: "⚙",
  },
  {
    id: "renovation",
    image: "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/image1",
    url: "https://gear-galaxy-48080275.figma.site",
    english: "RESTORATION & RENOVATION",
    icon: "⌂",
  },
  {
    id: "signage",
    image: "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/d829475d-22f1-490b-8c4a-2b13ede5bb18",
    url: "（デジタルサイネージHPの実際のURL）",
    english: "DIGITAL SIGNAGE",
    icon: "▣",
  },
];

const translations = {
  ja: {
    heroText:
      "3つの事業からご覧になりたいサイトをお選びください。",
    button: "サイトを見る",

    rigging: {
      title: "重量鳶",
      description:
        "重量物・大型設備の搬入・据付・移設・解体",
    },

    renovation: {
      title: "原状回復・リフォーム",
      description:
        "退去立会いから原状回復、リフォーム・清掃まで対応",
    },

    signage: {
      title: "デジタルサイネージ",
      description:
        "新たな価値を生み出すデジタルサイネージ事業",
    },
  },

  en: {
    heroText:
      "Please select the business website you would like to visit.",
    button: "Visit Website",

    rigging: {
      title: "Heavy Rigging",
      description:
        "Transportation, installation, relocation and dismantling of heavy machinery and large equipment.",
    },

    renovation: {
      title: "Restoration & Renovation",
      description:
        "From move-out inspections and property restoration to renovation and cleaning services.",
    },

    signage: {
      title: "Digital Signage",
      description:
        "Creating new value through digital signage solutions.",
    },
  },

  zh: {
    heroText:
      "请选择您想浏览的业务网站。",
    button: "查看网站",

    rigging: {
      title: "重型设备搬运・安装",
      description:
        "提供大型设备及重型机械的搬运、安装、移设及拆除服务。",
    },

    renovation: {
      title: "房屋恢复・装修",
      description:
        "从退房现场确认、房屋恢复到装修及清洁服务。",
    },

    signage: {
      title: "数字标牌",
      description:
        "通过数字标牌业务创造新的价值。",
    },
  },

  vi: {
    heroText:
      "Vui lòng chọn trang web dịch vụ bạn muốn xem.",
    button: "Xem trang web",

    rigging: {
      title: "Vận chuyển & lắp đặt thiết bị hạng nặng",
      description:
        "Vận chuyển, lắp đặt, di dời và tháo dỡ máy móc hạng nặng và thiết bị quy mô lớn.",
    },

    renovation: {
      title: "Khôi phục hiện trạng & cải tạo",
      description:
        "Hỗ trợ từ kiểm tra khi trả mặt bằng, khôi phục hiện trạng đến cải tạo và vệ sinh.",
    },

    signage: {
      title: "Biển hiệu kỹ thuật số",
      description:
        "Tạo ra giá trị mới thông qua các giải pháp biển hiệu kỹ thuật số.",
    },
  },
};

export default function App() {
  const [lang, setLang] = useState<Lang>("ja");

  const text = translations[lang];

  return (
    <main className="page">

      {/* 言語切替 */}
      <div className="language-switcher">

        <button
          className={`lang-btn ${lang === "ja" ? "active" : ""}`}
          onClick={() => setLang("ja")}
        >
          JP
        </button>

        <button
          className={`lang-btn ${lang === "en" ? "active" : ""}`}
          onClick={() => setLang("en")}
        >
          EN
        </button>

        <button
          className={`lang-btn ${lang === "zh" ? "active" : ""}`}
          onClick={() => setLang("zh")}
        >
          中文
        </button>

        <button
          className={`lang-btn ${lang === "vi" ? "active" : ""}`}
          onClick={() => setLang("vi")}
        >
          VI
        </button>

      </div>

      {/* TOP */}
      <section className="hero">

        <img
          src={LOGO_URL}
          alt="株式会社OSR"
          className="logo"
        />

        <h1 className="company-name">
          株式会社OSR
        </h1>

        <div className="gold-line" />

        <p className="portal-label">
          OFFICIAL BUSINESS PORTAL
        </p>

        <h2 className="hero-title">
          OUR BUSINESS
        </h2>

        <p className="hero-text">
          {text.heroText}
        </p>

      </section>

      {/* 3事業 */}
      <section className="business-list">

        {businesses.map((business) => {

          const businessText =
            text[business.id as keyof Pick<
              typeof text,
              "rigging" | "renovation" | "signage"
            >];

          return (
            <article
              className="business-card"
              key={business.id}
            >

              <img
                src={business.image}
                alt={businessText.title}
                className="business-image"
              />

              <div className="business-overlay" />

              <div className="business-content">

                <div className="business-icon">
                  {business.icon}
                </div>

                <h3 className="business-title">
                  {businessText.title}
                </h3>

                <div className="business-en">
                  {business.english}
                </div>

                <p className="business-desc">
                  {businessText.description}
                </p>

                <a
                  href={business.url}
                  className="site-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{text.button}</span>
                  <span className="arrow">→</span>
                </a>

              </div>

            </article>
          );
        })}

      </section>

      {/* FOOTER */}
      <footer>

        <img
          src={LOGO_URL}
          alt="株式会社OSR"
          className="footer-logo"
        />

        <div className="footer-company">
          株式会社OSR
        </div>

        <div className="footer-sub">
          OFFICIAL BUSINESS PORTAL
        </div>

      </footer>

    </main>
  );
}