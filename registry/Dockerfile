from node:10.12.0-alpine
WORKDIR /app
RUN npm install -g nodemon@1.18.4
ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install
ENTRYPOINT nodemon src/app.js
VOLUME /app
ADD . .
