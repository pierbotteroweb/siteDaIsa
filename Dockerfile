# Dockerfile para a primeira versão do Node.js e Angular
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app

RUN npm install -g @angular/cli@14.2.13

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
