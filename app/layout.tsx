// app/layout.tsx
import React from 'react';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Global layout (like header, footer) */}
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>

        {/* The content of the page will be injected here */}
        <main>{children}</main>

        <footer>
          <p>&copy; 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}
