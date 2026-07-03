# Step 1: Use an official Node.js runtime as the base image
# Using the Long Term Support (LTS) slim version keeps the image lightweight
FROM node:20-slim

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json first
# This allows Docker to cache your dependencies layer if package.json hasn't changed
COPY package*.json ./

# Step 4: Install production dependencies only (ignores devDependencies like testing tools)
RUN npm ci --only=production

# Step 5: Copy the rest of your application source code
COPY . .

# Step 6: Expose the port your Express app listens on (change if your app uses a different port)
EXPOSE 3000

# Step 7: Define the command to start your application
CMD [ "node", "src/server.js" ]