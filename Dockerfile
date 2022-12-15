FROM go:1.19.4-alpine3.16

WORKDIR /home

COPY public/ /home/public
COPY server /home/server