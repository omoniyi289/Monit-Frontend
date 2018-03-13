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
    }, {
        path: '/register',
        component: resolve => require(['pages/auth/register'], resolve),
        meta: {
            title: "register",
        }
    }, {
        path: '/forgotpassword',
        component: resolve => require(['pages/forgotpassword'], resolve),
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
