module.exports = (sequelize, DataTypes) => {
	const alias = "UserCategory"
	const cols = {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}

	const config = {
		tableName: "users_category",
		timestamps: false,
	}

	const User_Category = sequelize.define(alias, cols, config)
	return User_Category
}
