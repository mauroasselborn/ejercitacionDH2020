module.exports = (sequelize, DataTypes) => {
	const alias = "ProductsSize"
	const cols = {
		size: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}

	const config = {
		tableName: "products_size",
		timestamps: false,
	}

	const ProductSize = sequelize.define(alias, cols, config)

	ProductSize.associate = (models) => {
		ProductSize.hasMany(models.Products, {
			as: "products",
			foreignKey: "size_id",
		})
	}

	return ProductSize
}
