import {ComponentFactory} from "../factory/ComponentFactory";

export class BaseComponentBuilder {
    /**
     * @param type 组件类型，组件的唯一值
     * @param getComponent  生成组件
     */
    constructor(type, buildComponent) {
        this.type = type;
        this.buildComponent = buildComponent;
        ComponentFactory.addComponent(this);
    }
}