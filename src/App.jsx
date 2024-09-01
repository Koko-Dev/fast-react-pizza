import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home.jsx';
import Menu from './features/menu/Menu.jsx';
import Cart from './features/cart/Cart.jsx';


const router = createBrowserRouter( [
                                        {
                                            path: '/',
                                            element: <Home />,
                                        },
                                        {
                                            path: '/menu',
                                            element: <Menu />,
                                        },
                                        {
                                            path: '/cart',
                                            element: <Cart />,
                                        }
                                    ] );


function App() {
    return (
        <RouterProvider router={ router } />
    );
}

export default App;