# Build stage
FROM node:22.14.0-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22.14.0-alpine

WORKDIR /app

# Copy built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm ci --omit=dev

# Expose port
EXPOSE 4000

# Start the SSR server
CMD ["npx", "next", "start"]
