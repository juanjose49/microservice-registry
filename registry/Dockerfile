from node:10.12.0-alpine
WORKDIR /app
ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install
ADD . .
ENTRYPOINT node app.js
