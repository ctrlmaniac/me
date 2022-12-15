FROM alpine:latest

WORKDIR /home

COPY public/ /home/public
COPY server /home/server