**_ 3° Sprint _**

21/05/20 --> Se realizó reunión para definir y dividir los cambios y avances.

22/05/20 --> Se realizó reunión para ver procesos y adelantos.

23/05/20 --> Se realizó reunión donde se expuso cambios en el proyecto; planteando modificación entre los requerimientos en el 2° Sprint a lo requirido en el 3° Sprint.
Se implemento para todos los integrantess del grupo el uso de la extensión en VSC de TODO Hightlight 1.0.4.
Se plantearon mejoras en los controladores, routes y views para poder trabajar en los próximos sprint

24/05/20 --> Se realizó actualización en el proyecto, modificando tipo de métodos (Get, Post, Put, Delete)
Se plantearon cambios para realizar a futuro respecto a como se proyecta el sector de carrito, la configuración del administrador, ver la posibilidad de agregar un botón Volver, ver de aplicar formula para definir el total de la compra.

24/05/20 --> Se realizaron actualización en el proyecto, modificando tipo de métodos (Get, Post, Put, Delete)
Se plantearon cambios para realizar a futuro respecto a como se proyecta el sector de carrito, la configuración del administrador, ver la posibilidad de agregar un botón Volver, ver de aplicar formula para definir el total de la compra.

25/05/20 --> Se trabajo sobre el login y el create user

27/05/20 --> Se realizaron cambios y mejoras en la sección cart, cartControllers creandose forulario para la funcionalidad del agregar un producto al carrito y que la vista sea optima en la sección cart.
Se mejoro la visual del view cart respecto a lo planteado en sprint anteriores.
Se trabajo con algunos middlewars, session, multer.

28/05/20--> Se agrega información final para subir en git

**_ 4° Sprint _**

02/06/20 --> Reparado el mensaje de error “express-session deprecated”
Tema merge: ver la posibilidad de hacer merge cada vez que se trabaja en la branch individual y puede afectar a trabajo futuro de otro integrante del grupo.
Analisis de como prodeceren el 4° sprint, crear la carpeta en la master.
Analisis de cambios a futuro como ser el html y css en base al modelo de Mercadoliebre
Analisis individual de los futuros cambios que se pueden establecer entre el proyrecto creado por el grupo y el modelo Mercadoliebre
Se deja para definir en la proxima daily la situacion de migracion de Mercadoliebre

03/06/20 --> Creación de la carpeta del 4°sprint para comezar a trabajar en las mejoras e incorporar los nuevos conocimientos
Revisión de los campos para el uso en el 4°sprint
Vimos posibilidades de reeemplazo de rutas entre BeerStore y Mercadoliebre adaptando las clases, el css y el html/ejs

08/06/20 --> Se solucionó situación de eliminación del producto ya que se ejecutaba ssolo eliminación de la imagen y no del producto compelto en la vista pero se borraba en el json. Se modificó código para en productController a la hora de exportar y esto genero que el código funcione y pueda realizar la funcionalidad de borrar correctamente si generar error alguno.


09/06/20 --> Se agregó código en 'register.ejs' que corresponde para insertar/agregar el icono de Avatar para el login del usuario a registrarse
Se creo ruta de 'register.js' donde se guardará el avatar y se redirigirá a la ruta de 
Se creo ruta de 'stylesheets/register.css' con el detalle de estilo del icono Avatar
Se cambio destino de ruta redireccionando al '/home' si el usuario está logeado

Reunión 10/6/20 --> Se creo dentro de public/image, la carpeta ' usuario' donde se encontrarán imagenes de prueba de 200x200 para el avatar del login
Se crearon los archivos con cookies para que através de ellas se pueda procesar la información
Se agrego cookie para persistencia de logueo
Se cambio destino de ruta redireccionando al login si el usuario no está logeado al login si el usuario no está logeado
Se creo código referido al logout para cerrar sesión
Se modificaron rutas de directorio para imagenes
Configuración de '/createProduct' solo aparezca en cuando el Admin este logueado
Cuenta del administrador: Usuario: admin@beerstore.com - Contraseña: admin --> allí podrán ver el perfil del login adminsitrador

