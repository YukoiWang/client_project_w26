****# Student Resource Portal - Deliverable #2 Mobile Website

**Date:** 3/29

## Project Purpose

The UMSI Career Development Office (CDO) seeks to improve its web presence by designing a new website to better help students understand and locate resources available to them. The new site will feature an accessible and responsive design that works on multiple devices, a modern look and feel, and a refreshed site architecture and site content.

The target user of this website is a UMSI undergraduate or graduate student.

The new website will be built using HTML5, CSS3, and JavaScript and will be hosted on Github.

---

## Client Project Scope Document

### Contacts
| Title | Name | Email address |
|-------|------|---------------|********
| [enter as needed] | | |

### URLs
- **Published Website URL:** [enter your response here]
- **Github Repo URL:** [enter your response here]

### Our Commitment
- **Deliverable #2 - Mobile website:** This will include all of the content in one or more styled HTML files
- **Mobile first design:** The default web design is for mobile devices and smartphones—not large screens (desktops/laptops)
- **Responsive:** All content will be viewable at larger sizes
- **Fully accessible:** Will pass accessibility validators such as WAVE and Axe

---

## Meets Client's Objectives

### 1. Explain how your website meets the Career Development Office's objectives for an updated website with resources to help students:

The website meets all six CDO objectives through dedicated pages and integrated content:

- **Explore different career paths to pursue:** The home page introduces the resource hub and directs students to Career Link, career events, and career coaching appointments. The networking page emphasizes informational interviews and the TIARA method as ways to explore careers through conversations with professionals.

