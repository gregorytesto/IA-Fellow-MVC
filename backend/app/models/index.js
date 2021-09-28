const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

module.exports = {
    Sequelize,
    sequelize,
    fellows: require("./fellow.model.js")(sequelize, Sequelize)
};