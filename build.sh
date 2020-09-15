docker build -t philippec-nginx:1.0 .
docker run -it -d -p 80:80 -p 443:443 --name nginx -v /usr/share/nginx:/usr/share/nginx -v ssl:/etc/ssl/certs/docker/nginx/ philippec-nginx:1.0 