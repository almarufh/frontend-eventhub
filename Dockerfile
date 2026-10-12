# FROM alpine:latest AS clone-project

# WORKDIR /files
# RUN apk add git
# RUN git clone https://github.com/almarufh/frontend-eventhub

FROM node:lts-alpine3.24 AS buider
WORKDIR /create
COPY --from=clone-project /files/ .
RUN npm ci
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=buider /create/dist/ .
COPY --from=buider /create/nginx.conf /etc/nginx/conf.d/default.conf