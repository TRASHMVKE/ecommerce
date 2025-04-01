🛒 Tienda Tech - E-commerce con React y Tailwind CSS

Link de el proyecto alojado en Vercel: https://ecommerce-ochre-tau.vercel.app/


Este es un proyecto de una tienda en línea (e-commerce) construida con React, Tailwind CSS, y React Context API para manejar el carrito de compras. Es una aplicación moderna y responsiva donde los usuarios pueden explorar productos, agregarlos al carrito, y visualizar el detalle de cada producto.

🚀 Tecnologías utilizadas
React: Para construir la interfaz de usuario de la aplicación.

Tailwind CSS: Framework de diseño para estilizar la aplicación.

React Context API: Para manejar el estado global del carrito de compras.

Lucide Icons: Para los iconos del carrito de compras y otros elementos visuales.

📦 Funcionalidades principales
Explorar productos: Los usuarios pueden ver una lista de productos con su nombre, descripción, imagen y precio.

Agregar al carrito: Los usuarios pueden agregar productos al carrito de compras.

Ver carrito: Un modal muestra los productos añadidos al carrito con la opción de eliminar productos o modificar la cantidad.

Ver detalles del producto: Al hacer clic en un producto, se abre un modal que muestra más detalles sobre el artículo.

💡 Estructura del proyecto
El proyecto está organizado en las siguientes carpetas y archivos:

![image](https://github.com/user-attachments/assets/251f74d5-b16c-4a17-a8a5-b40a634601ff)


Vista previa de la aplicación
Aquí tienes una vista previa de cómo se ve la aplicación:

![Screenshot_31-3-2025_222548_ecommerce-ochre-tau vercel app](https://github.com/user-attachments/assets/f31516d0-11bf-44ea-9229-5a6200127482)


Página principal: Muestra una lista de productos con opciones para agregarlos al carrito.


Modal del carrito: Muestra los productos agregados al carrito con la opción de eliminar o modificar la cantidad.


Modal del producto: Muestra los detalles completos de un producto al hacer clic sobre él.


Diseño responsivo
La aplicación está completamente diseñada para ser responsiva. Los productos se muestran en una cuadrícula, y la interfaz se adapta a dispositivos móviles, tabletas y escritorios.

🔧 Detalles de la implementación
CartContext.js: Este archivo contiene la lógica para manejar el carrito de compras utilizando la React Context API. Dentro del CartProvider, se gestionan las funciones para agregar, eliminar y ver el carrito.

Home.jsx: Muestra la lista de productos usando el componente ProductCard. Cada tarjeta de producto tiene la opción de ser agregada al carrito.

ProductCard.jsx: Cada tarjeta de producto muestra una imagen, nombre, descripción, y precio. Tiene un botón que agrega el producto al carrito cuando se hace clic.

Header.jsx: Contiene el icono del carrito y muestra la cantidad de productos agregados en el carrito.

Footer.jsx: Es un pie de página sencillo con información de derechos de autor.

🛠️ Mejoras posibles
Autenticación: Puedes agregar una funcionalidad de inicio de sesión para que los usuarios puedan guardar su carrito entre sesiones.

Integración con API: Los productos pueden ser obtenidos de una API en lugar de estar codificados estáticamente.

Carrito persistente: Puedes guardar los productos del carrito en el almacenamiento local (localStorage) para mantener el estado incluso después de cerrar la página.

📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

