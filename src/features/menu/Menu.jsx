import { getMenu } from '../../services/apiRestaurant.js';


function Menu() {
    return (
        <div>Menu</div>
    );
}


export async function loader() {
    const menu = await getMenu();
    return menu;
}


export default Menu;
