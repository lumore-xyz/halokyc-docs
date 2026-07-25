# syntax=docker/dockerfile:1

FROM node:24.11.0-alpine AS dependencies
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

FROM node:24.11.0-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Build-time argument for production site URL
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN npm run postinstall \
  && npm run build

FROM node:24.11.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nextjs \
  && adduser --system --uid 1001 --ingroup nextjs nextjs

COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
