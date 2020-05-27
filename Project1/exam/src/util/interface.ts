// 路由元信息
export interface IRouterItem {
    path: string,
    component?: Function,
    redirect?: string,
    children?: IRouterItem[]
}
// 路由表
export interface IRouteProps {
    routes: IRouterItem[]
}

// 考试类型
export interface IExamType {
    exam_id: string,
    exam_name: string
}

// 试题类型
export interface IQuestionType {
    questions_type_id: string,
    questions_type_text: string,
    questions_type_sort: number
}

// 所有课程
export interface ISubject {
    subject_id: string,
    subject_text: string
}

// 用户信息
export interface IUser {
    iat: number
    identity_id: string
    identity_text: string
    signTime: number
    user_id: string
    user_name: string
}

// 添加试题
export interface IAddQuestion {
    questions_type_id: string,
    questions_stem: string,
    subject_id: string,
    exam_id: string,
    user_id: string,
    questions_answer: string,
    title: string
}

// 按条件获取试题
export interface IGetQuestion{
    questions_type_id?: string,
    subject_id?: string,
    exam_id?: string,
    questions_id?: string
}

// 试题数据
export interface IQuestion{
    questions_id: string,
    json_path: string,
    subject_text: string,
    exam_name: string,
    user_name: string,
    questions_type_text: string,
    questions_stem: string,
    questions_answer: string
}