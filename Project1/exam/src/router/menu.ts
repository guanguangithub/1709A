import React from 'react';

// 引入二级
// import AddQuestionPage from '../views/main/question/AddQuestionPage';
// import QuestionTypePage from '../views/main/question/QuestionTypePage';
// import ViewQuestionPage from '../views/main/question/ViewQuestionPage';

// import AddTeacher from '../views/main/teacher/AddTeacher';
// import ViewTeacher from '../views/main/teacher/ViewTeacher';
import {
    AppstoreOutlined,
    // MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    // ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';


const AddQuestionPage = React.lazy(() => import('../views/main/question/AddQuestionPage'));
const QuestionTypePage = React.lazy(() => import('../views/main/question/QuestionTypePage'));
const ViewQuestionPage = React.lazy(() => import('../views/main/question/ViewQuestionPage'));
const AddTeacher = React.lazy(() => import('../views/main/teacher/AddTeacher'));
const ViewTeacher = React.lazy(() => import('../views/main/teacher/ViewTeacher'));


export default [{
    meta: { icon: MenuFoldOutlined, title: '试题管理' },
    children: [{
        path: '/main/addQuestion',
        component: AddQuestionPage,
        meta: { title: '添加试题' }
    }, {
        path: '/main/questionTypePage',
        component: QuestionTypePage,
        meta: { title: '试题分类' }
    }, {
        path: '/main/viewQuestionPage',
        component: ViewQuestionPage,
        meta: { title: '查看试题' }
    }, {
        path: '/main/viewQuestionPage/:id',
        component: ViewQuestionPage,
        meta: { title: '试题详情', show:false }
    }, {
        path: '/main/viewQuestionPage/:id',
        component: ViewQuestionPage,
        meta: { title: '编辑试题', show:false }
    }]
}, {
    meta: { icon: PieChartOutlined, title: '用户管理' },
    children: [{
        path: '/main/addTeacher',
        component: AddTeacher,
        meta: { title: '添加用户' }
    }, {
        path: '/main/viewTeacher',
        component: ViewTeacher,
        meta: { title: '用户展示' }
    }]
}, {
    meta: { icon: AppstoreOutlined, title: '考试管理' },
    children: [{
        path: '/main/addQuestion',
        component: AddQuestionPage,
        meta: { title: '添加考试' }
    }, {
        path: '/main/questionTypePage',
        component: QuestionTypePage,
        meta: { title: '试卷列表' }
    }, {
        path: '/main/questionTypePage',
        component: QuestionTypePage,
        meta: { title: '试卷详情', show:false }
    }]
}, {
    meta: { icon: MailOutlined, title: '班级管理' },
    children: [{
        path: '/main/addQuestion',
        component: AddQuestionPage,
        meta: { title: '班级管理' }
    }, {
        path: '/main/questionTypePage',
        component: QuestionTypePage,
        meta: { title: '教室管理' }
    }, {
        path: '/main/viewQuestionPage',
        component: ViewQuestionPage,
        meta: { title: '学生管理' }
    }]
}, {
    meta: { icon: DesktopOutlined, title: '阅卷管理' },
    children: [{
        path: '/main/addQuestion1',
        component: AddQuestionPage,
        meta: { title: '批卷班级1' }
    }]
}];