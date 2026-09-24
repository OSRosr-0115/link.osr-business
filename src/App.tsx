import renovationImage from "./renovation.png";
import heavyLiftingImage from "./heavy-lifting.png"

import { useEffect, useState } from "react";

const MICROCMS_URL = "https://osr.microcms.io/api/v1/blogs";
const MICROCMS_API_KEY = "2rdpntmoIdpoM207ArHKLMWMUx7Bl6aim2O8";

type BlogPost = {
  id: string;
  title: string;
  content?: string;
  body?: string;
  eyecatch?: {
    url: string;
    width?: number;
    height?: number;
  };
  category?: {
    id?: string;
    name?: string;
    title?: string;
  };
  date?: string;
  summary?: string;
};

type Language = "ja" | "en" | "zh" | "vi";

export default function App() {
  const [cmsPosts, setCmsPosts] = useState<BlogPost[]>([]);

useEffect(() => {
  fetch(MICROCMS_URL, {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("microCMSの取得に失敗しました");
      return res.json();
    })
    .then((data) => {
      setCmsPosts(data.contents || []);
      console.log("microCMSの記事:", data.contents);
    })
    .catch((error) => {
      console.error("microCMSエラー:", error);
      setCmsPosts([]);
    });
}, []);
const [productIndex,setProductIndex] = useState(0);
const [strengthVisible, setStrengthVisible] = useState(false);
const [flowVisible, setFlowVisible] = useState(false);
const [philosophyVisible, setPhilosophyVisible] = useState(false);
  const [submitError,setSubmitError] = useState(false);
const [soundOn, setSoundOn] = useState(false);
  
const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
const [page, setPage] = useState<"home" | "blog-detail">("home");
  useEffect(() => {
  const philosophySection = document.querySelector("#philosophy");

  if (!philosophySection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
  setPhilosophyVisible(entry.isIntersecting);   
      },
    
    { threshold: 0.25 }
  );

  observer.observe(philosophySection);

  return () => observer.disconnect();
}, []);

 useEffect(() => {
  const companySection = document.querySelector(".company-reveal");

  if (!companySection) return;

  const observer = new IntersectionObserver(

([entry]) => {
  setCompanyVisible(entry.isIntersecting);
},
 { threshold: 0.65 }
  );

  observer.observe(companySection);

  return () => observer.disconnect();
}, []); 
useEffect(() => {
  const flowSection = document.querySelector("#flow");

  if (!flowSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setFlowVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  observer.observe(flowSection);

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const strengthSection = document.querySelector("#strength");

  if (!strengthSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStrengthVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  observer.observe(strengthSection);

  return () => observer.disconnect();
}, []);
  
  const [mouse, setMouse] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [statsVisible, setStatsVisible] = useState(false);

useEffect(() => {
  const statsSection = document.querySelector("#products .stats-grid");

  if (!statsSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  observer.observe(statsSection);

return () => observer.disconnect();
}, []);
  const [count98, setCount98] = useState(0);
const [count6, setCount6] = useState(0);
const [count8, setCount8] = useState(0);

useEffect(() => {
  if (!statsVisible) return;

  const duration = 3000;
  const start = performance.now();

  const animate = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);

    setCount98(Math.floor(98 * progress));
    setCount6(Math.floor(6 * progress));
    setCount8(Math.floor(8 * progress));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [statsVisible]);
  const [serviceVisible, setServiceVisible] = useState(false);

useEffect(() => {
  const serviceSection = document.getElementById("service");

  if (!serviceSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setServiceVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(serviceSection);

  return () => observer.disconnect();
}, []);
  
  // ==========================================================
  // ★★★★★ ここだけ差し替えてください ★★★★★
  // ==========================================================

  const pc動画URL = "https://res.cloudinary.com/xnqcsfha/video/upload/v1789719121/%E6%98%A0%E5%83%8F%E3%81%A7%E7%A9%BA%E9%96%93%E3%81%AE%E4%BE%A1%E5%80%A4%E3%82%92%E5%A4%89%E3%81%88%E3%82%8B%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC_32%E7%A7%92.mp4";
  const mobile動画URL = "https://res.cloudinary.com/xnqcsfha/video/upload/v1789719121/%E6%98%A0%E5%83%8F%E3%81%A7%E7%A9%BA%E9%96%93%E3%81%AE%E4%BE%A1%E5%80%A4%E3%82%92%E5%A4%89%E3%81%88%E3%82%8B%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC_32%E7%A7%92.mp4";
  const ロゴURL = "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/435229df-1a79-4dc2-82df-ed1318396242";
  const LINE_URL = "https://lin.ee/9p0u2gO";
  const TEL_URL = "tel:048-633-4952";
  const サービス画像 = [
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E6%8F%90%E6%A1%88",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E7%8F%BE%E8%AA%BF",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E6%90%AC%E5%85%A5",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E5%8F%96%E4%BB%98",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E5%88%B6%E4%BD%9C",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E9%81%8B%E7%94%A8%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88",
    ];
  const 製品画像 = [
    "https://res.cloudinary.com/wngor8ac/image/upload/v1787634659/image111.png",
    "https://res.cloudinary.com/wngor8ac/image/upload/v1787634669/image112.png",
    "https://res.cloudinary.com/wngor8ac/image/upload/v1787634745/image113.png",
    "https://res.cloudinary.com/wngor8ac/image/upload/v1787634767/image115_2.png",
    "https://res.cloudinary.com/wngor8ac/image/upload/v1787634759/image115_1.png",
    "https://res.cloudinary.com/wngor8ac/image/upload/v1787634773/image116.png",
    ];
  const 導入シーン画像 = [
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E5%BA%97%E8%88%97",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E9%A3%B2%E9%A3%9F%E5%BA%97",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E5%95%86%E6%A5%AD%E6%96%BD%E8%A8%AD",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%9B%E3%83%86%E3%83%AB",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%AB%E3%83%BC%E3%83%A0",
    "https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E3%82%B5%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%B8%E5%B1%8B%E5%A4%96%E5%BA%83%E5%91%8A",
    ];
    const 導入フロー画像 = [
      "https://res.cloudinary.com/wngor8ac/image/upload/v1787631144/image0.png",
      "https://res.cloudinary.com/wngor8ac/image/upload/v1787631188/image1.png",
      "https://res.cloudinary.com/wngor8ac/image/upload/v1787631234/image2.png",
      "https://res.cloudinary.com/wngor8ac/image/upload/v1787631224/image3.png",
      "https://res.cloudinary.com/wngor8ac/image/upload/v1787631234/image4.png",
      "https://res.cloudinary.com/wngor8ac/image/upload/v1787631242/image5.png",
      ];

  // ==========================================================

  const [言語, 言語を変更] = useState<Language>("ja");
  const [メニューを開く, メニュー開閉] = useState(false);

  const 文言 = 翻訳[言語];

  const 移動 = (id: string) => {
    メニュー開閉(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };
 if (selectedPost) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#ffffff",
        padding: "60px 24px",
      }}
    >
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={() => setSelectedPost(null)}
          style={{
            background: "transparent",
            border: "none",
            color: "#d4af37",
            fontSize: "15px",
            cursor: "pointer",
            padding: "0",
            marginBottom: "50px",
          }}
        >
          ← ブログ一覧へ戻る
        </button>

        <div
          style={{
            color: "#d4af37",
            fontSize: "13px",
            letterSpacing: "3px",
            marginBottom: "15px",
          }}
        >
          BLOG
        </div>

        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            lineHeight: "1.4",
            marginBottom: "20px",
          }}
        >
          {selectedPost.title}
        </h1>

        <div
          style={{
            width: "60px",
            height: "2px",
            background: "#d4af37",
            marginBottom: "40px",
          }}
        />

        {selectedPost.eyecatch?.url && (
          <img
            src={selectedPost.eyecatch.url}
            alt={selectedPost.title}
            style={{
              width: "100%",
              display: "block",
              marginBottom: "40px",
            }}
          />
        )}

        <div
          className="blog-detail-content"
          style={{
            fontSize: "16px",
            lineHeight: "2",
          }}
          dangerouslySetInnerHTML={{
            __html: selectedPost.content || selectedPost.body || "",
          }}
        />
      </main>
    </div>
  );
}
  
 return (
    <>
      <div
  className="mouse-light"
  style={{
    left: `${mouse.x}px`,
    top: `${mouse.y}px`,
  }}
/>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

       
.mouse-light {
  position: fixed;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;

  background: radial-gradient(
    circle,
    rgba(255, 210, 90, 0.32) 0%,
    rgba(255, 180, 50, 0.20) 28%,
    rgba(255, 145, 20, 0.10) 48%,
    transparent 72%
  );

  transform: translate(-50%, -50%);
  filter: blur(8px);
  transition: left 0.08s ease-out, top 0.08s ease-out;
}

@media (max-width: 768px) {
  .mouse-light {
    display: none;
  }
}

        button,
        input,
        textarea {
          font-family: inherit;
        }

        .osr-page {
        padding-top: 78px;
        font-family: "Yu Mincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", serif;
          min-height: 100vh;
          overflow-x: hidden;
          background: #05070b;
          color: #ffffff;
          
          
          font-family:
            "Noto Sans JP",
            "Helvetica Neue",
            Arial,
            sans-serif;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 78px;
          font-family:
          "Noto Sans JP",
          "Helvetica Neue",
          Arial,
          sans-serif;
          
          padding: 0 5vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #05070b;
          backdrop-filter: none;
          border-bottom: 1px solid rgba(0, 255, 231, 0.13);
        }

        .logo-button {
          display: flex;
          align-items: center;
          border: 0;
          background: transparent;
          padding: 0;
          color: #fff;
          cursor: pointer;
        }

        .logo-image {
          height: 46px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
        }

        .logo-brand{
        display: flex;
        align-items: center;
        gap: 12px;
        }

        .logo-company-name {
        font-family: "Yu Mincho", "Hiragino Mincho ProN", serif;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        white-space: nourap;
        letter-spacing: 0.08em;
        }

        .logo-company {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .logo-signage {
          margin-top: 3px;
          font-size: 9px;
          letter-spacing: .25em;
          color: #00ffe7;
        }


        .desktop-nav {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.nav-button {
  border: 0;
  background: transparent;
  color: rgba(255,255,255,.78);
  cursor: pointer;
  font-size: 11px;
  letter-spacing: .03em;
  padding: 8px 0;
  white-space: nowrap;
  flex-shrink: 0;
}

        .nav-button {
          border: 0;
          background: transparent;
          color: rgba(255,255,255,.78);
          cursor: pointer;
          font-size: 12px;
          letter-spacing: .05em;
          padding: 8px 0;
        }

        .nav-button:hover {
          color: #00ffe7;
        }

        .contact-nav {
          border: 1px solid rgba(0,255,231,.65);
          padding: 10px 15px;
        }

        .language-area {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .language-button {
          border: 0;
          background: transparent;
          color: rgba(255,255,255,.45);
          cursor: pointer;
          font-size: 10px;
          padding: 6px 5px;
        }

        .language-button.active {
          color: #00ffe7;
        }

        .mobile-menu-button {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(0,255,231,.32);
          background: rgba(0,255,231,.04);
          color: white;
          cursor: pointer;
          font-size: 22px;
        }

        .mobile-menu {
          display: none;
        }

        .hero {
          position: relative;
          hight: 100vh !important;
          min-hight:100vh !important;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 0 !important;
          margin-top: 0 !important;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100% !important;
          object-fit: cover;
        }

        .hero-overlay {
          display: none;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(0,255,231,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,255,231,.035) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
        }

        .hero-inner {
          position: relative;
          z-index: 4;
          width: 90%;
          max-width: 1250px;
          margin: 0 auto;
          padding-top: 95px;
        }

        .hero-en {
          color: #00ffe7;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .35em;
          margin-bottom: 22px;
          text-shadow: 0 0 12px rgba(0,255,231,.7);
        }

        .hero-title {
          margin: 0;
          max-width: 900px;
          font-size: clamp(44px, 7vw, 94px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: .03em;
        }

        .hero-text {
          margin-top: 28px;
          max-width: 650px;
          color: rgba(255,255,255,.74);
          font-size: clamp(15px, 1.5vw, 19px);
          line-height: 1.9;
        }

        .hero-buttons {
          margin-top: 36px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          min-width: 150px;
          padding: 15px 27px;
          cursor: pointer;
          letter-spacing: .1em;
          font-size: 13px;
        }

        .primary-button {
          border: 1px solid #00ffe7;
          background: #00ffe7;
          color: #001311;
          font-weight: 700;
          box-shadow: 0 0 25px rgba(0,255,231,.22);
        }

        .secondary-button {
          border: 1px solid rgba(255,255,255,.4);
          background: rgba(0,0,0,.1);
          color: white;
        }

        .section {
          padding: 80px 5vw;
          background: #05070b;
        }

        .section-alt {
          padding: 80px 5vw;
          background:
            radial-gradient(
              circle at top right,
              rgba(0,255,231,.05),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              #070b11 0%,
              #05070b 100%
            );
        }

        .inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-en {
          color: #00ffe7;
          font-size: 11px;
          letter-spacing: .3em;
          margin-bottom: 14px;
          text-shadow: 0 0 10px rgba(0,255,231,.55);
        }

        .section-title {
          margin: 0;
          font-size: clamp(31px, 5vw, 54px);
          line-height: 1.3;
          letter-spacing: .04em;
        }

        .section-description {
          margin-top: 20px;
          margin-bottom: 0;
          max-width: 720px;
          color: rgba(255,255,255,.6);
          font-size: 15px;
          line-height: 1.9;
        }

        .cards {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 18px;
        }

        .glow-card {
        transition:
  transform 0.35s ease,
  border-color 0.35s ease,
  box-shadow 0.35s ease,
  background 0.35s ease;

          position: relative;
          overflow: hidden;
          min-height: 190px;
          padding: 20px 28px 24px;
          border: 1px solid rgba(0,255,231,.15);
          background:
            linear-gradient(
              145deg,
              rgba(0,255,231,.045),
              rgba(255,255,255,.012)
            );
        }
        .glow-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 210, 90, 1);
  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.35),
    0 0 18px rgba(255, 200, 70, 0.55),
    0 0 40px rgba(255, 170, 40, 0.30);
}

.product-slide-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 210, 90, 0.8);
  background: rgba(5, 7, 11, 0.88);
  color: #ffd25a;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}



}
.product-carousel {
  position: relative;
  width: 100%;
  margin-top: 45px;
  padding-bottom: 55px;
}

