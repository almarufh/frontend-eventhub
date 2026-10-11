FROM node:lts-alpine3.24 AS builder

WORKDIR /eventhub
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.31.6-alpine3.24

WORKDIR /eventhub
COPY --from=builder /eventhub/dist/ .

RUN cat <<KEREN > /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;

    location / {
        root /eventhub;
        index index.html;
        try_files \$uri \$uri/ /index.html;
    }

    location /cuanbot/ {
        proxy_pass http://server-backend:2027/;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
KEREN

CMD ["nginx", "-g", "daemon off;"]