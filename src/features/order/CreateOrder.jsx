//import { useState } from 'react';


// https://uibakery.io/regex-library/phone-number
const isValidPhone = ( str ) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str );

const fakeCart = [
    {
        pizzaId: 12, name: 'Mediterranean', quantity: 2, unitPrice: 16, totalPrice: 32,
    }, {
        pizzaId: 6, name: 'Vegetale', quantity: 1, unitPrice: 13, totalPrice: 13,
    }, {
        pizzaId: 11, name: 'Spinach and Mushroom', quantity: 1, unitPrice: 15, totalPrice: 15,
    },
];

function CreateOrder() {
//    const [withPriority, setWithPriority] = useState( false );
    
    const cart = fakeCart;
    
    return (
        <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */ }
            <h2>Ready to order?  Let's go!</h2>
            
            <form>
                <div>
                    <label>First Name</label>
                    <input type='text' name='customer' required />
                </div>
                
                <div>
                    <label>Phone number</label>
                    <input type='tel' name='phone' required />
                </div>
                
                <div>
                    <label>Address</label>
                    <input type='text' name='address' required />
                </div>
                
                <div>
                    <label>First Name</label>
                    <input
                        type='checkbox'
                        name='priority'
                        id='priority'
                        //                        value={ withPriority }
                        //                        onChange={ e => setWithPriority( e.target.checked ) }
                        required
                    />
                </div>
                
                <div>
                    <button>Order now</button>
                </div>
            </form>
            
        </div>
    );
}


export default CreateOrder;