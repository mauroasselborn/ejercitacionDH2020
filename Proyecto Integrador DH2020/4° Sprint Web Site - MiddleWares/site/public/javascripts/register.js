document.getElementById("inputFileAvatar").addEventListener("change", (e) => {
	// Creo el objeto de la clase FileReader
	let reader = new FileReader()
	// Leo el archivo subido y se lo paso al fileReader
	reader.readAsDataURL(e.target.files[0])

	reader.onload = function () {
		let contenedorAvatar = document.getElementById("contenedor-avatar")
		let avatar = document.createElement("img")

		avatar.src = reader.result
		avatar.id = "avatar"
		contenedorAvatar.appendChild(avatar)
	}
})
