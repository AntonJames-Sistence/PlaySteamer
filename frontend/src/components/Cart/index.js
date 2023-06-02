import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, getCartGames } from "../../store/cartItems";


const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(getCartGames);

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch]);

    if(!cartItems) return (<></>)

    const eachGame = () => {
        return cartItems.map((game) => {
            return (
                <div key={game.id}>
                    <h2>{game.title}</h2>
                </div>
            )
        })
    }

    return (
        <>
            <div>{eachGame()}</div>
        </>
    )
}

export default Cart;