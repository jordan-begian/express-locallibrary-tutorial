#!/bin/bash

# Stop and remove the existing "local-library" container, if it exists
docker stop local-library
docker rm local-library

# Download the latest MongoDB image from Docker Hub
docker pull mongo

# Create and run a new MongoDB container named "local-library"
docker run -d --name local-library -p 27017:27017 mongo

echo "MongoDB container 'local-library' is now running."
