FROM node:12.14.1
WORKDIR /app

COPY . /app

EXPOSE 3000

ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]