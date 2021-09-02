FROM node
WORKDIR app
COPY package* ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]

