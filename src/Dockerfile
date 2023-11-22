# Use the official Node.js image
FROM node:alpine

# Crie o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte
COPY . .

# Exponha a porta do aplicativo
EXPOSE 3001

# Comando para iniciar o aplicativo
CMD ["node", "./bin/server.js"]
