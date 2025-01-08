FROM node:23-alpine3.20

WORKDIR /home/movie

COPY package.json package-lock.json ./

RUN npm install --timeout=300000

COPY . .

RUN npx prisma generate

EXPOSE 3069

CMD [ "npm", "run", "start" ]