# HTML Deliverable Writeup Responses

## Meets Client's Objectives

### Explain what content you chose (text, images, etc) for your website and how it meets the Career Development Office's objectives:

**Content Chosen:**

1. **Text Content:**
   - **Home Page:** Welcome message explaining the purpose of the resource hub, benefits of using the site, and clear calls-to-action directing students to key resources
   - **Resume Page:** Comprehensive guide including step-by-step resume writing process, UMSI-approved templates and guides, FAQ section addressing common student questions, and links to resume review appointments
   - **Interview Page:** Detailed interview preparation steps, types of interviews (behavioral, technical, case, panel, virtual), common interview questions with guidance, STAR method explanation, and interview tips
   - **Networking Page:** Networking fundamentals and best practices, TIARA method for informational interviews, email templates for outreach, and guidance on building meaningful professional relationships

2. **Images:**
   - UMSI logo (UMSI_signature_vertical_informal_solidblue.jpg) - displayed on all pages for brand consistency
   - Campus photo (UMSI_CampusFall_UMSIBackpack_02.jpg) - featured on home page to create connection with UMSI community

3. **Multimedia:**
   - YouTube video embed on home page providing visual introduction to career development resources

4. **External Resource Links:**
   - Links to UMSI Resume Guide and Rubric (Google Docs)
   - Links to Writing Effective Resume Bullets guide
   - Links to Interview Preparation presentation
   - Links to Networking Tips document
   - Links to Career Link (UMSI's exclusive career portal)
   - Links to Canvas pages for career coaching appointments and events

**How Content Meets Objectives:**

- **Explore different career paths:** The home page introduces students to the resource hub and provides links to Career Link, career events, and career coaching appointments where students can explore various paths. The networking page specifically addresses building connections to learn about different career opportunities.

- **Prepare for internship & job searches:** The resume page provides comprehensive guidance on creating application materials, and all pages link to Career Link where students can search for internships and jobs. The home page's "Most Popular Resources" section highlights key tools for job searching.

- **Develop application materials (cover letters, resumes & portfolios):** The resume page is dedicated entirely to resume development, with step-by-step guidance, templates, rubrics, and links to UMSI-approved resources. The page addresses resume writing, formatting, tailoring, and includes FAQ sections to help students create strong application materials.

- **Build a network and connections:** The networking page is entirely focused on this objective, providing fundamentals of networking, best practices, email templates, informational interview guidance using the TIARA method, and links to networking events and Career Link's networking features.

- **Prepare for interviews:** The interviews page comprehensively covers interview preparation with detailed steps, different interview types, common questions with guidance, STAR method for structuring answers, interview tips, and links to mock interview sessions with career coaches.

- **Learning how to negotiate job offers:** While not a dedicated page, the site structure allows for easy addition of this content. The interviews page provides a foundation that could be extended, and the career coaching links provide access to personalized guidance on negotiation.

---

### Explain how you chose to structure your content using appropriate semantic HTML and why you organized it that way:

**Semantic HTML Structure:**

1. **Document Structure:**
   - `<html lang="en">` - Declares language for screen readers and browsers
   - `<header>` - Contains site branding, navigation, and page title (h1)
   - `<nav>` - Wraps the main navigation menu for clear semantic meaning
   - `<main id="main-content">` - Contains primary page content, with ID for skip navigation
   - `<section>` - Groups related content within each page (e.g., "Why Use This Resource", "Resume Resources", "Interview Preparation Steps")
   - `<footer>` - Contains site-wide footer information

2. **Navigation Structure:**
   - Consistent `<nav>` with `<ul>` and `<li>` elements across all pages
   - "Skip to Main Content" link at the top of each page for keyboard navigation accessibility
   - All pages maintain the same navigation structure for consistency

3. **Content Organization:**
   - **Heading Hierarchy:** Proper use of h1 (page title in header), h2 (main section headings), and h3 (subsections) to create logical document outline
   - **Lists:** Use of `<ul>` for unordered information (resources, tips, FAQs) and `<ol>` for sequential steps (resume writing steps, interview preparation steps)
   - **Links:** All external links include `target="_blank"` with descriptive link text
   - **Images:** All images include descriptive `alt` attributes

**Why This Organization:**

- **Semantic HTML improves accessibility:** Screen readers can navigate by landmarks (header, nav, main, footer) and understand content structure through proper heading hierarchy
- **Consistent navigation:** Same navigation structure on all pages allows users to orient themselves and move between sections easily
- **Logical content flow:** Each page follows a pattern: introduction → steps/guidance → resources → FAQ → support links, making information easy to find and digest
- **Section-based organization:** Using `<section>` elements groups related content, making it easier for users to scan and for assistive technologies to navigate
- **Skip navigation:** The skip link allows keyboard users to bypass repetitive navigation and go directly to main content
- **Mobile-friendly structure:** The semantic structure works well with responsive design principles, allowing content to reflow naturally on different screen sizes

---

### Explain how you ensured that your site is fully accessible and usable for all students - including those with different disabilities:

**Accessibility Features Implemented:**

1. **Keyboard Navigation:**
   - "Skip to Main Content" link on every page allows keyboard users to bypass navigation and jump directly to main content
   - All interactive elements (links, navigation items) are keyboard accessible

2. **Screen Reader Support:**
   - Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) provide landmarks for screen reader navigation
   - Proper heading hierarchy (h1 → h2 → h3) creates a logical document outline that screen readers can navigate
   - All images include descriptive `alt` attributes:
     - Logo: "UMSI Logo"
     - Campus photo: "A student wears a UMSI backpack in fall on the drag."
   - Links have descriptive text (not just "click here") so screen reader users understand link purpose