.carousel-track {
  position: relative;
  height: 520px;
  perspective: 1200px;
  overflow: hidden;
}

.carousel-card {
  position: absolute;
  top: 20px;
  left: 50%;
  width: 34%;
  min-height: 450px;
  margin-left: -17%;
  padding: 18px;
  overflow: hidden;

  border: 1px solid rgba(255, 210, 90, 0.25);
  background: linear-gradient(
    145deg,
    #0b1017,
    #05070b
  );

  transition:
    transform 0.55s ease,
    opacity 0.55s ease,
    border-color 0.55s ease,
    box-shadow 0.55s ease;

  transform-style: preserve-3d;
}

.carousel-card.active {
  border-color: rgba(255, 210, 90, 1);

  box-shadow:
    0 0 18px rgba(255, 210, 90, 0.45),
    0 0 45px rgba(255, 170, 40, 0.22);
}

.carousel-card .product-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  margin-bottom: 20px;
}

.carousel-card.active .product-image {
  height: 285px;
}

.carousel-card .card-title {
  font-size: 20px;
  margin-bottom: 12px;
}

.carousel-card.active .card-title {
  font-size: 24px;
}

.product-carousel .carousel-arrow {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid #ffd25a;
  background: rgba(5, 7, 11, 0.92);
  color: #ffd25a;

  font-size: 34px;
  line-height: 1;
  cursor: pointer;
  z-index: 30;

  transition: 0.3s ease;
}

.product-carousel .carousel-arrow-left {
  left: 5px;
}

.product-carousel .carousel-arrow-right {
  right: 5px;
}

.product-carousel .carousel-arrow:hover {
  background: rgba(255, 190, 70, 0.15);
  box-shadow:
    0 0 18px rgba(255, 210, 90, 0.5),
    0 0 35px rgba(255, 170, 40, 0.25);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
}

.carousel-dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 210, 90, 0.25);
  cursor: pointer;
}

.carousel-dot.active {
  background: #ffd25a;
  box-shadow: 0 0 12px rgba(255, 210, 90, 0.7);
}

@media (max-width: 768px) {
  .carousel-track {
    height: 470px;
  }

  .carousel-card {
    width: 72%;
    margin-left: -36%;
    min-height: 410px;
  }

  .carousel-card .product-image {
    height: 220px;
  }

  .carousel-card.active .product-image {
    height: 240px;
  }

  .carousel-arrow {
    width: 42px;
    height: 42px;
  }
}

.service-reveal {
  opacity: 0;
  transform: translateY(35px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.service-reveal.show {
  opacity: 1;
  transform: translateY(0);
}
.service-image {
  transition: transform 0.45s ease;
}

.glow-card:hover .service-image {
  transform: scale(1.045);
}
        
        .service-icon {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 18px rgba(0,255,231,.55));
}

        .number {
          color: #00ffe7;
          font-size: 11px;
          letter-spacing: .18em;
        }

        .card-title {
          margin-top: 19px;
          margin-bottom: 12px;
          font-size: 21px;
          font-weight: 600;
        }

        .card-text {
          margin: 0;
          color: rgba(255,255,255,.6);
          font-size: 14px;
          line-height: 1.9;
        }

        .scene-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 14px;
          margin-top: 50px;
        }

.scene-card {
position: relative;
overflow: hidden;

transition:
  transform 0.35s ease,
  border-color 0.35s ease,
  box-shadow 0.35s ease;
  min-height: 430px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid rgba(0,255,231,.12);
  background:
    linear-gradient(
      135deg,
      #0c131b,
      #05070b
    );
}
.scene-flip-card {
  perspective: 1200px;
  min-height: 0;
  height: 280px;
  padding:0;
  display: block;
}

.scene-flip-inner {
  position: relative;
  width: 100%;
  min-height: 100px;
  transition: transform 0.7s ease;
  transform-style: preserve-3d;
}

.scene-flip-card:hover .scene-flip-inner {
  transform: rotateY(180deg);
}

.scene-flip-front,
.scene-flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.scene-flip-front {
  background: #07101a;
  overflow: hidden;
}

.scene-flip-front .scene-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.scene-flip-front .number,
.scene-flip-front .scene-title {
  position: absolute;
  left: 18px;
  z-index: 2;
}

.scene-flip-front .number {
  bottom: 54px;
}

.scene-flip-front .scene-title {
  bottom: 18px;
  color: white;
}

.scene-flip-front::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 24%;
  background: linear-gradient(
    to top,
    rgba(5, 7, 11, 0.72),
    rgba(5, 7, 11, 0)
  );
}

.scene-flip-back {
  transform: rotateY(180deg);
  padding: 28px;
  border: 1px solid rgba(255, 210, 90, 0.45);
  background:
    linear-gradient(
      145deg,
      rgba(255, 190, 70, 0.08),
      rgba(5, 7, 11, 0.98)
    );

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.scene-flip-back .number {
  color: #ffd25a;
  text-shadow: 0 0 12px rgba(255, 210, 90, 0.55);
}

.scene-flip-back .scene-title {
  margin-top: 12px;
  margin-bottom: 18px;
}

.scene-flip-back .scene-text {
  line-height: 1.9;
}
.scene-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 210, 90, 0.9);
  box-shadow:
    0 14px 35px rgba(0, 0, 0, 0.3),
    0 0 24px rgba(255, 185, 60, 0.2);
}
/* 導入シーン・めくる前の表面を強制修正 */
.scene-card.scene-flip-card {
  min-height: 280px !important;
  height: 280px !important;
  padding: 0 !important;
}

