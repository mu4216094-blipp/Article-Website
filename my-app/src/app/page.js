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
    <title>My Website - Home</title>
    
    <!-- CSS Design Code Inside HTML -->
    <style>
        /* Reset Basic Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            background-color: #ffffff;
            color: #222222;
            line-height: 1.6;
        }

        /* Color Palette */
        :root {
            --mehroon: #800020;
            --mehroon-hover: #5c0017;
            --white: #ffffff;
            --light-bg: #f8f8f8;
            --border-color: #e0e0e0;
        }

        /* Header Navigation */
        .navbar {
            background-color: var(--mehroon);
            color: var(--white);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 5%;
        }

        .navbar .logo {
            font-size: 24px;
            font-weight: bold;
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 20px;
        }

        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-size: 15px;
            transition: 0.3s;
        }

        .nav-links a:hover {
            text-decoration: underline;
        }

        /* Hero Section */
        .hero {
            background-color: var(--light-bg);
            text-align: center;
            padding: 40px 20px;
            border-bottom: 4px solid var(--mehroon);
        }

        .hero h1 {
            color: var(--mehroon);
            font-size: 32px;
            margin-bottom: 10px;
        }

        /* Main Layout Setup */
        .main-container {
            display: flex;
            max-width: 1100px;
            margin: 25px auto;
            padding: 0 15px;
            gap: 20px;
        }

        .content-area {
            flex: 3;
        }

        .sidebar {
            flex: 1;
            background-color: var(--light-bg);
            padding: 20px;
            border: 1px solid var(--border-color);
            border-radius: 5px;
        }

        .sidebar h3 {
            color: var(--mehroon);
            margin-bottom: 10px;
        }

        /* Article Cards */
        .post-card {
            background-color: var(--white);
            border: 1px solid var(--border-color);
            border-left: 5px solid var(--mehroon);
            padding: 20px;
            margin-top: 15px;
            border-radius: 4px;
        }

        .post-card h3 {
            color: var(--mehroon);
            margin-bottom: 10px;
        }

        .read-btn {
            display: inline-block;
            background-color: var(--mehroon);
            color: var(--white);
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 10px;
            font-size: 14px;
        }

        .read-btn:hover {
            background-color: var(--mehroon-hover);
        }

        /* Ad Placement Area */
        .ad-space {
            max-width: 1100px;
            margin: 20px auto 0 auto;
            background-color: var(--light-bg);
            border: 1px dashed #bbb;
            padding: 15px;
            text-align: center;
            font-size: 14px;
            color: #666;
        }

        /* Footer Section */
        footer {
            background-color: var(--mehroon);
            color: var(--white);
            text-align: center;
            padding: 25px 15px;
            margin-top: 50px;
        }

        .footer-links {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: var(--white);
            text-decoration: none;
            margin: 0 8px;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                text-align: center;
            }
            .nav-links {
                flex-direction: column;
                margin-top: 15px;
            }
            .nav-links li {
                margin: 8px 0;
            }
            .main-container {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>

    <!-- Header Navigation -->
    <header class="navbar">
        <div class="logo">MyBrand</div>
        <nav>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Banner / Hero Section -->
    <section class="hero">
        <h1>Welcome to Our Website</h1>
        <p>Quality articles, updates, and informative content.</p>
    </section>

    <!-- AdSense Banner Space -->
    <div class="ad-space">
        <p>[ Google AdSense Banner Area ]</p>
    </div>

    <!-- Main Content Container -->
    <div class="main-container">
        <!-- Content Area -->
        <main class="content-area">
            <h2>Latest Posts</h2>

            <article class="post-card">
                <h3>High Quality Content Title</h3>
                <p>Having original, informative, and engaging content is necessary for Google AdSense fast approval.</p>
                <a href="#" class="read-btn">Read Article</a>
            </article>

            <!-- Privacy Policy Section For Adsense -->
            <article class="post-card" id="privacy">
                <h3>Privacy Policy</h3>
                <p>We respect your privacy. Third-party vendors, including Google, use cookies to serve ads based on user visits to this website.</p>
            </article>
        </main>

        <!-- Sidebar -->
        <aside class="sidebar">
            <h3>Sidebar Widget</h3>
            <p>You can put recent posts, categories, or ads here.</p>
        </aside>
    </div>

    <!-- Footer -->
    <footer>
        <div class="footer-links">
            <a href="#">Home</a> | 
            <a href="#privacy">Privacy Policy</a> | 
            <a href="#">Terms of Use</a> | 
            <a href="#">About Us</a> | 
            <a href="#">Contact Us</a>
        </div>
        <p>&copy; 2026 MyBrand. All Rights Reserved.</p>
    </footer>

</body>
</html>