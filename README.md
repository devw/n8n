### Starting/Stop n8n
```
ngrok http 5678
docker run -it --rm --name n8n -p 5678:443 -v n8n_data:/home/node/.n8n -e N8N_HOST="ea24-151-43-60-203.ngrok-free.app" -e N8N_PORT=443 docker.n8n.io/n8nio/n8n 

docker ps
docker exec -it CONTAINER_ID /bin/bash



docker volume create n8n_data

docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n start --tunnel

http://localhost:5678

docker ps
docker stop CONTAINER_ID



```

### Access the logs

```
docker cp n8n:/home/node/.n8n /tmp/n8n
/bin/sh sh/log2json.sh /tmp/n8n/n8nEventLog.log n8n-log.json
```

### Using webhooks in n8n (parameters, responses and triggers)

- [ ] https://www.youtube.com/watch?v=IvUYJQkf6sA

### docker 
