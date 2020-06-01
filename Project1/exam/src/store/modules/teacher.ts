import {observable, action} from 'mobx'
import {getUserList, getIdentifyList} from '../../services'
import { ITeacherInfo, IIdentifyInfo } from '../../util/interface';

class Teacher{
    // 索引类型
    [key:string]: any
    @observable 
    userList:ITeacherInfo[] = []
    @observable 
    identifyList:IIdentifyInfo[] = []

    @action
    async getUserListAction(){
        let result:any = await getUserList();
        if (result.code === 1){
            this.userList = result.data;
        }
    }
    
    @action
    async getIdentifyListAction(){
        let result:any = await getIdentifyList();
        if (result.code === 1){
            this.identifyList = result.data;
        }
    }
}

export default Teacher;