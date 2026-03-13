# Institute of Digital Risk (IDR) - Web Project

A beautiful, responsive, beginner-friendly single-page website built for the **Institute of Digital Risk (IDR)**. This project was developed without the use of any external CSS or JavaScript frameworks (like Bootstrap or React), relying purely on clean HTML, modern CSS styling, and Vanilla JavaScript to ensure high performance and easy readability for beginners.

## 📁 Project Structure

The project consists of three main files and one logo asset:
*   `index.html` - The core structure and content of the website.
*   `style.css` - The design, layout, and visual styling.
*   `script.js` - Interactivity, mobile menu toggling, and smooth scrolling capabilities.
*   `logo.png` - The custom-designed geometric cube logo for the IDR brand.

---

## 🛠️ Elements Used

Below is a detailed breakdown of the technical elements used to build this website.

### 1. HTML5 (Structure & Content)
We used semantic HTML tags to ensure the content is accessible and well-organized for search engines (SEO).
*   **`<header>` & `<nav>`**: Defines the top navigation area holding the logo and menu links.
*   **`<main>`**: Wraps all the core content (Hero, About, Services, Community, Contact).
*   **`<section>`**: Divides the page into distinct thematic areas, each with a unique `id` (e.g., `id="about"`) which allows the navigation links to scroll to them.
*   **`<form>` & `<input>`**: Used in the Contact section to create a functional-looking user input area.
*   **`<img>`**: Embeds the `logo.png` image directly into the navbar and browser tab (via the `<link rel="icon">` tag in the `<head>`).

### 2. Modern CSS (Styling & Layout)
The CSS was crafted to look premium and high-tech while adhering to an Orange, Black, and White color palette.
*   **CSS Variables (`:root`)**: Defined at the top of the file to store the main colors (e.g., `--primary: #FF6600;`). This makes it easy to change the color scheme later by modifying just one line of code.
*   **Google Fonts ("Outfit")**: Imported a sleek, modern font commonly used in tech and education platforms to replace the boring default browser font.
*   **Glassmorphism**: Applied `backdrop-filter: blur(12px)` and a slightly transparent `rgba()` background color to the sticky header. This creates a frosted-glass effect that lets page content blur softly beneath the navigation bar as you scroll.
*   **CSS Flexbox (`display: flex`)**: Used heavily in the navigation bar and internal wrappers to easily align items side-by-side and center them.
*   **CSS Grid (`display: grid`)**: Used in the **Services** section (`.services-grid`). It makes creating symmetrical responsive cards effortless using `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`, which tells the browser to automatically wrap the cards on smaller screens without needing complex media queries.
*   **Gradients & Glows (`linear-gradient` & `radial-gradient`)**: Used to create the vibrant orange buttons, the glowing background behind the hero text, and the animated orange highlight lines on the service cards.
*   **Transitions & Animations (`transition: all 0.3s ease`)**: Added to buttons, links, and cards so that when a user hovers over an element, it reacts smoothly (e.g., slightly lifting up or changing color) rather than snapping instantly.
*   **Media Queries (`@media (max-width: 768px)`)**: Ensures the website is fully mobile-responsive. When a screen is smaller than 768 pixels, the CSS automatically hides the desktop links, pulls out the hamburger menu (`.menu-toggle`), and turns the navigation into a sleek sliding sidebar.

### 3. Vanilla JavaScript (Interactivity)
A very small amount of native JavaScript was used to bring the page to life.
*   **Event Listeners (`addEventListener`)**: The code "listens" for user clicks.
*   **Mobile Menu Toggle**: When the hamburger icon is clicked, the script toggles an `active` class on the navigation links panel, instructing the CSS to slide the menu into view.
*   **Smooth Scrolling**: While CSS smooth scrolling (`scroll-behavior: smooth`) is used as a fallback, the JavaScript calculates the exact height of the glassmorphism header and offsets the scroll. This prevents the navigation bar from accidentally covering the top of the sections when a user clicks a link.
*   **Form Submission Handling**: Stops the default behavior of the contact form (which usually reloads the entire page) and instead shows a polite alert message before clearing the form inputs.

## 🚀 How to Run
There is no complex setup, compiling, or server required! 
Simply double-click the `index.html` file to automatically open and view the website in your default web browser.
