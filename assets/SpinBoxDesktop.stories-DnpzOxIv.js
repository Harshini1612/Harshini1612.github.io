import{d as Y,r as y,m as j,o as G,C,c as I,h as D,b as V,g as w,t as h,i as m,w as B,D as M,q as J,E as Q,n as W}from"./iframe-CBz0_xCM.js";import{I as _,_ as E}from"./IconSmall-Bz8-L_Fp.js";import{I as X,a as Z}from"./IconPlus-5iH2jSbP.js";import{w as $,e as r,u as q}from"./index-F5U9YNKP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const ee={class:"mb-3 embedded-input spinbox-desktop"},te=["for"],ae={key:0,id:"input-live-help",class:"help-text mt-1 fw-normal d-block"},ne={class:"d-flex align-items-center d-number-input-with-buttons mb-4"},le={class:"position-relative w-100"},se=["id","aria-invalid","disabled"],oe={key:0,id:"input-live-feedback",class:"invalid-feedback d-block"},g=Y({__name:"SpinBoxDesktop",props:{id:{type:String,required:!0},label:{type:String,required:!0},modelValue:{type:Number,required:!0},helpText:{type:String,default:""},max:{type:Number,default:100},min:{type:Number,default:0},disabled:{type:Boolean,default:!1},disableButtons:{type:Boolean,default:!1},disableIncrement:{type:Boolean,default:!1},disableDecrement:{type:Boolean,default:!1},step:{type:Number,default:1},disableInput:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:b}){const e=t,i=b,a=y(e.modelValue.toString()),l=y(!1),s=y("");j(()=>e.modelValue,n=>{a.value=n.toString(),o(Number(n))}),G(()=>{o(Number(e.modelValue))});const f=C(()=>Number(e.modelValue)<=e.min),v=C(()=>Number(e.modelValue)>=e.max),o=n=>{if(a.value===""){l.value=!0,s.value="Input cannot be empty";return}if(isNaN(n)){l.value=!0,s.value="Input must be a number";return}if(n<e.min||n>e.max){l.value=!0,s.value=`Input must be between ${e.min} and ${e.max}`;return}l.value=!1,s.value=""},z=()=>{if(a.value===""){l.value=!0,s.value="Input cannot be empty";return}const n=Number(a.value);o(n),l.value||i("update:modelValue",n)},F=()=>{if(l.value||a.value==="")if(a.value==="")a.value=e.min.toString(),i("update:modelValue",e.min),l.value=!1,s.value="";else{const n=Number(a.value);isNaN(n)?a.value=e.modelValue.toString():n<e.min?(a.value=e.min.toString(),i("update:modelValue",e.min)):n>e.max&&(a.value=e.max.toString(),i("update:modelValue",e.max)),l.value=!1,s.value=""}},S=()=>{if(!e.disabled&&!e.disableButtons&&!e.disableIncrement){const n=Number(e.modelValue)+e.step,u=Math.min(n,e.max);i("update:modelValue",u),a.value=u.toString(),o(u)}},k=()=>{if(!e.disabled&&!e.disableButtons&&!e.disableDecrement){const n=Number(e.modelValue)-e.step,u=Math.max(n,e.min);i("update:modelValue",u),a.value=u.toString(),o(u)}};let x=null;const T=()=>{S(),d(),x=setInterval(()=>{S()},150)},N=()=>{k(),d(),x=setInterval(()=>{k()},150)},d=()=>{x&&(clearInterval(x),x=null)};return(n,u)=>(D(),I("div",ee,[V("div",null,[V("label",{for:t.id,class:"form-label pb-0 mb-2"},h(t.label),9,te),t.helpText?(D(),I("small",ae,h(t.helpText),1)):w("",!0)]),V("div",ne,[m(E,{class:"button-minus",disabled:f.value||t.disabled||t.disableButtons||t.disableDecrement,onMousedown:N,onMouseup:d,onMouseleave:d,onTouchstart:M(N,["prevent"]),onTouchend:d},{default:B(()=>[m(_,null,{default:B(()=>[m(X)]),_:1})]),_:1},8,["disabled"]),V("div",le,[J(V("input",{id:t.id,class:W(["form-control text-center",{"is-invalid":l.value}]),type:"number","onUpdate:modelValue":u[0]||(u[0]=K=>a.value=K),onInput:z,onBlur:F,"aria-invalid":l.value,"aria-describedby":"input-live-help input-live-feedback",disabled:t.disabled||t.disableInput},null,42,se),[[Q,a.value]])]),m(E,{class:"button-plus",disabled:v.value||t.disabled||t.disableButtons||t.disableIncrement,onMousedown:T,onMouseup:d,onMouseleave:d,onTouchstart:M(T,["prevent"]),onTouchend:d},{default:B(()=>[m(_,null,{default:B(()=>[m(Z)]),_:1})]),_:1},8,["disabled"])]),l.value?(D(),I("div",oe,h(s.value),1)):w("",!0)]))}});g.__docgenInfo={exportName:"default",displayName:"SpinBoxDesktop",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"number"},required:!0},{name:"helpText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disableButtons",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disableIncrement",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disableDecrement",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"disableInput",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/SpinBoxDesktop.vue"]};const{fn:A}=__STORYBOOK_MODULE_TEST__,be={title:"Components/InputPopups/SpinBoxDesktop",component:g,tags:["autodocs"],argTypes:{id:{control:"text",description:"ID for the desktop spinbox element"},label:{control:"text",description:"Label text (can include unit)"},modelValue:{control:"number",description:"Current value of the spinbox"},helpText:{control:"text",description:"Help text or formatting information"},max:{control:"number",description:"Maximum allowed value"},min:{control:"number",description:"Minimum allowed value"},step:{control:"number",description:"Step increment/decrement value"},disabled:{control:"boolean",description:"Disable the entire spinbox"},disableButtons:{control:"boolean",description:"Disable increment/decrement buttons"},disableIncrement:{control:"boolean",description:"Disable only the increment button"},disableDecrement:{control:"boolean",description:"Disable only the decrement button"},disableInput:{control:"boolean",description:"Disable direct input while keeping buttons enabled"}}},p={render:t=>({components:{SpinBoxDesktop:g},setup(){return{args:t}},template:'<SpinBoxDesktop v-model="args.modelValue" v-bind="args" />'}),args:{id:"desktop-spinbox1",label:"Spinbox label (unit)",modelValue:10,max:100,min:0,step:1,disabled:!1,disableButtons:!1,disableIncrement:!1,disableDecrement:!1,disableInput:!1,"onUpdate:modelValue":A()}};p.parameters={docs:{source:{code:`
      <script setup>
           const spinboxdesktopValue = ref(10)
        <\/script>
     <template>
           <SpinBox id="spinboxExample" label="Spinbox label (unit)" v-model="spinboxValue"
            helpText="help text/formatting" :max="100" :min="1" :step="1" :disabled="false" :disableButtons="false"
            :disableIncrement="false" :disableDecrement="false" :disableInput="false" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-074"};p.play=async({args:t,canvasElement:b,parameters:e})=>{const i=$(b),a=e.testCaseId,l=i.getByRole("spinbutton",{name:/Spinbox label \(unit\)/i}),s=i.getAllByRole("button"),f=s.find(o=>o.classList.contains("button-plus")),v=s.find(o=>o.classList.contains("button-minus"));r(l).toHaveValue(Number(t.modelValue)),await q.click(f),await q.click(v),r(l).toHaveValue(Number(t.modelValue)),r(a).toBe("Test_Case_Id-TC-074")};const c={render:t=>({components:{SpinBoxDesktop:g},setup(){return{args:t}},template:'<SpinBoxDesktop v-model="args.modelValue" v-bind="args" />'}),args:{id:"desktop-spinbox2",label:"Spinbox label (unit)",modelValue:50,max:100,min:0,step:1,disabled:!0,"onUpdate:modelValue":A()}};c.parameters={docs:{source:{code:`
      <script setup>
         const spinboxdesktopValue = ref(10)
      <\/script>
     <template>
           <SpinBoxDesktop id="spinboxExample" label="Spinbox label (unit)" v-model="spinboxdesktopValue"
            helpText="help text/formatting" :max="100" :min="1" :step="1" :disabled="false" :disableButtons="false"
            :disableIncrement="false" :disableDecrement="false" :disableInput="false" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-075"};c.play=async({args:t,canvasElement:b,parameters:e})=>{const i=$(b),a=e.testCaseId,l=i.getByRole("spinbutton",{name:/Spinbox label \(unit\)/i}),s=i.getAllByRole("button"),f=s.find(o=>o.classList.contains("button-plus")),v=s.find(o=>o.classList.contains("button-minus"));r(l).toBeDisabled(),r(f).toBeDisabled(),r(v).toBeDisabled(),r(a).toBe("Test_Case_Id-TC-075")};var U,L,O;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SpinBoxDesktop
    },
    setup() {
      return {
        args
      };
    },
    template: '<SpinBoxDesktop v-model="args.modelValue" v-bind="args" />'
  }),
  args: {
    id: 'desktop-spinbox1',
    label: 'Spinbox label (unit)',
    modelValue: 10,
    max: 100,
    min: 0,
    step: 1,
    disabled: false,
    disableButtons: false,
    disableIncrement: false,
    disableDecrement: false,
    disableInput: false,
    'onUpdate:modelValue': fn()
  }
}`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var R,H,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SpinBoxDesktop
    },
    setup() {
      return {
        args
      };
    },
    template: '<SpinBoxDesktop v-model="args.modelValue" v-bind="args" />'
  }),
  args: {
    id: 'desktop-spinbox2',
    label: 'Spinbox label (unit)',
    modelValue: 50,
    max: 100,
    min: 0,
    step: 1,
    disabled: true,
    'onUpdate:modelValue': fn()
  }
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const fe=["Default","Disabled"];export{p as Default,c as Disabled,fe as __namedExportsOrder,be as default};
