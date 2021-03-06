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
        path: '/admin/notifications/manage',
            component: resolve => require(['pages/notifications/manage'], resolve),
            meta: {
            title: "Manage Notifications",
    }
    } , {
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
        path: '/admin/regions/manage',
            component: resolve => require(['pages/regions/manage'], resolve),
            meta: {
            title: "Manage Regions",
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
    path: '/ss-management/bovas-bulk-upload',
      component: resolve => require(['pages/ss-management/bovas-bulk-upload'], resolve),
      meta: {
      title: "Upload Stock Readings File (.csv,.tsv,.xls,.xlsx,.xlsm)",
}
}, {
    path: '/ss-management/bulk-upload',
      component: resolve => require(['pages/ss-management/bulk-upload'], resolve),
      meta: {
      title: "Upload Sales Stock Readings File (.csv,.tsv,.xls,.xlsx,.xlsm)",
}
}, {
    path: '/ss-management/close-station',
      component: resolve => require(['pages/ss-management/close-station'], resolve),
      meta: {
      title: "Close Station",
}
}, {
    path: '/ss-management/view',
      component: resolve => require(['pages/ss-management/view'], resolve),
      meta: {
      title: "View Readings",
}
}, {
    path: '/ss-management/modify',
      component: resolve => require(['pages/ss-management/modify'], resolve),
      meta: {
      title: "Modify Readings",
}
}, {
    path: '/store-management/stock-transfer',
      component: resolve => require(['pages/store-management/stock-transfer'], resolve),
      meta: {
      title: "Manage Stock Transfers",
}
}, {
    path: '/store-management/stock-count',
      component: resolve => require(['pages/store-management/stock-count'], resolve),
      meta: {
      title: "Perform a Stock Count",
}
}, {
    path: '/store-management/stock-sales',
      component: resolve => require(['pages/store-management/stock-sales'], resolve),
      meta: {
      title: "Manage Stock Sales",
}
}, {
    path: '/store-management/stock-refill',
      component: resolve => require(['pages/store-management/stock-refill'], resolve),
      meta: {
      title: "Manage Stock Refill",
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
}}, {
    path: '/cash-management/bulk-upload',
      component: resolve => require(['pages/cash-management/bulk-upload'], resolve),
      meta: {
      title: "Upload Payment Log File (.csv,.tsv,.xls,.xlsx,.xlsm)",
}
}
, {
    path: '/rops/create',
      component: resolve => require(['pages/rops/create'], resolve),
      meta: {
      title: "Create Fuel Price Survey",
}}, {
    path: '/rops/view',
      component: resolve => require(['pages/rops/view'], resolve),
      meta: {
      title: "View Fuel Price Survey",
}}
, {
    path: '/cops/create',
      component: resolve => require(['pages/cops/create'], resolve),
      meta: {
      title: "Create Commercial Online Pricing Survey",
}}, {
    path: '/cops/view',
      component: resolve => require(['pages/cops/view'], resolve),
      meta: {
      title: "View Commercial Online Pricing Survey",
}}, {
    path: '/cops/cops_lcd_config',
      component: resolve => require(['pages/cops/cops_lcd_config'], resolve),
      meta: {
      title: "Configure locations, D2D and Competitors for COPS",
}}
, {
    path: '/superadmin/company/manage',
      component: resolve => require(['pages/superadmin-company/manage'], resolve),
      meta: {
      title: "Manage Companies",
}}, {
    path: '/evcm/customer_account',
      component: resolve => require(['pages/velox-customer-management/customer_account'], resolve),
      meta: {
      title: "Customer Accounts",
}}
// , {
//     path: '/velox-customer-management/customer_balance',
//       component: resolve => require(['pages/velox-customer-management/customer_balance'], resolve),
//       meta: {
//       title: "",
// }}

, {
    path: '/evcm/manage_payment',
      component: resolve => require(['pages/velox-customer-management/manage_payment'], resolve),
      meta: {
      title: "Manage Payments"
}},
 {
    path: '/evcm/manage_creditlimit',
      component: resolve => require(['pages/velox-customer-management/manage_credit_limit'], resolve),
      meta: {
      title: "Manage Credit Limits"
}}
, {
    path: '/evcm/manage_purchase',
      component: resolve => require(['pages/velox-customer-management/manage_purchase'], resolve),
      meta: {
      title: "Manage Purchases",
}}
, {
    path: '/maintenance/pump',
      component: resolve => require(['pages/equipment-maintenance/pump'], resolve),
      meta: {
      title: "View Pump Readings",
}}

, {
    path: '/maintenance/manage-pump-maintenance',
      component: resolve => require(['pages/equipment-maintenance/manage-pump-maintenance'], resolve),
      meta: {
      title: "View and Update Pump Maintenance Log",
}}, {
    path: '/maintenance/pump-engineering-company',
      component: resolve => require(['pages/equipment-maintenance/pump-engineering-company'], resolve),
      meta: {
      title: "View Pump Readings",
}}
, {
    path: '/maintenance/invoice-engineering-company',
      component: resolve => require(['pages/equipment-maintenance/invoice-engineering-company'], resolve),
      meta: {
      title: "Current Invoices Status",
}}

, {
    path: '/maintenance/manage-pump-maintenance-engineering-company',
      component: resolve => require(['pages/equipment-maintenance/manage-pump-maintenance-engineering-company'], resolve),
      meta: {
      title: "View and Update Pump Maintenance Log",
}}, {
    path: '/superadmin/user/manage',
      component: resolve => require(['pages/superadmin-user/manage'], resolve),
      meta: {
      title: "Manage Users",
}}, {
    path: '/superadmin/ss-management/delete',
      component: resolve => require(['pages/superadmin-ss-management/delete'], resolve),
      meta: {
      title: "Delete Sales and Stock Data by Date",
}}
]

export default layout
