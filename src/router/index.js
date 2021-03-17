import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '主页',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/power',
    component: Layout,
    redirect: '/power/number',
    name: 'power',
    meta: {
      title: '权限管理',
      icon: 'el-icon-printer'
    },
    children: [
      {
      path: '/number',
      name: 'number',
      component: () => import('@/views/power/number/index'),
      meta: {
        title: '账号管理',
        icon: 'el-icon-s-opportunity'
      },

    },
    {
      path: '/role',
      name: 'role',
      component: () => import('@/views/power/role/index'),
      meta: {
        title: '角色管理',
        icon: 'el-icon-s-check'
      },

    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('@/views/power/resource/index'),
      meta: {
        title: '资源管理',
        icon: 'el-icon-edit'
      },

    }
  ]
  },

  {
    path: '/userList',
    component: Layout,
    redirect: '/userList/index',
    name: 'userList',
    alwaysShow: true,
    meta: {
      title: '注册用户管理',
      icon: 'el-icon-user-solid'
    },
    children: [{
      path: 'actives',
      name: 'actives',
      component: () => import('@/views/userList/index'),
      meta: {
        title: '用户列表',
        icon: 'el-icon-user'
      },

    }, ]
  },



 
  {


    path: '/goodsManage',
    component: Layout,
    redirect: '/goodsManage/goodsList',
    name: 'goodsManage',
    meta: {
      title: '商品管理',
      icon: 'el-icon-s-goods'
    },
    children: [{
        path: 'goodsList',
        name: 'goodsList',
        component: () => import('@/views/goodsManage/goodsList/index'),
        meta: {
          title: '商品列表',
          icon: 'el-icon-goods'
        },

      },
      {

        path: 'addGoods',
        name: 'addGoods',
        component: () => import('@/views/goodsManage/goodsList/addGoods/index'),
        hidden: true,
        meta: {
          title: '新增商品',
          icon: 'el-icon-circle-plus-outline'
        },
      },
      {

        path: 'editGoods',
        name: 'editGoods',
        component: () => import('@/views/goodsManage/goodsList/addGoods/index'),
        hidden: true,
        meta: {
          title: '编辑商品',
          icon: 'el-icon-edit-outline'
        },
      },
      {
        path: 'brandmanage',
        name: 'brandmanage',
        component: () => import('@/views/goodsManage/brandManage/index'),
        meta: {
          title: '品牌管理',
          icon: 'el-icon-pie-chart'
        },

      },
      {
        path: 'goodsSort',
        name: 'goodsSort',
        component: () => import('@/views/goodsManage/goodsSort/index'),
        meta: {
          title: '商品分类',
          icon: 'el-icon-menu'
        },

      },



    ]
  },
  {


    path: '/order',
    component: Layout,
    redirect: '/order/orderList',
    name: 'order',
    meta: {
      title: '订单管理',
      icon: 'el-icon-s-order'
    },
    children: [{
        path: 'orderList',
        name: 'orderList',
        component: () => import('@/views/order/orderList/index'),
        meta: {
          title: '订单列表',
          icon: 'el-icon-s-claim'
        },

      },
      {

        path: 'order/orderInfo',
        name: 'orderInfo',
        component: () => import('@/views/order/orderList/orderInfo/index'),
        hidden: true
      },
      {

        path: 'ChargeBack',
        name: 'ChargeBack',
        component: () => import('@/views/order/Chargeback/index'),

        // hidden: true,
        meta: {
          title: '退单列表',
          icon: 'el-icon-refresh'
        },
      },
      {

        path: 'ChargeBack/Info',
        name: 'chargeBackInfo',
        component: () => import('@/views/order/Chargeback/info/index'),
        hidden: true
      },
      {

        path: 'addRess',
        name: 'addRess',
        component: () => import('@/views/order/address/index'),
        // hidden: true,
        meta: {
          title: '地址管理',
          icon: 'el-icon-guide'
        },
      },




    ]
  },


  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
      title: '内容管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: {
          title: '文章管理',
          icon: 'table'
        },

      },
      {

        path: 'add',
        name: 'add',
        component: () => import('@/views/table/add/index'),
        hidden: true,
        meta: {
          title: '新增',
          icon: 'el-icon-tickets'
        },
      },
      {

        path: 'look',
        name: 'look',
        component: () => import('@/views/table/add/index'),
        hidden: true,
        meta: {
          title: '编辑',
          icon: 'el-icon-tickets'
        },
      },

      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {
          title: '素材列表',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/marketing',
    component: Layout,
    redirect: '/marketing/list',
    name: 'marketing',
    meta: {
      title: '营销管理',
      icon: 'el-icon-suitcase'
    },
    children: [{
        path: 'list',
        name: 'List',
        component: () => import('@/views/marketing/adList/index'),
        meta: {
          title: '广告列表',
          icon: 'el-icon-coin'
        },

      },
      {
        path: 'active',
        name: 'active',
        component: () => import('@/views/marketing/active/index'),
        meta: {
          title: '限时活动',
          icon: 'el-icon-time'
        },

      },
    ]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
