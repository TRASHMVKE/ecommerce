import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Datos de ejemplo para los productos
const sampleProducts = [
  {
    id: 1,
    name: "Laptop Pro X",
    price: 1299.99,
    description:
      "Potente laptop para profesionales creativos y desarrolladores.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.mgqa-Lt9Zy7xds5rvg4Y_gHaE8?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Monitor Curvo UltraWide",
    price: 450.5,
    description: "Experiencia inmersiva con pantalla curva de 34 pulgadas.",
    imageUrl:
      "https://th.bing.com/th/id/R.509452f40906f1caf7f0c9952b1117eb?rik=Bhh1B%2bhLHhLbmQ&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    name: "Teclado Mecánico RGB",
    price: 89.0,
    description: "Switches táctiles, retroiluminación RGB personalizable.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.P7GmS_fsAHe9lAmbIneW1QHaE8?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Ratón Gaming Inalámbrico",
    price: 59.99,
    description:
      "Sensor de alta precisión, diseño ergonómico, batería de larga duración.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.pl8tQbWVM494w7Ql2HP0LAHaH9?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Auriculares Gaming con Micrófono",
    price: 79.5,
    description:
      "Sonido envolvente 7.1, micrófono con cancelación de ruido, almohadillas cómodas.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.xt8Pf5vIk7sXdRxCbq8IUwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    name: "Monitor Gaming 27'' 144Hz",
    price: 249.0,
    description: "Pantalla curva, 1ms de respuesta, tecnología FreeSync.",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_700380-MLM31993424616_082019-F.jpg",
  },
  {
    id: 7,
    name: "Silla Gaming Ergonómica",
    price: 189.0,
    description:
      "Soporte lumbar ajustable, reposabrazos 4D, reclinable 180 grados.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.nabYowqk9Y9V8U2X_pwOmQHaHa?rs=1&pid=ImgDetMain",
  },
  // Agrega más productos si es necesario
];

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Home products={sampleProducts} />
      <Footer />
    </CartProvider>
  );
};

export default App;
