FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

VOLUME [ "/web-data", "/ssl" ]