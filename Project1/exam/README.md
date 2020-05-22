### 内部考试管理平台

- 组件封装

- mobx引入
    - 创建store，导出模块实例
    - 通过实例创建StoreContext
    - 在跟组件通过StoreContext注入store
    - 在其他组件通过useContext拿到store
        - 通过store直接获取属性
        - 通过方法触发action
        - action会修改属性
        - useObsere包裹return，当属性修改之后，页面刷新

- 数据流向
    组件->状态管理（vuex，redux，mobx）->请求管理（划分module）->拦截器