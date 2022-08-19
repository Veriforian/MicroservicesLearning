# Use existing image as a base
FROM alpine

# Download and install dependancy
RUN apk add --update gcc
RUN apk add --update redis


# Command for docker container to run
CMD ["redis-server"]
