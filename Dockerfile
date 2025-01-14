FROM node:20-slim AS build-stage

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
