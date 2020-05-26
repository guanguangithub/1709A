import React, {useEffect} from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import Editor from 'for-editor'
import {useObserver} from 'mobx-react-lite'
import { Store } from 'antd/lib/form/interface';
import useStore from '../../../context/useStore';
import { IAddQuestion } from '../../../util/interface';

const LoginPage: React.FC = () => {
    const titleLayout = {
        labelCol: { offset: 0 },
        wrapperCol: { offset: 0, span: 8 },
    };
    const selectLayout = {
        labelCol: { offset: 0 },
        wrapperCol: { offset:0, span: 6 },
    };

    // 获取表单实例
    const [form] = Form.useForm();
    // 从mobx中拿到数据
    let {exam, user} = useStore();

    // 请求数据
    useEffect(()=>{
        exam.getExamAction();
        exam.getSubjectAction();
        exam.getQuestionsAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 初始化select
    useEffect(()=>{
        if (exam.examTypes.length){
            form.setFieldsValue({exam_id: exam.examTypes[0].exam_id});
        }
        if (exam.subjectTypes.length){
            form.setFieldsValue({subject_id: exam.subjectTypes[0].subject_id});
        }
        if (exam.questionTypes.length){
            form.setFieldsValue({questions_type_id: exam.questionTypes[0].questions_type_id});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [exam.examTypes, exam.subjectTypes, exam.questionTypes])
    
    // 提交表单
    let onFinish = (values:Store)=>{
        exam.addQuestionAction({
            ...values,
            user_id: user.userInfo.user_id
        } as IAddQuestion).then(res=>{
            if (res.code === 1){
                message.success(res.msg);
                form.resetFields(['questions_stem', 'title', 'questions_answer']);
            }
        })
    }

    return useObserver(()=><Form
        layout="horizontal"
        form={form}
        initialValues={{
            questions_stem: ``,
            title: `# 标题↵↵姓名|身份证号码|性别|手机号↵---|---|---|---↵蔺薇|110|女|177↵杜飞鹏|120|男|178`,
            exam_id: '',
            subject_id: '',
            questions_type_id: '',
            questions_answer: ''
        }}
        onFinish={onFinish}
    >
        <h1>添加试题</h1>
        <p>题目信息</p>
        {/* 题干 */}
        <p>题干</p>
        <Form.Item
            {...titleLayout}
            name="questions_stem"
            rules={[{ required: true, message: '请输入题目标题' }]}
        >
            <Input placeholder="请输入题目标题，不超过20个字"/>
        </Form.Item>

        {/* 题目标题 */}
        <p>题目主题</p>
        <Form.Item
            name="title"
            rules={[{ required: true, message: '请输入题目主题' }]}
        >
            <Editor />
        </Form.Item>

        {/* 选择考试类型 */}
        <p>请选择考试类型</p>
        <Form.Item {...selectLayout} name="exam_id">
            <Select>{
                exam.examTypes.map(item=>{
                    return <Select.Option value={item.exam_id}>{item.exam_name}</Select.Option>
                })}
            </Select>
        </Form.Item>

        {/* 选择课程类型 */}
        <p>请选择课程类型</p>
        <Form.Item {...selectLayout} name="subject_id">
            <Select>{
                exam.subjectTypes.map(item=>{
                    return <Select.Option value={item.subject_id}>{item.subject_text}</Select.Option>
                })}
            </Select>
        </Form.Item>

        {/* 选择题目类型 */}
        <p>选择题目类型</p>
        <Form.Item {...selectLayout} name="questions_type_id">
            <Select>{
                exam.questionTypes.map(item=>{
                    return <Select.Option value={item.questions_type_id}>{item.questions_type_text}</Select.Option>
                })}
            </Select>
        </Form.Item>
    
        {/* 答案信息 */}
        <p>答案信息</p>
        <Form.Item
            name="questions_answer"
            rules={[{ required: true, message: '请输入题目答案' }]}
        >
            <Editor />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
    </Form>)
}

export default LoginPage;