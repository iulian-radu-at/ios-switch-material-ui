"use strict";(self.webpackChunkios_switch_material_ui=self.webpackChunkios_switch_material_ui||[]).push([[552],{"./storybook/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Disabled:()=>Disabled,UncontrolledWithKnobPositionSet:()=>UncontrolledWithKnobPositionSet,UncontrolledWithoutKnobPositionSet:()=>UncontrolledWithoutKnobPositionSet,WithCustomAspectRatio:()=>WithCustomAspectRatio,WithCustomColors:()=>WithCustomColors,WithCustomKnobSize:()=>WithCustomKnobSize,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js");function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _assertThisInitialized(self1){if(void 0===self1)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self1}function _possibleConstructorReturn(self1,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self1)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}var styles={knob:{borderRadius:"50%",position:"relative",transition:"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},switch:{display:"inline-block",transition:"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}},IosSwitchMaterialUi=function(_React$Component){_inherits(IosSwitchMaterialUi,_React$Component);var _super=_createSuper(IosSwitchMaterialUi);function IosSwitchMaterialUi(props){var _this;return _classCallCheck(this,IosSwitchMaterialUi),(_this=_super.call(this,props)).handleChange=function(){var _this$props=_this.props,disabled=_this$props.disabled,onChange=_this$props.onChange;if(!disabled){var newKnobOnLeft=!_this.isKnobOnLeft();void 0===_this.props.knobOnLeft&&_this.setState({knobOnLeft:newKnobOnLeft}),onChange&&onChange(newKnobOnLeft)}},_this.isKnobOnLeft=function(){return void 0!==_this.props.knobOnLeft?_this.props.knobOnLeft:_this.state.knobOnLeft},_this.state={knobOnLeft:props.knobOnLeft||props.defaultKnobOnLeft||!1},_this}return _createClass(IosSwitchMaterialUi,[{key:"render",value:function render(){return react.createElement("div",{onClick:this.handleChange,style:this.getStyleForSwitch()},react.createElement("div",{style:this.getStyleForKnob()}))}},{key:"getStyleForSwitch",value:function getStyleForSwitch(){var disabled=this.props.disabled,backgroundColor=this.getSwitchColor(),knobSize=this.getKnobSize(),switchWidth=this.getSwitchWidth(),switchHeight=this.getSwitchHeight();return _objectSpread2(_objectSpread2({},styles.switch),{},{backgroundColor:backgroundColor,borderRadius:knobSize,cursor:disabled?void 0:"pointer",height:switchHeight,minHeight:switchHeight,minWidth:switchWidth,opacity:disabled?.4:1,top:2,width:switchWidth})}},{key:"getSwitchColor",value:function getSwitchColor(){var colorSwitch=this.props.colorSwitch;return isEmpty(colorSwitch)?"#e2e2e2":colorSwitch}},{key:"getSwitchWidth",value:function getSwitchWidth(){return this.getAspectRatio()*this.getSwitchHeight()}},{key:"getAspectRatio",value:function getAspectRatio(){return this.props.aspectRatio||2}},{key:"getSwitchHeight",value:function getSwitchHeight(){return this.getKnobSize()+4}},{key:"getKnobSize",value:function getKnobSize(){return this.props.knobSize||18}},{key:"getStyleForKnob",value:function getStyleForKnob(){var knobOnLeft=this.isKnobOnLeft(),backgroundColor=this.getKnobColor(knobOnLeft),knobSize=this.getKnobSize(),switchWidth=this.getSwitchWidth();return _objectSpread2(_objectSpread2({},styles.knob),{},{backgroundColor:backgroundColor,height:knobSize,left:knobOnLeft?2:switchWidth-knobSize-2,top:2,width:knobSize})}},{key:"getKnobColor",value:function getKnobColor(knobOnLeft){var _this$props2=this.props,colorKnobOnLeft=_this$props2.colorKnobOnLeft,colorKnobOnRight=_this$props2.colorKnobOnRight;return knobOnLeft&&!1===isEmpty(colorKnobOnLeft)?colorKnobOnLeft:!0!==knobOnLeft&&!1===isEmpty(colorKnobOnRight)?colorKnobOnRight:knobOnLeft?"#eeeeee":"#5269d8"}}]),IosSwitchMaterialUi}(react.Component),isEmpty=function(str){return!1==(void 0!==str&&str.length>0)},style={height:20},showSelectedValue=function(id){return function(knobOnLeft){return document.getElementById(id).textContent=knobOnLeft?"knobOnLeft":"knobOnRight"}};let stories={title:"IosSwitchMaterialUi",component:IosSwitchMaterialUi};var UncontrolledWithoutKnobPositionSet=function(){return react.createElement("div",null,react.createElement(IosSwitchMaterialUi,{onChange:showSelectedValue("uncontrolled")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"uncontrolled"}))},UncontrolledWithKnobPositionSet=function(){return react.createElement("div",null,react.createElement(IosSwitchMaterialUi,{defaultKnobOnLeft:!0,onChange:showSelectedValue("uncontrolled")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"uncontrolled"}))},Controlled=function(){return react.createElement("div",null,react.createElement(IosSwitchMaterialUi,{knobOnLeft:!0,onChange:showSelectedValue("controlled")}),react.createElement(IosSwitchMaterialUi,{knobOnLeft:!1,onChange:showSelectedValue("controlled")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"controlled"}))},Disabled=function(){return react.createElement("div",null,react.createElement(IosSwitchMaterialUi,{disabled:!0,onChange:showSelectedValue("disabled")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"disabled"}))},WithCustomColors=function(){return react.createElement("div",null,react.createElement(IosSwitchMaterialUi,{colorKnobOnLeft:"red",colorKnobOnRight:"blue",colorSwitch:"aqua",onChange:showSelectedValue("colors")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"colors"}))},WithCustomAspectRatio=function(){return react.createElement("div",null,react.createElement(IosSwitchMaterialUi,{aspectRatio:5,onChange:showSelectedValue("aspect-ratio")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"aspect-ratio"}))},WithCustomKnobSize=function(){return react.createElement("div",null,react.createElement(IosSwitchMaterialUi,{knobSize:40,onChange:showSelectedValue("knob-size")}),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"knob-size"}))}}}]);