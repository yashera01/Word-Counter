FROM nginx
 
COPY . /usr/share/nginx/html
 
# EXPOSE 8081
 
CMD ["nginx", "-g", "daemon off;"]