.scene-flip-inner {
  height: 100% !important;
  min-height: 0 !important;
}

.scene-flip-front {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.scene-flip-front .scene-img {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  object-fit: cover !important;
}
.stats-section {
  padding: 80px 0;
  background: #05070b;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.stat-card {
  padding: 24px 16px;
  text-align: center;
  border: 1px solid rgba(255, 210, 90, 0.35);
  background: linear-gradient(
    145deg,
    rgba(255, 190, 70, 0.06),
    rgba(255, 255, 255, 0.01)
  );
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  color: #ffd25a;
  text-shadow:
    0 0 12px rgba(255, 210, 90, 0.5),
    0 0 30px rgba(255, 170, 40, 0.25);
}

.stat-label {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.08em;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 52px;
  }
}
.scene-card::after {
  content: "";
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 0;
  height: 2px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 210, 90, 1),
    transparent
  );

  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s ease;
}

.scene-card:hover::after {
  transform: scaleX(1);
}

      
          flex-direction: column;
          justify-content: flex-end;
          border: 1px solid rgba(0,255,231,.12);
          background:
            linear-gradient(
              135deg,
              #0c131b,
              #05070b
            );
        }
        .scene-img {
        width: 100%;
        height: 100px;
        object-fit: cover;
        margin-bottom: 0;
        }
        .scene-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 8px;
}

.scene-text {
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255,255,255,.75);
}
        

        .scene-title {
          font-size: 20px;
          font-weight: 600;
        }

        .product-image {
        width:100%;
        height: 220px;
        object-fit: cover;
        margin-bottom: 24px;
        border: 1px solid rgba(0,255,231,.17);
        }

        .product-note {
        margin-top: 14px;
        color: raba(255,255,255,.45);
        font-size: 12px;
        line-height: 1.7;
        }

        .strength-grid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 20px;
        }

        .strength-card {
          min-height: 220px;
          padding: 30px;
          border-left: 2px solid #00ffe7;
          background:
            linear-gradient(
              90deg,
              rgba(0,255,231,.045),
              rgba(255,255,255,.01)
            );
        }

        .strength-reveal {
  opacity: 0;
  transform: translateY(28px);
  position: relative;
  overflow: hidden;
}

.strength-reveal.show {
  animation: strengthReveal 1.8s ease forwards;
}

@keyframes strengthReveal {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.strength-reveal::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 70%;
  height: 100%;
  pointer-events: none;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 210, 90, 0.22),
    rgba(255, 245, 200, 0.4),
    transparent
  );

  transform: skewX(-18deg);
}

.strength-reveal.show::after {
  animation: strengthScan 0.9s ease forwards;
  animation-delay: inherit;
}

@keyframes strengthScan {
  from {
    left: -120%;
  }

  to {
    left: 140%;
  }
}

.strength-reveal.show .strength-num {
  color: #ffd25a;
  text-shadow:
    0 0 10px rgba(255, 210, 90, 0.65),
    0 0 24px rgba(255, 170, 40, 0.3);
}

        .strength-number {
          font-size: 52px;
          font-weight: 700;
          color: rgba(0,255,231,.14);
        }

        .strength-title {
          margin: 5px 0 14px;
          font-size: 24px;
        }

      .flow-grid {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 14px;
  position: relative;

  background-image: linear-gradient(
    270deg,
    transparent,
    #ffd25a,
    #ffd25a,
    transparent
  );
  background-repeat: no-repeat;
  background-size: 68% 2px;
  background-position: center calc(100% + 14px);
}  


.flow-grid::before {
  content: "";
  position: absolute;
  top: -14px;
  left: 16%;
  width: 68%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    #ffd25a,
    #ffd25a,
    transparent
  );
  box-shadow: 0 0 14px rgba(255, 210, 90, 0.6);
  transform: scaleX(0);
  transform-origin: left;
  animation: flowLine 1.4s ease forwards;
  z-index: 0;
}
.flow-grid::after {
  content: "";
  position: absolute;
  top: -14px;
  right: -10px;
  width: 2px;
  height: calc(100% + 28px);
  background: linear-gradient(
    180deg,
    #ffd25a,
    #ffd25a
  );
  box-shadow: 0 0 14px rgba(255, 210, 90, 0.6);
  transform: scaleY(0);
  transform-origin: top;
  animation: flowDown 0.8s ease forwards;
  animation-delay: 1.4s;
  z-index: 0;
}

@keyframes flowDown {
  from {
    transform: scaleY(0);
  }
.flow-bottom-line {
  position: absolute;
  bottom: -14px;
  right: 16%;
  width: 68%;
  height: 2px;
  background: linear-gradient(
    270deg,
    transparent,
    #ffd25a,
    #ffd25a,
    transparent
  );
  box-shadow: 0 0 14px rgba(255, 210, 90, 0.6);
  transform: scaleX(0);
  transform-origin: right;
  animation: flowBottom 1.4s ease forwards;
  animation-delay: 2.2s;
  z-index: 0;
}

@keyframes flowBottom {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
  to {
    transform: scaleY(1);
  }
}

@keyframes flowLine {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
        .flow-card {
          min-height: 130px;
          padding: 24px;
          border: 1px solid rgba(0,255,231,.14);
          background: rgba(255,255,255,.015);
        }
.flow-step-card {
  position: relative;
  overflow: hidden;
  opacity: 0.45;
  transform: translateY(18px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
}

.flow-step-card.flow-show {
  animation: flowStepGlow 0.8s ease forwards;
}

.flow-step-card.flow-show::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 70%;
  height: 100%;
  pointer-events: none;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 210, 90, 0.15),
    rgba(255, 235, 160, 0.55),
    transparent
  );

  transform: skewX(-18deg);
  animation: flowLight 3s ease forwards;
  animation-delay: inherit;
}

@keyframes flowStepGlow {
  0% {
    opacity: 0.45;
    transform: translateY(18px);
  }

  60% {
    opacity: 1;
    border-color: rgba(255, 210, 90, 0.95);
    box-shadow: 0 0 28px rgba(255, 190, 60, 0.35);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    border-color: rgba(255, 210, 90, 0.45);
  }
}

