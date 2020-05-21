// 引入一级路由
import LoginPage from '../views/login/LoginPage';
import MainPage from '../views/main/MainPage';

// 引入二级
import AddQuestionPage from '../views/main/question/AddQuestionPage';
import QuestionTypePage from '../views/main/question/QuestionTypePage';
import ViewQuestionPage from '../views/main/question/ViewQuestionPage';

export default {
    routes: [{
        path: '/login',
        component: LoginPage
    }, {
        path: '/main',
        component: MainPage,
        children: [{
            path: '/main/addQuestion',
            component: AddQuestionPage
        }, {
            path: '/main/questionTypePage',
            component: QuestionTypePage
        }, {
            path: '/main/viewQuestionPage',
            component: ViewQuestionPage
        }]
    }]
}