FROM node:alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
copy . .
RUN npm install
EXPOSE 3000
cmd ["npm", "start"]