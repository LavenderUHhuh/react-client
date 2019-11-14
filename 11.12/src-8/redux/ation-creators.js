//包含了多个同步操作.action法人creator--包含了产生的多个action对象的工厂函数
import { SAVE_USER, REMOVE_USER, UPDATE_TITLE, GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DEL_CATEGORY, GET_ROLES ,ADD_ROLE,UPDATE_ROLE,DELETE_ROLE,GET_USERS,ADD_USER, UPDATE_USER,DELETE_USER} from './action-types'
//引入接口文件
import { reqCategories, reqAddCategory, reqUpdateCategory, reqDeleteCategory, reqGetRoles, reqAddRole,reqUpdateRole,reqDeleteRole ,reqGetUsers,reqAddUser,reqUpdateUser,reqDeleteUser} from '../api/index'


//保存用户信息(的同时也要保存token)
export const saveUser = (value) => ({ type: SAVE_USER, data: value })

//删除用户信息（的同时也要删除token）
export const removeUser = () => ({ type: REMOVE_USER })

//更新title信息
export const updateTitle = (value) => ({ type: UPDATE_TITLE, data: value })

//获取分类信息数据的同步ation对象
export const getCategoriesSuccess = (categories) => ({ type: GET_CATEGORIES, data: categories })
//获取分类信息数据的异步action函数
export const getCategories = () => {
  return async (dispatch) => {
    const result = await reqCategories()
    if (result.status === 0) {
      //请求接口成功后，有了结果之后，在分发同步的action
      dispatch(getCategoriesSuccess(result.data))
    }
  }
}
//添加分类信息的数据的同步action对象
export const addCategorySuccess = (category) => ({ type: ADD_CATEGORY, data: category })
//添加分类信息的数据的异步action函数
export const addCategory = (categoryName) => {
  return async (dispatch) => {
    const result = await reqAddCategory(categoryName)
    if (result.status === 0) {
      //成功了，就是有结果了
      dispatch(addCategorySuccess(result.data))
    }
  }

}

//更新分类信息的数据额同步action对象
export const updateCategorySuccess = (category) => ({ type: UPDATE_CATEGORY, data: category })
//更新分类信息的数据的异步action函数
export const updateCategory = (categoryId, categoryName) => {
  return async (dispatch) => {
    //发送请求
    const result = await reqUpdateCategory(categoryId, categoryName)
    if (result.status === 0) {
      dispatch(updateCategorySuccess(result.data))
    }
  }
}
//删除分类信息的数据的同步action对象
export const delCategorySuccess = (categoryId) => ({ type: DEL_CATEGORY, data: categoryId })
//删除分类信息的数据的异步action函数
export const delCategory = (categoryId) => {
  return async (dispatch) => {
    //发送请求
    const result = await reqDeleteCategory(categoryId)
    if (result.status === 0) {
      dispatch(delCategorySuccess(result.data))
    }
  }
}
//获取角色信息数据的同步action
const getRolesSuccess = (roles) => ({ type: GET_ROLES, data: roles })
//获取角色信息数据的异步action
export const getRoles = () => {
  return async (dispatch) => {
    //发送异步请求
    const result = await reqGetRoles()
    if (result.status === 0) {
      //分发同步action
      dispatch(getRolesSuccess(result.data))
    }
  }
}

 //添加角色信息数据的同步action对象
const addRoleSuccess=(role)=>({type:ADD_ROLE,data:role})

 //添加角色信息数据的异步action函数
export const addRole=(name)=>{
  return async(dispatch)=>{
    const result=await reqAddRole(name)
    if(result.status===0){
      dispatch(addRoleSuccess(result.data))
    }
  }
}

 //修改角色信息数据的同步action对象
 const updateRoleSuccess=(role)=>({type:UPDATE_ROLE,data:role})

 //修改角色信息数据的异步action函数
export const updateRole=(roleId,authName,menus)=>{
  return async(dispatch)=>{
    const result=await reqUpdateRole(roleId,authName,menus)
    if(result.status===0){
      dispatch(updateRoleSuccess(result.data))
    }
  }
}

 //删除角色信息数据的同步action对象
 const deleteRoleSuccess=(roleId)=>({type:DELETE_ROLE,data:roleId})

 //删除角色信息数据的异步action函数
 export const deleteRole=(roleId)=>{
   return async (dispatch)=>{
     const result =await reqDeleteRole(roleId)
     if(result.status===0){
       dispatch(deleteRoleSuccess(roleId))
     }
   }
 }
 //获取用户信息数据的同步action对象
const getUsersSuccess=(users)=>({type:GET_USERS,data:users})
 //获取用户信息数据的异步action函数
export const getUsers=()=>{
  return async (dispatch)=>{
    const result=await reqGetUsers()
    if(result.status===0){
      dispatch(getUsersSuccess(result.data))
    }
  }
}

 //添加用户信息数据的同步action对象
const addUserSuccess=(user)=>({type:ADD_USER,data:user})
 //添加用户信息数据的异步action函数
export const addUser=({ username, password, phone, email, roleId })=>{
  return async (dispatch)=>{
    const result=await reqAddUser({ username, password, phone, email, roleId })
    if(result.status===0){
      dispatch(addUserSuccess(result.data))
    }
  }
}

 //更新用户信息数据的同步action对象
const updateUserSuccess=(user)=>({type:UPDATE_USER,data:user})
 //更新用户信息数据的异步action函数
export const updateUser=(username,password)=>{
  return async(dispatch)=>{
    const result=await reqUpdateUser(username,password)
    if(result.status===0){
      dispatch(updateUserSuccess(result.data))
    }
  }
}

 //删除用户信息数据的同步action对象
 const deleteUserSuccess=(user)=>({type:DELETE_USER,data:user})
 //删除用户信息数据的异步action函数
 export const deleteUser=(username)=>{
  return async(dispatch)=>{
    const result=await reqDeleteUser(username)
    if(result.status===0){
      dispatch(deleteUserSuccess(result.data))
    }
  }
}