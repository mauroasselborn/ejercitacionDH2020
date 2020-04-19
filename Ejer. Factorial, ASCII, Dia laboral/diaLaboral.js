//Creo las variables por destructuracion
const [, , dia, mes, anio] = process.argv;

//Creo una variable fecha y le asigno un nuevo objeto Date pasando por parametros los datos ingresados por consola
const fecha = new Date(anio, mes - 1, dia).getDay();

//Con un operador ternario consulto si diaLaboral es igual a 6 o igual a 0 ya que para Date()
//el domingo es el primer dia de la semana y comienza en 0
fecha == 0 || fecha == 6
    ? console.log("La fecha ingresada no es un dia laboral")
    : console.log("la fecha ingresada es un dia laboral");
