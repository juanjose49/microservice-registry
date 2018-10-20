from node:10.12.0-alpine
WORKDIR /app
ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install
RUN npm install -g @angular/cli@7.0.2
VOLUME /app
ENTRYPOINT ng serve --host 0.0.0.0
ADD . .