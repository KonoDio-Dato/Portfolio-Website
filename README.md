# Nico Galvez - Developer Portfolio

## Project Overview
This is a personal portfolio website showcasing my skills, projects, achievements, and professional background as a developer. The site includes multiple pages (Home, Story, Academic, Projects, Achievements, Contacts, Services, Inquiry, Feedback) and integrates three external APIs to provide dynamic functionality and enhance user experience.

The website is built with HTML, CSS, and JavaScript, and features a responsive design, animated background, and interactive elements.

## APIs Used

### 1. EmailJS API (Contact Form)
- **Purpose**: Handles form submissions from the Contacts page. When a user fills out the contact form, EmailJS sends the data directly to my email address, allowing me to receive inquiries without a backend server.
- **Service ID**: `service_xxxxxx` (replace with your actual Service ID)
- **Template ID**: `template_xxxxxx` (replace with your actual Template ID)
- **Integration**: Form data is collected into an object and sent via `emailjs.send()`. The user receives a success or error message based on the API response.

### 2. GitHub REST API (Projects)
- **Purpose**: Dynamically displays my latest public repositories on the Projects page. This shows visitors my open‑source work and coding activity.
- **Endpoint**: `https://api.github.com/users/[YOUR_GITHUB_USERNAME]/repos?sort=updated&per_page=6`
- **Integration**: The API is called on page load. Repository data (name, description, stars, forks, language) is rendered into project cards, each linking to the corresponding GitHub repo.

### 3. Firebase Firestore (Inquiries & Feedback)
- **Purpose**: Stores project inquiries submitted via the Inquiry page and feedback submitted via the Feedback page. Each submission is saved with a `pending` status. An admin page (`admin-feedback.html`) allows me to review and approve or decline entries. Approved feedback is displayed on the homepage testimonials section.
- **Integration**: Firebase JavaScript SDK is used to add documents to the `inquiries` and `feedback` collections. Queries filter by `status` to display only approved content on the public site. Firebase Authentication protects the admin pages.

## Transaction Feature
The primary transactions on this website are **form submissions** (inquiry and feedback). When a user fills out a form:
1. Client‑side validation ensures all required fields are filled.
2. Data is sent to Firebase Firestore (for inquiries/feedback) or to EmailJS (for contact).
3. For inquiries and feedback, the record is stored with `status: "pending"`.
4. The user receives a success message on the page. If an error occurs, an error message is displayed.
5. As an admin, I can log into `admin-inquiries.html` or `admin-feedback.html` to review submissions and update their status. Only approved feedback appears on the homepage.

## How to Run / View the Project
The project is a static website and can be viewed in any modern web browser.

### Option 1: View Online (if hosted)
Visit: [Insert your GitHub Pages or hosting URL here, e.g., https://username.github.io/portfolio]

### Option 2: Run Locally
1. Download or clone the repository:
   ```bash
   git clone https://github.com/[YOUR_GITHUB_USERNAME]/[REPO_NAME].git
