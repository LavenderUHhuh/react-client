//引入两个路由的组件

import Admin from '../components/Admin/Admin'
//引入
import Category from '../containers/category/Category'
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
  }
]