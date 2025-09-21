import { useAppContext } from "../ApiContext/apicontext";
import { useEffect, useState } from "react";
import CartProduct from "../compenents/CartProduct";

const Cart = () => {
  const { SetDashboard_Current, getUser, Cart ,User} = useAppContext();
  const [Total, SetTotal] = useState(0);

  useEffect(() => {
    if (Cart && Cart.items) {
      const sum = Cart.items.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
      );
      SetTotal(sum);
    }
  }, [Cart]);

  useEffect(() => {
    SetDashboard_Current("cart");
    getUser();
  }, []);

  return (
   
      <div className="w-full flex justify-center items-start px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
          {/* Left side - products */}
          <div className="flex-1 bg-gray-100 rounded-xl p-6 ">
            <h2 className="text-lg font-semibold mb-4 text-center">Shopping Cart</h2>

            {Cart?.items && Cart.items.length > 0 ? (
              <div className="flex flex-col gap-4">
                {Cart?.items.map((carditem) => (
                  <CartProduct
                    key={carditem.id}
                    carditem={carditem}
                    SetTotal={SetTotal}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                Your cart is empty 🛒
              </div>
            )}
          </div>

          {/* Right side - summary */}
          <div className="w-full lg:w-80 bg-white rounded-xl shadow-lg shadow-gray-200 p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 border-y py-4 border-gray-300">
              <p className="flex justify-between text-sm">
                <span>Subtotal</span> <span>{(Total.toFixed(2))} DA</span>
              </p>
              <p className="flex justify-between text-sm">
                <span>Shipping</span> <span className="text-green-600">Free</span>
              </p>
              <p className="flex justify-between font-semibold">
                <span>Total</span> <span>{(Total).toFixed(2)} DA</span>
              </p>
            </div>
            <button className="w-full mt-4 cursor-pointer bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    )
  
};

export default Cart;
