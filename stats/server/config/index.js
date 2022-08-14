const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== 'prod') {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: process.env.PORT,
    DATABASE: process.env.DB_DATABASE,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    DIALECT: process.env.DB_DIALECT,
    APP_SECRET: process.env.APP_SECRET,
}
