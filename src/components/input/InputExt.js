import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export default class InputExt extends Component {

    static propTypes = {
        attribute: PropTypes.object,
        themes: PropTypes.object,
        updateValue: PropTypes.func,
        onSummitTextInput: PropTypes.func,
    };

    static defaultProps = {
        themes: {}
    };

    handleChange(text) {
        this.props.updateValue(this.props.attribute.key, text.text);
    }

    render() {
        const {attribute, themes} = this.props;
        return (
            <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                <Text style={styles.titleStyle}>{attribute.title}</Text>
                <TextInput style={themes.inputStyle ? styles.inputStyle : themes.inputStyle}
                           underlineColorAndroid="transparent"
                           placeholder={attribute.placeholder}
                           onChangeText={(text) => this.handleChange({text})}
                           onSubmitEditing={() => this.props.onSummitTextInput(this.props.attribute.key)}
                           value={attribute.value}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, padding: 0, paddingLeft: 5},
    titleStyle: {textAlign: 'left', width: 60},
});