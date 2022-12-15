FROM go:1.19.4-alpine

WORKDIR /home

COPY public/ /home/public
COPY server /home/server