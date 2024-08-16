import { useState } from 'react';
import Image from 'next/image';

function Cart(){
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleAddToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    updateTotalPrice();
  }

  function handleRemoveItem(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    updateTotalPrice();
  }

  function updateTotalPrice() {
    const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      <ul className="list-disc">
        {cartItems.map((item) => (
          <li key={item.id}>
            <Image src={item.image} alt={item.name} width={50} height={50} />
            <span>{item.name}</span>
            <span> x {item.quantity}</span>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}