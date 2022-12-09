FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

# Copy project files into the docker image
COPY . /app/


RUN npm run build
RUN npm run prisma-gen-client
EXPOSE 8080
CMD npm run start