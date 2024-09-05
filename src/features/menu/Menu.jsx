import { getMenu } from '../../services/apiRestaurant.js';
import { useLoaderData } from 'react-router-dom';


function Menu() {
    const menu = useLoaderData();
    console.log(menu);
    
    
    return (
        <div>Menu</div>
    );
}


export async function loader() {
    const menu = await getMenu();
    return menu;
}


export default Menu;
