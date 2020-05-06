#!/bin/bash

npm install

if [ ${NODE_ENV} = "production" ]; then
  npm run build
  npm start
else
  npm run develop
fi
