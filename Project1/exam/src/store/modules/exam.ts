import {observable, action} from 'mobx'
import {getQuestionsType, getExamType, getSubject} from '../../services'
import { IExamType, ISubject, IQuestionType, IAddQuestion, IGetQuestion, IQuestion } from '../../util/interface';
import { addQuestion, getQuestion } from '../../services/modules/exam';

class Exam{
    @observable 
    examTypes: IExamType[] = [];
    @observable
    subjectTypes: ISubject[] = [];
    @observable
    questionTypes: IQuestionType[] = [];
    @observable
    questionList: IQuestion[] = [];


    @action
    async getQuestionsAction(){
        if (this.questionTypes.length){
            return;
        }
        let result:any = await getQuestionsType();
        if (result.code === 1){
            this.questionTypes = result.data;
        }
    }

    @action
    async getExamAction(){
        if (this.examTypes.length){
            return;
        }
        let result:any = await getExamType();
        if (result.code === 1){
            this.examTypes = result.data;
        }
    }

    @action
    async getSubjectAction(){
        if (this.subjectTypes.length){
            return;
        }
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

    @action
    async getQuetsionAction(params: IGetQuestion){
        let result: any = await getQuestion(params);
        if (result.code === 1){
            this.questionList = result.data;
        }
        console.log('this...', this.questionList);
    }
}

export default Exam;