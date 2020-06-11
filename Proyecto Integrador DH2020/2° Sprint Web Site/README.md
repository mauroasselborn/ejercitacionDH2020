## Funcionalidad de la página
---

**1_** La misma es totalmente dinámica. Con la salvedad que el ***carrito*** y el formulario de ***lóguin*** son estáticos por el momento. Todos ellos validan la información ingresada, distinguiendo entre números, letras, correos electrónicos y contraseñas. Si estas condiciones no se cumplen el formulario no permite ser enviado.

--

**2_**  El formulario, ***carga de nuevos productos***, funciona correctamente permitiendo realizar una carga con éxito y almacenarla en un archivo de extensión ***JSON*** que es usado para listar todos los productos en la sección ***Productos*** la cual se carga y comporta dinámicamente utilizando el archivo antes mencionado.

--

**3_** La estructura *HTML* de *pruducts.ejs* es una sola y se repite, mediente un sentencia ***for***, una cantidad de veces acorde al número de elementos que posea el archivo ***JSON*** de productos. Permitiendonos visualizar cada uno de ellos de una forma dinámica.

--

**4_** Cada producto posee, a su vez, una ***página de detalles*** con una estructura *HTML* única, *productDetail.ejs*, la cual se comporta de forma dinámica obteniendo los datos del archivo *JSON* de productos según el ***id*** del producto seleccionado. Podemos encontrar un botón **Ver Detalle** en cada producto en el listado general de la sección *Productos* y una vez *dentro de los detalles*, volver a la misma, con un botón **Volver** que nos posiciona exactamente en el mismo artículo del listado de productos con un *scroll smoth* que solo funciona en desktop.

--

**5_** De igual manera se comporta el ***carrito de compras*** el cual trabaja de forma similar al comportamiento de la ***página de detalles***. Teniendo una estructura *productCart.ejs* única y dinámica la cual trabaja con el archivo *JSON* de productos. Podemos encontrar, en cada producto del listado general, un botón verde que los agrega al carrito de compras.

--

**6_** La sección ***Registro de usuarios*** no solo valida la información ingresada sino que al registrar correctamente a un usuario nos redirecciona a una nueva página confirmando que el registro fue exitoso.

--

**7_** La sección ***Home***, posee una estructura dinámica, completamente responsive, la cual es reutilizada por el resto de las secciones.

Posee Un *Slider* completamente funcional con botones que redireccionan al usuario hasta la sección productos, para poder ver más información.

---
