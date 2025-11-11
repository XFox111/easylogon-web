# Use the official Node.js 20 image as the base image
FROM node:25 AS builder

ARG SIGNALR_URL=http://localhost:8080/ws
ARG ENDPOINT_URL=http://localhost:8080/send
ARG COMMIT=devbuild

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json ./
COPY yarn.lock ./

# Install the app dependencies
RUN yarn install
RUN yarn audit

# Copy the app source code to the working directory
COPY . .
RUN yarn lint

RUN echo "VITE_SIGNALR_URL=${SIGNALR_URL}" >> .env
RUN echo "VITE_ENDPOINT_URL=${ENDPOINT_URL}" >> .env
RUN echo "VITE_COMMIT=${COMMIT}" >> .env

# Build the app
RUN yarn build

FROM steebchen/nginx-spa:stable AS runner
WORKDIR /app

COPY --from=builder /app/dist .
EXPOSE 80
CMD ["nginx"]
