module.exports=(sequelize, Sequelize)=>{
    return sequelize.define("fellow", {
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        cohort: {
            type: Sequelize.STRING
        }
    })
}