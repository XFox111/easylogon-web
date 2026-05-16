# Use the official Node.js 20 image as the base image
FROM node:25 AS builder

ARG SIGNALR_URL=http://localhost:8080/ws
ARG ENDPOINT_URL=http://localhost:8080/send
ARG COMMIT=devbuild

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install the app dependencies
RUN npm install

# Copy the app source code to the working directory
COPY . .
RUN npm run lint

RUN echo "VITE_SIGNALR_URL=${SIGNALR_URL}" >> .env
RUN echo "VITE_ENDPOINT_URL=${ENDPOINT_URL}" >> .env
RUN echo "VITE_COMMIT=${COMMIT}" >> .env

# Build the app
RUN npm run build

FROM steebchen/nginx-spa:stable AS runner
WORKDIR /app

COPY --from=builder /app/dist .
EXPOSE 80
CMD ["nginx"]
