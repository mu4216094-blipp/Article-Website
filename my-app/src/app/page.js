import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.js
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Maisonora | Discover Something New</title>

  <meta name="description"
    content="Discover helpful articles, practical guides, ideas and useful information with Maisonora.">

  <meta name="robots" content="index, follow">

  <link rel="canonical" href="https://YOUR-DOMAIN.com/">

  <meta property="og:title" content="Maisonora">
  <meta property="og:description"
    content="Ideas, insights and useful guides for everyday life.">
  <meta property="og:type" content="website">

  <link rel="stylesheet" href="style.css">
</head>

<body>

<header class="header">
  <div class="container nav">

    <a href="index.html" class="logo">MAISONORA<span>.</span></a>

    <button class="menu-btn" id="menuBtn"
      aria-label="Toggle navigation">☰</button>

    <nav id="navigation">
      <a href="index.html">Home</a>
      <a href="#articles">Articles</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>

  </div>
</header>

<main>

<section class="hero">
  <div class="container hero-content">

    <span class="eyebrow">A WORLD OF IDEAS</span>

    <h1>Discover ideas.<br>
      <span>Explore possibilities.</span>
    </h1>

    <p>
      Explore thoughtful articles, practical guides and
      useful information designed to inspire your everyday life.
    </p>

    <a href="#articles" class="btn">Explore Articles ↗</a>

  </div>
</section>

<section class="container intro">
  <div>
    <span class="eyebrow">WELCOME TO MAISONORA</span>
    <h2>Knowledge that makes a difference.</h2>
  </div>

  <p>
    We believe useful information should be easy to understand,
    accessible and valuable. Explore our latest articles and
    discover something new.
  </p>
</section>

<section class="container ad-section">
  <span class="ad-label">ADVERTISEMENT</span>
  <div class="ad-placeholder">
    Ad placement
  </div>
</section>

<section class="container articles" id="articles">

  <div class="section-heading">
    <div>
      <span class="eyebrow">THE JOURNAL</span>
      <h2>Explore our articles</h2>
    </div>

    <input type="search" id="searchInput"
      placeholder="Search articles..."
      aria-label="Search articles">
  </div>

  <div class="article-grid" id="articleGrid">

    <article class="article-card">
      <div class="article-image image-one">01</div>
      <div class="article-content">
        <span class="category">LIFESTYLE</span>
        <h3>How to Build Better Everyday Habits</h3>
        <p>
          Discover practical ways to make your everyday
          routine more organised and meaningful.
        </p>
        <a href="article-1.html" class="read-more">
          Read article ↗
        </a>
      </div>
    </article>

    <article class="article-card">
      <div class="article-image image-two">02</div>
      <div class="article-content">
        <span class="category">GUIDES</span>
        <h3>A Simple Guide to Smarter Planning</h3>
        <p>
          Learn how thoughtful planning can help you
          manage your projects and daily responsibilities.
        </p>
        <a href="article-2.html" class="read-more">
          Read article ↗
        </a>
      </div>
    </article>

    <article class="article-card">
      <div class="article-image image-three">03</div>
      <div class="article-content">
        <span class="category">INSPIRATION</span>
        <h3>Small Ideas That Create New Possibilities</h3>
        <p>
          Explore simple ideas that can help you
          approach everyday challenges differently.
        </p>
        <a href="article-3.html" class="read-more">
          Read article ↗
        </a>
      </div>
    </article>

  </div>

  <p id="noResults" hidden>No matching articles found.</p>

</section>

<section class="newsletter">
  <div class="container newsletter-inner">
    <div>
      <span class="eyebrow">STAY CONNECTED</span>
      <h2>Something new is always worth discovering.</h2>
      <p>Explore our website for more helpful articles.</p>
    </div>
    <a href="#articles" class="btn btn-light">Explore More ↗</a>
  </div>
</section>

</main>

<footer class="footer">
  <div class="container">

    <div class="footer-top">
      <div>
        <a href="index.html" class="logo footer-logo">
          MAISONORA<span>.</span>
        </a>
        <p>Thoughtful ideas. Useful information.</p>
      </div>

      <div class="footer-links">
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact Us</a>
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="terms.html">Terms & Conditions</a>
        <a href="disclaimer.html">Disclaimer</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© <span id="year"></span> Maisonora. All rights reserved.</span>
      <span>Made for curious minds.</span>
    </div>

  </div>
</footer>

<script src="script.js"></script>

</body>
</html>

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

:root {
  --maroon: #681c32;
  --maroon-dark: #40101f;
  --cream: #faf7f5;
  --white: #ffffff;
  --text: #282326;
  --muted: #777075;
  --border: #eee5e8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: 'DM Sans', sans-serif;
  color: var(--text);
  background: var(--white);
  line-height: 1.7;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1160px, 90%);
  margin: auto;
}

