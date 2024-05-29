import Error404 from './404.jsx';
//const Error404 = <div>404 - Page Not Found</div>
import Home from './Home.jsx'
import Merch from './Merch.jsx'
import Cart from './Cart.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Shipping from './Shipping.jsx'
import Payment from './Payment.jsx'
import PlaceOrder from './PlaceOrder.jsx'
import Order from './Order.jsx'
import Profile from './Profile.jsx'


//admin
import OrderList from './admin/OrderList.jsx';
import ProductList from './admin/ProductList.jsx';
import ProductEdit from './admin/ProductEdit.jsx';
import UserList from './admin/UserList.jsx';
import UserEdit from './admin/UserEdit.jsx';
const admin = {
    OrderList,
    ProductList,
    ProductEdit,
    UserList,
    UserEdit
}


const manifest = {
    Error404,  
    Home, 
    Merch,
    Cart,
    Login,
    Register, 
    Shipping,
    Payment,
    PlaceOrder,
    Order,
    Profile,
    admin
}


export default manifest;