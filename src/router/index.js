import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Billing from '../views/Billing.vue'
import Support from '../views/Support.vue'
import Affiliate from '../views/Affiliate.vue'
import Account from '../views/Account.vue'
import Newpage from '../components/Newpage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products
  },
  {
    path: '/billing',
    name: 'Billing',
    component: Billing

  },
  {
    path: '/support',
    name: 'Support',
    component: Support

  },
  {
    path: '/affiliate',
    name: 'Affiliate',
    component: Affiliate

  }, 
  {
    path: '/account',
    name: 'Account',
    component: Account

  },
  
  {
    path: '/newpage',
    name: 'Newpage',
    component: Newpage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
