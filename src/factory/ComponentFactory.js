import {BaseComponentBuilder} from "./../builder/BaseComponentBuilder";
import {InputExtBuilder} from "./../builder/InputExtBuilder";
/**
 * 组件库
 */
export class ComponentFactory {

    /**
     * 组件缓存
     * @type {{type:buildComponent}}
     */
    static componentBuilderCache = {};

    static getComponent(item, target) {
        let component = ComponentFactory.componentBuilderCache[item.type];
        if (component){
        	return component(item, target);
        }
        return null;
    }

    static addComponent(componentBuilder: BaseComponentBuilder) {
        //如果缓存已经包含该组件，则会过滤掉
        if (ComponentFactory.componentBuilderCache.hasOwnProperty(componentBuilder.type)) return;
        ComponentFactory.componentBuilderCache[componentBuilder.type] = componentBuilder.buildComponent;
    }
}

/**
 * 实例化 input builder
 * @type {InputExtBuilder}
 */
new InputExtBuilder();

