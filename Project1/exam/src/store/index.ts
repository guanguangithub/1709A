// 引入模块
import User from './modules/user'
import Exam from './modules/exam'
import Teacher from './modules/teacher'



export default {
    user: new User(),
    exam: new Exam(),
    teacher: new Teacher()
}