FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install     
COPY . .
RUN npm run build    
RUN npm prune --production   
EXPOSE 8080
CMD ["npm", "start"]