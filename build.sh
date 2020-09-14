docker build -t philippec-nginx:1.0 .
docker run -it --rm -d -p 80:80 -p 443:443 --name nginx -v /usr/share/nginx:/usr/share/nginx philippec-nginx:1.0 