//Creo las variables por destructuracion
const [, , dia, mes, anio] = process.argv

//Creo una variable fecha y le asigno un nuevo objeto Date pasando por parametros los datos ingresados por consola
const fecha = new Date(anio, mes - 1, dia)
//Creo una variable diaLaboral que contiene el valor del dia de la semana con la funcion getDay()
const diaLaboral = fecha.getDay()

//Con un operador ternario consulto si diaLaboral es igual a 6 o igual a 0 ya que para Date()
//el domingo es el primer dia de la semana y comienza en 0
diaLaboral == 0 || diaLaboral == 6
	? console.log("La fecha ingresada no es un dia laboral")
	: console.log("la fecha ingresada es un dia laboral")