3. **Document Structure:**
   - `lang="en"` attribute on `<html>` element helps screen readers pronounce content correctly
   - Consistent page structure across all pages helps users with cognitive disabilities navigate predictably

4. **Visual Accessibility:**
   - Proper heading hierarchy helps users with visual impairments understand content structure
   - Lists (`<ul>`, `<ol>`) are properly structured for screen reader navigation
   - Content is organized in logical sections with clear headings

5. **Mobile Accessibility:**
   - Viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`) ensures proper scaling on mobile devices
   - Semantic structure allows content to reflow naturally on smaller screens

6. **Link Accessibility:**
   - External links open in new tabs (`target="_blank"`) with clear indication of external resources
   - All links have meaningful, descriptive text that explains their purpose

**Areas for Future Enhancement:**
- Add ARIA labels where appropriate for complex interactions
- Ensure sufficient color contrast (when CSS is added)
- Add focus indicators for keyboard navigation (when CSS is added)
- Consider adding a table of contents for longer pages
- Add captions/transcripts for video content

---

### Explain how your design makes it easy for students to find resources and understand how to utilize them:

**Design Features for Easy Resource Discovery:**

1. **Clear Navigation:**
   - Consistent navigation menu on all pages with four main sections: Home, Resumes, Networking & Connections, and Interviews
   - Navigation appears at the top of every page, so students always know where they are and can easily move between sections

2. **Home Page Organization:**
   - "Start Here" section provides quick links to main resource pages
   - "Most Popular Resources" section highlights frequently accessed resources with direct links
   - Clear introduction explains the purpose of the site and what students can find

3. **Page-Specific Organization:**
   - Each resource page follows a consistent structure:
     - **Introduction:** Explains what the page covers and why it matters
     - **Steps/Process:** Provides actionable guidance (e.g., "Resume Writing Made Easy: Steps to Success", "Interview Preparation Steps")
     - **Resources Section:** Lists all relevant resources with descriptions of what each resource contains
     - **FAQ Section:** Addresses common questions students might have
     - **Support Section:** Links to career coaching and additional help

4. **Resource Descriptions:**
   - Each resource link includes a brief description explaining what students will find (e.g., "Comprehensive UMSI guide including tips, formatting rules, and sample accomplishments")
   - This helps students understand which resources are most relevant to their needs before clicking

5. **Multiple Entry Points:**
   - Resources are linked from multiple places:
     - Home page "Most Popular Resources" section
     - Dedicated resource pages
     - Within contextual content (e.g., resume resources mentioned in resume writing steps)
   - This ensures students can find resources whether they're browsing generally or looking for something specific

6. **Actionable Guidance:**
   - Step-by-step processes (numbered lists) break down complex tasks into manageable steps
   - Best practices sections provide clear, actionable advice
   - FAQ sections anticipate and answer common questions

7. **Clear Calls to Action:**
   - Each page includes links to career coaching appointments for personalized help
   - External resources are clearly labeled and open in new tabs
   - Support sections on each page guide students to next steps

8. **Visual Hierarchy:**
   - Proper heading structure creates clear visual hierarchy
   - Sections are logically grouped and easy to scan
   - Lists make information digestible and easy to follow

**Why This Design Works:**
- Students can quickly understand the site's purpose from the home page
- Navigation is predictable and consistent across all pages
- Resources are contextualized with descriptions, so students know what to expect
- Multiple pathways to resources accommodate different learning and browsing styles
- Step-by-step guidance helps students understand not just what resources exist, but how to use them effectively

---

## Project Cost for Deliverable #1 Mobile Website

| Item | Hours | Price | Total |
|------|-------|-------|-------|
| Accessibility Testing | 2 | $110/hour | $220 |
| Accessibility Fixes | 1.5 | $110/hour | $165 |
| Choosing Content for site | 3 | $110/hour | $330 |
| Skip to Main | 0.5 | $110/hour | $55 |
| Structuring Navigation across the site in html | 2 | $110/hour | $220 |
| Organizing Main content in html | 4 | $110/hour | $440 |
| Other see below* | 2 | $110/hour | $220 |
| | | | |
| | | | |
| **Total Costs:** | **15** | | **$1,650** |

* **Project Costs for Other include:**
- **Image selection and alt text creation (1 hour):** Researching and selecting appropriate UMSI-branded images, ensuring they meet accessibility standards, and writing descriptive alt text for all images
- **Content research and integration (1 hour):** Reviewing existing UMSI Career Development Office resources, understanding client objectives, and ensuring all linked resources are current and relevant to student needs
****