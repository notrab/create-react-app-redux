FROM node:18-alpine
WORKDIR /
COPY package.* .
COPY yarn.lock
COPY now.json
COPY renovate.json
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
