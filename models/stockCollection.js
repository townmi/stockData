var Sequelize = require("sequelize");
var settings = require("../config/setting.js");

var sequelize = new Sequelize(settings.db, settings.user, settings.password, {
    host: settings.host,
    port: settings.port,
    dialect: "mysql"
});

var stockCollection = sequelize.define('stockCollection', {
    ID: {
        type: Sequelize.INTEGER(100),
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        comment: "主键"
    },
    STOCKID: {
        type: Sequelize.INTEGER(200),
        allowNull: false,
        defaultValue: " ",
        comment: "股票代码"
    },
    STOCKNAME: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
        comment: "股票简称"
    },
    STOCKCHINANAME: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
        comment: "股票名称"
    }
    CREATEDAT: {
        type: Sequelize.DATE
    },
    UPDATEAT: {
        type: Sequelize.DATE
    }
}, {
    createdAt: 'CREATEDAT',
    updatedAt: 'UPDATEAT',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = stockCollection;