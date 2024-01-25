module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User',{
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true // by defaults it true as well
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            noUpdate : true
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        },
        OLM : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            noUpdate : true
        },
        createdBy : {
            type: DataTypes.INTEGER,
        },
        updatedBy : {
            type: DataTypes.INTEGER,
        }
    },
    {
        // used for prevent of pulerazation of ORM
        // freezeTableName: true
    }
    );
}