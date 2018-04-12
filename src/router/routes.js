import layout_routes from './layout'

const routes = [{
    path: '/',
    component: resolve => require(['src/layout'], resolve),
    children: layout_routes
    }, {
        path: '/login',
        component: resolve => require(['pages/auth/login'], resolve),
        meta: {
            title: "Login",
        }
    },  {
        path: '/verify/:token',
        component: resolve => require(['pages/auth/verifyEmail'], resolve),
        meta: {
        title: "Verify Email",
        }
    },  {
        path: '/fuel-supply/validate-request',
        component: resolve => require(['pages/fuel-supply/validate-request'], resolve),
        meta: {
        title: "Verify Fuel Request by Mail",
        }
    },  {
        path: '/pricing/validate-request',
        component: resolve => require(['pages/pricing/validate-request'], resolve),
        meta: {
        title: "Verify Price Change by Mail",
        }
    }, {
        path: '/register',
        component: resolve => require(['pages/auth/register'], resolve),
        meta: {
            title: "register",
        }
    }, {
        path: '/forgotpassword',
        component: resolve => require(['pages/auth/forgotpassword'], resolve),
        meta: {
            title: "Forgot Password",
        }
    }, {
        path: '/reset_password',
        component: resolve => require(['pages/reset_password'], resolve),
        meta: {
            title: "Reset Password",
        }
    }, {
        path: '/verify',
            component: resolve => require(['pages/users/verify'], resolve),
            meta: {
            title: "Verify  Account",
    }
    },
     {
        path: '/lockscreen',
        component: resolve => require(['pages/lockscreen'], resolve),
        meta: {
            title: "Lockscreen",
        }
    }, {
        path: '/dev',
        component: resolve => require(['pages/dev'], resolve),
        meta: {
            title: "DEV",
        }
    }, {
        path: '/500',
        component: resolve => require(['pages/500'], resolve),
        meta: {
            title: "500",
        }
    },
    {
        path: '*',
        component: resolve => require(['pages/404'], resolve),
        meta: {
            title: "404",
        }
    }
]
export default routes
