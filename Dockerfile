# Specify a base image
FROM node:16-alpine

# Working Directory in the container
WORKDIR '/app'

# Copying the package json files 
COPY package.json package.json
#COPY package-lock.json package-lock.json

# Install some depenendencies
RUN npm install 

# Copy the rest of the src files
COPY . .

# Compile and build the app
#RUN npm run build

# Uses port which is used by the actual application
EXPOSE 3000

# Command to be run after the image is ready to start it
CMD ["npm", "start"]