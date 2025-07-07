import{C as p,c as D,b as t,t as m,k as N,e as R,F as _,h as C}from"./iframe-CBz0_xCM.js";import{w as I,u as T,e as s}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const k=["for"],B={class:"d-flex justify-content-center"},q={class:""},w={class:"d-flex"},P={class:"pe-3 d-flex align-items-center"},U=["id","min","max","step","value","disabled"],E={class:"ps-3 d-flex align-items-center"},c={__name:"RangeSlider",props:{modelValue:{type:Number,required:!0},rangeName:{type:String,required:!0},minValue:{type:Number,required:!0},maxValue:{type:Number,required:!0},step:{type:Number,default:1},isDisabled:{type:Boolean,default:!1},sliderId:{type:String,default:"customRange"}},emits:["update:modelValue","change"],setup(e,{emit:o}){const u=e,r=o,n=p({get(){return u.modelValue},set(l){r("update:modelValue",l),r("change",l)}}),a=p(()=>n.value);function S(l){const g=Number(l.target.value);n.value=g}return(l,g)=>(C(),D(_,null,[t("label",{class:"form-label",for:e.sliderId},m(e.rangeName),9,k),t("div",B,[t("div",q,[N(m(a.value),1),R(l.$slots,"default")])]),t("div",w,[t("div",P,m(e.minValue),1),t("input",{class:"form-range",id:e.sliderId,min:e.minValue,max:e.maxValue,step:e.step,value:n.value,onInput:S,disabled:e.isDisabled,type:"range"},null,40,U),t("div",E,m(e.maxValue),1)])],64))}};c.__docgenInfo={exportName:"default",displayName:"RangeSlider",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"rangeName",type:{name:"string"},required:!0},{name:"minValue",type:{name:"number"},required:!0},{name:"maxValue",type:{name:"number"},required:!0},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sliderId",type:{name:"string"},defaultValue:{func:!1,value:"'customRange'"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"default"}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/RangeSlider.vue"]};const{fn:x}=__STORYBOOK_MODULE_TEST__,F={title:"Components/Inputs/RangeSlider",component:c,tags:["autodocs"],argTypes:{modelValue:{control:"number",description:"Current value of the range slider"},minValue:{control:"number",description:"Minimum value of the range"},maxValue:{control:"number",description:"Maximum value of the range"},rangeName:{control:"text",description:"Title of the range slider"},step:{control:"number",description:"Step increment of the range slider"},sliderId:{control:"text",description:"Unique ID for the slider input"},onChange:{description:"Event emitted when slider value changes"},isDisabled:{control:"boolean",description:"Disables the range slider"}}},i={args:{modelValue:50,minValue:0,maxValue:100,isDisabled:!1,rangeName:"Print speed (%)",step:1,sliderId:"default-range-slider","onUpdate:modelValue":x()},render:e=>({components:{RangeSlider:c},setup(){return{args:e}},template:'<RangeSlider v-model="args.modelValue" :minValue="args.minValue" :maxValue="args.maxValue" :rangeName="args.rangeName" :step="args.step" :sliderId="args.sliderId" :isDisabled="args.isDisabled">%</RangeSlider>'})};i.parameters={docs:{source:{code:`
      <script setup>
          import { ref } from 'vue';
          const print_speed = ref(50)
          function syncToBackend(newValue) {
          // call your API here
          console.log('send to server:', newValue)}
      <\/script>
      <template>
         <RangeSlider v-model="print_speed" range-name="Print speed (%)" :min-value="0" :max-value="100" :step="10"
            :isDisabled="false" slider-id="printSpeedSlider" @change="syncToBackend" >%</RangeSlider>    
      </template>      `}},testCaseId:"Test_Case_Id-TC-056"};i.play=async({args:e,canvasElement:o,parameters:u})=>{const r=I(o),n=u.testCaseId,a=r.getByRole("slider",{name:e.rangeName});await T.type(a,"50"),s(a).toHaveValue("50"),s(a).not.toBeDisabled(),s(a).toHaveAttribute("id",e.sliderId),s(n).toBe("Test_Case_Id-TC-056")};const d={args:{modelValue:50,minValue:0,maxValue:100,isDisabled:!0,rangeName:"Print thickness",step:1,sliderId:"disabled-range-slider","onUpdate:modelValue":x()},render:e=>({components:{RangeSlider:c},setup(){return{args:e}},template:'<RangeSlider v-model="args.modelValue" :minValue="args.minValue" :maxValue="args.maxValue" :rangeName="args.rangeName" :step="args.step" :sliderId="args.sliderId" :isDisabled="args.isDisabled">%</RangeSlider>'})};d.parameters={docs:{source:{code:`
      <script setup>
          import { ref } from 'vue';
          const print_thickness = ref(50)
          function syncToBackend(newValue) {
          // call your API here
          console.log('send to server:', newValue)}
      <\/script>
      <template>
        <RangeSlider v-model="print_thickness" range-name="Print thickness" :min-value="0" :max-value="100" :step="5"
        :isDisabled="true" slider-id="printThicknessSlider" @change="syncToBackend" />     
      </template>     
       `}},testCaseId:"Test_Case_Id-TC-057"};d.play=async({args:e,canvasElement:o,parameters:u})=>{const r=I(o),n=u.testCaseId,a=r.getByRole("slider",{name:e.rangeName});s(a).toBeDisabled(),s(a).toHaveAttribute("id",e.sliderId),s(a).toHaveValue(e.modelValue.toString()),s(n).toBe("Test_Case_Id-TC-057")};var V,f,b;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    minValue: 0,
    maxValue: 100,
    isDisabled: false,
    rangeName: 'Print speed (%)',
    step: 1,
    sliderId: 'default-range-slider',
    'onUpdate:modelValue': fn()
  },
  render: args => ({
    components: {
      RangeSlider
    },
    setup() {
      return {
        args
      };
    },
    template: \`<RangeSlider v-model="args.modelValue" :minValue="args.minValue" :maxValue="args.maxValue" :rangeName="args.rangeName" :step="args.step" :sliderId="args.sliderId" :isDisabled="args.isDisabled">%</RangeSlider>\`
  })
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,h,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    minValue: 0,
    maxValue: 100,
    isDisabled: true,
    rangeName: 'Print thickness',
    step: 1,
    sliderId: 'disabled-range-slider',
    'onUpdate:modelValue': fn()
  },
  render: args => ({
    components: {
      RangeSlider
    },
    setup() {
      return {
        args
      };
    },
    template: \`<RangeSlider v-model="args.modelValue" :minValue="args.minValue" :maxValue="args.maxValue" :rangeName="args.rangeName" :step="args.step" :sliderId="args.sliderId" :isDisabled="args.isDisabled">%</RangeSlider>\`
  })
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const j=["Default","Disabled"];export{i as Default,d as Disabled,j as __namedExportsOrder,F as default};
