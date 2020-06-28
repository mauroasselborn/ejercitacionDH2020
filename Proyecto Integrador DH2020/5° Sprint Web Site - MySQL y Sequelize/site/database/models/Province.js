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

	Province.associate = (models) => {
		Province.hasMany(models.Users, {
			as: "users",
			foreignKey: "province_id",
		})
	}
	return Province
}
