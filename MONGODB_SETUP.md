# MongoDB Installation Guide

## Option 1: MongoDB Community Server (Recommended)

### Windows में MongoDB Install करें:

1. **Download MongoDB Community Server:**
   - इस link पर जाएं: https://www.mongodb.com/try/download/community
   - Windows version download करें
   - MSI installer download करें

2. **Install करें:**
   - Downloaded file run करें
   - "Complete" installation choose करें
   - "Install MongoDB as a Service" check करें
   - "Install MongoDB Compass" भी check करें (optional)

3. **Environment Variable Setup:**
   - MongoDB bin path add करें आपके system PATH में
   - आमतौर पर यह होता है: `C:\Program Files\MongoDB\Server\7.0\bin`

### Option 2: MongoDB Atlas (Cloud - Easiest)

1. **MongoDB Atlas Account बनाएं:**
   - https://www.mongodb.com/cloud/atlas पर जाएं
   - Free account बनाएं

2. **Free Cluster बनाएं:**
   - "Create a Cluster" click करें
   - Free tier (M0) select करें
   - Cloud provider और region choose करें

3. **Connection String प्राप्त करें:**
   - Cluster create होने के बाद "Connect" click करें
   - "Connect your application" choose करें
   - Connection string copy करें

4. **Backend .env file update करें:**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/your-database
   ```

## Option 3: Docker से MongoDB (अगर Docker install है)

```bash
# MongoDB container run करें
docker run --name mongodb -p 27017:27017 -d mongo:latest
```

## Installation Verify करें:

Install होने के बाद verify करें:

```bash
# Command prompt में run करें
mongod --version

# MongoDB start करें
mongod

# दूसरे terminal में test करें
mongo
```

## Current Status:

अभी MongoDB install नहीं है, इसलिए backend में connection error आ रहा है।

**Immediate Solution:** आप MongoDB Atlas (cloud) use कर सकते हैं - यह सबसे easy तरीका है।

**Portfolio Working:** Frontend perfectly काम कर रहा है sample data के साथ, MongoDB के बिना भी।