@keyframes flowLight {
  from {
    left: -120%;
  }

  to {
    left: 140%;
  }
}
        .flow-title {
          margin-top: 18px;
          font-size: 17px;
          font-weight: 600;
        }

        .company-box {
          margin-top: 45px;
          max-width: 850px;
          padding: 5px 30px;
          border: 1px solid rgba(0,255,231,.14);
          background: rgba(255,255,255,.02);
        }

        .company-row {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 20px;
          padding: 21px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

        .company-label {
          color: #00ffe7;
          font-size: 13px;
        }

        .company-value {
          color: rgba(255,255,255,.8);
          font-size: 14px;
          line-height: 1.7;
        }

        .contact-form {
          margin-top: 48px;
          max-width: 760px;
          display: grid;
          gap: 18px;
        }

        .contact-input {
          width: 100%;
          padding: 17px 18px;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(0,255,231,.16);
          color: #ffffff;
          font-size: 15px;
          outline: none;
        }

        .submit-button {
          margin-top: 8px;
          padding: 18px 24px;
          border: 0;
          background: #00ffe7;
          color: #001311;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: .12em;
          cursor: pointer;
          box-shadow: 0 0 25px rgba(0,255,231,.25);
        }

        .footer {
          padding: 50px 5vw 30px;
          background: #020305;
          border-top: 1px solid rgba(0,255,231,.12);
        }

        .footer-company {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .footer-signage {
          margin-top: 5px;
          color: #00ffe7;
          font-size: 10px;
          letter-spacing: .25em;
        }

        .copyright {
          margin-top: 35px;
          color: rgba(255,255,255,.35);
          font-size: 11px;
        }

        /* PC用LINEボタン */

        .contact-desktop {
        position: fixed;
        right: 20px;
        bottom: 20px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 10px;
}

.tel-desktop {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 19px;
  border-radius: 999px;
  background: #ffffff;
  color: #05070b;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 8px 30px rgba(0,0,0,.35);
}

.tel-circle {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #05070b;
  color: #ffffff;
  font-size: 9px;
  font-weight: 900;
}
        .line-desktop {
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 19px;
          border-radius: 999px;
          background: #06C755;
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          box-shadow:
            0 8px 30px rgba(0,0,0,.35),
            0 0 20px rgba(6,199,85,.25);
        }

        .line-circle {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: white;
          color: #06C755;
          font-size: 9px;
          font-weight: 900;
        }

        /* スマホ用LINE固定バー */
        .line-mobile {
          display: none;
        }
        
        .tel-mobile {
        display: none;
        }

        @media (max-width: 1100px) {
          .desktop-nav {
            gap: 10px;
          }

          .nav-button {
            font-size: 11px;
          }

          .cards {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .scene-grid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .flow-grid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }
        }

        @media (max-width: 820px) {
        .hero {
  height: auto !important;
  min-height: 0 !important;
  aspect-ratio: 16 / 9;
}
        
.contact-desktop {
display: none;
}

.line-mobile {
  position: fixed;
  left: 50% !important;
  right: auto;
  bottom: 0;
  width: 50% !important; 
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 64px;
  padding: 10px 18px calc(10px + env(safe-area-inset-bottom));
  background: #06C755;
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 -8px 28px rgba(0,0,0,.3);
}


.tel-mobile {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 50%;
  z-index: 9999;
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 64px;
  padding: 10px 18px calc(10px + env(safe-area-inset-bottom));
  background: #ffffff;
  color: #05070b;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 -8px 28px rgba(0,0,0,.3);
}

.tel-mobile-icon {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #05070b;
  color: #ffffff;
  font-size: 10px;
  font-weight: 900;
}

.line-mobile-icon {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
  color: #06C755;
  font-size: 10px;
  font-weight: 900;
}

          .header {
            height: 68px;
            padding: 0 18px;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-menu {
            position: fixed;
            top: 68px;
            left: 0;
            right: 0;
            z-index: 999;
            display: flex;
            flex-direction: column;
            padding: 18px;
            background: rgba(3,7,13,.97);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(0,255,231,.15);
          }

          .mobile-nav-button {
            width: 100%;
            border: 0;
            border-bottom: 1px solid rgba(255,255,255,.07);
            background: transparent;
            color: white;
            padding: 15px 4px;
            text-align: left;
            font-size: 13px;
            cursor: pointer;
          }

          .mobile-language {
            display: flex;
            gap: 10px;
            padding-top: 15px;
          }

          .logo-image {
            height: 39px;
            max-width: 150px;
          }

          .hero-inner {
            width: auto;
            margin: 0;
            padding: 110px 20px 90px;
          }

          .hero-title {
            font-size: clamp(40px, 12vw, 64px);
          }

          .hero-buttons {
            width: 100%;
          }

          .primary-button,
          .secondary-button {
            min-width: 0;
            flex: 1;
          }

          .section,
          .section-alt {
            padding: 85px 20px;
          }

          .cards,
          .flow-grid {
            grid-template-columns: 1fr;
          }

          .scene-grid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .company-box {
            padding: 5px 20px;
          }

          .company-row {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .footer {
            padding-bottom: 100px;
          }


          .line-mobile {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            min-height: 64px;
            padding:
              10px 18px
              calc(10px + env(safe-area-inset-bottom));

            background: #06C755;
            color: white;

            text-decoration: none;
            font-size: 15px;
            font-weight: 700;

            box-shadow:
              0 -8px 28px rgba(0,0,0,.3);
          }

          .line-mobile-icon {
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: white;
            color: #06C755;
            font-size: 10px;
            font-weight: 900;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: clamp(38px, 13vw, 55px);
          }

          .hero-en {
            font-size: 10px;
            letter-spacing: .25em;
          }

          .scene-grid {
            grid-template-columns: 1fr;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }
.business-link-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.45s ease,
    box-shadow 0.45s ease,
    border-color 0.45s ease;
}

.business-link-card:hover {
  transform: translateY(-10px) scale(1.025);
  border-color: rgba(255, 210, 90, 0.8);
  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.38),
    0 0 28px rgba(255, 190, 60, 0.18);
}

.business-link-card::after {
  content: "";
  position: absolute;
  top: -45%;
  left: -90%;
  width: 45%;
  height: 190%;
  pointer-events: none;
  z-index: 5;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 210, 90, 0.18),
    rgba(255, 245, 190, 1),
    rgba(255, 190, 60, 0.5),
    transparent
  );

  filter: blur(2px);
  transform: rotate(24deg);
  transition: left 0.75s ease;
}

.business-link-card:hover::after {
  left: 145%;
}

.business-link-card:hover::after {
  left: 140%;
}

.business-view-site {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin-top: 18px;
  padding: 12px 20px;
  width: fit-content;
  border: 1px solid rgba(255, 210, 90, 0.65);
  background: rgba(5, 7, 11, 0.8);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.08em;
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.business-link-card:hover .business-view-site {
  opacity: 1;
  transform: translateY(0);
  box-shadow: 0 0 18px rgba(255, 190, 60, 0.28);
}
          
     
      a.business-link-card .business-view-site {
  opacity: 0 !important;
  transform: translateY(18px) !important;
  pointer-events: none;
}

a.business-link-card:hover .business-view-site {
  opacity: 1 !important;
  transform: translateY(0) !important;
  pointer-events: auto;
}

  .philosophy-item {
  opacity: 0;
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.philosophy-left {
  transform: translateX(-50px);
}

.philosophy-right {
  transform: translateX(50px);
  transition-delay: 0.25s;
}
.philosophy-item.show {
opacity: 1;
transform: translateX(0);
}

.philosophy-content::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  margin-top: 34px;
  background: linear-gradient(
    90deg,
    #ffd25a,
    rgba(255, 210, 90, 0.15)
  );
  transition: width 1s ease 0.55s;
}

#philosophy:has(.philosophy-item.show) .philosophy-content::after {
  width: 100%;
}

     `} </style>

      <div className="osr-page">
        {/* HEADER */}
        <header className="header">
          <button
            type="button"
            onClick={() => 移動("top")}
            className="logo-button"
          >
            {ロゴURL !== "ここに株式会社OSRのロゴURL" ? (
            <div className="logo-brand">
              <img
                src={ロゴURL}
                alt="株式会社OSR"
                className="logo-image"
              />
          <span className="logo-company-name">株式会社OSR</span>
            </div>             ) : (
              
              <div style={{ textAlign: "left" }}>
                <div className="logo-company">
                  株式会社OSR
                </div>

                <div className="logo-signage">
                  DIGITAL SIGNAGE
                </div>
              </div>
            )}
          </button>

          <nav className="desktop-nav">
            <ナビボタン text={文言.nav.service} onClick={() => 移動("service")} />
            <ナビボタン text={文言.nav.scene} onClick={() => 移動("scene")} />
            <ナビボタン text={文言.nav.products} onClick={() => 移動("products")} />
            <ナビボタン text={文言.nav.strength} onClick={() => 移動("strength")} />
            <ナビボタン text={文言.nav.flow} onClick={() => 移動("flow")} />
            <ナビボタン text={文言.nav.business} onClick={() => 移動("business")} />
            <ナビボタン text={文言.nav.news} onClick={() => 移動("news")} />
            <ナビボタン text={文言.nav.blog} onClick={() => 移動("blog")} />
            <ナビボタン text={文言.nav.philosophy} onClick={() => 移動("philosophy")} />
            <ナビボタン text={文言.nav.company} onClick={() => 移動("company")} />

            <button
              type="button"
              onClick={() => 移動("contact")}
              className="nav-button contact-nav"
            >
              {文言.nav.contact}
            </button>

            <div className="language-area">
              <言語ボタン label="JP" active={言語 === "ja"} onClick={() => 言語を変更("ja")} />
              <言語ボタン label="EN" active={言語 === "en"} onClick={() => 言語を変更("en")} />
              <言語ボタン label="中文" active={言語 === "zh"} onClick={() => 言語を変更("zh")} />
              <言語ボタン label="VI" active={言語 === "vi"} onClick={() => 言語を変更("vi")} />
            </div>
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => メニュー開閉(!メニューを開く)}
          >
            {メニューを開く ? "×" : "☰"}
          </button>
        </header>

        {メニューを開く && (
          <div className="mobile-menu">
            {[
              ["service", 文言.nav.service],
              ["scene", 文言.nav.scene],
              ["products", 文言.nav.products],
              ["strength", 文言.nav.strength],
              ["flow", 文言.nav.flow],
              ["company", 文言.nav.company],
              ["contact", 文言.nav.contact],
            ].map(([id, text]) => (
              <button
                key={id}
                type="button"
                className="mobile-nav-button"
                onClick={() => 移動(id)}
              >
                {text}
              </button>
            ))}

            <div className="mobile-language">
              <言語ボタン label="JP" active={言語 === "ja"} onClick={() => 言語を変更("ja")} />
              <言語ボタン label="EN" active={言語 === "en"} onClick={() => 言語を変更("en")} />
              <言語ボタン label="中文" active={言語 === "zh"} onClick={() => 言語を変更("zh")} />
              <言語ボタン label="VI" active={言語 === "vi"} onClick={() => 言語を変更("vi")} />
            </div>
          </div>
        )}

        {/* TOP */}
        <section 
          id="top"
          className="hero"
          style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
          }}
          >
    <video 
      autoPlay 
      muted
      loop 
      playsInline
      className="hero-video hero-video-pc">
      
  <source src={pc動画URL} type="video/mp4" />
</video>

      
   <video
     autoPlay
     muted
     loop 
     playsInline
     preload="auto"
     className="hero-video hero-video-mobile">
     
  <source src={mobile動画URL}　type="video/mp4" />
</video>
<button
  className="sound-button"
  onClick={() => setSoundOn(!soundOn)}
>
  {soundOn ? "🔇 SOUND OFF" : "🔊 SOUND ON"}
</button>
          
          
          <div className="hero-overlay" />
          <div className="hero-grid" />

          <div className="hero-inner">
           
          </div>
        </section>

      {/* サービス */}
<section id="service" className="section-alt">
  <div className="inner">
    <見出し
      en="SERVICE"
      title={文言.service.title}
      description={文言.service.description}
    />

    <div className="cards">
      {文言.service.items.map((item, index) => (
<div
  className={"glow-card service-reveal " + (serviceVisible ? "show" : "")}
  key={index}
  style={{ animationDelay: String(index * 0.12) + "s" }}
>
        
          <img
            src={サービス画像[index]}
            alt={item.title}
            className="service-image"
          />

          <div className="number">
            0{index + 1}
          </div>

          <h3 className="card-title">
            {item.title}
          </h3>

          <p className="card-text">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

   {/* 導入シーン */}
<section id="scene" className="section">
  <div className="inner">
    <見出し
      en="SCENE"
      title={文言.scene.title}
      description={文言.scene.description}
    />

    <div className="scene-grid">
      {文言.scene.items.map((item, index) => (
<div className="scene-card scene-flip-card" key={index}>
  <div className="scene-flip-inner">

    <div className="scene-flip-front">
      <img
        src={導入シーン画像[index]}
        alt={item.title}
        className="scene-img"
      />

      <div className="number">
        0{index + 1}
      </div>

      <div className="scene-title">
        {item.title}
      </div>
    </div>

    <div className="scene-flip-back">
      <div className="number">
        0{index + 1}
      </div>

      <div className="scene-title">
        {item.title}
      </div>

      <div className="scene-text">
        {item.text}
      </div>
    </div>

  </div>
</div>

  
      ))}
    </div>
    
          </div>
        </section>

        {/* 製品 */}
        <section id="products" className="section-alt">
          <div className="inner">
            <見出し
              en="PRODUCTS"
              title={文言.products.title}
              description={文言.products.description}
            />
            
<section className="stats-section">
  <div className="inner">
    <div className="stats-grid">

      <div className="stat-card">
        <div className="stat-number">{count98}</div>
        <div className="stat-label">最大対応インチ</div>
      </div>

      <div className="stat-card">
        <div className="stat-number">{count6}</div>
        <div className="stat-label">製品ラインナップ</div>
      </div>

      <div className="stat-card">
        <div className="stat-number">{count8}</div>
        <div className="stat-label">対応サイズ数</div>
      </div>

    </div>
  </div>
</section>
            <p className="product-note">
              ※掲載画像はイメージです。実際の取扱製品・仕様とは異なる場合があります。詳細はお問い合わせください。
            </p>
<div className="product-carousel">




  <div className="carousel-track">
    {文言.products.items.map((item, index) => {
      const total = 文言.products.items.length;

      let diff = index - productIndex;

      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      return (

<div
  key={index}
  className={"carousel-card " + (diff === 0 ? "active" : "")}
  onClick={() => setProductIndex(index)}
  style={{
    transform:
      "translateX(" + diff * 72 + "%) " +
      "scale(" + (diff === 0 ? 1 : Math.abs(diff) === 1 ? 0.84 : 0.72) + ") " +
      "rotateY(" + diff * -8 + "deg)",
    opacity: Math.abs(diff) > 2 ? 0 : 1,
    zIndex: 10 - Math.abs(diff),
  }}
>
          <img
            src={製品画像[index]}
            alt={item.title}
            className="product-image"
          />

          <h3 className="card-title">
            {item.title}
          </h3>

          <p className="card-text">
            {item.text}
          </p>
        </div>
      );
    })}
  </div>


    ›
  

  <div className="carousel-dots">
    {文言.products.items.map((_, index) => (
      <button
        key={index}
        type="button"
       className={"carousel-dot " + (index === productIndex ? "active" : "")}
         
        onClick={() => setProductIndex(index)}
      />
    ))}
  </div>

</div>
          </div>
          
        </section>

        {/* OSRの強み */}
        <section id="strength" className="section">
          <div className="inner">
            <見出し
              en="WHY OSR"
              title={文言.strength.title}
              description={文言.strength.description}
            />

            <div className="strength-grid">
              {文言.strength.items.map((item, index) => (

  <div
className={"strength-card strength-reveal " + (strengthVisible ? "show" : "")}
  
  key={index}
style={{ animationDelay: String(index * 0.5) + "s" }}
  
>
                  <div className="strength-number">
                    0{index + 1}
                  </div>

                  <h3 className="strength-title">
                    {item.title}
                  </h3>

                  <p className="card-text">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SIGNAGE MARQUEE */}
<div className="signage-marquee">
  <div className="signage-marquee-track">
    <span>
      DIGITAL SIGNAGE — LED VISION — CONTENT — INSTALLATION — OPERATION — SUPPORT —
    </span>
    <span>
      DIGITAL SIGNAGE — LED VISION — CONTENT — INSTALLATION — OPERATION — SUPPORT —
    </span>
    <span>
      DIGITAL SIGNAGE — LED VISION — CONTENT — INSTALLATION — OPERATION — SUPPORT —
    </span>
  </div>
</div>
        {/* 導入フロー */}
        <section id="flow" className="section-alt">
          <div className="inner">
            <見出し
              en="FLOW"
              title={文言.flow.title}
              description={文言.flow.description}
            />

            <div className="flow-grid">

              {文言.flow.items.map((item, index) => (
                <div 
className={"flow-card flow-step-card " + (flowVisible ? "flow-show" : "")}
                 
                  key={index}
style={{ animationDelay: String(index * 1.0) + "s" }}
                 
                    >
                  <img
  src={導入フロー画像[index]}
  alt={item.title}
  className="flow-image"
/>
                  <div className="number">
                    STEP {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flow-title">
                    {item.title}
                  </div>

                  <div className="flow-text">
                  {item.text}
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>


{/* 事業紹介 */}
<section id="business" className="section">
  <div className="inner">
    <見出し
      en="BUSINESS"
      title="事業紹介"
      description="株式会社OSRが展開する事業をご紹介します。"
    />

    <div className="business-links">
      <a
        href="https://renovation.osr-inc.jp/"
        target="_blank"
        rel="noopener noreferrer"
        className="business-link-card"
      >
        <img
          src={renovationImage}
          alt="リフォーム事業"
          className="business-link-image"
          />
        <div className="business-link-en">RENOVATION</div>
        <h3>リフォーム事業</h3>
        <p>
          原状回復・内装工事・リフォームなど、幅広いご要望に対応します。
        </p>
        <span className="business-view-site">VIEW SITE ➡</span>
      </a>

      <a
        href="https://www.osr0115.com"
        target="_blank"
        rel="noopener noreferrer"
        className="business-link-card"
      >
        <img
          src={heavyLiftingImage}
          alt="重量鳶事業"
          className="business-link-image"
          />
        <div className="business-link-en">HEAVY LIFTING</div>
        <h3>重量鳶事業</h3>
        <p>
          重量物の搬入・据付・移設など、確かな技術と施工力で対応します。
        </p>
        <span className="business-view-site">VIEW SITE ➡</span>
      </a>
    </div>
  </div>
</section>

{/* お知らせ */}
<section id="news" className="section">
  <div className="inner">
    <見出し
      en="NEWS"
      title="お知らせ"
      description="株式会社OSRからのお知らせをご案内します。"
    />
<div className="news-list">
<a
  href="https://note.com/chousentairiku/n/nc8320c0a11f5"
  target="_blank"
  rel="noopener noreferrer"
  className="news-item"
>
  <span className="news-date">2026.09.07</span>
  <span className="news-category">MEDIA</span>
  <span className="news-title">
    「挑戦大陸」に代表・大崎純のインタビュー記事が掲載されました。
  </span>
  <span className="news-arrow">→</span>
</a>
<a
  href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fnozokuru.jp%2Fosr-jun-osaki%2F&data=05%7C02%7C%7Ca0a40cba461947bae1bc08df0d4588d9%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639244264441773512%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=S6YpPvjGE18du5V4F%2FX13ls5uV18L%2B5AYU2Z%2FIP7PqQ%3D&reserved=0"
  target="_blank"
  rel="noopener noreferrer"
  className="news-item"
>
  <span className="news-date">2026.09.07</span>
  <span className="news-category">MEDIA</span>
  <span className="news-title">
    「NOZOKURU」に代表・大崎純のインタビュー記事が掲載されました。
  </span>
  <span className="news-arrow">→</span>
</a>

<a
  href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fnote.com%2Fshacho_homon%2Fn%2Fnd013a4dfb362%3Fsub_rt%3Dshare_b%26utm_source%3Dchatgpt.com&data=05%7C02%7C%7Ca0a40cba461947bae1bc08df0d4588d9%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639244264441798817%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=vNiy%2FVX9fcTnYbllJGNe11eTtyT5Yw387D0vOCIPpfY%3D&reserved=0"
  target="_blank"
  rel="noopener noreferrer"
  className="news-item"
>
  <span className="news-date">2026.09.02</span>
  <span className="news-category">MEDIA</span>
  <span className="news-title">
    「社長訪問」に代表・大崎純のインタビュー記事が掲載されました。
  </span>
  <span className="news-arrow">→</span>
</a>

<a
  href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fkensetsu-engine-media.jp%2Finterview%2F660770853&data=05%7C02%7C%7Ca0a40cba461947bae1bc08df0d4588d9%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639244264441814797%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=Lnta8d5s9ZrzuPh%2FfWIKlXfulsNHqWSoUY7MJ%2FuRijE%3D&reserved=0"
  target="_blank"
  rel="noopener noreferrer"
  className="news-item"
>
  <span className="news-date">2026.08.31</span>
  <span className="news-category">MEDIA</span>
  <span className="news-title">
    「建設円陣PLUS」に代表・大崎純のインタビュー記事が掲載されました。
  </span>
  <span className="news-arrow">→</span>
</a>

  

  <a
    href="https://youtu.be/FiPLOYbRcco?si=MlwXQ4YDngu1oWgH"
    target="_blank"
    rel="noopener noreferrer"
    className="news-item"
  >
    <span className="news-date">2026.08.25</span>
    <span className="news-category">MEDIA</span>
    <span className="news-title">
      代表取締役 大崎純がYouTubeチャンネル「令和の虎」に出演しました。
    </span>
    <span className="news-arrow">→</span>
  </a>

  
  <a
    href="https://www.osr-inc.jp/"
    className="news-item"
  >
    <span className="news-date">2026.08.20</span>
    <span className="news-category">WEBSITE</span>
    <span className="news-title">
      株式会社OSR 公式総合サイトをリニューアルしました。
    </span>
    <span className="news-arrow">→</span>
  </a>

  <button
    type="button"
    onClick={() => 移動("business")}
    className="news-item"
  >
    <span className="news-date">2026.08.16</span>
    <span className="news-category">SERVICE</span>
    <span className="news-title">
      重量鳶・リフォーム・デジタルサイネージの各事業をご案内しています。
    </span>
    <span className="news-arrow">→</span>
  </button>

</div>

    
  </div>
</section>
{/* ブログ */}
<section id="blog" className="section">
  <div className="inner">
    <見出し
      en="BLOG"
      title="ブログ"
      description=""
    />

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {cmsPosts.length === 0 ? (
    <p>現在、記事を準備中です。</p>
  ) : (
    cmsPosts.map((post: any) => {
      const imageUrl =
        typeof post.eyecatch === "string"
          ? post.eyecatch
          : post.eyecatch?.url || "";

      return (
        <article
          key={post.id}
          className="group cursor-pointer overflow-hidden bg-white"
          style={{
            border: "1px solid #E5E5E5",
            borderRadius: "4px",
          }}
          onClick={() => {
            setSelectedPost(post);
            setPage("blog-detail");
            window.scrollTo(0, 0);
          }}
        >
          <div
            className="overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>

          <div className="p-6">
            <p
              className="text-xs mb-4"
              style={{ color: "#B89748" }}
            >
              {post.date
                ? new Date(post.date).toLocaleDateString("ja-JP")
                : ""}
            </p>

            <h2
              className="text-lg font-bold mb-4 leading-relaxed"
              style={{ color: "#14263D" }}
            >
              {post.title}
            </h2>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#777777" }}
            >
              {post.summary || ""}
            </p>

            <span
              className="text-sm font-medium"
              style={{ color: "#B89748" }}
            >
              続きを読む →
            </span>
          </div>
        </article>
      );
    })
  )}
</div>
    
  </div>
</section>
        
{/* 企業理念・使命 */}
<section id="philosophy" className="section section-alt">
  <div className="inner">
    <見出し
      en="PHILOSOPHY"
      title="企業理念・使命"
      description="OSRが大切にしている想い"
    />

    <div className="philosophy-content">

      <div className={"philosophy-item philosophy-left " + (philosophyVisible ? "show" : "")}>
        <h3>企業理念</h3>
        <p>
          熱情と知恵で生む挑戦により、新たな価値豊かな暮らしを創造する。
        </p>
      </div>

      <div className={"philosophy-item philosophy-right " + (philosophyVisible ? "show" : "")}>
        <h3>使命</h3>
        <p>
          熱情を力に、知恵を技術に、挑戦を価値に。期待を超える仕事で、人と社会の未来をつくる。
        </p>
      </div>

    </div>
  </div>
</section>
        
        {/* 会社概要 */}
        <section id="company" className="section">
          <div className="inner">
            <見出し
              en="COMPANY"
              title={文言.company.title}
              description={文言.company.description}
            />

            <div className="company-box">
              <会社行 label={文言.company.companyName} value="株式会社OSR" />
              <会社行 label={文言.company.representative} value={文言.company.representativeValue} />
              <会社行 label={文言.company.address} value={文言.company.addressValue} />
              <会社行 label={文言.company.business} value={文言.company.businessValue} />
              <会社行 label={文言.company.constructionPermit} value={文言.company.constructionPermitValue} />
              <会社行 label={文言.company.licenseBusiness} value={文言.company.licenseBusinessValue} />
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section id="contact" className="section-alt">
          <div className="inner">
            <見出し
              en="CONTACT"
              title={文言.contact.title}
              description={文言.contact.description}
            />

            <form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mgawovgb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      window.location.href = "/";


     } else {
  const errorText = await response.text();
  console.error("Formspree error:", response.status, errorText);
  alert(`送信エラー: ${response.status}\n${errorText}`);
  setSubmitError(true);
} 
  }}
>


            
              <input className="contact-input" name="company" placeholder={文言.contact.company} />
<input className="contact-input" name="name" placeholder={文言.contact.name} />
<input className="contact-input" type="email" name="email" placeholder={文言.contact.email} />
<input className="contact-input" type="tel" name="phone" placeholder={文言.contact.phone} />

<textarea
  className="contact-input"
  name="message"
  rows={7}
  placeholder={文言.contact.message}
/>
              

 <button type="submit" className="submit-button">
  {文言.contact.submit}
</button>

{submitError && (
  <div className="form-error">
    送信できませんでした。通信状況をご確認のうえ、もう一度お試しください。
  </div>
)}

</form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="inner">
            <div className="footer-company">
              株式会社OSR
            </div>

            <div className="footer-signage">
              DIGITAL SIGNAGE<br />
              デジタルサイネージ
            </div>

            <div className="copyright">
              © OSR Co., Ltd. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    {/* PC右下LINE */}
      <div className="contact-desktop">
        <a
          href={TEL_URL}
          className="tel-desktop"
          >
          <span className="tel-circle">TEL</span>
          <span>電話する　048-633-4952</span>
        </a>
        
<a
  href={LINE_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="line-desktop"
>
  <span className="line-circle">LINE</span>
  <span>{文言.line}</span>
</a>

      </div>
      <a
        href={TEL_URL}
        className="tel-mobile"
        >
        <span className="tel-mobile-icon">TEL</span>
      <span>電話する</span> 
  　  </a>
    
    {/* スマホ下部LINE固定バー */}
<a
  href={LINE_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="line-mobile"
>
  <span className="line-mobile-icon">LINE</span>
  <span>{文言.line}</span>
</a>
      
    </>
  );
}

function 見出し({
  en,
  title,
  description,
}: {
  en: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="section-en">
        {en}
      </div>

      <h2 className="section-title">
        {title}
      </h2>

      <p className="section-description">
        {description}
      </p>
    </>
  );
}

function ナビボタン({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="nav-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function 言語ボタン({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={
        active
          ? "language-button active"
          : "language-button"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function 会社行({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="company-row">
      <div className="company-label">
        {label}
      </div>

      <div className="company-value">
        {value}
      </div>
    </div>
  );
}

const 翻訳 = {
  ja: {
    nav: {
      service: "サービス",
      scene: "導入シーン",
      products: "製品",
      strength: "OSRの強み",
      flow: "導入フロー",
      business:"事業紹介",
      news:"お知らせ",
      blog:"ブログ",
      philosophy:"企業理念・使命",
      company: "会社概要",
      contact: "お問い合わせ",
    },

    hero: {
      title1: "空間に、",
      title2: "伝わる価値を。",
      description:
        "企画、機器選定から搬入・設置・施工・コンテンツ制作、導入後の運用サポートまで、デジタルサイネージの導入から運用まで一貫して対応します。。",
      productButton: "製品を見る",
      contactButton: "お問い合わせ",
    },

    service: {
      title: "サービス",
      description:
        "企画・機器選定から搬入・設置・施工・コンテンツ制作、導入後の運用サポートまで、デジタルサイネージの導入から運用まで一貫して対応します。",
      items: [
        {
          title: "企画・ご提案",
          text:
            "設置場所・用途・ご予算をヒアリングし、ディスプレイのサイズや設置方法、配信方法まで含めた最適なプランをご提案します。",
        },
        {
          title: "現地調査",
          text:
            "設置場所の寸法・電源・通信環境・設置条件などを確信し、安全かつスムーズに導入できる施工プランを検討します。",
        },
        {
          title: "機器搬入・設置準備",
          text:
            "重量物の搬入・据付で培った現場対応力を活かし、機器の搬入から設置まで安全かつ確実に対応します。",
        },
        {
          title: "取付・施工",
          text:
            "設置場所や使用環境に合わせて、壁掛け・スタンド設置をはじめとした各種取付工事に対応します。現地の状況や安全性を確認したうえで、見た目や使いやすさにも配慮し、適切な方法で丁寧に設置を行います。",
        },
        {
          title: "コンテンツ制作",
          text:
            "店舗案内や商品・サービスのPR、企業情報、キャンペーン告知など、目的に合わせた静止画や動画コンテンツの制作にも対応します。サイネージを導入して終わりではなく、実際に伝わる・見てもらえる画面づくりまでサポートします。",
        },
        {
          title: "配信・運用サポート",
          text:
            "導入後のコンテンツ更新や配信設定、スケジュール管理まで、デジタルサイネージの運用をトータルでサポートします。遠隔配信にも対応し、店舗や施設へ足を運ぶことなく、最新の情報へスムーズに更新可能です。設置して終わりではなく、導入後も安心して活用いただける運用体制をご提供します。",
        },
      ],
    },

    scene: {
      title: "導入シーン",
      description:
        "店舗・飲食店・商業施設・オフィス・ホテル・イベント会場など、さまざまな場所や用途に合わせて最適なデジタルサイネージをご提案します。情報発信や販促、案内表示、空間演出など、目的に応じた効果的な活用が可能です。",
      items: [
        {
          title:"店舗",
          text:"商品・サービスのPRやキャンペーン告知など、店頭・店内での効果的な情報発信に活用できます。"
        },
        {         
       title: "飲食店",
          text:"メニューやおすすめ商品の紹介、キャンペーン・イベント情報などを写真や動画で分かりやすく発信できます。"
        },
        {
          title: "商業施設",
          text:"フロア案内や店舗情報、イベント・キャンペーン告知・広告配信など、施設内のさまざまな情報発信に活用できます。大型ディスプレイやLEDビジョンによる空間演出にも対応します。"
        },
        {
          title:"オフィス",
          text:"受付・来訪者案内をはじめ、社内のお知らせや業務情報、企業PRなど、さまざまな情報共有に活用できます。複数の情報をタイムリーに発信し、社内コミュニケーションの効率化にもつなげます。"
        },
        {
    title:"ホテル",
          text:"館内案内や情報施設、レストラン・イベントのご案内など、宿泊されるお客様へのさまざまな情報発信に活用できます。エントランスやロビーでは、大型ディスプレイを活用した空間演出にも対応します。"
        },
        {
          title:"イベント・展示会",
          text:"会場案内やタイムスケジュール、商品・サービスのPR、映像演出など、イベントの目的に合わせた情報発信に活用できます。大型ディスプレイやLEDビジョンを使用した、視認性の高い演出にも対応します。"
        },
        {
          title:"ショールーム",
          text:"商品・サービスの特徴やブランドの世界観を、映像を通じて分かりやすく伝えることができます。大型ディスプレイや複数画面を活用し、来場者の印象に残る空間づくりにも活用できます。"
        },
        {
          title:"屋外広告",
          text:"店舗前やビル外壁、商業施設などで、広告やキャンペーン、企業情報を効果的に発信できます。屋外環境に適した高輝度ディスプレイやLEDビジョンを活用し、明るい屋外環境でも見やすく、訴求力の高い情報発信を実現します。"
        },         
      ],
    },

    products: {
      title: "製品",
      description:
         "設置場所や用途、ご予算に合わせて、屋内・屋外を問わず最適なデジタルサイネージをご提案します。　　ディスプレイの種類やサイズ、設置方法まで、お客様のご要望に合わせて幅広く対応します。",
      items: [
        {
          title: "屋内LEDビジョン",
          text:
            "商業施設・店舗・ショールーム・イベント会場など、屋内での大型表示や空間演出に適したLEDビジョンです。設置スペースや視認距離に合わせてサイズや仕様を選定し、迫力のある映像表現を実現します。",
        },
      
        {
          title: "屋外LEDビジョン",
          text:
            "ビル外壁・店舗前・商業施設・屋外広告などに適したLEDビジョンです。屋外環境でも見やすい高輝度モデルをはじめ、設置場所や用途に合わせた仕様をご提案します。",
        },
        {
          title: "液晶デジタルサイネージ",
          text:
            "店舗・オフィス・ホテル・施設など、幅広い場所で利用できる液晶タイプのデジタルサイネージです。案内表示や商品のPR、広告、企業情報など、さまざまな用途に合わせてサイズや仕様をご提案します。",
        },
        {
          title: "スタンド型サイネージ",
          text:
            "店舗入口・受付・ショールーム・イベント会場などに設置しやすい自立型のデジタルサイネージです。工事を最小限に抑えて導入しやすく、商品PRや案内表示、広告など幅広い用途に活用できます。",
        },
        {
          title: "壁掛け型サイネージ",
          text:
            "壁面を有効活用できる、省スペースなデジタルサイネージです。店舗・オフィス・施設などの案内表示や広告、情報発信に適しており、設置環境に合わせたサイズや取付方法をご提案します。",
        },
        {
          title: "大型ビジョン・特殊設置もご相談ください",
          text:
            "商業施設やイベント会場、ビル壁面などへの大型LEDビジョンの導入にも対応。現地調査から機器選定、搬入、設置工事、配信・運用まで一貫して対応します。",
        },
      ],
    },

    strength: {
      title: "OSRの強み",
      description:
        "デジタルサイネージの提案力に加え、施工会社として培ってきた現場対応力がOSRの強みです。機器の選定から搬入・設置・施工・導入後の運用まで一貫して対応します。",
      items: [
        {
          title: "施工力",
          text:
            "重量物の搬入・据付をはじめ、さまざまな現場で培った経験を活かし、設置環境や安全性を考慮した確実な施工を行います。",
        },
        {
          title: "一貫対応",
          text:
            "企画・機器選定から現地調査、搬入・設置・施工・コンテンツ制作、配信・運用サポートまで導入に必要な工程を一貫して対応します。",
        },
        {
          title: "提案力",
          text:
            "設置場所・用途・ご予算を踏まえ、ディスプレイの種類やサイズ、設置方法、配信方法まで、お客様に合った導入プランをご提案します。",
        },
        {
          title: "柔軟な対応",
          text:
            "店舗への1台導入から、商業施設・オフィス・イベント会場などへの複数台設置、大型LEDビジョンまで、規模や用途に合わせて柔軟に対応します。",
        },
      ],
    },

    flow: {
      title: "導入フロー",
      description:
        "ご相談から機器選定、設置・施工、運用開始までデジタルサイネージの導入を一貫してサポートします。　初めて導入されるお客様にも、分かりやすく丁寧にご案内します。",
      items: [
        {
          title:"お問い合わせ",
          text:"まずはお電話・LINE・お問い合わせフォームよりお気軽にご相談ください。導入をご検討されている場所や用途、ご希望など、分かる範囲でお聞かせください。"
        },
        {
          title:"ヒアリング",
          text:"設置場所や用途、ご予算、ご希望のサイズ、表示したいコンテンツや運用方法などを詳しくお伺いし、導入に必要な条件を整理します。"
        },
    {   
      title:"現地調査",
      text:"必要に応じて現地へ伺い、設置スペースや電源・通信環境、壁面などの取付条件、搬入経路を確認します。安全性や施工条件まで確認し、最適な設置方法を検討します。"
    },
        {
          title: "ご提案・お見積り",
          text:"ヒアリング・現地調査の内容をもとに、ディスプレイの種類やサイズ、設置方法、配信方法などを選定し、導入プランとお見積りをご提案します。"
        }, 
        {
          title:"搬入・設置工事",
          text:"機器の搬入から取付・設置工事、配線、表示・動作確認まで丁寧に対応します。施工会社として培ってきた現場対応力を活かし、安全かつ確実に設置します。"
        },
        {    
        title: "運用開始・アフターフォロー",
          text:"設置完了後は表示内容や配信環境を確認し、運用を開始します。コンテンツの更新や配信設定、スケジュール管理など、導入後の運用についても継続してサポートします。"
        },
           ],
    },

    company: {
      title: "会社概要",
      description: "株式会社OSR",
      companyName: "会社名",
      representative: "代表者",
      representativeValue:
        "代表取締役　大崎 純",
      address: "所在地",
      addressValue:
        "〒344-0066　埼玉県春日部市豊町6-1-2 MOTOパラダイスビル",
      business: "事業内容",
      businessValue:
        "重量物搬入・据付工事/リフォーム事業/デジタルサイネージ事業",
      constructionPermit:"建設業許可",
      constructionPermitValue:"埼玉県知事許可(般-8)第79625号",
      licenseBusiness:"許可業種",
      licenseBusinessValue:"とび・土工工事業/解体工事業",
    },

    contact: {
      title: "お問い合わせ",
      description:
        "まずはお電話・LINE・お問い合わせフォームよりお気軽にご相談ください。導入をご検討されている場所や用途、ご希望など、分かる範囲でお聞かせください。",
      company: "会社名",
      name: "お名前",
      email: "メールアドレス",
      phone: "電話番号",
      message: "お問い合わせ内容",
      submit: "送信する",
    },

    line: "LINEで問い合わせ",
  },

  en: {
    nav: {
      service: "Services",
      scene: "Applications",
      products: "Products",
      strength: "Why OSR",
      flow: "Process",
      news: "News",
　　　philosophy: "Philosophy & Mission",
      company: "Company",
      contact: "Contact",
    },

    hero: {
      title1: "Create Value",
      title2: "Through Digital Space.",
      description:
        "From planning and digital signage introduction to delivery, installation, construction and operational support.",
      productButton: "View Products",
      contactButton: "Contact Us",
    },

    service: {
      title: "Services",
      description:
        "We support your project from initial consultation and site survey to installation and after-sales support.",
      items: [
        {
          title: "Planning & Proposal",
          text:
            "We propose the most suitable digital signage solution based on your location, purpose and budget.",
        },
        {
          title: "Site Survey",
          text:
            "We inspect installation conditions, dimensions, power supply and construction requirements.",
        },
        {
          title: "Delivery & Installation",
          text:
            "Our on-site expertise enables safe and reliable delivery and installation.",
        },
        {
          title: "Construction",
          text:
            "We support wall-mounted displays, large LED screens and other installation requirements.",
        },
        {
          title: "Content Production",
          text:
            "We can also produce still images and video content for your signage.",
        },
        {
          title: "Maintenance",
          text:
            "We provide ongoing maintenance and support after installation.",
        },
      ],
    },

    scene: {
      title: "Applications",
      description:
        "Digital signage can be used across retail stores, commercial facilities, events and outdoor advertising.",
      items: [
        "Retail",
        "Restaurants",
        "Commercial Facilities",
        "Offices",
        "Hotels",
        "Events",
        "Showrooms",
        "Outdoor Advertising",
      ],
    },

    products: {
      title: "Products",
      description:
        "We propose signage solutions suited to your installation environment and intended use.",
      items: [
        {
          title: "Indoor LED Display",
          text:
            "High-resolution LED displays suitable for retail stores, commercial facilities and events.",
        },
        {
          title: "Outdoor LED Display",
          text:
            "High-brightness solutions designed for outdoor advertising and large-scale displays.",
        },
        {
          title: "LCD Digital Signage",
          text:
            "Versatile LCD signage for information, advertising and promotional applications.",
        },
        {
          title: "Freestanding Signage",
          text:
            "Flexible signage solutions ideal for entrances, reception areas and retail spaces.",
        },
        {
          title: "Wall-Mounted Signage",
          text:
            "Space-efficient wall-mounted digital signage for a clean installation.",
        },
        {
          title: "Large LED Vision",
          text:
            "Large-scale visual solutions for commercial facilities, events and outdoor advertising.",
        },
      ],
    },

    strength: {
      title: "Why OSR",
      description:
        "We combine digital technology with the on-site capabilities developed through our construction business.",
      items: [
        {
          title: "Installation Expertise",
          text:
            "Our field experience allows us to provide safe and reliable installation.",
        },
        {
          title: "One-Stop Support",
          text:
            "From site surveys and delivery to installation and operational support.",
        },
        {
          title: "Proposal Capability",
          text:
            "We recommend solutions based on your purpose, location and budget.",
        },
        {
          title: "Flexible Response",
          text:
            "We support projects ranging from retail installations to large-scale LED displays.",
        },
      ],
    },

    flow: {
      title: "Implementation Process",
      description:
        "We support your project from the initial inquiry through installation and operation.",
      items: [
        "Inquiry",
        "Consultation",
        "Site Survey",
        "Proposal & Quotation",
        "Installation",
        "Operation & After-Sales Support",
      ],
    },

    company: {
      title: "Company",
      description: "OSR Co., Ltd.",
      companyName: "Company",
      representative: "Representative",
      representativeValue:
        "Jun Osaki, Representative Director",
      address: "Address",
      addressValue:
        "6-1-2 Yutaka-cho, Kasukabe, Saitama 344-0066, Japan",
      business: "Business",
      businessValue:
        "Heavy lifting, renovation and digital signage",
    },

    contact: {
      title: "Contact",
      description:
        "Please feel free to contact us regarding digital signage installation.",
      company: "Company",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send",
    },

    line: "Contact via LINE",
  },

  zh: {
    nav: {
      service: "服务",
      scene: "应用场景",
      products: "产品",
      strength: "OSR优势",
      flow: "导入流程",
      news: "新闻",
　　　　philosophy: "企业理念・使命",
      company: "公司简介",
      contact: "联系我们",
    },

    hero: {
      title1: "让空间",
      title2: "传递更多价值。",
      description:
        "从数字标牌的策划与导入，到运输、安装、施工及运营支持，我们提供一站式服务。",
      productButton: "查看产品",
      contactButton: "联系我们",
    },

    service: {
      title: "服务",
      description:
        "从前期咨询、现场勘察，到安装施工及后期维护，我们提供全面支持。",
      items: [
        {
          title: "策划与提案",
          text:
            "根据安装地点、用途及预算，为客户推荐合适的数字标牌方案。",
        },
        {
          title: "现场勘察",
          text:
            "确认安装环境、电源、尺寸及施工条件等必要信息。",
        },
        {
          title: "运输与安装",
          text:
            "凭借施工公司的现场经验，安全可靠地完成运输与安装。",
        },
        {
          title: "施工",
          text:
            "可根据现场环境应对壁挂式、大型LED屏等施工需求。",
        },
        {
          title: "内容制作",
          text:
            "可制作数字标牌所需的静态图像及视频内容。",
        },
        {
          title: "维护与保养",
          text:
            "设备导入后继续提供维护及运营支持。",
        },
      ],
    },

    scene: {
      title: "应用场景",
      description:
        "适用于门店、商业设施、办公空间、活动场馆及户外广告等多种场景。",
      items: [
        "零售门店",
        "餐饮店",
        "商业设施",
        "办公室",
        "酒店",
        "活动会场",
        "展厅",
        "户外广告",
      ],
    },

    products: {
      title: "产品",
      description:
        "根据安装环境及用途，为客户推荐适合的数字标牌产品。",
      items: [
        {
          title: "室内LED显示屏",
          text:
            "适用于门店、商业设施及活动会场的高清LED显示屏。",
        },
        {
          title: "户外LED显示屏",
          text:
            "高亮度、高可视性，适用于户外广告及大型显示屏。",
        },
        {
          title: "液晶数字标牌",
          text:
            "适用于信息展示、广告宣传等多种用途。",
        },
        {
          title: "立式数字标牌",
          text:
            "适合安装于店铺入口、接待区等位置。",
        },
        {
          title: "壁挂式数字标牌",
          text:
            "充分利用墙面空间，实现简洁美观的安装。",
        },
        {
          title: "大型LED屏",
          text:
            "适用于商业设施、活动及户外广告等大型影像展示。",
        },
      ],
    },

    strength: {
      title: "OSR的优势",
      description:
        "将数字技术与施工公司长期积累的现场施工能力相结合。",
      items: [
        {
          title: "施工能力",
          text:
            "凭借丰富的现场经验，根据不同环境安全可靠地完成施工。",
        },
        {
          title: "一站式服务",
          text:
            "从现场勘察、运输、安装、施工到运营支持均可统一对应。",
        },
        {
          title: "提案能力",
          text:
            "根据用途、安装地点及预算提出合适的解决方案。",
        },
        {
          title: "灵活对应",
          text:
            "从店铺数字标牌到大型LED显示屏均可灵活应对。",
        },
      ],
    },

    flow: {
      title: "导入流程",
      description:
        "从咨询到正式运营，全程为客户提供清晰完善的支持。",
      items: [
        "联系我们",
        "需求沟通",
        "现场勘察",
        "方案及报价",
        "安装施工",
        "正式运营及售后支持",
      ],
    },

    company: {
      title: "公司简介",
      description: "株式会社OSR",
      companyName: "公司名称",
      representative: "代表",
      representativeValue:
        "代表取締役 大崎 純",
      address: "地址",
      addressValue:
        "日本埼玉县春日部市丰町6-1-2 〒344-0066",
      business: "业务内容",
      businessValue:
        "重型设备搬运安装、装修、数字标牌业务",
    },

    contact: {
      title: "联系我们",
      description:
        "关于数字标牌的导入及安装，欢迎随时与我们联系。",
      company: "公司名称",
      name: "姓名",
      email: "电子邮箱",
      phone: "电话号码",
      message: "咨询内容",
      submit: "发送",
    },

    line: "通过LINE咨询",
  },

  vi: {
    nav: {
      service: "Dịch vụ",
      scene: "Ứng dụng",
      products: "Sản phẩm",
      strength: "Thế mạnh OSR",
      flow: "Quy trình",
      news: "Tin tức",
philosophy: "Triết lý & Sứ mệnh",

      company: "Công ty",
      contact: "Liên hệ",
    },

    hero: {
      title1: "Tạo giá trị",
      title2: "cho mọi không gian.",
      description:
        "OSR hỗ trợ từ lập kế hoạch, triển khai bảng hiệu kỹ thuật số đến vận chuyển, lắp đặt, thi công và vận hành.",
      productButton: "Xem sản phẩm",
      contactButton: "Liên hệ",
    },

    service: {
      title: "Dịch vụ",
      description:
        "Chúng tôi hỗ trợ từ tư vấn ban đầu, khảo sát hiện trường đến lắp đặt và bảo trì.",
      items: [
        {
          title: "Lập kế hoạch & Đề xuất",
          text:
            "Đề xuất giải pháp phù hợp theo vị trí, mục đích sử dụng và ngân sách.",
        },
        {
          title: "Khảo sát hiện trường",
          text:
            "Kiểm tra môi trường lắp đặt, nguồn điện, kích thước và điều kiện thi công.",
        },
        {
          title: "Vận chuyển & Lắp đặt",
          text:
            "Thực hiện vận chuyển và lắp đặt an toàn dựa trên kinh nghiệm thi công thực tế.",
        },
        {
          title: "Thi công",
          text:
            "Hỗ trợ lắp đặt màn hình treo tường, màn hình LED lớn và nhiều hình thức khác.",
        },
        {
          title: "Sản xuất nội dung",
          text:
            "Hỗ trợ sản xuất hình ảnh và video sử dụng trên bảng hiệu kỹ thuật số.",
        },
        {
          title: "Bảo trì",
          text:
            "Cung cấp dịch vụ bảo trì và hỗ trợ sau khi đưa thiết bị vào vận hành.",
        },
      ],
    },

    scene: {
      title: "Ứng dụng",
      description:
        "Phù hợp với cửa hàng, trung tâm thương mại, văn phòng, sự kiện và quảng cáo ngoài trời.",
      items: [
        "Cửa hàng",
        "Nhà hàng",
        "Trung tâm thương mại",
        "Văn phòng",
        "Khách sạn",
        "Sự kiện",
        "Showroom",
        "Quảng cáo ngoài trời",
      ],
    },

    products: {
      title: "Sản phẩm",
      description:
        "Chúng tôi đề xuất sản phẩm phù hợp với môi trường lắp đặt và nhu cầu sử dụng.",
      items: [
        {
          title: "Màn hình LED trong nhà",
          text:
            "Màn hình LED độ phân giải cao cho cửa hàng, trung tâm thương mại và sự kiện.",
        },
        {
          title: "Màn hình LED ngoài trời",
          text:
            "Độ sáng cao, phù hợp cho quảng cáo ngoài trời và màn hình cỡ lớn.",
        },
        {
          title: "Digital Signage LCD",
          text:
            "Phù hợp cho hiển thị thông tin, quảng cáo và nhiều mục đích khác.",
        },
        {
          title: "Signage dạng đứng",
          text:
            "Dễ bố trí tại cửa ra vào, quầy lễ tân và khu vực bán hàng.",
        },
        {
          title: "Signage treo tường",
          text:
            "Tận dụng không gian tường và tiết kiệm diện tích.",
        },
        {
          title: "Màn hình LED cỡ lớn",
          text:
            "Phù hợp cho trung tâm thương mại, sự kiện và quảng cáo ngoài trời.",
        },
      ],
    },

    strength: {
      title: "Thế mạnh của OSR",
      description:
        "Kết hợp công nghệ kỹ thuật số với năng lực thi công thực tế của OSR.",
      items: [
        {
          title: "Năng lực thi công",
          text:
            "Kinh nghiệm hiện trường giúp OSR thực hiện lắp đặt an toàn và chính xác.",
        },
        {
          title: "Hỗ trợ trọn gói",
          text:
            "Từ khảo sát, vận chuyển, lắp đặt đến hỗ trợ vận hành.",
        },
        {
          title: "Năng lực đề xuất",
          text:
            "Đề xuất giải pháp phù hợp theo mục đích, địa điểm và ngân sách.",
        },
        {
          title: "Linh hoạt",
          text:
            "Hỗ trợ từ cửa hàng nhỏ đến màn hình LED quy mô lớn.",
        },
      ],
    },

    flow: {
      title: "Quy trình triển khai",
      description:
        "OSR hỗ trợ rõ ràng từ khi liên hệ đến khi bắt đầu vận hành.",
      items: [
        "Liên hệ",
        "Trao đổi nhu cầu",
        "Khảo sát hiện trường",
        "Đề xuất & Báo giá",
        "Lắp đặt & Thi công",
        "Vận hành & Hỗ trợ sau bán hàng",
      ],
    },

    company: {
      title: "Thông tin công ty",
      description: "株式会社OSR",
      companyName: "Tên công ty",
      representative: "Đại diện",
      representativeValue:
        "Jun Osaki - Giám đốc đại diện",
      address: "Địa chỉ",
      addressValue:
        "6-1-2 Yutaka-cho, Kasukabe, Saitama 344-0066, Nhật Bản",
      business: "Lĩnh vực hoạt động",
      businessValue:
        "Thi công thiết bị nặng, cải tạo và digital signage",
    },

    contact: {
      title: "Liên hệ",
      description:
        "Vui lòng liên hệ với chúng tôi để được tư vấn về digital signage.",
      company: "Tên công ty",
      name: "Họ tên",
      email: "Email",
      phone: "Số điện thoại",
      message: "Nội dung liên hệ",
      submit: "Gửi",
    },

    line: "Tư vấn qua LINE",
  },
};

