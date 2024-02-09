module.exports = (sequelize, DataTypes)=>{
    return sequelize.define("Site", {
        siteId : {
            type : DataTypes.STRING,
            allowNull : false,
            unique: true,
            noUpdate : true
        },
        siteName : {
            type : DataTypes.STRING,
        },
        FM : {
            type : DataTypes.STRING,
        },
        toco : {
            type : DataTypes.STRING,
        },
        tocoId : {
            type : DataTypes.STRING,
        },
        Latitude : {
            type : DataTypes.STRING,
        },
        Longitude : {
            type : DataTypes.STRING,
        },
        zone : {
            type : DataTypes.STRING,
        },
        ms1Ms2 : {
            type : DataTypes.STRING,
        },
        siteType : {
            type : DataTypes.STRING,
        },
        towerType : {
            type : DataTypes.STRING,
        },
        DG : {
            type : DataTypes.STRING,
        },
        DG_rating : {
            type : DataTypes.INTEGER,
        },
        technicianName : {
            type : DataTypes.STRING,
        },
        technicianPhone : {
            type : DataTypes.STRING,
        }
    });
}