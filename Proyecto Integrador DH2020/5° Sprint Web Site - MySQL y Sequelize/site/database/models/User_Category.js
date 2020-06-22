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

	User_Category.associate = (models) => {
		User_Category.hasMany(models.Users, {
			as: "users",
			foreignKey: "category_id",
		})
	}

	return User_Category
}
