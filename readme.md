## Global Solution Microserviços
### Matheus de Oliveira rm 88430
### Vitor Torres Dantas rm 88415


Construção da imagem docker
docker build -t app-node -f src/Dockerfile .
rodar o don - docker run -p 3001:3001 -e DB_HOST=oracle.fiap.com.br -e DB_PORT=1521 -e DB_NAME=orcl -e DB_USER=rm88430 -e DB_PASSWORD=040302 app-node
