# Project-For-Hushh
Travel Website — Frontend

🚀 Deployed Using Docker & Automated Through CI/CD (Jenkins)
This repository contains the complete frontend code for a multi-page Travel Website featuring cultural tours, adventure travel, destination guides, blogs, user stories, and interactive UI components.
The project is fully containerized using Docker and deployed automatically using a Jenkins CI/CD pipeline.

📌 Project Overview

This Travel Website is designed to provide users with an immersive travel experience through various sections such as:
🌄 Adventure Travel
🏝️ Explore Bali
🎭 Cultural Tours
📝 Travel Blog

Each page is built using HTML + CSS + JavaScript, with responsive layouts, image galleries, testimonials, and interactive elements such as forms and carousels.

⭐ Key Features
🔹 Multi-Page Website
Includes the following pages:
adventure.html — Adventure activities, destinations, packages, testimonials
bali.html — Cultural insights, gallery, Google Maps embed, travel tips, reviews
culture.html — Cultural activities, destinations, packages, carousel
blog.html — User blog section with animated cards & form for story submission

🔹 Modern UI/UX
Responsive layouts
Smooth animations (fade-in, slide-in)
Clean, attractive sections
Dynamic testimonials carousel

🔹 Deployed with Docker
All frontend files are packaged into a Docker image for clean and consistent deployment.

🔹 Jenkins CI/CD Pipeline
Automates the entire workflow:
Fetch latest code from GitHub
Build Docker image
Push to Docker Hub
Deploy container on server


--------------------------
🐳 Docker Deployment
▶️ Build Docker Image
docker build -t travel-website .

▶️ Run Container
docker run -d -p 8080:80 travel-website


(Your project will be available on http://localhost:8080)

🚀 CI/CD Pipeline with Jenkins

Your Jenkins pipeline performs:

✔ Clone repository
✔ Install dependencies (if any)
✔ Build Docker image
✔ Push image to Docker Hub
✔ Stop old container
✔ Run new updated container



🔧 Future Enhancements

Convert frontend to React or Next.js
Add backend for user authentication and blog posting
Add payment gateway for travel packages
Add real-time API for destinations, weather, currency exchange



👨‍💻 Author

Reema
B.Tech IT — Lovely Professional University
Skills: Docker, Jenkins, DevOps, Java, JS, Cloud Engineer
