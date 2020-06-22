module.exports = (sequelize, DataTypes) => {
	const alias = "ProductsCategory"
	const cols = {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}

	const config = {
		tableName: "products_category",
		timestamps: false,
	}

	const Product_Category = sequelize.define(alias, cols, config)

	Product_Category.associate = (models) => {
		Product_Category.hasMany(models.Products, {
			as: "products",
			foreignKey: "category_id",
		})
	}

	return Product_Category
}
