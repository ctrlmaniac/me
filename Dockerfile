FROM golang:1.19.4-alpine3.17

WORKDIR /home

COPY main/main.go /home/main/main.go
COPY packages/client/build/ /home/public

RUN go build -o server main/main.go
RUN go install

CMD ["server"]