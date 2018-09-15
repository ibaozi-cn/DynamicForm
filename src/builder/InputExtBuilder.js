import React from "react";
import {BaseComponentBuilder} from "./BaseComponentBuilder";
import InputExt from "../components/input/InputExt";

/**
 *  输入框组件
 */
export class InputExtBuilder extends BaseComponentBuilder {

    constructor() {
        super("input", (item, target) => {
            const commonProps = {
                attribute: item,
                updateValue: target.onValueChange,
                onSummitTextInput: target.onSummitTextInput,
            };
            return <InputExt
                ref={(c) => {
                    target[item.key] = c;
                }}
                key={item.key+'_key'}
                {...commonProps}
                onSummitTextInput={target.onSummitTextInput}
            />
        });
    }
}

