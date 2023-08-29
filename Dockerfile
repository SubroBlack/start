# Specify a base image
FROM node:16-alpine

# Working Directory in the container
WORKDIR '/app'

# Copying the package json files 
COPY package.json package.json
COPY yarn.lock yarn.lock

# Install some depenendencies
RUN yarn install 

# Copy the rest of the src files
COPY . .

# Compile and build the app
RUN yarn build

# Uses port which is used by the actual application
EXPOSE 80

# Command to be run after the image is ready to start it
CMD ["yarn", "start"]