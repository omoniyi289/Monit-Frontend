const menu_items = [{
    name: 'Admin',
    icon: 'fa fa-shopping-cart',
    child: [{
        name: 'Company Setup',
        link: '/admin/company/setup',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Add New Station',
        link: '/configuration/station/setup',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Manage Stations',
        link: '/configuration/station/manage',
        icon: 'fa fa-angle-double-right'
    },{
        name: 'Users',
        link: '/admin/users/create',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Privileges',
        link: '/admin/privileges/manage',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Manage Roles',
        link: '/admin/roles/manage',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Product Pricing',
        link: '/admin/pricing/manage',
        icon: 'fa fa-angle-double-right'
    }]
    }
    , {
        name: 'Configuration',
        icon: 'fa fa-shopping-cart',
        child: [ {
            name: 'Add Tank',
            link: '/configuration/tank/setup',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Manage Tanks',
            link: '/configuration/tank/manage',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Add Pumps',
            link: '/configuration/pump/setup',
            icon: 'fa fa-angle-double-right'
        }, {
          name: 'Manage Pumps',
          link: '/configuration/pump/manage',
          icon: 'fa fa-angle-double-right'
        }, {
          name: 'P to T Mapping',
          link: '/configuration/pump-tank/manage',
          icon: 'fa fa-angle-double-right'
        }]
    }
    ,
    {
        name: 'Sales and Stock Management',
        icon: 'fa fa-shopping-cart',
        child: [{
            name: 'Open Station',
            link: '/ss-management/open-station',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'End Sales Shift',
            link: '/ss-management/end-shift',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Close Station',
            link: '/ss-management/close-station',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Modify Data',
            link: '/ss-management/modify',
            icon: 'fa fa-angle-double-right'
        }]
    }
    ,
    {
        name: 'Expenses Management',
        icon: 'fa fa-shopping-cart',
        child: [{
            name: 'Manage Expenses',
            link: '/exp-management/manage',
            icon: 'fa fa-angle-double-right'
        }]
    },
    {
        name: 'Fuel Supply',
        icon: 'fa fa-shopping-cart',
        child: [{
            name: 'Request Supply',
            link: '/fuel-supply/request',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Update Request',
            link: '/fuel-supply/manage',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Receive Stock',
            link: '/fuel-supply/receive',
            icon: 'fa fa-angle-double-right'
        }]
    },
    {
        name: 'Cash Management',
        icon: 'fa fa-shopping-cart',
        child: [{
            name: 'Add Payment',
            link: '/3',
            icon: 'fa fa-angle-double-right'
        }, {
            name: 'Manage Payment',
            link: '/4',
            icon: 'fa fa-angle-double-right'
        }]
    }
    ,
    {
        name: 'Dashboard',
        link: '/',
        icon: ' fa fa-home'
    }, {
        name: 'Dashboard2',
        link: '/index2',
        icon: 'fa fa-desktop'
    }
];
export default menu_items;
