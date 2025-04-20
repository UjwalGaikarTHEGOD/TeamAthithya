🐛 AI-Powered Pest Detection System
An intelligent pest detection and alerting system that leverages the MERN stack and Gemini API to help farmers identify pests in their fields using real-time image uploads, such as drone feeds or selfies from mobile devices.

🌾 Problem Statement
Agricultural crops are constantly threatened by pests, leading to reduced yields and economic losses for farmers. Early detection of these pests is crucial to minimizing damage. This project provides a tech-driven solution that enables farmers to get instant alerts about potential pest infestations by simply uploading a photo of the affected area.

🚀 Features
📸 Image Upload: Farmers can upload field images via mobile or drone feed.

🧠 AI Pest Detection: Uses Gemini API to analyze and identify pests from images.

🔔 Real-Time Alerts: Provides instant feedback on pest presence and severity.

🌱 Eco-Friendly Suggestions: Recommends safe and sustainable pest control methods.

🗂 Farmer Dashboard: Easy-to-use dashboard with history and reports.

🌍 Multilingual Support (Coming Soon)

🛠️ Tech Stack
Frontend (React)
React.js with Tailwind CSS for UI

Axios for API calls

Form/image upload using react-dropzone

Backend (Node.js + Express)
Express.js REST API

Multer for image uploads

Gemini API integration for image analysis

Database
MongoDB for storing user data, pest history, and image logs

AI Integration
Gemini API by Google for image recognition and pest identification

How to Use the AI-Powered Pest Detection System

1. Clone the Repository
First, clone the repository to your local machine by running the following command in your terminal:

git clone https://github.com/your-username/pest-detection.git
cd pest-detection

2. Backend Setup
Navigate to the backend folder and install all the necessary dependencies using npm:

cd backend
npm install

3. Frontend Setup
Navigate to the frontend folder and install the frontend dependencies:

cd ../frontend
npm install

4. Running the Application
Backend
To start the backend server, use the following command in the backend folder:

cd backend
npm start

Frontend
To start the frontend server, use the following command in the frontend folder:

cd ../frontend
npm run dev


5. Using the System
Upload Image: On the frontend, you will find an option to upload an image. Upload a photo of the crops or fields you want to check for pests (this can be from a mobile or drone).

Pest Detection: After the image is uploaded, the backend will send it to the Gemini API for pest identification.

Results: The system will return the pest information along with eco-friendly solutions.

History and Reports: You can access the history and view past reports via the dashboard.

