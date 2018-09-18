# DynamicForm
React Native dynamic form

# 项目 概述
React Native动态生成表单项目，根据特定的领域模型，自动匹配UI组件，自动映射数据。支持动态扩展组件。

## 架构图
![模块架构图](https://github.com/Papeone/DynamicForm/raw/master/framwork.png)
    整体结构分为四大模块，如下
    
### Form
用于接收json数据，基本数据模型已经定义好如下：
```js
        {
            type: "input",  //定义类型，输入框
            key: "username", //定义key，通过该key可以获取到该组件对象，方便自定义操作
            title: "用户名", //组件标题
            icon: 'userName', //图片名称
            placeholder: '请输入用户名' //输入框提示
        }
```
当然你可以自定义模型，目前唯一的约束就是type与key，必须在数据模型中存在。

### ComponentFactory
用于注册自定义的组件，给Form层提供组件，

### ComponentBuilder
用于组件的构建，构建完后会自动注册组件到ComponentFactory中，往Form中添加新的组件时，就要完成该层的创建。

### Components
React Native中自定义组件，都是继承自React.Component，都是一些组合组件。

# 计划
* 添加到npm仓库中
* 数据通过[async-validator](https://github.com/yiminghe/async-validator/)校验

# 用例

```js
export default class App extends Component<Props> {
  render() {

    let items =  [
        {
            type: "input",
            key: "username",
            title: "用户名",
            icon: 'userName',
            placeholder: '请输入用户名'
        },
        {
            type: "input",
            key: "password",
            title: "密码",
            icon: 'password',
            placeholder: '请输入密码'
        },
    ];

    return (
      <View style={styles.container}>
        <Form ref={(c) => {this.form = c;}} items={items}/>
      </View>
    );
  }
}
```
上面是基本使用方法，如何获取里面输入框里面的值呢，如下：
```js
  onPress() {
        const value = this.form.getValue();
        alert(JSON.stringify(value));
    }
```
只需要调用 form表单的getValue方法，便可以返回如下：
```js
{
    "username": "zhang" ,
    "password": "234"
}
```
获取姓名对应的组件如下：
```js
const input = this.form.getComponentByKey("username");
```
等等...

## License

DynamicForm is released under the Apache License.
