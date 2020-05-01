let foto = document.getElementById("foto")
let audio = document.getElementById("audio")
let botella = document.getElementById("botella")
let boca = document.getElementsByClassName("boca")[0]
let contImg = document.getElementsByClassName("contenedor-img")[0]
let aplausos = document.getElementById("aplausos")
let fail = document.getElementById("fail")
let segundero = document.getElementById("segundero")
let btnComenzar = document.getElementById("boton-comenzar")
let dificultad = document.getElementById("dificultad")
let persec = document.getElementById("persec")
let success = document.getElementById("success")

let harold = document.getElementById("harold")
//let video = document.getElementById("video")

let segundos
let timerDiff

btnComenzar.addEventListener("click", queComienceElJuego, true)

function queComienceElJuego() {
	segundero.style.display = "block"
	foto.style.display = "block"
	botella.style.display = "block"

	harold.style.visibility = "hidden"
	success.style.display = "none"
	//video.style.display = "none"
	persec.play()

	audio.pause()
	audio.currentTime = 0
	aplausos.pause()
	aplausos.currentTime = 0

	timerDiff = Number(dificultad.value)
	segundos = 20

	if (timerDiff == 1) timerDiff = 1000
	else if (timerDiff == 2) timerDiff = 700
	else {
		timerDiff = 400
		segundos = 30
	}

	let movimiento = setInterval(() => {
		let red = Math.random() * 255
		let green = Math.random() * 255
		let blue = Math.random() * 255
		foto.style.top = `${Math.random() * 85}vh`
		foto.style.left = `${Math.random() * 85}vw`

		document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
	}, timerDiff)

	let timer = setInterval(() => {
		segundero.innerHTML = segundos
		segundos--
		if (segundos < 0) {
			fail.play()
			persec.pause()
			persec.currentTime = 0
			clearInterval(timer)
			clearInterval(movimiento)
			document.removeEventListener("mousemove", moverBotella, true)
			foto.style.display = "none"
			botella.style.display = "none"

			harold.style.visibility = "visible"
			harold.classList.toggle("harold-scale")
			//video.style.display = "block"
			//video.play()
		}
	}, 1000)

	document.addEventListener("mousemove", moverBotella, true)

	function moverBotella(e) {
		let x = e.clientX - 100
		let y = e.clientY - 50
		let medioFotoX = foto.offsetLeft + 120
		let medioFotoY = foto.offsetTop + 120
		let top1 = medioFotoY - 10
		let top2 = medioFotoY + 10
		let left1 = medioFotoX - 10
		let left2 = medioFotoX + 10
		botella.style.left = `${x}px`
		botella.style.top = `${y}px`

		if (x > left1 && x < left2) {
			if (y > top1 && y < top2) {
				audio.play()
				setTimeout(() => {
					aplausos.play()
					foto.style.display = "none"
					botella.style.display = "none"

					success.style.display = "block"
				}, 2000)
				clearInterval(movimiento)
				clearInterval(timer)
				document.removeEventListener("mousemove", moverBotella, true)
				persec.pause()
				persec.currentTime = 0
			}
		}
	}
}