.header {
  background: white;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--maroon);
}

.logo span {
  color: #bd8c73;
}

nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

nav a {
  font-size: 14px;
  color: #494047;
  transition: color .2s;
}

nav a:hover {
  color: var(--maroon);
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
}

.hero {
  background:
    radial-gradient(circle at 85% 15%,
      #e8d5d9 0, transparent 30%),
    linear-gradient(120deg, #faf7f5, #f3e8e9);

  padding: 115px 0 125px;
}

.hero-content {
  max-width: 1160px;
}

.eyebrow {
  color: var(--maroon);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
}

.hero h1 {
  font-size: clamp(42px, 6vw, 76px);
  margin: 25px 0;
  max-width: 800px;
  letter-spacing: -1.5px;
}

.hero h1 span {
  color: var(--maroon);
}

.hero p {
  max-width: 580px;
  color: var(--muted);
  margin-bottom: 32px;
}

.btn {
  display: inline-block;
  padding: 14px 26px;
  background: var(--maroon);
  color: white;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  transition: .2s;
}

.btn:hover {
  background: var(--maroon-dark);
  transform: translateY(-2px);
}

.intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 65px;
  align-items: center;
  padding-top: 85px;
  padding-bottom: 65px;
}

.intro h2,
.section-heading h2,
.newsletter h2 {
  font-size: clamp(28px, 4vw, 42px);
  margin-top: 15px;
}

.intro p {
  color: var(--muted);
}

.ad-section {
  margin-top: 10px;
  margin-bottom: 75px;
  text-align: center;
}

.ad-label {
  display: block;
  color: #999;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.ad-placeholder {
  min-height: 110px;
  border: 1px dashed #d8cbd0;
  background: #fcfafb;
  display: grid;
  place-items: center;
  color: #aaa;
  font-size: 12px;
}

.articles {
  padding-bottom: 100px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 25px;
  margin-bottom: 35px;
}

#searchInput {
  padding: 13px 17px;
  border: 1px solid var(--border);
  border-radius: 4px;
  font: inherit;
  width: min(280px, 100%);
  outline-color: var(--maroon);
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.article-card {
  border: 1px solid var(--border);
  background: white;
  transition: transform .25s, box-shadow .25s;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px #40101f12;
}

.article-image {
  height: 220px;
  display: grid;
  place-items: center;
  font-family: 'Playfair Display', serif;
  font-size: 65px;
  color: #681c3250;
}

.image-one {
  background: linear-gradient(135deg, #eadadd, #f7efeb);
}

.image-two {
  background: linear-gradient(135deg, #e3e1eb, #f5e9e5);
}

.image-three {
  background: linear-gradient(135deg, #e8e3d9, #f4e9e8);
}

.article-content {
  padding: 26px;
}

.category {
  color: var(--maroon);
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 700;
}

.article-content h3 {
  font-size: 23px;
  margin: 12px 0;
}

.article-content p {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 20px;
}

.read-more {
  color: var(--maroon);
  font-size: 13px;
  font-weight: 700;
}

.newsletter {
  background: var(--maroon-dark);
  color: white;
  padding: 70px 0;
}

.newsletter-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
}

.newsletter .eyebrow {
  color: #e5b7c5;
}

.newsletter h2 {
  max-width: 650px;
}

.newsletter p {
  color: #ddcbd1;
  margin-top: 15px;
}

.btn-light {
  background: white;
  color: var(--maroon);
  white-space: nowrap;
}

.btn-light:hover {
  background: #f5e8ed;
}

.footer {
  background: #fcfaf9;
  padding: 55px 0 20px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 35px;
  padding-bottom: 45px;
}

.footer-top p {
  color: var(--muted);
  font-size: 13px;
  margin-top: 12px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px 25px;
  max-width: 570px;
}

.footer-links a {
  font-size: 12px;
  color: #665d62;
}

.footer-links a:hover {
  color: var(--maroon);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: var(--muted);
  font-size: 11px;
}

@media (max-width: 800px) {
  .hero {
    padding: 85px 0;
  }

  .intro {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .newsletter-inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer-top {
    flex-direction: column;
  }
}

@media (max-width: 560px) {
  .nav {
    min-height: 70px;
  }

  .menu-btn {
    display: block;
  }

  nav {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    padding: 22px 5%;
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  nav.active {
    display: flex;
  }

  .hero h1 {
    font-size: 43px;
  }

  .article-grid {
    grid-template-columns: 1fr;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  #searchInput {
    width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
  }
}