- **Prepare for internship & job searches:** The resume page supports application preparation, and every page links to Career Link (UMSI's exclusive career portal) and CDO Canvas modules for job and internship postings. The home page "Most Popular Resources" section highlights key job-search tools.

- **Develop application materials (cover letters, resumes & portfolios):** The resume page is fully dedicated to application materials. It provides step-by-step resume guidance, links to UMSI-approved templates and rubrics, the Writing Effective Resume Bullets guide, and workshops. Students can book a resume review with a CDO Career Coach directly from the page.

- **Build a network and connections:** The networking page focuses on building connections. It includes cards for Intro to Making Connections, Networking Outreach Email Examples, Informational Interviews (TIARA method), and LAMP Lists, plus quick tips and links to Career Link and CDO events.

- **Prepare for interviews:** The interviews page covers behavioral, technical, virtual, and panel interviews. It explains the STAR method, lists common questions, and links to the Interview Preparation Presentation and mock interview scheduling with a CDO Career Coach.

- **Learning how to negotiate job offers:** Interview and career coaching content supports this objective. Students can schedule a career coaching appointment to discuss negotiation. The site structure allows adding a dedicated negotiation section if desired.

---

### 2. Explain how your design fits their requirements of a visually appealing modern website that fits within UM's Branding Guidelines:

The design follows UM Brand Guidelines (https://brand.umich.edu/):

- **Colors:** Uses official U-M colors—Blue (#00274C) for headers, footer, and primary text; Maize (#FFCB05) for accents on active navigation, focus states, and footer links; and white backgrounds for readability.

- **Typography:** Uses Georgia serif for body text, which fits UM’s emphasis on readability and traditional academic tone.

- **Visual hierarchy:** Clear section headings and card-based layouts create a structured, modern look.

- **Branding elements:** UMSI signature logo appears in the header on every page for consistent institutional identity.

- **Accessibility:** Contrast between blue text on white and white text on blue meets WCAG 2.0 requirements. Maize is used for focus indicators and active states, not as the sole differentiator.

---

### 3. Explain how your design optimizes site content and images to work on mobile devices:

- **Mobile-first layout:** Base styles target mobile screens. Layouts use fluid widths and scaling instead of fixed pixel values.

- **Fluid containers:** `.container` uses `width: 100%`, `max-width: 100%`, and padding so content fits small screens without horizontal scrolling.

- **Responsive images:** All images use `max-width: 100%`, `height: auto`, and `display: block` so they scale with the viewport and maintain aspect ratio.

- **Responsive video:** The home page video is wrapped in `.video-wrapper` with `width: 100%` and `aspect-ratio: 16/9` so it scales on different screen sizes.

- **Touch-friendly navigation:** Nav links have `min-height: 2.75rem` and `padding: 0.75rem 1rem` to support touch targets of at least 44px.

- **Grid layouts:** CSS Grid (e.g., 2-column for nav and resource cards) reflows for mobile while remaining usable on larger screens.

- **Readable text:** Font size, line-height (1.6), and spacing are set to support reading on small screens.

---

### 4. Explain how you ensured that your site is fully accessible and usable for all students—including those with different disabilities:

- **Skip to main content:** A skip link appears at the top of every page. It is hidden until focused and jumps to `#main-content`, so keyboard and screen reader users can bypass navigation.

- **Keyboard accessibility:** All links and interactive elements are keyboard focusable. Focus styles use a visible outline (0.2rem solid Maize) so keyboard users can see focus.

- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables transitions on the skip link and `scroll-behavior: smooth` on the `html` element.

- **Semantic HTML:** Landmarks (`header`, `nav`, `main`, `footer`, `section`) and heading levels (h1→h2→h3) create a clear document outline for assistive technologies.

- **Alt text:** Images have descriptive alt text (e.g., "UMSI Logo", "A student wears a UMSI backpack in fall on the drag."). The iframe has a descriptive `title` attribute.

- **Link behavior:** External links use `rel="noopener noreferrer"` and descriptive link text instead of generic phrases like "click here."

- **Color and contrast:** UM Blue (#00274C) on white and white on Blue meet WCAG contrast requirements. Active and focus states use both color and outline, not color alone.

- **ARIA:** `aria-current="page"` on the current page link gives screen reader users clear context.

---

### 5. Explain how your design is an improvement on the current site's design and information architecture, and how you incorporated feedback from previous UX research:

**Incorporation of UX feedback:**

- **Quick access to key topics from the home page:** The home page includes a "Start Here" section with a resource card linking to Resumes, Networking & Connections, Career Exploration & Interviews, and Talk to a Career Coach. These act as topic buttons/visual entry points rather than a long list of links.

- **Clarity on where to start and how to use resources:** Pages use a consistent structure: introduction → steps/guidance → resources → FAQs (where applicable). The resume page includes "Resume Writing Made Easy: Steps to Success" so students know what to do first. Resource links are paired with short descriptions (e.g., "Comprehensive UMSI guide including tips, formatting rules, and sample accomplishments").

- **Easier discovery beyond long lists:** Content is organized into cards and sections. The networking page uses cards for Intro to Making Connections, Outreach Emails, TIARA Method, and LAMP List. The interviews page uses cards for interview types. This reduces reliance on scrolling through a single list of links.

- **Most Popular Resources and FAQ sections:** The home page has a "Most Popular Resources" section with direct links to the most-used tools. The resume page has a "Resume FAQ" section to answer common questions. These elements align with student requests for guidance on where to begin.

**Improvements to information architecture:**

- Consistent global navigation (Home, Resumes, Networking & Connections, Interviews) on every page.
- Topic-based structure that matches how students think about career support.
- Multiple paths to resources (home page cards, topic pages, and contextual links within content).
- Clear headings and section breaks for scanning and navigation.

---

### 6. Explain how you organized and refined content to compete with peer schools/colleges at U-M or other institutions and to demonstrate UMSI's unique strengths:

- **Topic-based structure:** Content is organized by student needs (Resumes, Networking, Interviews) rather than by resource type, matching approaches used by peer career offices. Each topic page has a clear purpose and central message.

- **UMSI-specific resources:** Emphasis on UMSI tools (Career Link, CDO Canvas, UMSI Resume Guide and Rubric) and UMSI-appropriate advice (e.g., including coursework and projects, one-page resumes for most students) highlights UMSI’s tailored support.

- **Integrated career coaching:** Every page links to career coaching appointments. This reflects UMSI’s commitment to one-on-one support and distinguishes it from sites that only list resources.

- **Structured frameworks:** Use of frameworks such as STAR for interviews, TIARA for informational interviews, and LAMP for networking shows a systematic approach that is comparable to peer institutions while staying UMSI-focused.

- **Benchmarking note:** The home page states that the site "benchmark(s) against top peer institutions" while integrating UMSI-specific support, showing alignment with best practices and UMSI’s distinct offerings.

**Competitor influence:** [If you reviewed competitor sites (e.g., Ross, LSA, other UM schools), describe which ones and how they influenced your design. Example: "I reviewed Ross Career Services and LSA Opportunity Hub. Their use of topic-based navigation and card layouts informed our structure. We differentiated by emphasizing UMSI-specific resources and Career Link integration."]

---

## Project Cost for Deliverable #2 Mobile Website

| Item | Hours | Price | Total |
|------|-------|-------|-------|
| Accessibility Testing | 2 | $110/hour | $220 |
| Accessibility Fixes | 1 | $110/hour | $110 |
| Designing navigation | 2 | $110/hour | $220 |
| Responsive Design Work | 3 | $110/hour | $330 |
| Styling website - aligns with UM Brand Standards | 4 | $110/hour | $440 |
| Additional HTML & content work | 2 | $110/hour | $220 |
| Other see below* | 1.5 | $110/hour | $165 |
| | | | |
| | | | |
| **Total Costs:** | **15.5** | | **$1,705** |

***Project Costs for Other include:**
- **Implementing skip link and focus styles (0.5 hr):** Adding the skip-to-main-content link, styling it for keyboard focus, and implementing `prefers-reduced-motion` support
- **CSS reset and base typography (0.5 hr):** Integrating html5reset.css and defining base typography and spacing
- **Image and video responsive styling (0.5 hr):** Ensuring images and the embedded video scale correctly on mobile and larger screens

---

## Deliverable #3 Additions and Changes from Mobile View

### Styling Changes (Tablet/Desktop vs. Mobile)

The website is built **mobile-first**, and then enhanced for larger screens using a **min-width media query** (`@media (min-width: 768px)` in `css/style.css`). This approach ensures the default experience is optimized for small screens while the design **evolves** to take advantage of additional space on tablet/desktop.

Significant structural changes were made across **all pages**:

- **Global layout changes (all pages):**
  - The `.container` gains a larger max-width and increased horizontal padding so content does not stretch edge-to-edge on wide screens.
  - The header layout changes from a single-column stack to a **two-column header grid** at larger sizes (logo and navigation align horizontally).
  - Navigation changes from a 2-column grid of large touch targets (mobile) to a **horizontal flex layout** (tablet/desktop) to reduce vertical scrolling and make top-level sections easier to scan.

- **Home page (`index.html`):**
  - The “Start Here” section changes from an even two-column layout to a **weighted two-column layout** (primary card area + secondary “Most Popular Resources” sidebar). This better uses available width and improves information hierarchy.

- **Resume page (`resume.html`):**
  - The resume content shifts from stacked sections to a **two-column layout** where “Steps to Success” remains the primary column and “Resume Resources” becomes a secondary column. The FAQ remains full-width for readability.

- **Networking + Interviews pages (`networking.html`, `interviews.html`):**
  - Card grids remain two columns but gain better spacing and alignment at the tablet/desktop breakpoint, improving scanability and reducing long vertical scrolling.

**Flex/Grid note (why):** The site primarily uses **CSS Grid** for card and page section layouts because the content is best understood as a two-dimensional layout (rows/columns of cards and sections). At the tablet/desktop breakpoint, the navigation uses **Flexbox** because it is a one-dimensional row that benefits from wrapping and right-alignment; Flexbox is simpler and more predictable for that pattern than Grid.

### New Additions

#### Designed 404 Page

A designed 404 page is included as `404.html`. It follows 404 best practices by:

- **Clearly stating the error** (large “404” and plain-language message).
- **Providing recovery options** (links to key pages and a prominent “Go back to the home page” action).
- **Keeping consistent branding** (UM colors, typography, header/footer consistent with the rest of the site).

#### Footer Automatically Updates to the Current Year (JavaScript)

All pages now show the current year dynamically in the footer using JavaScript:

- A `<span id="current-year"></span>` is included in the footer on every page.
- `js/main.js` sets the year with `new Date().getFullYear()` so the site does not require manual updates each January.

### Challenging Element (Beyond Prior Mobile Requirements)

To demonstrate additional front-end skills, the site includes an accessible **“Back to top”** control implemented with JavaScript and CSS:

- The button is hidden by default and becomes visible after the user scrolls down the page (reducing clutter on initial load).
- Clicking the button scrolls the user to the top of the page; it respects user preferences using `prefers-reduced-motion` (smooth scrolling is disabled for reduced-motion users).
- The control is keyboard accessible and includes strong focus styles consistent with the rest of the site.

---

## Appendix

### Appendix A: Accessibility Validation

Include screenshots of every page of your live site run through:
1. **WAVE** (https://wave.webaim.org/)
2. **Axe DevTools** (browser extension or axe-core)

[Screenshots to be added here]
