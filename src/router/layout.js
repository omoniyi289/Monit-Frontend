const layout = [{
    path: '/',
    component: resolve => require(['pages/index'], resolve),
    meta: {
        title: "Dashboard",
    }
},
{
    path: '/index',
    component: resolve => require(['pages/index'], resolve),
    meta: {
        title: "Dashboard",
    }
}, {
    path: '/admin/company/setup',
        component: resolve => require(['pages/company/setup'], resolve),
        meta: {
        title: "Company Profile",
    }
    }
    , {
        path: '/admin/users/create',
            component: resolve => require(['pages/users/create'], resolve),
            meta: {
            title: "Create Users",
    }
    }, {
        path: '/admin/users/profile',
            component: resolve => require(['pages/users/profile'], resolve),
            meta: {
            title: "User Profile",
    }
    },
       {
        path: '/admin/roles/manage',
            component: resolve => require(['pages/roles/manage'], resolve),
            meta: {
            title: "Manage Roles",
        }
        }
        ,
        {
         path: '/admin/pricing/setup',
             component: resolve => require(['pages/pricing/setup'], resolve),
             meta: {
             title: "Set Product Price/Request Price Change",
         }
         } ,
         {
          path: '/admin/pricing/approve',
              component: resolve => require(['pages/pricing/approve'], resolve),
              meta: {
              title: "Approve Price Change",
          }
          }
          ,
         {
          path: '/admin/pricing/execute',
              component: resolve => require(['pages/pricing/execute'], resolve),
              meta: {
              title: "Execute Price Change",
          }
          }
        ,
       {
        path: '/admin/privileges/manage',
            component: resolve => require(['pages/privileges/manage'], resolve),
            meta: {
            title: "Manage Privileges",
        }
        }, {
    path: '/configuration/station/manage',
        component: resolve => require(['pages/station/manage'], resolve),
        meta: {
        title: "Manage Stations",
    }
    }, {
    path: '/configuration/tank/manage',
        component: resolve => require(['pages/tank/manage'], resolve),
        meta: {
        title: "Tanks",
    }
}
,{
  path: '/configuration/pump/manage',
    component: resolve => require(['pages/pump/manage'], resolve),
    meta: {
    title: "Pumps",
  }
}, {
  path: '/configuration/pump-tank/manage',
    component: resolve => require(['pages/pump-tank/manage'], resolve),
    meta: {
    title: "P to T Mapping",
  }
}, {
    path: '/fuel-supply/request',
      component: resolve => require(['pages/fuel-supply/request'], resolve),
      meta: {
      title: "Request Fuel",
    }
  }, {
    path: '/fuel-supply/manage',
      component: resolve => require(['pages/fuel-supply/manage'], resolve),
      meta: {
      title: "Manage Fuel Requests",
    }
  }, {
    path: '/fuel-supply/receive',
      component: resolve => require(['pages/fuel-supply/receive'], resolve),
      meta: {
      title: "Manage Received Stocks",
    }
  }, {
    path: '/ss-management/open-station',
      component: resolve => require(['pages/ss-management/open-station'], resolve),
      meta: {
      title: "Open Station",
}
}, {
    path: '/ss-management/end-shift',
      component: resolve => require(['pages/ss-management/end-shift'], resolve),
      meta: {
      title: "End Shift",
}
}, {
    path: '/ss-management/close-station',
      component: resolve => require(['pages/ss-management/close-station'], resolve),
      meta: {
      title: "Close Station",
}
}, {
    path: '/ss-management/modify',
      component: resolve => require(['pages/ss-management/modify'], resolve),
      meta: {
      title: "Modify Recording",
}
}, {
    path: '/store-management/stock-transfer',
      component: resolve => require(['pages/store-management/stock-transfer'], resolve),
      meta: {
      title: "Stock Transfer",
}
}, {
    path: '/store-management/stock-count',
      component: resolve => require(['pages/store-management/stock-count'], resolve),
      meta: {
      title: "Stock Count",
}
}, {
    path: '/store-management/stock-refill',
      component: resolve => require(['pages/store-management/stock-refill'], resolve),
      meta: {
      title: "Stock Refill",
}
}, {
    path: '/store-management/manage-item',
      component: resolve => require(['pages/store-management/manage-item'], resolve),
      meta: {
      title: "Manage Items",
}
}, {
    path: '/store-management/receive-stock',
      component: resolve => require(['pages/store-management/receive-stock'], resolve),
      meta: {
      title: "Receive Stock",
}
}, {
    path: '/exp-management/manage',
      component: resolve => require(['pages/exp-management/manage'], resolve),
      meta: {
      title: "Manage Expenses",
}
}, {
    path: '/cash-management/create',
      component: resolve => require(['pages/cash-management/create'], resolve),
      meta: {
      title: "Manage Payments",
}

}]

export default layout
