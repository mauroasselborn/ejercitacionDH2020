module.exports = (sequelize, DataTypes) => {
	const alias = "Products"
	const cols = {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		size_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		origin: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		alcohol: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		ibu: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		image_url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}

	const config = {
		tableName: "products",
		timestamps: false,
	}

	const Product = sequelize.define(alias, cols, config)

	Product.associate = (models) => {
		Product.belongsTo(models.ProductsCategory, {
			as: "products_category",
			foreignKey: "category_id",
		}),
			Product.belongsTo(models.ProductsSize, {
				as: "products_size",
				foreignKey: "size_id",
			})
	}

	return Product
}
