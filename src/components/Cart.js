import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-2 p-3 ">
            <div className="text-2xl font-bold">Cart </div>
            <div className="w-6/12 m-auto" >
                <button className="m-2 p-2 text-white bg-black rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {CartItems.length===0 && <h3>Card is empty.Add items to cart</h3>}
                <ItemList items={CartItems} /> 
            </div>
        </div>
    );
};
export default Cart; 