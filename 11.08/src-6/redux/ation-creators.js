//包含了多个同步操作.action法人creator--包含了产生的多个action对象的工厂函数
import { SAVE_USER, REMOVE_USER, UPDATE_TITLE, GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DEL_CATEGORY } from './action-types'
//引入接口文件
import { reqCategories, reqAddCategory, requpdateCategory, reqDeleteCategory } from '../api/index'


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
    const result = await requpdateCategory(categoryId, categoryName)
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
 