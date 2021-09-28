const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://postgres@localhost:5432/fellowmvc');

module.exports = {
    Sequelize,
    sequelize,
    fellows: require("./fellow.model.js")(sequelize, Sequelize)
};