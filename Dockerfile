FROM node:20 AS build

# Build for the frontend
ARG VITE_BACKEND_URL=http://localhost:5000

WORKDIR /app
COPY meli-frontend ./meli-frontend
WORKDIR /app/meli-frontend
RUN npm install && npm run build

# Build for the backend
WORKDIR /app
COPY server ./server
WORKDIR /app/server
RUN npm install

# Copy the frontend build to the backend
RUN cp -r /app/meli-frontend/dist /app/server/public

# Runtime Stage 
FROM node:20

ENV NODE_ENV=production

WORKDIR /app
COPY --from=build /app /app

CMD ["node", "server/server.js"]
