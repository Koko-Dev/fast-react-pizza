function CartItem( { item } ) {
    const {
              pizzaId, name, quantity, totalPrice
          } = item;
    return (
        <li>
            
            <p>{ quantity } &times; { name }</p>
            <div>
                <p>Total Price { totalPrice }</p>
                <p>PizzaId: { pizzaId } </p>

            </div>
        </li>
    );
}

export default CartItem;
