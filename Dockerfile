FROM node:lts-alpine3.24 AS builder

WORKDIR /eventhub
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.31.6-alpine3.24

ARG VITE_HOST_ORIGIN
ENV VITE_HOST_ORIGIN=$VITE_HOST_ORIGIN

WORKDIR /eventhub
COPY --from=builder /eventhub/dist/ .
COPY --from=builder /eventhub/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]