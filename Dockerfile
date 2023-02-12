FROM nginx
WORKDIR /app
COPY package.json /app/pakage/json
RUN npm install
COPY . /app
CMD ["npm", "start"]