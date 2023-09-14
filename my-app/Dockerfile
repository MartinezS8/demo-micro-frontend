# Stage 1: Build the React app

# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# Copy package.json and package-lock.json
# COPY package*.json ./
# add app
COPY . ./

# Install dependencies
RUN npm install

# add app
# COPY . ./
#EXPOSE 3000

CMD ["npm", "start"]
