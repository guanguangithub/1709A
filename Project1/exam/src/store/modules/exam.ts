import {observable, action, computed} from 'mobx'
import {getQuestionsType, getExamType, getSubject} from '../../services'
import { IExamType, ISubject, IQuestionType, IAddQuestion } from '../../util/interface';
import { addQuestion } from '../../services/modules/exam';

class Exam{
    @observable 
    examTypes: IExamType[] = [];
    @observable
    subjectTypes: ISubject[] = [];
    @observable
    questionTypes: IQuestionType[] = [];


    @action
    async getQuestionsAction(){
        let result:any = await getQuestionsType();
        if (result.code === 1){
            this.questionTypes = result.data;
        }
    }

    @action
    async getExamAction(){
        let result:any = await getExamType();
        if (result.code === 1){
            this.examTypes = result.data;
        }
    }

    @action
    async getSubjectAction(){
        let result:any = await getSubject();
        if (result.code === 1){
            this.subjectTypes = result.data;
        }
    }

    @action
    async addQuestionAction(params: IAddQuestion){
        let result: any = await addQuestion(params);
        return result;
    }
}

export default Exam;