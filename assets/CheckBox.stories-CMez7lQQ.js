import{p as D,u as v,r as _,m as T,c as V,q as w,b,v as S,t as M,h as q}from"./iframe-CBz0_xCM.js";import{w as k,u as E,e as o}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const O={class:"form-check-input-wrapper checkbox d-flex flex-row flex-grow-1 mb-3"},F=["id","disabled"],R={class:"checkbox-label form-label mt-3 ms-3"},U=["for"],y={__name:"CheckBoxVue",props:D({checkboxId:{type:String,required:!0},labelCheckbox:{type:String,required:!0},isDisabled:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=v(e,"modelValue"),n=_(t.value);T(t,s=>{n.value=s});const a=s=>{t.value=s.target.checked};return(s,c)=>(q(),V("div",O,[w(b("input",{id:e.checkboxId,class:"form-check-input form-control-lg form-check-primary mt-0",type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=l=>t.value=l),onChange:a,disabled:e.isDisabled},null,40,F),[[S,t.value]]),b("span",R,[b("label",{for:e.checkboxId},M(e.labelCheckbox),9,U)])]))}};y.__docgenInfo={exportName:"default",displayName:"CheckBoxVue",description:"",tags:{},props:[{name:"checkboxId",type:{name:"string"},required:!0},{name:"labelCheckbox",type:{name:"string"},required:!0},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/CheckBoxVue.vue"]};const{fn:i}=__STORYBOOK_MODULE_TEST__,Y={title:"Components/Inputs/CheckBox",component:y,tags:["autodocs"],argTypes:{checkboxId:{control:"text",description:"Unique identifier for the checkbox"},labelCheckbox:{control:"text",description:"Label text for the checkbox"},modelValue:{control:"boolean",description:"Controls the checked state of the checkbox (v-model)",table:{category:"props"}},isDisabled:{control:"boolean",description:"Disables the checkbox",table:{category:"props"}},onChange:{description:"Event emitted when checkbox state changes",table:{category:"events"}}}},r={args:{checkboxId:"checkbox1",labelCheckbox:"Default Checkbox",modelValue:!1,onChange:i()}};r.parameters={docs:{source:{code:`
        <script setup>
          import { ref } from 'vue';
          const isCheckChecked = ref(false);
        <\/script>
        <template>
          <CheckBox
            checkboxId="exampleCheckbox1"
            labelCheckbox="Default Checkbox"
            v-model="isCheckChecked"
          ></CheckBox>
        </template>
      `}},testCaseId:"Test_Case_Id-TC-016"};r.play=async({args:e,canvasElement:t,parameters:n})=>{const a=k(t),s=n.testCaseId,c=a.getByRole("checkbox",{name:e.labelCheckbox});await E.click(c),o(c).toBeChecked(),o(c).not.toBeDisabled(),o(e.onChange).toHaveBeenCalled(),o(c.id).toBe(e.checkboxId);const l=a.getByText(e.labelCheckbox);o(l).toBeInTheDocument(),o(l.htmlFor).toBe(e.checkboxId),o(s).toBe("Test_Case_Id-TC-016")};const d={args:{checkboxId:"checkbox2",labelCheckbox:"Checked Checkbox",modelValue:!0,onChange:i()}};d.parameters={docs:{source:{code:`
          <script setup>
            import { ref } from 'vue';
            const isCheckChecked = ref(true);
          <\/script>
          <template>
            <CheckBox
              checkboxId="exampleCheckbox2"
              labelCheckbox="Checked Checkbox"
              v-model="isCheckChecked"
            ></CheckBox>
          </template>
      `}},testCaseId:"Test_Case_Id-TC-017"};d.play=async({args:e,canvasElement:t,parameters:n})=>{const a=k(t),s=n.testCaseId,c=a.getByRole("checkbox",{name:e.labelCheckbox});o(c).toBeChecked(),o(c).not.toBeDisabled(),o(e.onChange).not.toHaveBeenCalled(),o(c.id).toBe(e.checkboxId);const l=a.getByText(e.labelCheckbox);o(l).toBeInTheDocument(),o(l.htmlFor).toBe(e.checkboxId),o(s).toBe("Test_Case_Id-TC-017")};const h={args:{checkboxId:"checkbox3",labelCheckbox:"Disabled Checkbox",modelValue:!0,isDisabled:!0,onChange:i()}};h.parameters={docs:{source:{code:`
          <script setup>
            import { ref } from 'vue';
            const isCheckChecked = ref(true);
          <\/script>
          <template>
            <CheckBox
              checkboxId="exampleCheckbox3"
              labelCheckbox="Disabled Checkbox"
              v-model="isCheckChecked"
              isDisabled
            ></CheckBox>
          </template>
      `}},testCaseId:"Test_Case_Id-TC-018"};h.play=async({args:e,canvasElement:t,parameters:n})=>{const a=k(t),s=n.testCaseId,c=a.getByRole("checkbox",{name:e.labelCheckbox});o(c).toBeChecked(),o(c).toBeDisabled(),o(e.onChange).not.toHaveBeenCalled(),o(c.id).toBe(e.checkboxId);const l=a.getByText(e.labelCheckbox);o(l).toBeInTheDocument(),o(l.htmlFor).toBe(e.checkboxId),o(s).toBe("Test_Case_Id-TC-018")};var C,x,m;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    checkboxId: 'checkbox1',
    labelCheckbox: 'Default Checkbox',
    modelValue: false,
    onChange: fn()
  }
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var u,p,f;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checkboxId: 'checkbox2',
    labelCheckbox: 'Checked Checkbox',
    modelValue: true,
    onChange: fn()
  }
}`,...(f=(p=d.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var B,I,g;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    checkboxId: 'checkbox3',
    labelCheckbox: 'Disabled Checkbox',
    modelValue: true,
    isDisabled: true,
    onChange: fn()
  }
}`,...(g=(I=h.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const j=["Default","Checked","Disabled"];export{d as Checked,r as Default,h as Disabled,j as __namedExportsOrder,Y as default};
