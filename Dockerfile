# Use the official Node.js Alpine image as a base
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json, package-lock.json, and yarn.lock if they exist
COPY package*.json ./
# COPY yarn.lock ./


# Install dependencies
RUN yarn  

# Install Nest CLI globally
RUN yarn global add @nestjs/cli

# Copy the entire application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN yarn build

# Expose the port your application will run on
EXPOSE 9000

# Command to run your application using Nest.js
CMD ["yarn", "start:dev"]
