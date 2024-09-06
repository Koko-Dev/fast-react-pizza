import CartItem from './CartItem.jsx';
import { Link } from 'react-router-dom';


const fakeCart = [
    {
        pizzaId: 12, name: 'Mediterranean', quantity: 2, unitPrice: 16, totalPrice: 32,
    }, {
        pizzaId: 6, name: 'Vegetable', quantity: 1, unitPrice: 13, totalPrice: 13,
    }, {
        pizzaId: 11, name: 'Spinach and Mushroom', quantity: 1, unitPrice: 15, totalPrice: 15,
    },
];


function Cart() {
    const cart = fakeCart;
    return (
        <div>
            <Link to='/menu'>Back to menu</Link>
            
            <ul>
                { cart.map( ( item ) => (
                    <CartItem item={ item } key={ item.pizzaId } />
                ) ) }
            </ul>
            
            <div>
                <button>
                    Order pizzas
                </button>
                <button>Clear cart</button>
            </div>
        </div>
    );
}


export default Cart;
