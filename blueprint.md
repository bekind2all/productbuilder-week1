# Project Blueprint: ToolBox - Free Online Tools Platform

## Purpose and Capabilities

ToolBox is a web platform offering various free online tools for everyday use. It focuses on user-friendly interfaces and practical functionalities, optimized for all devices (PC, tablet, smartphone) without requiring registration or software installation. All processing is done client-side in the user's browser, ensuring privacy.

## Detailed Outline: Features and Design

### Initial Version

*   **HTML Structure:** Basic framework with `index.html`, `about.html`, `contact.html`, `lotto.html`, `privacy.html`, `rps.html`, `terms.html`.
*   **CSS Styling:** `style.css` for a dark theme, responsive design, and modern aesthetics.
*   **JavaScript Functionality:** `main.js` for dynamic elements and tool logic (e.g., lotto number generation, AI rock-paper-scissors).
*   **Tools:**
    *   **Lotto Number Generator:** Generates 6 random numbers between 1 and 45.
    *   **AI Rock-Paper-Scissors Recognizer:** Utilizes TensorFlow.js and Teachable Machine for image-based recognition of hand gestures.
*   **Navigation:** Simple navigation bar linking to different pages.
*   **Modals:** Used for displaying About, Privacy, Terms, and Contact information without navigating away from the main page.
*   **Contact Form:** Integration with Formspree for handling user inquiries.

### Current Version (with updates)

#### **SEO Improvements**

*   **Google Analytics (G-G9723WBDRP):** Integrated across all HTML pages for traffic analysis.
*   **Microsoft Clarity (vdzji5g44k):** Integrated across all HTML pages for user behavior analytics.
*   **Favicon:** `favicon.ico` linked in all HTML files for branding.
*   **robots.txt:** Created to guide search engine crawlers. Allows all user-agents to crawl all content.
*   **sitemap.xml:** Created to help search engines discover and index all relevant pages.
*   **Open Graph Meta Tags:** Added to all HTML files (`og:title`, `og:description`, `og:image`, `og:url`) for improved social media sharing.
*   **Twitter Card Meta Tags:** Added to all HTML files (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) for enhanced Twitter sharing.
*   **Apple Touch Icon:** Added `<link rel="apple-touch-icon" href="lotto.png">` to all HTML files.

#### **Layout Fixes**

*   **CSS Body Styling:** Removed `display: flex`, `justify-content: center`, `align-items: center`, and `height: 100vh` from the `body` element in `style.css` and added `height: auto` to fix content being cut off on larger pages.

## Plan and Steps for Current Requested Change

N/A - All requested changes have been implemented and deployed.
