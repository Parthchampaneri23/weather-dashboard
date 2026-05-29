# 🌦️ Weather Dashboard

A modern and responsive Weather Dashboard built using **React.js**, **Tailwind CSS**, and **WeatherAPI**.
This application allows users to search any city and view real-time weather information including temperature, humidity, wind speed, weather conditions, and icons.

---

# 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Real-time temperature data
* 💨 Wind speed information
* 💧 Humidity details
* 🌤️ Dynamic weather icons
* ⌨️ Enter key search support
* ⏳ Loading state handling
* ❌ Error handling for invalid cities/API issues
* 🎨 Modern glassmorphism UI
* 📱 Fully responsive design

---

# 🛠️ Technologies Used

* React.js
* Vite
* Tailwind CSS
* JavaScript
* Fetch API
* WeatherAPI
* React Icons

---

# 📂 Project Structure

```bash
weather-dashboard/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── backend/
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone YOUR_GITHUB_LINK
```

---

## 2️⃣ Navigate to Frontend

```bash
cd weather-dashboard/frontend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Start Development Server

```bash
npm run dev
```

---

# 🔑 API Setup

This project uses:

👉 https://www.weatherapi.com/

## Create Free API Key

1. Signup/Login
2. Generate API Key
3. Replace API key inside `App.jsx`

Example:

```js
https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}
```

---

# 🌐 API Integration Flow

```bash
User Input
    ↓
fetchWeather()
    ↓
Fetch API Request
    ↓
WeatherAPI Server
    ↓
JSON Response
    ↓
React State Update
    ↓
UI Re-render
```

---

# 📚 Concepts Learned

* React Hooks (`useState`)
* API Fetching
* Async/Await
* Error Handling
* Loading States
* Conditional Rendering
* Tailwind CSS Styling
* Dynamic UI Rendering
* Keyboard Events
* Public API Integration

---

# 🧠 Key Functionalities

## Loading State

```js
setLoading(true)
```

Shows loading message while fetching API data.

---

## Error Handling

```js
setError(data.error.message)
```

Handles:

* Empty input
* Invalid city names
* API failures

---

## Enter Key Support

```js
onKeyDown={handleKeyPress}
```

Allows searching weather by pressing Enter key.

---

# 📸 UI Preview

* Modern glassmorphism card design
* Responsive weather dashboard
* Dynamic weather condition icons

---

# 🚀 Future Improvements

* 5-Day Forecast
* Axios Integration
* Dark/Light Mode
* Search Suggestions
* Geolocation Weather
* Deployment on Netlify/Vercel

---

# 👨‍💻 Author

Parth Champaneri

---

# ⭐ Learning Outcome

This project helped in understanding:

* Real-world API integration
* React state management
* Asynchronous operations
* Professional frontend UI development
* Error and loading handling in production-level applications
