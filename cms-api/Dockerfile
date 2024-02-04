FROM node:18-bullseye-slim AS base
# Installing libvips-dev for sharp Compatibility
RUN apt update -y && apt install -y \
  build-essential libvips-dev

# Install node dependencies
FROM base as deps
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g
RUN yarn install --immutable

# Development
FROM base AS development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install pg
RUN chown -R node:node /app

USER node

EXPOSE 1337
ENV HOSTNAME "0.0.0.0"

CMD ["yarn", "develop"]
