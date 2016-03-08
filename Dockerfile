FROM node:4.2

#ENV PORT 8081

RUN apt-get update && apt-get -y install --no-install-recommends \
	gcc make build-essential \
	&& rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --production
COPY . /usr/src/app

CMD [ "npm", "start", "--production" ]
