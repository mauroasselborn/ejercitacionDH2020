module.exports = (sequelize, DataTypes) => {
	const alias = "Provinces"
	const cols = {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}

	const config = {
		tableName: "provinces",
		timestamps: false,
	}

	const Province = sequelize.define(alias, cols, config)
	return Province
}
