# authority

- db: mongo
- server:
  - node.js
  - express
  - mongoose
- webadmin: react.js

## build

- FROM mongo
- FROM node.js
- RUN npm install yarn -g
- WORKDIR server/src
  - RUN yarn install package.json
- mkdir webadmin/src
  - RUN yarn package.json
