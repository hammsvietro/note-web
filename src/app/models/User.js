const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        prePassword: DataTypes.VIRTUAL
    },{
        hooks: {

            beforeCreate: async (user) => {
                if(user.prePassword){
                    user.password = await bcrypt.hash(user.prePassword, 8);
                }
            }
        }
    }



    );
    return User
};