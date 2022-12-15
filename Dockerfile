FROM golang:1.19.4-alpine3.17

WORKDIR /home

COPY main/main.go /home/main/main.go
COPY public/ /home/public

RUN go build -o /home/server main/main.go
RUN go install /home/server

CMD ["server"]