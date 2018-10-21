from microserviceregistry/registry-ui-base
WORKDIR /app
RUN npm install -g @angular/cli@7.0.2
ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install
ENTRYPOINT ng serve --host 0.0.0.0
ADD . .