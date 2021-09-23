FROM node

WORKDIR app
COPY package* ./
RUN npm install

COPY . .
EXPOSE 8080
ENTRYPOINT ["node", "app.js"]
