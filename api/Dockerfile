FROM node:12.14.1
WORKDIR /app

COPY . /app

EXPOSE 1337 80

ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]