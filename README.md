### Starting/Stop n8n
```
docker volume create n8n_data

docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n

http://localhost:5678

docker ps
docker stop CONTAINER_ID
```

### Using webhooks in n8n (parameters, responses and triggers)

- [ ] https://www.youtube.com/watch?v=IvUYJQkf6sA

### docker 
