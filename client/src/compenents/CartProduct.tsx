import { useEffect, useState } from "react";
import { useAppContext } from "../ApiContext/apicontext";
import axios from "axios";
import { remove } from "../assets/assets";

const CartProduct = ({ carditem, SetTotal }: { carditem: any; SetTotal: any }) => {
  const { getProducts, products, BACKEND_URL, getUser } = useAppContext();

  const [Quantity, SetQuantity] = useState(carditem.quantity);
  const [product, setProduct] = useState<any | null>(null);

  async function removeItem() {
    await axios.delete(`${BACKEND_URL}/cart/item/${carditem.id}`);
    getUser();
  }

  async function handleQuantity(newQ: number) {
    if (!product) return;
    await axios.put(`${BACKEND_URL}/cart/item/${carditem.id}`, {
      Quantity: newQ,
      productId: product.id,
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setProduct(products.find((u) => u.id === carditem.productId) || null);
    }
  }, [products, carditem.productId]);

  if (!product) return null;

  return (
    <div className="flex relative  flex-col sm:flex-row  items-center justify-between gap-6 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      {/* Product image */}
      <div className="flex justify-center items-center  sm:gap-x-4">
        <div
        style={{ backgroundImage: `url(${product.image})` }}
        className="bg-cover bg-center bg-no-repeat rounded-lg h-40  w-30 sm:h-28 sm:w-28"
      ></div>

      {/* Product info */}
      <div className="flex flex-col w-28 pl-4 text-left">
  <p className="font-medium text-sm break-words sm:w-40">{product.name}</p>
  <p className="text-gray-500 text-xs">{product.genre}</p>
  <p className="text-gray-500 text-xs">Size: {carditem.size}</p>
  <p className="text-purple-600 font-semibold text-sm mt-1">
    {product.price} DA
  </p>
</div>

      </div>

      {/* Quantity controller */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            if (Quantity > 1) {
            const newQ = Quantity - 1;
            SetQuantity(newQ);
            handleQuantity(newQ);
            SetTotal((prev: number) => prev - product.price);
          }
          }}
          className="px-2 py-1 w-7 h-7 cursor-pointer flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-sm">{Quantity}</span>
        <button
          onClick={() => {
            const newQ = Quantity + 1;
            SetQuantity(newQ);
            handleQuantity(newQ);
            SetTotal((prev: number) => prev + product.price);
          }}
          className="px-2 cursor-pointer w-7 h-7 flex items-center justify-center py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Total */}
      <p className="text-sm font-semibold"> {Number(Quantity * product.price).toFixed(2)}  DA</p>

      {/* Remove button */}
      <img
        src={remove}
        alt="Remove"
        onClick={removeItem}
        className="w-6 cursor-pointer absolute right-3  top-3 hover:scale-110 transition"
      />
    </div>
  );
};

export default CartProduct;
