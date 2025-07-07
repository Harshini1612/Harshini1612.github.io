import{r as d,m as S,c as p,b as v,g as y,q as E,t as m,s as H,n as q,h as c}from"./iframe-CBz0_xCM.js";import{w as I,u as T,e as s}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const N={class:"embedded-input"},A=["for"],M={key:0,id:"help-text",class:"ms-2"},L=["id","type","disabled"],R={key:1,class:"invalid-feedback",id:"error-message"},x={__name:"TextBox",props:{id:{type:String,required:!0},label:{type:String,required:!0},helpText:{type:String,default:""},type:{type:String,default:"text",validator:e=>["text","number","email","password","tel","url","date"].includes(e)},disabled:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:""}},emits:["update:modelValue"],setup(e,{emit:r}){const n=e,u=r,a=d(n.modelValue),t=d(!1),i=d("");S(()=>n.modelValue,b=>{a.value=b});const D=()=>{a.value.toString().trim()===""?(t.value=!0,i.value="Input cannot be empty"):(t.value=!1,i.value=""),u("update:modelValue",a.value)};return(b,f)=>(c(),p("div",N,[v("label",{class:"form-label",for:e.id},m(e.label),9,A),e.helpText?(c(),p("span",M,m(e.helpText),1)):y("",!0),E(v("input",{class:q(["form-control",{"is-invalid":t.value}]),id:e.id,type:e.type,"onUpdate:modelValue":f[0]||(f[0]=w=>a.value=w),disabled:e.disabled,onInput:D,"aria-describedby":"help-text error-message"},null,42,L),[[H,a.value]]),t.value?(c(),p("div",R,m(i.value),1)):y("",!0)]))}};x.__docgenInfo={exportName:"default",displayName:"TextBox",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"helpText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"},values:["text","number","email","password","tel","url","date"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/TextBox.vue"]};const P={title:"Components/InputPopups/TextInputDesktop",component:x,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},helpText:{control:"text"},type:{control:"select",options:["text","number","email","password","tel","url","date"]},disabled:{control:"boolean"},modelValue:{control:"text"}}},_=e=>({components:{TextBox:x},setup(){return{args:e}},template:'<TextBox v-bind="args" />'}),l=_.bind({});l.args={id:"textinputdesktop",label:"Text input Label",helpText:"help/format/mask",type:"text",disabled:!1,modelValue:"Value"};l.parameters={docs:{source:{code:`
       script setup>
          import { ref } from 'vue';
          const userEmail = ref('Value')
        <\/script>
      <template>
       <TextBox id="email-input" label="Text input label" type="text" helpText="help/format/mask" :disabled=false
            v-model="userEmail" />    
      </template>
      `}},testcaseId:"Test_Case_Id-TC-079"};l.play=async({args:e,canvasElement:r,parameters:n})=>{const u=I(r),a=n.testcaseId,t=u.getByRole("textbox",{name:e.label});await T.clear(t),await T.type(t,"Value"),s(t).toHaveValue("Value"),s(t).toHaveAttribute("id",e.id),s(t).toHaveAttribute("type",e.type),s(a).toBe("Test_Case_Id-TC-079")};const o=_.bind({});o.args={id:"inputdesktop",label:"Text input Label",helpText:"help/format/mask",type:"text",disabled:!0,modelValue:"Value"};o.parameters={docs:{source:{code:`
      <script setup>
          import { ref } from 'vue';
          const userEmail = ref('Value')
      <\/script>
      <template>
       <TextBox id="email-input" label="Text input label" type="text" helpText="help/format/mask" :disabled=true
            v-model="userEmail" />    
      </template>
      `}},testCaseId:"Test_Case_Id-TC-080"};o.play=async({args:e,canvasElement:r,parameters:n})=>{const u=I(r),a=n.testCaseId,t=u.getByRole("textbox",{name:e.label});s(t).toBeDisabled(),s(t).toHaveValue(e.modelValue),s(t).toHaveAttribute("id",e.id),s(t).toHaveAttribute("type",e.type),s(a).toBe("Test_Case_Id-TC-080")};var g,V,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    TextBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextBox v-bind="args" />'
})`,...(h=(V=l.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var B,k,C;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    TextBox
  },
  setup() {
    return {
      args
    };
  },
  template: '<TextBox v-bind="args" />'
})`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const j=["Default","Disabled"];export{l as Default,o as Disabled,j as __namedExportsOrder,P as default};
