import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
import {usePermissStore} from '../store/permiss'
import Home from "../views/home.vue";

const routes: RouteRecordRaw[] = [
    // {
    //     path: '/',
    //     redirect: '/dashboard'
    // },
    // {
    //     path: "/",
    //     name: "Home",
    //     component: Home,
    //     children: [
    //         {
    //             path: "/dashboard",
    //             name: "dashboard",
    //             meta: {
    //                 title: '系统首页',
    //                 permiss: '1'
    //             },
    //             component: () => import ( /* webpackChunkName: "dashboard" */ "../views/dashboard.vue")
    //         }, {
    //             path: "/table",
    //             name: "basetable",
    //             meta: {
    //                 title: '表格',
    //                 permiss: '2'
    //             },
    //             component: () => import ( /* webpackChunkName: "table" */ "../views/table.vue")
    //         }, {
    //             path: "/charts",
    //             name: "basecharts",
    //             meta: {
    //                 title: '图表',
    //                 permiss: '11'
    //             },
    //             component: () => import ( /* webpackChunkName: "charts" */ "../views/charts.vue")
    //         }, {
    //             path: "/form",
    //             name: "baseform",
    //             meta: {
    //                 title: '表单',
    //                 permiss: '5'
    //             },
    //             component: () => import ( /* webpackChunkName: "form" */ "../views/form.vue")
    //         }, {
    //             path: "/tabs",
    //             name: "tabs",
    //             meta: {
    //                 title: 'tab标签',
    //                 permiss: '3'
    //             },
    //             component: () => import ( /* webpackChunkName: "tabs" */ "../views/tabs.vue")
    //         }, {
    //             path: "/donate",
    //             name: "donate",
    //             meta: {
    //                 title: '鼓励作者',
    //                 permiss: '14'
    //             },
    //             component: () => import ( /* webpackChunkName: "donate" */ "../views/donate.vue")
    //         }, {
    //             path: "/permission",
    //             name: "permission",
    //             meta: {
    //                 title: '权限管理',
    //                 permiss: '13'
    //             },
    //             component: () => import ( /* webpackChunkName: "permission" */ "../views/permission.vue")
    //         }, {
    //             path: "/upload",
    //             name: "upload",
    //             meta: {
    //                 title: '上传插件',
    //                 permiss: '6'
    //             },
    //             component: () => import ( /* webpackChunkName: "upload" */ "../views/upload.vue")
    //         }, {
    //             path: "/icon",
    //             name: "icon",
    //             meta: {
    //                 title: '自定义图标',
    //                 permiss: '10'
    //             },
    //             component: () => import ( /* webpackChunkName: "icon" */ "../views/icon.vue")
    //         }, {
    //             path: '/user',
    //             name: 'user',
    //             meta: {
    //                 title: '个人中心'
    //             },
    //             component: () => import (/* webpackChunkName: "user" */ '../views/user.vue')
    //         }, {
    //             path: '/editor',
    //             name: 'editor',
    //             meta: {
    //                 title: '富文本编辑器',
    //                 permiss: '8'
    //             },
    //             component: () => import (/* webpackChunkName: "editor" */ '../views/editor.vue')
    //         }, {
    //             path: '/markdown',
    //             name: 'markdown',
    //             meta: {
    //                 title: 'markdown编辑器',
    //                 permiss: '9'
    //             },
    //             component: () => import (/* webpackChunkName: "markdown" */ '../views/markdown.vue')
    //         }
    //     ]
    // },
    //




    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/LoginView.vue")
    },
    {
        path: "/register",
        name: "Register",
        meta: {
            title: '注册'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/RegisterView.vue")
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限'
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),

    },


    /*
        学生页面
     */
    {
        path: '/student',
        name: 'student',
        component: () => import(/* webpackChunkName: "403" */ '../views/MyViews/StudentHomeView.vue'),

        /*
            子页面
         */
        children: [
            {
                path: '/student/code',
                name: 'code',
                component: () => import(/* 编码界面 */ '../components/student/CodeComponent.vue'),
            },
            {
                path: '/student/course',
                name: 'course',
                component: () => import(/* 选课界面 */ '../components/student/CourseComponent.vue'),
            },
            // {
            //     path: "/student/problem",
            //     name: "problem",
            //     component: () => import(/* 题目选择界面 */ "../components/student/ProblemComponent.vue"),
            // },
            {
                path: '/student/problem',
                name: 'problem',
                component: () => import(/* 题目选择界面 */ '../components/student/ProblemComponent.vue'),
            },
            {
                path: '/student/home',
                name: 'home',
                component: () => import(/* 学生主页 */ '../components/student/HomeComponent.vue'),
            },
            {
                path: '/student/info',
                name: 'info',
                component: () => import(/* 学生信息页面 */ '../components/student/StudentInfoComponent.vue'),
            },


        ]

    },

    /*
    教师页面
 */
    {
        path: '/teacher',
        name: 'teacher',
        component: () => import(/* TeacherHomeView */ '../views/MyViews/TeacherHomeView.vue'),

        /*
            子页面
         */
        children: [
            {
                path: '/teacher/release',
                name: 'release',
                component: () => import(/* 发布实验 */ '../components/teacher/ReleaseComponent.vue'),
            },
            {
                path: '/teacher/addStudent',
                name: 'addStudent',
                component: () => import(/* 发布实验 */ '../components/teacher/AddStudentComponent.vue'),
            },
            {
                path: '/teacher/consult',
                // name: 'consult',
                component: () => import(/* 发布实验 */ '../components/teacher/ConsultComponent.vue'),
            },
            {
                path: '/teacher/shiyan',
                // name: 'consult',
                component: () => import(/* 发布实验 */ '../components/teacher/ShiyanComponent.vue'),
            },


        ]

    },
    {
        path: '/user',
        name: 'user',
        meta: {
            title: '个人中心'
        },
        component: () => import (/* webpackChunkName: "user" */ '../views/user.vue')
    },


];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | vue-manage-system`;
//     const role = localStorage.getItem('ms_username');
//     const permiss = usePermissStore();
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
//         // 如果没有权限，则进入403
//         next('/403');
//     } else {
//         next();
//     }
// });

export default router;
