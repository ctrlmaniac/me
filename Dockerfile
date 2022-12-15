FROM golang:1.19.4-alpine3.17

WORKDIR /home

RUN go install github.com/ctrlmaniac/me@latest

CMD ["server"]