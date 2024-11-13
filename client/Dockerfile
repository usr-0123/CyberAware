# frontend/Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the React app (Uncomment if you want to build inside Docker)
# RUN npm run build

# Use an Nginx server to serve the built app
FROM nginx:alpine

# Copy the build files from the previous step (uncomment the line below if you are building inside Docker)
# COPY --from=build /app/build /usr/share/nginx/html

# If you're not building the app in Docker, you can just copy the pre-built build files
COPY ./build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
