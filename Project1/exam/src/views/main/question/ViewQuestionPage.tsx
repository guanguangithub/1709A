import React, { useState, useEffect, Fragment } from 'react';
import useStore from '../../../context/useStore';
import { Tag, Select, Form, Button, message } from 'antd';
import { useObserver } from 'mobx-react-lite';
import { SearchOutlined } from '@ant-design/icons';
import { Store } from 'antd/lib/form/interface';
import { IQuestion, IGetQuestion } from '../../../util/interface';

const { CheckableTag } = Tag;


const LoginPage: React.FC = () => {
    const selectLayout = {
        labelCol: { offset: 0 },
        wrapperCol: { span: 4 },
    };
    // 从mobx中拿到数据
    let { exam, user } = useStore();
    // 定义选中的学科
    let [selectedTags, setSelectedTags] = useState<string []>([]);

    // 请求数据
    useEffect(() => {
        exam.getExamAction();
        exam.getSubjectAction();
        exam.getQuestionsAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 处理学科的选择
    let handleChange = (text:string, checked:boolean)=>{
        // if (checked){
        //     setSelectedTags([...selectedTags, text]);
        // }else{
        //     let index = selectedTags.findIndex(item=>item===text);
        //     selectedTags.splice(index, 1);
        //     setSelectedTags([...selectedTags]);
        // }

        if (checked){
            setSelectedTags([text]);
        }else{
            setSelectedTags([]);
        }
    }

    let search = (values: Store)=>{
        console.log('values...', values)
        let params:IGetQuestion = {};
        if (selectedTags.length){
            params.subject_id = selectedTags[0];
        }
        if (values.exam_id){
            params.exam_id = values.exam_id;
        }
        if (values.questions_type_id){
            params.questions_type_id = values.questions_type_id;
        }
        exam.getQuetsionAction(params);
    }
    return useObserver(()=><Fragment>
        <Form
            onFinish={search}
        >
            <div>
                <span style={{ marginRight: 8 }}>课程类型:</span>
                {exam.subjectTypes.map(item => (
                    <CheckableTag
                        key={item.subject_id}
                        checked={selectedTags.indexOf(item.subject_id) > -1}
                        onChange={checked => handleChange(item.subject_id, checked)}
                    >
                        {item.subject_text}
                    </CheckableTag>
                ))}
            </div>
            <div>
                <Form.Item label="考试类型" name="exam_id" {...selectLayout} rules={[{required:true, message:"请选择考试类型"}]}>  
                    <Select>{
                        exam.examTypes.map(item=>{
                            return <Select.Option value={item.exam_id}>{item.exam_name}</Select.Option>
                        })}
                    }</Select>
                </Form.Item>
                <Form.Item label="题目类型" name="questions_type_id" {...selectLayout} rules={[{required:true, message:"请选择题目类型"}]}>  
                    <Select>{
                        exam.questionTypes.map(item=>{
                            return <Select.Option value={item.questions_type_id}>{item.questions_type_text}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>查询</Button>
                </Form.Item>
            </div>
        </Form>

        <section>
                {JSON.stringify(exam.questionList)}
        </section>
    </Fragment>)
}

export default LoginPage;