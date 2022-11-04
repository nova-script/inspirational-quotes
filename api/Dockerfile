FROM node:19

# Create API directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package*.json ./

# Install dependencies
RUN npm install --dev

# Bundle app source
COPY . . 

EXPOSE 8000
CMD [ "npm", "start" ]
