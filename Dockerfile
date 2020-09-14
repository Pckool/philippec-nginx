FROM nginx

COPY nginx.cong /etc/nginx/conf.d/default.config

VOLUME [ "/web-data" ]