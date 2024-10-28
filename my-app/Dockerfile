# Use Node.js LTS version as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the Next.js application
RUN npm run build

# Set up a smaller production image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the build and node_modules from the builder
COPY --from=builder /app ./

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
