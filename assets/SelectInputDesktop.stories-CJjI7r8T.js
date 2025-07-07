import{d as C,c as p,b as d,t as b,F as V,A as _,h as u}from"./iframe-CwuKlC4w.js";import{w as k,e as n,u as S}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const O={class:"mb-3 embedded-input"},N=["for"],x={class:"custom-select-holder"},T=["id","name","value","disabled"],B=["value"],m=C({__name:"SelectInputDesktop",props:{selectId:{type:String,required:!0},selectName:{type:String,required:!0},options:{type:Array,required:!0,validator:e=>Array.isArray(e)&&e.every(s=>"value"in s&&"label"in s)},modelValue:{type:[String,Number],default:""},isDisabled:{type:Boolean,default:!1},label:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{emit:s}){const i=s;function c(o){const t=o.target;i("update:modelValue",t.value)}return(o,t)=>(u(),p("div",O,[d("label",{class:"form-label",for:e.selectId},b(e.label),9,N),d("div",x,[d("select",{id:e.selectId,name:e.selectName,class:"mb-3 custom-select form-control",value:e.modelValue,onChange:c,disabled:e.isDisabled},[(u(!0),p(V,null,_(e.options,r=>(u(),p("option",{key:r.value,value:r.value},b(r.label),9,B))),128))],40,T)])]))}});m.__docgenInfo={exportName:"default",displayName:"SelectInputDesktop",description:"",tags:{},props:[{name:"selectId",type:{name:"string"},required:!0},{name:"selectName",type:{name:"string"},required:!0},{name:"options",type:{name:"Option[]"},required:!0},{name:"modelValue",type:{name:"string | number"},defaultValue:{func:!1,value:"''"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!0}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/SelectInputDesktop.vue"]};const A={title:"Components/InputPopups/SelectInputDesktop",component:m,tags:["autodocs"],argTypes:{selectId:{control:"text",description:"ID for the select element"},selectName:{control:"text",description:"Name for the select element"},options:{control:"object",description:"Array of options for the select input"},modelValue:{control:"text",description:"Currently selected value"},isDisabled:{control:"boolean",description:"Disables the select input"},label:{control:"text",description:"Label for the select input"},"update:modelValue":{action:"update:modelValue",description:"Emitted when the selected value changes"}}},h=e=>({components:{SelectInputDesktop:m},setup(){return{args:e}},template:'<SelectInputDesktop v-bind="args" />'}),l=h.bind({});l.args={label:"Select label",selectId:"select-desktop",selectName:"select-desktop",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],modelValue:"option1",isDisabled:!1};l.play=async({args:e,canvasElement:s,parameters:i})=>{const c=k(s),o=i.testCaseId,t=c.getByRole("combobox",{name:"Select label"});n(t).toHaveValue(e.modelValue),await S.selectOptions(t,"option2"),n(t).toHaveValue("option2"),n(o).toBe("Test_Case_Id-TC-066")};l.parameters={docs:{source:{code:`
      <script setup>
          const selectedDesktopEnabled = ref('option1')
        <\/script>
     <template>
           <SelectInputDesktop v-model="selectedDesktopEnabled" selectId="selectLabelEnabled" selectName="selectLabelEnabled"
            label="Select label" :isDisabled="false" :options="[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-066"};const a=h.bind({});a.args={label:"Select label",selectId:"select-disabled",selectName:"select-disabled",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],modelValue:"option1",isDisabled:!0};a.play=async({args:e,canvasElement:s,parameters:i})=>{const c=k(s),o=i.testCaseId,t=c.getByRole("combobox",{name:"Select label"});n(t).toBeDisabled(),await S.selectOptions(t,"option2"),n(t).toHaveValue(e.modelValue),n(o).toBe("Test_Case_Id-TC-067")};a.parameters={docs:{source:{code:`
      <script setup>
         const selectedDesktopDisabled = ref('option1')
      <\/script>
     <template>
           <SelectInputDesktop v-model="selectedDesktopDisabled" selectId="selectLabelDisabled" selectName="selectLabelDisabled"
            label="Select label" :isDisabled="true" :options="[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]" />
     </template>
      `}},testCaseId:"Test_Case_Id-TC-067"};var v,D,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    SelectInputDesktop
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectInputDesktop v-bind="args" />'
})`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    SelectInputDesktop
  },
  setup() {
    return {
      args
    };
  },
  template: '<SelectInputDesktop v-bind="args" />'
})`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const F=["Default","Disabled"];export{l as Default,a as Disabled,F as __namedExportsOrder,A as default};
