# Use an existing image as a base
FROM nginx:alpine

# Copy the website files into the container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
