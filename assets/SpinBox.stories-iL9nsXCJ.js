import{d as me,r as _,C as $,o as ce,a as pe,c as F,b as d,t as D,i as c,w as f,D as P,g as be,q as fe,E as xe,n as ve,F as ge,x as Be,h as U}from"./iframe-CwuKlC4w.js";import{M as he}from"./bootstrap.esm-DwOKKX6j.js";import{_ as w,I as k}from"./IconSmall-C-GLyabi.js";import{I as Ie,a as Ve}from"./IconPlus-DtbI0jsp.js";import{I as ye}from"./IconClose-Bg3QnUke.js";import{I as Se}from"./IconTick-DdZjNRTg.js";import{w as S,e as s,u as j}from"./index-F5U9YNKP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const Te={class:"mb-3 embedded-input"},Ce=["for"],_e={class:"d-flex align-items-center d-number-input-with-buttons mb-4"},De=["id","value","disabled"],we={class:"modal-dialog"},ke={class:"modal-content"},Me={class:"modal-body d-flex justify-content-center align-items-center"},Ee={class:"card top text-input-modal m-3"},Ne={class:"card-header w-100 align-items-center justify-content-between d-flex p-3"},Re={class:"text-start flex-row d-flex"},Le={class:"input-heading"},qe=["for"],Ae={id:"input-live-help",class:"help-text mt-1 fw-normal"},$e={class:"card-body w-100 pe-0"},Fe={class:"pe-3"},Pe={class:"row"},Ue={class:"flex flex-column col-md-8 col-lg-8 col-xl-6"},je={class:"position-relative"},He=["id","aria-invalid","disabled"],ze={key:0,class:"invalid-feedback d-block"},x=me({__name:"SpinBox",props:{id:{type:String,required:!0},label:{type:String,required:!0},modelValue:{type:Number,required:!0},helpText:{type:String,default:""},max:{type:Number,default:100},min:{type:Number,default:0},disabled:{type:Boolean,default:!1},disableButtons:{type:Boolean,default:!1},disableIncrement:{type:Boolean,default:!1},disableDecrement:{type:Boolean,default:!1},step:{type:Number,default:1},disableInput:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:m}){const t=e,o=m,i=_(t.modelValue),a=_(!1),l=_(""),u=_(null),r=_(null);let n=null;const T=$(()=>Number(t.modelValue)<=t.min),ie=$(()=>Number(t.modelValue)>=t.max),E=()=>{Be(()=>{r.value&&(r.value.focus(),M())})};ce(()=>{u.value&&(n=new he(u.value,{backdrop:"static",keyboard:!0}),u.value.addEventListener("shown.bs.modal",E))}),pe(()=>{u.value&&u.value.removeEventListener("shown.bs.modal",E),n&&n.dispose()});const de=()=>{t.disabled||(i.value=t.modelValue,n&&n.show())},N=()=>{n&&n.hide()},M=()=>{if(i.value===null||i.value===void 0||i.value.toString()===""){a.value=!0,l.value="Input cannot be empty";return}const b=Number(i.value);isNaN(b)?(a.value=!0,l.value="Input must be a number"):b<t.min||b>t.max?(a.value=!0,l.value=`Input must be between ${t.min} and ${t.max}`):(a.value=!1,l.value="")},ue=()=>{M(),a.value||(o("update:modelValue",Number(i.value)),N())},R=()=>{if(!t.disabled&&!t.disableButtons&&!t.disableIncrement){const b=Number(t.modelValue)+t.step,v=Math.min(b,t.max);o("update:modelValue",v)}},L=()=>{if(!t.disabled&&!t.disableButtons&&!t.disableDecrement){const b=Number(t.modelValue)-t.step,v=Math.max(b,t.min);o("update:modelValue",v)}};let C=null;const q=()=>{R(),p(),C=setInterval(()=>{R()},150)},A=()=>{L(),p(),C=setInterval(()=>{L()},150)},p=()=>{C&&(clearInterval(C),C=null)};return(b,v)=>(U(),F(ge,null,[d("div",Te,[d("label",{for:e.id,class:"form-label pb-0 mb-2"},D(e.label),9,Ce),d("div",_e,[c(w,{class:"button-minus",disabled:T.value||e.disabled||e.disableButtons||e.disableDecrement,onMousedown:A,onMouseup:p,onMouseleave:p,onTouchstart:P(A,["prevent"]),onTouchend:p},{default:f(()=>[c(k,null,{default:f(()=>[c(Ie)]),_:1})]),_:1},8,["disabled"]),d("input",{id:e.id,class:"form-control text-center",type:"number",value:e.modelValue,readonly:"",onClick:de,disabled:e.disabled||e.disableInput},null,8,De),c(w,{class:"button-plus",disabled:ie.value||e.disabled||e.disableButtons||e.disableIncrement,onMousedown:q,onMouseup:p,onMouseleave:p,onTouchstart:P(q,["prevent"]),onTouchend:p},{default:f(()=>[c(k,null,{default:f(()=>[c(Ve)]),_:1})]),_:1},8,["disabled"])])]),d("div",{class:"modal",ref_key:"modalRef",ref:u,tabindex:"-1","aria-hidden":"true"},[d("div",we,[d("div",ke,[d("div",Me,[d("div",Ee,[d("div",Ne,[d("div",Re,[d("h4",Le,[d("label",{for:`${e.id}-input`},D(e.label),9,qe)]),d("small",Ae,D(e.helpText),1)]),c(w,{buttonType:"btn-danger",onClick:N,type:"button"},{default:f(()=>[c(k,null,{default:f(()=>[c(ye)]),_:1})]),_:1})]),d("div",$e,[d("div",Fe,[d("div",Pe,[d("div",Ue,[d("div",je,[fe(d("input",{id:`${e.id}-input`,ref_key:"modalInputRef",ref:r,class:ve(["form-control domino-text-entry sm-mt-2",{"is-invalid":a.value}]),"onUpdate:modelValue":v[0]||(v[0]=re=>i.value=re),type:"number",onInput:M,"aria-invalid":a.value,"aria-describedby":"input-live-help input-live-feedback",disabled:e.disabled||e.disableInput},null,42,He),[[xe,i.value]])]),a.value?(U(),F("div",ze,D(l.value),1)):be("",!0),c(w,{class:"w-25 mt-3 me-2 text-start",buttonText:"Save",buttonType:"btn-green",onClick:ue,disabled:a.value,type:"button"},{default:f(()=>[c(k,{class:"me-2"},{default:f(()=>[c(Se)]),_:1})]),_:1},8,["disabled"])])])])])])])])])],512)],64))}});x.__docgenInfo={exportName:"default",displayName:"SpinBox",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"number"},required:!0},{name:"helpText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disableButtons",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disableIncrement",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disableDecrement",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"disableInput",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/SpinBox.vue"]};const tt={title:"Components/InputPopups/SpinBox",component:x,tags:["autodocs"],argTypes:{id:{control:"text",description:"ID for the spinbox element"},label:{control:"text",description:"Label text (can include unit)"},modelValue:{control:"number",description:"Current value of the spinbox"},helpText:{control:"text",description:"Help text or formatting information"},max:{control:"number",description:"Maximum allowed value"},min:{control:"number",description:"Minimum allowed value"},step:{control:"number",description:"Step increment/decrement value"},disabled:{control:"boolean",description:"Disable the entire spinbox"},disableButtons:{control:"boolean",description:"Disable increment/decrement buttons"},disableIncrement:{control:"boolean",description:"Disable only the increment button"},disableDecrement:{control:"boolean",description:"Disable only the decrement button"},disableInput:{control:"boolean",description:"Disable direct input while keeping buttons enabled"},"update:modelValue":{action:"update:modelValue"}}},g={render:e=>({components:{SpinBox:x},setup(){return{args:e}},template:'<SpinBox v-model="args.modelValue" v-bind="args" />'}),args:{id:"spinbox1",label:"Spinbox label (unit)",modelValue:10,helpText:"help text/formatting",max:100,min:0,step:1,disabled:!1,disableButtons:!1,disableIncrement:!1,disableDecrement:!1,disableInput:!1}};g.parameters={docs:{source:{code:`
      <script setup>
      const spinboxValue = ref(10)
      <\/script>
     <template>
           <SpinBox id="spinboxExample" label="Spinbox label (unit)" v-model="spinboxValue"
            helpText="help text/formatting" :max="100" :min="1" :step="1" :disabled="false" :disableButtons="false"
            :disableIncrement="false" :disableDecrement="false" :disableInput="false" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-068"};g.play=async({args:e,canvasElement:m,parameters:t})=>{const o=S(m),i=t.testCaseId,a=o.getByRole("spinbutton"),l=o.getAllByRole("button"),u=l.find(T=>T.classList.contains("button-plus")),r=l.find(T=>T.classList.contains("button-minus"));s(a.value).toBe(String(e.modelValue));const n=Number(a.value);await j.click(u),s(Number(a.value)).toBe(n+e.step),await j.click(r),s(Number(a.value)).toBe(n),s(i).toBe("Test_Case_Id-TC-068")};const B={render:e=>({components:{SpinBox:x},setup(){return{args:e}},template:'<SpinBox v-model="args.modelValue" v-bind="args" />'}),args:{id:"spinbox1",label:"Spinbox label (unit)",modelValue:10,helpText:"help text/formatting",max:100,min:0,step:1,disableButtons:!0}};B.parameters={docs:{source:{code:`
      <script setup>
      const spinboxValue = ref(10)
 
      <\/script>
     <template>
           <SpinBox id="spinboxExample" label="Spinbox label (unit)" v-model="spinboxValue"
            helpText="help text/formatting" :max="100" :min="1" :step="1" :disabled="false" :disableButtons="true"
            :disableIncrement="false" :disableDecrement="false" :disableInput="false" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-069"};B.play=async({args:e,canvasElement:m,parameters:t})=>{const o=S(m),i=t.testCaseId,a=o.getByRole("spinbutton"),l=o.getAllByRole("button"),u=l.find(n=>n.classList.contains("button-plus")),r=l.find(n=>n.classList.contains("button-minus"));s(a).toBeEnabled(),s(u).toBeDisabled(),s(r).toBeDisabled(),s(a.value).toBe(String(e.modelValue)),s(i).toBe("Test_Case_Id-TC-069")};const h={render:e=>({components:{SpinBox:x},setup(){return{args:e}},template:'<SpinBox v-model="args.modelValue" v-bind="args" />'}),args:{id:"spinbox1",label:"Spinbox label (unit)",modelValue:10,helpText:"help text/formatting",max:100,min:0,step:1,disableIncrement:!0}};h.parameters={docs:{source:{code:`
      <script setup>
      const spinboxValue = ref(10)
      <\/script>
     <template>
           <SpinBox id="spinboxExample" label="Spinbox label (unit)" v-model="spinboxValue"
            helpText="help text/formatting" :max="100" :min="1" :step="1" :disabled="false" :disableButtons="false"
            :disableIncrement="true" :disableDecrement="false" :disableInput="false" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-070"};h.play=async({args:e,canvasElement:m,parameters:t})=>{const o=S(m),i=t.testCaseId,a=o.getByRole("spinbutton"),l=o.getAllByRole("button"),u=l.find(n=>n.classList.contains("button-plus")),r=l.find(n=>n.classList.contains("button-minus"));s(a).toBeEnabled(),s(u).toBeDisabled(),s(r).toBeEnabled(),s(a.value).toBe(String(e.modelValue)),s(i).toBe("Test_Case_Id-TC-070")};const I={render:e=>({components:{SpinBox:x},setup(){return{args:e}},template:'<SpinBox v-model="args.modelValue" v-bind="args" />'}),args:{id:"spinbox1",label:"Spinbox label (unit)",modelValue:10,helpText:"help text/formatting",max:100,min:0,step:1,disableDecrement:!0}};I.parameters={docs:{source:{code:`
      <script setup>
      const spinboxValue = ref(10)
      <\/script>
     <template>
           <SpinBox id="spinboxExample" label="Spinbox label (unit)" v-model="spinboxValue"
            helpText="help text/formatting" :max="100" :min="1" :step="1" :disabled="false" :disableButtons="false"
            :disableIncrement="false" :disableDecrement="true" :disableInput="false" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-071"};I.play=async({args:e,canvasElement:m,parameters:t})=>{const o=S(m),i=t.testCaseId,a=o.getByRole("spinbutton"),l=o.getAllByRole("button"),u=l.find(n=>n.classList.contains("button-plus")),r=l.find(n=>n.classList.contains("button-minus"));s(a).toBeEnabled(),s(u).toBeEnabled(),s(r).toBeDisabled(),s(a.value).toBe(String(e.modelValue)),s(i).toBe("Test_Case_Id-TC-071")};const V={render:e=>({components:{SpinBox:x},setup(){return{args:e}},template:'<SpinBox v-model="args.modelValue" v-bind="args" />'}),args:{id:"spinbox1",label:"Spinbox label (unit)",modelValue:10,helpText:"help text/formatting",max:100,min:0,step:1,disableInput:!0}};V.parameters={docs:{source:{code:`
      <script setup>
      const spinboxValue = ref(10)
      <\/script>
     <template>
           <SpinBox id="spinboxExample" label="Spinbox label (unit)" v-model="spinboxValue"
            helpText="help text/formatting" :max="100" :min="1" :step="1" :disabled="false" :disableButtons="false"
            :disableIncrement="false" :disableDecrement="false" :disableInput="true" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-072"};V.play=async({args:e,canvasElement:m,parameters:t})=>{const o=S(m),i=t.testCaseId,a=o.getByRole("spinbutton"),l=o.getAllByRole("button"),u=l.find(n=>n.classList.contains("button-plus")),r=l.find(n=>n.classList.contains("button-minus"));s(a).toBeDisabled(),s(u).toBeEnabled(),s(r).toBeEnabled(),s(a.value).toBe(String(e.modelValue)),s(i).toBe("Test_Case_Id-TC-072")};const y={render:e=>({components:{SpinBox:x},setup(){return{args:e}},template:'<SpinBox v-model="args.modelValue" v-bind="args" />'}),args:{id:"spinbox2",label:"Spinbox label (unit)",modelValue:50,helpText:"help text/formatting",max:100,min:0,step:1,disabled:!0}};y.parameters={docs:{source:{code:`
      <script setup>
      const spinboxValue = ref(10)
      <\/script>
     <template>
           <SpinBox id="spinboxExample" label="Spinbox label (unit)" v-model="spinboxValue"
            helpText="help text/formatting" :max="100" :min="1" :step="1" :disabled="true" :disableButtons="false"
            :disableIncrement="false" :disableDecrement="false" :disableInput="false" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-073"};y.play=async({args:e,canvasElement:m,parameters:t})=>{const o=S(m),i=t.testCaseId,a=o.getByRole("spinbutton"),l=o.getAllByRole("button"),u=l.find(n=>n.classList.contains("button-plus")),r=l.find(n=>n.classList.contains("button-minus"));s(a).toBeDisabled(),s(u).toBeDisabled(),s(r).toBeDisabled(),s(i).toBe("Test_Case_Id-TC-073")};var H,z,O;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SpinBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<SpinBox v-model="args.modelValue" v-bind="args" />'
  }),
  args: {
    id: 'spinbox1',
    label: 'Spinbox label (unit)',
    modelValue: 10,
    helpText: 'help text/formatting',
    max: 100,
    min: 0,
    step: 1,
    disabled: false,
    disableButtons: false,
    disableIncrement: false,
    disableDecrement: false,
    disableInput: false
  }
}`,...(O=(z=g.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var G,J,K;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SpinBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<SpinBox v-model="args.modelValue" v-bind="args" />'
  }),
  args: {
    id: 'spinbox1',
    label: 'Spinbox label (unit)',
    modelValue: 10,
    helpText: 'help text/formatting',
    max: 100,
    min: 0,
    step: 1,
    disableButtons: true
  }
}`,...(K=(J=B.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SpinBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<SpinBox v-model="args.modelValue" v-bind="args" />'
  }),
  args: {
    id: 'spinbox1',
    label: 'Spinbox label (unit)',
    modelValue: 10,
    helpText: 'help text/formatting',
    max: 100,
    min: 0,
    step: 1,
    disableIncrement: true
  }
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SpinBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<SpinBox v-model="args.modelValue" v-bind="args" />'
  }),
  args: {
    id: 'spinbox1',
    label: 'Spinbox label (unit)',
    modelValue: 10,
    helpText: 'help text/formatting',
    max: 100,
    min: 0,
    step: 1,
    disableDecrement: true
  }
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SpinBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<SpinBox v-model="args.modelValue" v-bind="args" />'
  }),
  args: {
    id: 'spinbox1',
    label: 'Spinbox label (unit)',
    modelValue: 10,
    helpText: 'help text/formatting',
    max: 100,
    min: 0,
    step: 1,
    disableInput: true
  }
}`,...(ae=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,le,oe;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SpinBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<SpinBox v-model="args.modelValue" v-bind="args" />'
  }),
  args: {
    id: 'spinbox2',
    label: 'Spinbox label (unit)',
    modelValue: 50,
    helpText: 'help text/formatting',
    max: 100,
    min: 0,
    step: 1,
    disabled: true
  }
}`,...(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const nt=["Default","disableButtons","disableIncrement","disableDecrement","disableInput","Disabled"];export{g as Default,y as Disabled,nt as __namedExportsOrder,tt as default,B as disableButtons,I as disableDecrement,h as disableIncrement,V as disableInput};
