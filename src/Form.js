import React, {Component} from 'react';
import {View, ScrollView, Keyboard} from 'react-native';
import PropTypes from 'prop-types';
import {ComponentFactory} from "./factory/ComponentFactory";

export default class Form extends Component {

    static propTypes = {
        items: PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            maps: {},
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.generateForms = this.generateForms.bind(this);
        this.onSummitTextInput = this.onSummitTextInput.bind(this);
    }

    componentDidMount() {
        // let { formData } = this.props;
        // this.setValues(formData);
        this.setDefaultValue();
    }

    /**
     *  初始化组件内容
     */
    setDefaultValue() {
        this.state.items.map((item, index) => {
            if (!item.hidden) {
                this.state.maps[item.key] = item.value;
            }
        });
    }

    /**
     *  获取表单值
     */
    getValue() {
        return this.state.maps;
    }

    /**
     *  获取表单组件
     */
    getComponent(key) {
        return this[key];
    }

    /**
     *  更新表单值
     */
    onValueChange(key, value) {
        let obj = {};
        obj[key] = value;
        // 修改数据源
        let currentData = _.find(this.state.lists, (item) => item.key == key);
        currentData.value = value;
        this.setState({maps: Object.assign(this.state.maps, obj)});
    }

    /**
     *  获取表单组件
     */
    generateForms() {
        const components = this.state.items.map((item, index) => {
            if (!item.hidden) {
                return ComponentFactory.getComponent(item, this);
            }
        });
        return components;
    }

    /**
     *  获取表单组件
     */
    onSummitTextInput(name) {
        Keyboard.dismiss();
    }


    render() {
        return (
            <View>
                {this.generateForms() || <View/>}
            </View>
        );
    }

}