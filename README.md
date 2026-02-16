# Nico Galvez - Developer Portfolio

## Project Overview
This is a personal portfolio website showcasing my skills, projects, achievements, and professional background as a developer. The site includes multiple pages (Home, Story, Academic, Projects, Achievements, Contacts, Services) and integrates three external APIs to provide dynamic functionality and enhance user experience.

The website is built with HTML, CSS, and JavaScript, and features a responsive design, animated background, and interactive elements.

## APIs Used

### 1. Getform API (Contact Form)
- **Purpose**: Handles form submissions from the Contacts page. When a user fills out the contact form, the data is sent to Getform, which forwards it to my email and stores it in a database. This allows me to receive and manage inquiries efficiently.
- **Endpoint**: `https://getform.io/f/314gzsn7m2i`
- **Integration**: Form data is sent via a `POST` request using JavaScript `fetch`. File attachments are supported.

### 2. GitHub REST API
- **Purpose**: Dynamically displays my latest public repositories on the Projects page. This shows visitors my open‑source work and coding activity.
- **Endpoint**: `https://api.github.com/users/[YOUR_GITHUB_USERNAME]/repos?sort=updated&per_page=6`
- **Integration**: The API is called on page load. Repository data (name, description, stars, forks, language) is rendered into project cards, each linking to the corresponding GitHub repo.

### 3. OpenStreetMap (Leaflet) API
- **Purpose**: Provides an interactive map on the Contacts page, showing my location (Vinzons, Camarines Norte). This adds a professional touch and makes it easy for visitors to see where I am based.
- **Endpoint**: Uses Leaflet library with OpenStreetMap tiles (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`).
- **Integration**: A map is initialized with my coordinates, a marker, and a popup. No API key is required.

## Transaction Feature
The primary transaction on this website is the **contact form submission**. When a user fills out the form (including name, email, subject, service needed, message, and optional file attachment) and clicks "Send Message", the following occurs:
1. Client‑side validation checks all fields (e.g., valid email, message length ≥10 characters).
2. If valid, the form data is packaged as `FormData` and sent via a `fetch` POST request to the Getform endpoint.
3. Getform processes the submission:
   - Stores the data in its database.
   - Forwards the message to my email address.
4. The user receives a success message on the page. If an error occurs, an error message is displayed.
This feature enables potential clients or collaborators to contact me directly through the site.

## How to Run / View the Project
The project is a static website and can be viewed in any modern web browser.

### Option 1: View Online (if hosted)
Visit: [Insert your GitHub Pages or hosting URL here, e.g., https://username.github.io/portfolio]

### Option 2: Run Locally
1. Download or clone the repository:
   ```bash
   git clone https://github.com/[YOUR_GITHUB_USERNAME]/[REPO_NAME].git
