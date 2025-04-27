# Use official Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose port and run the app
EXPOSE 3000
CMD ["node", "index.js"]
