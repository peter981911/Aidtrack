#installing dependencies 
FROM node:20-alpine AS builder 
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production 

#run the application 
FROM node:20-alpine 
RUN apk update && apk upgrade --no-cache && \
    rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 5000
CMD [ "node" , "server.js"]
