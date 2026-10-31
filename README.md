# 🇮🇳 BharatHack — All-India Hackathon Hunting Radar

> **A modern, AI-powered web app for discovering hackathons across India (IITs, NITs, IIITs, premier tech universities, and private hubs) — powered by the TinyFish AI Web Search & Headless Engine.**

---

## ✨ Key Features & User Flow

### 1. Upper-Left Corner: Primary Entry Fee Toggle
Located prominently in the upper-left control bar:
* **🟢 Free Entry (₹0)**: Curated free-to-enter national hackathons (Smart India Hackathon, IIT Bombay Techfest, IIT Delhi Tryst, IIIT Bangalore InnovateX, NIT Trichy Pragyan, Flipkart GRiD, ETHIndia, etc.).
* **💎 Paid Entry**: Ticketed and refundable-commitment sprints (IIIT Hyderabad Megathon, IIT Madras Shaastra, BITS Pilani APOGEE, Bengaluru Tech Summit DeepTech Hack, VIT graVITas, DLF CyberCity FinTech Hack, Maker Village Kochi IoT, etc.).

### 2. Secondary Filter: Participation Mode
Immediately available after choosing Free or Paid:
* **🌐 Online**: Virtual, remote hackathons open pan-India.
* **📍 Offline**: In-person campus sprints with physical lodging/venue details.
* **⚡ Hybrid**: Multi-stage hackathons (virtual prelims + offline finals).

### 3. Conditional Location Picker (Activated for Offline & Hybrid)
Selecting **Offline** or **Hybrid** reveals the location selector:
* **Cities & States**: Filter by Bengaluru, New Delhi / NCR, Gurugram, Mumbai, Hyderabad, Pune, Chennai, Kolkata, Pilani, Roorkee, Kochi, Mangaluru, and more.
* **Campus Types**: Filter specifically for **IIT**, **NIT**, **IIIT**, **Tech Schools**, or **Private / Corporate Hubs**.

### 4. Official Registration Link Below Details
* Every hackathon card clearly displays the **Official Registration Link** and a **Register Now** CTA **directly below all hackathon details** (dates, prize pool, team size, venue, and tracks).
* Includes a **1-click copy button** for instant link sharing.
* Includes a **Full Details Modal** providing schedule, perks, eligibility criteria, and rules.

### 5. Powered by TinyFish AI Web Agent
* **API Key Configured**: `sk-tinyfish-LTb7Ekpg9zJMlBojabDp2wKgmMzpZAM2`
* **TinyFish Search API (`api.search.tinyfish.ai`)**: Live search agent querying real Indian hackathons across Devfolio, Unstop, and college portals.
* **TinyFish Fetch API (`api.fetch.tinyfish.ai`)**: Cloud headless browser that inspects any hackathon URL, strips ads and scripts, and adds it to your radar.
* **Live Status Badge**: Displays real-time API connectivity and latency.

### 6. Additional Developer & Student Tools
* **🎯 AI Skill & Track Matcher**: Select your engineering tech stack (Python, React, PyTorch, Solidity, ROS, Flutter) to calculate compatibility scores (%) and get customized hackathon recommendations.
* **📖 Indian Hackathon Winning Playbook**: Strategies for cracking Smart India Hackathon (SIH), internal college nominations, 5-slide PPT formula, IIT techfest hardware checklists, and 180-second live demo blueprints.
* **👥 Squad & Teammate Matcher**: Community board to post and join hackathon teams.
* **🗺️ Regional Radar Map**: Interactive zone-based campus radar for North, South, West, and East India.
* **📊 1-Click Export (CSV & JSON)**: Export all hackathons for college clubs, ACM/IEEE student branches, and training/placement cells.
* **📅 Calendar & Social Sharing**: Add to Google Calendar, export `.ics` file, and share formatted summaries directly to WhatsApp.

---

## 🚀 Running the App

### Option A: Development Mode (with Hot-Reloading)
```bash
npm run dev
```
* **Frontend**: `http://localhost:5173`
* **Backend API**: `http://localhost:3001` (proxied automatically)

### Option B: Production Server (Unified)
```bash
npm run build
npm start
```
* Serves the full app and API on `http://localhost:3001`.

---

## 🛠 Tech Stack
* **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons
* **Backend**: Node.js, Express, Axios, CORS, tsx
* **AI & Web Scraper**: TinyFish Search & Fetch APIs (`tinyfish.ai`)
