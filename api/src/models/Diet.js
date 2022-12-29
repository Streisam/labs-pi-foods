const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('diet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement:true,
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
}