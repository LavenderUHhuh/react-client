//引入两个路由的组件

import Admin from '../components/Admin/Admin'
//引入
import Category from '../containers/category/Category'
//引入商品组件
import Product from '../containers/product/Product.jsx'
//引入添加或者修改商品的组件
import AddUpdate from '../containers/product/add-update/AddUpdate'
//引入Role组件
import Role from '../containers/role/Role'
//引入User组件
import User from '../containers/user/User'

export default[
 
  {
    exact:true,
    path:'/',
    component:Admin
  },
  {
    exact:true,
    path:'/category',
    component:Category
  },{
    exact:true,
    path:'/Product',
    component:Product
  },
  {
    exact:true,
    path:'/Product/addupdate',
    component:AddUpdate
  },
  {
    exact:true,
    path:'/role',
    component:Role
  },
  {
    exact:true,
    path:'/user',
    component:User
  }
]