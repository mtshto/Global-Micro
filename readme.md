# Global Solution Microserviços

- Matheus de Oliveira RM: 88430
- Vitor Torres Dantas RM: 88415
  
## Construção da imagem docker

- docker build -t app-node -f src/Dockerfile .
- rodar o don - docker run -p 3001:3001 -e DB_HOST=oracle.fiap.com.br -e DB_PORT=1521 -e DB_NAME=orcl -e DB_USER=rm88430 -e DB_PASSWORD=040302 app-node

## MODELO RELACIONAL

- Utilizamos duas tabelas fracas que relacionam a coluna codigo da tabela indicador com a coluna codigo_indicador da tabela objetivos

  ![image](https://github.com/mtshto/Global-Micro/assets/62342894/bf16d850-78fd-44ec-ae03-9d031cf1eb6b)

  ## Script SQL

  - Utilizamos os scripts objetivos.sql e indicadores_v2.sql para a criação das tabelas e inserção dos dados fornecidos.

## Testes de requisição GET nas bases fornecidas
