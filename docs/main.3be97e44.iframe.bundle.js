(self.webpackChunkios_switch_material_ui=self.webpackChunkios_switch_material_ui||[]).push([[179],{"./storybook/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Disabled:()=>Disabled,UncontrolledWithKnobPositionSet:()=>UncontrolledWithKnobPositionSet,UncontrolledWithoutKnobPositionSet:()=>UncontrolledWithoutKnobPositionSet,WithCustomAspectRatio:()=>WithCustomAspectRatio,WithCustomColors:()=>WithCustomColors,WithCustomKnobSize:()=>WithCustomKnobSize,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),classCallCheck=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),styles_knob={borderRadius:"50%",position:"relative",transition:"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},styles_switch={display:"inline-block",transition:"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},IosSwitchMaterialUi=function(_React$Component){(0,inherits.Z)(IosSwitchMaterialUi,_React$Component);var _super=(0,createSuper.Z)(IosSwitchMaterialUi);function IosSwitchMaterialUi(props){var _this;return(0,classCallCheck.Z)(this,IosSwitchMaterialUi),(_this=_super.call(this,props)).handleChange=function(){var _this$props=_this.props,disabled=_this$props.disabled,onChange=_this$props.onChange;if(!disabled){var newKnobOnLeft=!_this.isKnobOnLeft();void 0===_this.props.knobOnLeft&&_this.setState({knobOnLeft:newKnobOnLeft}),onChange&&onChange(newKnobOnLeft)}},_this.isKnobOnLeft=function(){return void 0!==_this.props.knobOnLeft?_this.props.knobOnLeft:_this.state.knobOnLeft},_this.state={knobOnLeft:props.knobOnLeft||props.defaultKnobOnLeft||!1},_this}return(0,createClass.Z)(IosSwitchMaterialUi,[{key:"render",value:function render(){return react.createElement("div",{onClick:this.handleChange,style:this.getStyleForSwitch()},react.createElement("div",{style:this.getStyleForKnob()}))}},{key:"getStyleForSwitch",value:function getStyleForSwitch(){var disabled=this.props.disabled,backgroundColor=this.getSwitchColor(),knobSize=this.getKnobSize(),switchWidth=this.getSwitchWidth(),switchHeight=this.getSwitchHeight();return(0,objectSpread2.Z)((0,objectSpread2.Z)({},styles_switch),{},{backgroundColor,borderRadius:knobSize,cursor:disabled?void 0:"pointer",height:switchHeight,minHeight:switchHeight,minWidth:switchWidth,opacity:disabled?.4:1,top:2,width:switchWidth})}},{key:"getSwitchColor",value:function getSwitchColor(){var colorSwitch=this.props.colorSwitch;return isEmpty(colorSwitch)?"#e2e2e2":colorSwitch}},{key:"getSwitchWidth",value:function getSwitchWidth(){return this.getAspectRatio()*this.getSwitchHeight()}},{key:"getAspectRatio",value:function getAspectRatio(){var aspectRatio=this.props.aspectRatio;return aspectRatio||2}},{key:"getSwitchHeight",value:function getSwitchHeight(){return this.getKnobSize()+4}},{key:"getKnobSize",value:function getKnobSize(){var knobSize=this.props.knobSize;return knobSize||18}},{key:"getStyleForKnob",value:function getStyleForKnob(){var knobOnLeft=this.isKnobOnLeft(),backgroundColor=this.getKnobColor(knobOnLeft),knobSize=this.getKnobSize(),switchWidth=this.getSwitchWidth();return(0,objectSpread2.Z)((0,objectSpread2.Z)({},styles_knob),{},{backgroundColor,height:knobSize,left:knobOnLeft?2:switchWidth-knobSize-2,top:2,width:knobSize})}},{key:"getKnobColor",value:function getKnobColor(knobOnLeft){var _this$props2=this.props,colorKnobOnLeft=_this$props2.colorKnobOnLeft,colorKnobOnRight=_this$props2.colorKnobOnRight;return knobOnLeft&&!1===isEmpty(colorKnobOnLeft)?colorKnobOnLeft:!0!==knobOnLeft&&!1===isEmpty(colorKnobOnRight)?colorKnobOnRight:knobOnLeft?"#eeeeee":"#5269d8"}}]),IosSwitchMaterialUi}(react.Component),isEmpty=function isEmpty(str){return!1==(void 0!==str&&str.length>0)};const src_IosSwitchMaterialUi=IosSwitchMaterialUi;var style={height:20},showSelectedValue=function showSelectedValue(id){return function(knobOnLeft){return document.getElementById(id).textContent=knobOnLeft?"knobOnLeft":"knobOnRight"}};const stories={title:"IosSwitchMaterialUi",component:IosSwitchMaterialUi};var UncontrolledWithoutKnobPositionSet=function UncontrolledWithoutKnobPositionSet(){return react.createElement("div",null,react.createElement(src_IosSwitchMaterialUi,{onChange:showSelectedValue("uncontrolled")}),react.createElement("div",{style}),"Selected value: ",react.createElement("span",{id:"uncontrolled"}))},UncontrolledWithKnobPositionSet=function UncontrolledWithKnobPositionSet(){return react.createElement("div",null,react.createElement(src_IosSwitchMaterialUi,{defaultKnobOnLeft:!0,onChange:showSelectedValue("uncontrolled")}),react.createElement("div",{style}),"Selected value: ",react.createElement("span",{id:"uncontrolled"}))},Controlled=function Controlled(){return react.createElement("div",null,react.createElement(src_IosSwitchMaterialUi,{knobOnLeft:!0,onChange:showSelectedValue("controlled")}),react.createElement(src_IosSwitchMaterialUi,{knobOnLeft:!1,onChange:showSelectedValue("controlled")}),react.createElement("div",{style}),"Selected value: ",react.createElement("span",{id:"controlled"}))},Disabled=function Disabled(){return react.createElement("div",null,react.createElement(src_IosSwitchMaterialUi,{disabled:!0,onChange:showSelectedValue("disabled")}),react.createElement("div",{style}),"Selected value: ",react.createElement("span",{id:"disabled"}))},WithCustomColors=function WithCustomColors(){return react.createElement("div",null,react.createElement(src_IosSwitchMaterialUi,{colorKnobOnLeft:"red",colorKnobOnRight:"blue",colorSwitch:"aqua",onChange:showSelectedValue("colors")}),react.createElement("div",{style}),"Selected value: ",react.createElement("span",{id:"colors"}))},WithCustomAspectRatio=function WithCustomAspectRatio(){return react.createElement("div",null,react.createElement(src_IosSwitchMaterialUi,{aspectRatio:5,onChange:showSelectedValue("aspect-ratio")}),react.createElement("div",{style}),"Selected value: ",react.createElement("span",{id:"aspect-ratio"}))},WithCustomKnobSize=function WithCustomKnobSize(){return react.createElement("div",null,react.createElement(src_IosSwitchMaterialUi,{knobSize:40,onChange:showSelectedValue("knob-size")}),react.createElement("div",{style}),"Selected value: ",react.createElement("span",{id:"knob-size"}))}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories.tsx":"./storybook/stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./storybook sync ^\\.[\\\\/](?:stories\\.tsx)$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[511],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);