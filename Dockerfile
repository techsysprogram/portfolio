# Utiliser une version stable de Node.js
FROM node:20

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY . .

# Installer les dépendances
RUN npm install

# Construire l'application
RUN npm run build

# Exposer le port utilisé par Northflank
EXPOSE 3000

# Lancer l'application
CMD ["npm", "run", "start"]
