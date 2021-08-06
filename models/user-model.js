module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING           
        },
        lastname: {
            type: Sequelize.STRING,            
        },
        nickname: {
            type: Sequelize.STRING(30)            
        },
        address: {
            type: Sequelize.STRING
        },
        bio: {
            type: Sequelize.STRING(100)
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }

    })

    return User
}