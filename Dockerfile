FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.config

VOLUME [ "/web-data" ]