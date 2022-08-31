const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Results extends Model { }

Results.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Correct: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        //Table Configuration options
        sequelize,
        freezeTableName:true,
        underscored: true,
        modelName: 'results'
    }
);

module.exports = Results;