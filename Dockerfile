FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

# Install Python for dice_script.py
RUN apt-get update && apt-get install -y python3

# Bundle app source
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]