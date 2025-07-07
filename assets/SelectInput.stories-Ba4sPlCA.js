import{r as B,C as M,m as j,o as q,a as E,c as m,b as e,t as g,D as A,i as b,w as y,F as h,A as F,h as v,g as H}from"./iframe-CBz0_xCM.js";import{M as U}from"./bootstrap.esm-DwOKKX6j.js";import{_ as I,I as R}from"./IconSmall-Bz8-L_Fp.js";import{I as $}from"./IconClose-DSv5ak44.js";import{w as D,e as d,u as P}from"./index-F5U9YNKP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const W={class:"mb-3 embedded-input"},z=["for"],G={class:"form-select-group"},J=["id","value","disabled"],K={class:"modal-dialog"},Q={class:"modal-content"},X={class:"modal-body d-flex justify-content-center align-items-center"},Y={class:"card m-3"},Z={class:"card-header w-100 align-items-center justify-content-between d-flex p-3"},ee={class:"d-flex justify-content-center align-items-center w-100"},te={class:"input-heading"},le={class:"card-body w-100 pe-0"},se={class:"pe-3"},ne={class:"d-flex justify-content-between align-items-center position-relative selected"},ae={key:0,class:"position-absolute",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 22.58159",fill:"currentColor",width:"30",height:"23"},oe={class:"mx-5"},f={__name:"SelectInput",props:{selectId:{type:String,required:!0},selectName:{type:String,required:!0},isDisabled:{type:Boolean,default:!1},options:{type:Array,required:!0,validator:t=>t.every(a=>"value"in a&&"label"in a)},modelValue:{type:[String,Number],default:""}},emits:["update:modelValue"],setup(t,{emit:a}){const s=t,i=a,c=B(null);let l=null;const N=M(()=>{const n=s.options.find(o=>o.value===s.modelValue);return n?n.label:""}),k=n=>n===s.modelValue,L=n=>{i("update:modelValue",n),O()},T=()=>{!s.isDisabled&&l&&l.show()},O=()=>{l&&l.hide()};return j(()=>s.options,n=>{n.length>0&&!s.modelValue&&i("update:modelValue",n[0].value)}),q(()=>{c.value&&(l=new U(c.value)),s.options.length>0&&!s.modelValue&&i("update:modelValue",s.options[0].value)}),E(()=>{l&&l.dispose()}),(n,o)=>(v(),m(h,null,[e("div",W,[e("label",{for:t.selectId,class:"form-label"},g(t.selectName),9,z),e("div",G,[e("input",{id:t.selectId,class:"form-control form-select form-control-lg mb-3",value:N.value,onClick:A(T,["prevent"]),type:"text",disabled:t.isDisabled,readonly:""},null,8,J)])]),e("div",{class:"modal modal-select",ref_key:"modalRef",ref:c,tabindex:"-1","aria-hidden":"true"},[e("div",K,[e("div",Q,[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("h5",te,g(t.selectName),1)]),b(I,{buttonType:"btn-primary",onClick:O,type:"button"},{default:y(()=>[b(R,null,{default:y(()=>[b($)]),_:1})]),_:1})]),e("div",le,[e("div",se,[(v(!0),m(h,null,F(t.options,p=>(v(),m("div",{class:"flex w-100",key:p.value},[e("div",ne,[k(p.value)?(v(),m("svg",ae,o[0]||(o[0]=[e("polygon",{points:"28 3.46895 8.88736 22.58159 0 13.70378 3.46895 10.24441 8.88736 15.65325 24.54062 0 28 3.46895"},null,-1)]))):H("",!0),e("div",oe,g(p.label),1),b(I,{buttonType:"btn-secondary",class:"d-flex justify-content-center align-items-center",onClick:ie=>L(p.value)},{default:y(()=>o[1]||(o[1]=[e("div",{class:"btn-content"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 22.58159",fill:"currentColor",width:"30",height:"23"},[e("polygon",{points:"28 3.46895 8.88736 22.58159 0 13.70378 3.46895 10.24441 8.88736 15.65325 24.54062 0 28 3.46895"})])],-1)])),_:2,__:[1]},1032,["onClick"])]),o[2]||(o[2]=e("hr",null,null,-1))]))),128))])])])])])])],512)],64))}};f.__docgenInfo={exportName:"default",displayName:"SelectInput",description:"",tags:{},props:[{name:"selectId",type:{name:"string"},required:!0},{name:"selectName",type:{name:"string"},required:!0},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"options",type:{name:"array"},required:!0},{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/SelectInput.vue"]};const fe={title:"Components/InputPopups/SelectInput",component:f,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"Currently selected value"},selectId:{control:"text",description:"ID for the select element"},selectName:{control:"text",description:"Name/label for the select element"},isDisabled:{control:"boolean",description:"Whether the select is disabled"},options:{control:"object",description:"Array of options with value and label properties"},"onUpdate:modelValue":{action:"update:modelValue",description:"Event emitted when the selected value changes"}}},r={args:{modelValue:"Option 1",selectId:"select1",selectName:"Select Label",isDisabled:!1,options:[{value:"Option 1",label:"Option 1"},{value:"Option 2",label:"Option 2"},{value:"Option 3",label:"Option 3"}]},render:t=>({components:{SelectInput:f},setup(){return{args:t}},template:'<SelectInput v-bind="args" v-model="args.modelValue" />'})};r.parameters={docs:{source:{code:`
     <script setup>
        const selectedValueEnabled = ref('Option 1')
     <\/script>
     <template>
           <SelectInput v-model="selectedValueEnabled" selectId="selectLabel" selectName="Select Label"
            :isDisabled="false" 
            :options="[
              { value: 'Option 1', label: 'Option 1' },
              { value: 'Option 2', label: 'Option 2' },
              { value: 'Option 3', label: 'Option 3' },
            ]" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-064"};r.play=async({args:t,canvasElement:a,parameters:s})=>{const i=D(a),c=s.testCaseId,l=i.getByLabelText("Select Label");d(l).toHaveValue(t.modelValue),d(l).toHaveValue("Option 1"),d(t.modelValue).toBe("Option 1"),d(c).toBe("Test_Case_Id-TC-064")};const u={args:{modelValue:"Option 1",selectId:"select2",selectName:"Select Label",isDisabled:!0,options:[{value:"Option 1",label:"Option 1"},{value:"Option 2",label:"Option 2"},{value:"Option 3",label:"Option 3"}]},render:t=>({components:{SelectInput:f},setup(){return{args:t}},template:'<SelectInput v-bind="args" v-model="args.modelValue" />'})};u.parameters={docs:{source:{code:`
     <script setup>
         const const selectedValueDisabled = ref('Option 1');
     <\/script>
     <template>
           <SelectInput v-model="selectedValueDisabled" selectId="selectLabel" selectName="Select Label" :isDisabled="true"
           :options="[
              { value: 'Option 1', label: 'Option 1' },
              { value: 'Option 2', label: 'Option 2' },
              { value: 'Option 3', label: 'Option 3' },
            ]" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-065"};u.play=async({args:t,canvasElement:a,parameters:s})=>{const i=D(a),c=s.testCaseId,l=i.getByLabelText("Select Label");d(l).toBeDisabled(),await P.click(l),d(l).toHaveValue(t.modelValue),d(c).toBe("Test_Case_Id-TC-065")};var _,V,S;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    modelValue: 'Option 1',
    selectId: 'select1',
    selectName: 'Select Label',
    isDisabled: false,
    options: [{
      value: 'Option 1',
      label: 'Option 1'
    }, {
      value: 'Option 2',
      label: 'Option 2'
    }, {
      value: 'Option 3',
      label: 'Option 3'
    }]
  },
  render: args => ({
    components: {
      SelectInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<SelectInput v-bind="args" v-model="args.modelValue" />'
  })
}`,...(S=(V=r.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var w,C,x;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    modelValue: 'Option 1',
    selectId: 'select2',
    selectName: 'Select Label',
    isDisabled: true,
    options: [{
      value: 'Option 1',
      label: 'Option 1'
    }, {
      value: 'Option 2',
      label: 'Option 2'
    }, {
      value: 'Option 3',
      label: 'Option 3'
    }]
  },
  render: args => ({
    components: {
      SelectInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<SelectInput v-bind="args" v-model="args.modelValue" />'
  })
}`,...(x=(C=u.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const ge=["Default","Disabled"];export{r as Default,u as Disabled,ge as __namedExportsOrder,fe as default};
