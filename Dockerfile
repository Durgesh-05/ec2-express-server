FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 8000

CMD [ "node","index.js" ]

# To run this docker file 
# docker build -t 'your-image-name' .
# docker run -p 8000:8000 'your-image-name'