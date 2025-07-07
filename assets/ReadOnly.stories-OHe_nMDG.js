import{c as _,b as y,t as V,h as C}from"./iframe-CBz0_xCM.js";import{w as b,e as a}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const R={class:"mb-3 read-only"},v=["for"],N=["id","value"],f={__name:"ReadOnly",props:["readonlyName","readonlyId","readonlyValue"],setup(e){const n=e;return(s,d)=>(C(),_("div",R,[y("label",{for:e.readonlyId,class:"form-label"},V(n.readonlyName),9,v),y("input",{id:e.readonlyId,class:"form-control",type:"number",readonly:"",value:n.readonlyValue},null,8,N)]))}};f.__docgenInfo={exportName:"default",displayName:"ReadOnly",description:"",tags:{},props:[{name:"readonlyName",type:{name:"undefined"}},{name:"readonlyId",type:{name:"undefined"}},{name:"readonlyValue",type:{name:"undefined"}}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/ReadOnly.vue"]};const g={title:"Components/Inputs/ReadOnly",component:f,tags:["autodocs"],argTypes:{readonlyId:{control:"text",description:"Unique identifier for the readonly input"},readonlyName:{control:"text",description:"Label text for the readonly input"},readonlyValue:{control:"number",description:"Value to display in the readonly input"}}},o={args:{readonlyId:"readonly1",readonlyName:"Read Only Input",readonlyValue:10}};o.parameters={docs:{source:{code:`
      <script setup>
          import { ref } from 'vue';
          const parameterValue = 10
      <\/script>
      <template>
          <ReadOnly readonlyId="exampleReadyonly" readonlyName="Label" :readonlyValue=parameterValue></ReadOnly>
      </template>
      `}},testCaseId:"Test_Case_Id-TC-060"};o.play=async({args:e,canvasElement:n,parameters:s})=>{const d=b(n),l=s.testCaseId,t=d.getByRole("spinbutton",{name:e.readonlyName});a(t).toBeInTheDocument(),a(t).toHaveValue(e.readonlyValue),a(t).toHaveAttribute("readonly"),a(t).toHaveAttribute("id",e.readonlyId),a(l).toBe("Test_Case_Id-TC-060")};const r={args:{readonlyId:"readonly2",readonlyName:"Read Only Input Disabled",readonlyValue:10,isDisabled:!0}};r.parameters={docs:{source:{code:`
 <script setup>
          import { ref } from 'vue';
          const parameterValue = 10
      <\/script>
      <template>
          <ReadOnly readonly-name="Label" :readonly-value=parameterValue></ReadOnly>
      </template>      `}},testCaseId:"Test_Case_Id-TC-061"};r.play=async({args:e,canvasElement:n,parameters:s})=>{const d=b(n),l=s.testCaseId,t=d.getByRole("spinbutton",{name:e.readonlyName});a(t).toBeInTheDocument(),a(t).toHaveValue(e.readonlyValue),a(t).toHaveAttribute("readonly"),a(t).toHaveAttribute("id",e.readonlyId),a(l).toBe("Test_Case_Id-TC-061")};var i,c,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    readonlyId: 'readonly1',
    readonlyName: 'Read Only Input',
    readonlyValue: 10
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,I;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    readonlyId: 'readonly2',
    readonlyName: 'Read Only Input Disabled',
    readonlyValue: 10,
    isDisabled: true
  }
}`,...(I=(m=r.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};const x=["Default","Disabled"];export{o as Default,r as Disabled,x as __namedExportsOrder,g as default};
