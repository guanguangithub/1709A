import request from "../../util/request"
import { IAddQuestion, IGetQuestion } from '../../util/interface';

// 获取所有的试题类型
export let getQuestionsType = ()=>{
    return request.get('/exam/getQuestionsType');
}

// 获取所有的课程
export let getSubject = ()=>{
    return request.get('/exam/subject');
}

// 获取所有的考试类型
export let getExamType = ()=>{
    return request.get('/exam/examType');
}

// 添加试题
export let addQuestion = (params: IAddQuestion)=>{
    return request.post('/exam/questions', params)
}

// 按条件获取试题
export let getQuestion = (params: IGetQuestion)=>{
    return request.get('/exam/questions/condition', {params})
}