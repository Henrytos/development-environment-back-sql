## Comandos 
    git clone 
    npm init -y

## instalação do sequelize(opcional)
    
    npm install sequelize pg pg-hstore express

    npm install -g sequelize-cli
    
    npm install sequelize-cli -D

### comandos do sequelize(opcional)
   
    inicialização
    npx sequelize-cli init  
        
    criação do banco de dados
    sequelize db:create

    <h3>config data base</h3>

    <h3>config/config.js</h3>

    <code>

    module.exports = {
    dialect: "type_db",
    host: "localhost",
    username: "user_name",
    password: "password_ps",
    database: "name_data_base",
    define: {
      timestamps: true,
    },
    };

    </code>

    criação de migration
    sequelize migration:create --name=name_migration

    executar migration
    sequelize db:migrate
    sequelize db:migrate



## dependecias 

    "cors": "^2.8.5",
    "express": "^4.18.2",
    "pg": "^8.11.3",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.35.1"

## dependecias de DEV

    "nodemon": "^3.0.2",
    "sequelize-cli": "^6.6.2"

