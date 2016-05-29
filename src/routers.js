import Home from './views/Home'
// import Sui from './views/sui'
import Classes from './views/classes'
import userCenter from './views/user-center'
import Index from './views/Index'
import cart from './views/Cart'
import editInfo from './views/edit-info'
import manageInfo from './views/manage-info'
import search from './views/search'
import goodDetails from './views/good-details'

export default function (router) {
  router.map({
    // 首页
    '/': {
      name: 'index',
      component: Index
    },
    '/home': {
      name: 'home',
      component: Home
    },
    // 设置404页面跳转
    '*': {
      component: Home
    },
    // 个人中心页
    '/user_center': {
      name: 'user_center',
      component: userCenter
    },
    // 商品分类页
    '/classes': {
      name: 'classes',
      component: Classes
    },
    // 购物车页面
    '/cart': {
      name: 'cart',
      component: cart
    },
    // 编辑地址信息
    '/edit_info': {
      name: 'edit_info',
      component: editInfo
    },
    // 管理地址信息
    '/manage_info': {
      name: 'manage_info',
      component: manageInfo
    },
    // 搜索页
    '/search': {
      name: 'search',
      component: search
    },
    // 商品详情页
    '/good_details': {
      name: 'good_details',
      component: goodDetails
    }
  })
}
