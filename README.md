# Technical Challenge for MELI

This project was created with Vite for the frontend and Express for the backend. It is part of the technical challenge for Mercado Libre.

## Project Structure

The project is divided into two main applications:

- **Frontend**: Located in the `meli-frontend` directory, built with Vite.
- **Backend**: Located in the `server` directory, built with Express.

The `package.json` in the root folder orchestrates both projects.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) installed. You can check if you have it installed by running:

```bash
node -v
npm -v
```

### Installing Dependencies

1. Clone the repository:

```bash
git clone https://github.com/tomasschus/meli-challenge.git
cd meli-challenge
```

2. Install the dependencies for both the frontend and backend:

```bash
npm install
```

This will start both the frontend and backend services:

The frontend will run on <http://localhost:5173> (Vite development server).
The backend will run on <http://localhost:5000> (Express server).

### Build for Production

To build the project for production, run:

```bash
npm run build
```

This will:

- Build the frontend in production mode using Vite.
- Prepare the backend for production.

### Running in Production Mode

To run the application in production mode, use the following command:

```bash
npm run start
```

## Docker Support

This project includes a Dockerfile and docker-compose.yml file to help you run the application in containers.

### Building the Docker Image

To build the Docker image, run:

```bash
docker build -t meli-challenge .
```

### Running with Docker Compose

If you're using Docker Compose, run:

```bash
docker-compose up --build
```

This will build and start both the frontend and backend services.
