# build interim container
FROM node:10-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run ng build -- --prod

# deploy container
FROM nginx:alpine
EXPOSE 80
COPY --from=build /app/dist usr/share/nginx/html
