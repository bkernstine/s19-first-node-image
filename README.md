# Starting the app

Run the following commands:

```bash
docker build -t my-first-node-app .
docker network create node-app
docker container run -d --network=node-app --network-alias=mongo mongo
docker container run -d -p 3000:3000 --network=node-app my-first-node-app
```

If you make a `GET` request to localhost:3000/items, you should get an empty array (`[]`).
