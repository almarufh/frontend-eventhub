FROM node:lts-alpine3.24 AS builder

WORKDIR /eventhub
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.31.6-alpine3.24

WORKDIR /eventhub
COPY --from=builder /eventhub/dist/ .
COPY --from=builder /eventhub/nginx.conf /etc/nginx/conf.d/default.conf


CMD ["nginx", "-g", "daemon off;"]