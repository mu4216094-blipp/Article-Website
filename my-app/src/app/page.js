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
}<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website - Home</title>
    
    <style>
        /* CSS Styling - Maroon & White Theme */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #f9f9f9;
            color: #222222;
            line-height: 1.6;
        }

        /* Color Variables */
        :root {
            --mehroon: #800020;
            --mehroon-dark: #5a0017;
            --white: #ffffff;
            --border: #e0e0e0;
        }

        /* Navbar Header */
        .navbar {
            background-color: var(--mehroon);
            color: var(--white);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 5%;
        }

        .navbar .logo {
            font-size: 22px;
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
        }

        .nav-links a:hover {
            text-decoration: underline;
        }

        /* Main Container Layout */
        .container {
            display: flex;
            max-width: 1100px;
            margin: 25px auto;
            padding: 0 15px;
            gap: 20px;
        }

        .main-content {
            flex: 3;
        }

        .sidebar {
            flex: 1;
            background-color: var(--white);
            padding: 20px;
            border: 1px solid var(--border);
            border-top: 4px solid var(--mehroon);
            border-radius: 4px;
        }

        .sidebar h3 {
            color: var(--mehroon);
            margin-bottom: 10px;
        }

        /* Cards Style */
        .card {
            background-color: var(--white);
            border: 1px solid var(--border);
            border-left: 5px solid var(--mehroon);
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 4px;
        }

        .card h2 {
            color: var(--mehroon);
            margin-bottom: 10px;
            font-size: 20px;
        }

        .btn {
            display: inline-block;
            background-color: var(--mehroon);
            color: var(--white);
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 10px;
            font-size: 14px;
        }

        .btn:hover {
            background-color: var(--mehroon-dark);
        }

        /* AdSense Area */
        .ad-box {
            max-width: 1100px;
            margin: 20px auto 0 auto;
            background-color: var(--white);
            border: 1px dashed #bbb;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
        }

        /* Footer */
        footer {
            background-color: var(--mehroon);
            color: var(--white);
            text-align: center;
            padding: 20px 15px;
            margin-top: 40px;
        }

        .footer-links a {
            color: var(--white);
            text-decoration: none;
            margin: 0 8px;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }

        /* Responsive Layout */
        @media (max-width: 768px) {
            .navbar, .container {
                flex-direction: column;
            }
            .nav-links {
                margin-top: 10px;
                flex-direction: column;
                text-align: center;
            }
            .nav-links li {
                margin: 5px 0;
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

    <!-- AdSense Banner Unit Placement -->
    <div class="ad-box">
        <p>[ Google AdSense Banner Area ]</p>
    </div>

    <!-- Main Content Container -->
    <div class="container">
        <main class="main-content">
            <article class="card">
                <h2>Welcome to Our Website</h2>
                <p>This layout is designed with a clean Maroon and White theme specifically optimized for fast AdSense approval and mobile responsiveness.</p>
                <a href="#" class="btn">Read More</a>
            </article>

            <article class="card" id="privacy">
                <h2>Privacy Policy</h2>
                <p>We value your privacy. Third-party vendors like Google use cookies to serve ads based on user visits to this and other websites on the internet.</p>
            </article>
        </main>

        <!-- Sidebar Unit -->
        <aside class="sidebar">
            <h3>Sidebar Widget</h3>
            <p>You can add category links, recent posts, or an ad unit here.</p>
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
        <br>
        <p>&copy; 2026 MyBrand. All Rights Reserved.</p>
    </footer>

</body>
</html>