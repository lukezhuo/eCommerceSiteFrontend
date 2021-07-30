import Vue from 'vue';
import Router from 'vue-router';
import Items from '../components/Items.vue';
import Ping from '../components/Ping.vue';
import Home from '../components/Home.vue';
import Product from '../components/Product.vue';
import Login from '../components/Login.vue';
import Search from '../components/Search.vue';
import Results from '../components/Results.vue';
import Account from '../components/Account.vue';
import WriteReview from '../components/WriteReview.vue';
import Cart from '../components/Cart.vue';
import AddToCart from '../components/AddToCart.vue';
import RemoveFromCart from '../components/RemoveFromCart.vue';
import Shipment from '../components/Shipment.vue';
import Register from '../components/Register.vue';
import balance from '../components/balance.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/items',
      name: 'Items',
      component: Items,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/results',
      name: 'Results',
      component: Results,
    },
    {
      path: '/product:id',
      name: 'Product',
      component: Product,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/writereview:id',
      name: 'WriteReview',
      component: WriteReview,
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/addtocart:id',
      name: 'AddToCart',
      component: AddToCart,
    },
    {
      path: '/removefromcart:id',
      name: 'RemoveFromCart',
      component: RemoveFromCart,
    },
    {
      path: '/shipment',
      name: 'Shipment',
      component: Shipment,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});
