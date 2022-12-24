FROM golang:1.19.4-alpine3.17

WORKDIR /home

COPY go.mod /home/go.mod
COPY go.sum /home/go.sum
COPY main.go /home/main.go

RUN go build -o server

COPY packages/client/build/ /home/public

CMD ["/home/server"]