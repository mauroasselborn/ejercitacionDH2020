const bcrypt = require("bcrypt")
const LocalStorage = require("node-localstorage").LocalStorage
const localStorage = new LocalStorage("./localStorage")
const db = require("../database/models")

const userController = {
	index: (req, res) => {
		db.Users.findAll({
			include: { association: "userCategory" },
		}).then((usuarios) => {
			res.render("users", {
				usuarios,
				nombre: req.session.nombre,
				imageUsr: req.session.imageUsr,
				usr: req.session.usr,
			})
		})
	},
	delete: (req, res) => {
		idUser = req.params.idUser

		db.Users.destroy({
			where: {
				id: idUser,
			},
		})
		res.redirect("/user")
	},
	editView: (req, res) => {
		let uC = db.UserCategory.findAll()

		let uId = db.Users.findByPk(req.params.idUser, {
			include: [{ association: "userCategory" }, { association: "provinces" }],
		})

		let p = db.Provinces.findAll()

		Promise.all([uC, uId, p]).then(([userCategory, usuario, provincias]) => {
			res.render("useredit", {
				userCategory,
				usuario,
				provincias,
				nombre: req.session.nombre,
				imageUsr: req.session.imageUsr,
				usr: req.session.usr,
				usrId: req.session.usrId ? req.session.usrId : "",
			})
		})
	},
	updateadm: (req, res) => {
		// variable que almacena el id pasando por parametro desde el router
		let idUser = req.params.idUser

		db.Users.update(
			{
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				category_id: req.body.category_id,
				email: req.body.email,
			},
			{
				where: {
					id: idUser,
				},
			},
		)

		res.redirect("/user")
	},
	updateusr: (req, res, next) => {
		let idUser = req.params.idUser

		db.Users.update(
			{
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				category_id: req.body.category_id,
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password, 10),
				category_id: req.body.category_id,
				address: req.body.address,
				birthdate: req.body.birthdate,
				image_url:
					req.files.length != 0 ? `/images/usuarios/${req.files[0].filename}` : req.body.image_url,
				city: req.body.city,
				province_id: req.body.province_id,
				zip: req.body.zip,
			},
			{
				where: {
					id: idUser,
				},
			},
		)
		res.redirect("/user/useredit/" + idUser)
		next()
	},
}

module.exports = userController
