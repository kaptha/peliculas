import { createContext, useState } from "react";

const ShopContext = createContext()

const ShopProvider = ({ children }) => {
  const [cartShop, setCartShop] = useState(null);

  const clearShop = () => {
    // eliminamos los datos de carrito
    setCartShop(null);
    localStorage.removeItem("cartShop");
  };

  const deleteItem = (item) => {
    var carrito = JSON.parse(localStorage.getItem("cartShop")) || [];

    // Eliminar el producto del carrito
    carrito.splice(item, 1);

    // Guardar el carrito actualizado en el almacenamiento local
    setCartShop({ carrito });
    localStorage.setItem("cartShop", JSON.stringify(carrito));

  };

  const addProduct = (dato) => {
    // Obtener el carrito del almacenamiento local
    let carrito = JSON.parse(localStorage.getItem("cartShop")) || [];
    console.log("aui", dato);
    // Agregar el producto al carrito
    carrito.push(dato);

    // Guardar el carrito actualizado en el almacenamiento local
    setCartShop({ carrito });
    localStorage.setItem("cartShop", JSON.stringify(carrito));

  }; 

  return (
    <ShopContext.Provider value={{ cartShop, addProduct, clearShop, deleteItem }}>
      {children}
    </ShopContext.Provider>
  )
}

export { ShopContext, ShopProvider };