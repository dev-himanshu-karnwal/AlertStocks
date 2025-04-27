# AlertStocks

A simple stock market dashboard that allows users to view real-time market data, including stock quotes, high/low prices, open/close prices, and an interactive chart displaying historical stock data. This application utilizes **Polygon.io** for fetching the stock data and provides a detailed snapshot of the market performance.

## Features

- **Market Snapshot**: Display current stock price, daily change, and high/low prices.
- **Interactive Chart**: Visualize stock price movements over time.
- **Stock Selector**: Select different stocks to view data for.
- **Percentage Change**: See the daily price change and percentage change compared to the open price.

## Tech Stack

- **Frontend**:
  - ReactJS
  - NextJS
  - TypeScript
  - TailwindCSS (for styling)
  - Chart.js (for displaying graphical data)
- **Backend**:
  - NestJS (for server-side logic)
  - TypeScript
  - Axios (for API calls to fetch stock data)
- **API Services**:
  - **Polygon.io**: Used for fetching historical stock data.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn (for package management)

## Installation

Follow the steps below to get your project up and running locally.

### Clone the repository

```bash
git clone 
```

### Environment Setup

Create `.env` files in both the **frontend** and **backend** directories for storing your API keys.

### Backend `.env` file

Navigate to the `backend` directory and create a `.env` file with the following content:

```bash
POLYGON_API_KEY=your-polygon-api-key
```

### Frontend `.env` file

Similarly, in the `frontend` directory, create a `.env` file:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

```

#### Backend

1. Go to the backend folder:

   ```bash
   cd backend
   ```

2. Install the backend dependencies:

   ```bash
   npm install  # or 'yarn install'
   ```

#### Frontend

1. Go to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:

   ```bash
   npm install  # or 'yarn install'
   ```

## Running the Development Server

### Backend

Start the backend server in development mode:

```bash
cd backend
npm run start:dev  # or 'yarn start:dev'
```

The backend will run at `http://localhost:5000`.

### Frontend

Start the frontend development server:

```bash
cd frontend
npm run start  # or 'yarn start'
```

The frontend will run at `http://localhost:3000`.

Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

This application uses two main APIs to fetch stock data.

### 1. **Get Real-Time Stock Quote**
Fetches the latest stock quote for a given stock symbol.

**Endpoint**: `GET /api/stocks/quote`

**Parameters**:
- `symbol` (string) - The stock symbol (e.g., "AAPL", "GOOG").


### 2. **Get Historical Stock Data for the Day**
Fetches the stock data (minute-by-minute) for a given stock symbol for a specific date.

**Endpoint**: `GET /api/stocks/day-chart`

**Parameters**:
- `symbol` (string) - The stock symbol (e.g., "AAPL").
