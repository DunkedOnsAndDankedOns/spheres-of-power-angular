FROM node:slim
WORKDIR /app
COPY . .
RUN npm ci
RUN npm i -g @angular/cli
RUN ng build

FROM nginx:alpine
WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /app/dist/angular-spheres-of-power-frontend /usr/share/nginx/html
