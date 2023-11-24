# Global Solution Microserviços

- Matheus de Oliveira RM: 88430
- Vitor Torres Dantas RM: 88415
  
## Construção da imagem docker

- docker build -t app-node -f src/Dockerfile .
- rodar o comando: - docker run -p 3001:3001 -e DB_HOST=oracle.fiap.com.br -e DB_PORT=1521 -e DB_NAME=orcl -e DB_USER=rm88430 -e DB_PASSWORD=040302 app-node
- ![image](https://github.com/mtshto/Global-Micro/assets/82169520/9e59630f-87a0-441b-b045-70dd968dfc32)


## MODELO RELACIONAL

- Utilizamos duas tabelas fracas que relacionam a coluna codigo da tabela indicador com a coluna codigo_indicador da tabela objetivos

  ![image](https://github.com/mtshto/Global-Micro/assets/62342894/bf16d850-78fd-44ec-ae03-9d031cf1eb6b)

  ## Script SQL

  - Utilizamos os scripts objetivos.sql e indicadores_v2.sql para a criação das tabelas e inserção dos dados fornecidos.

## Testes de requisição GET nas bases fornecidas
### Objetivos
http://localhost:3001/objetivos/
![image](https://github.com/mtshto/Global-Micro/assets/82169520/cf01970f-2d64-4a5c-9327-c63b32870e67)

### Indicadores
http://localhost:3001/indicadores/3.1.1 - Observação: Especificar o indicadore desejado.
![image](https://github.com/mtshto/Global-Micro/assets/82169520/d41d52f9-5072-4544-adc1-fabc9b6a2757)
![image](https://github.com/mtshto/Global-Micro/assets/82169520/2ae89c13-abc1-4b5b-8983-41d96bbc67e7)




