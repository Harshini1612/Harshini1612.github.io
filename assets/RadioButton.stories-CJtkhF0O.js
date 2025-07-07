import{r as D,m as f,c as m,F as T,A as S,h as b,q as E,b as g,B as I,t as F}from"./iframe-CwuKlC4w.js";import{w as v,u as G,e as a}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const w={class:"mb-4"},A=["id","name","disabled","value"],M=["for"],x={__name:"RadioButton",props:{isDisabled:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:""},groupName:{type:String,default:"defaultRadioGroup"},options:{type:Array,required:!0,validator:l=>l.every(i=>["id","label","value"].every(o=>o in i))},defaultValue:{type:[String,Number],default:null}},emits:["update:modelValue"],setup(l,{emit:i}){const o=l,s=i,t=D(o.modelValue||o.defaultValue);f(()=>o.options,n=>{!t.value&&n.length>0&&(t.value=o.defaultValue||n[0].value,s("update:modelValue",t.value))},{immediate:!0}),f(()=>o.modelValue,n=>{t.value=n});const e=()=>{s("update:modelValue",t.value)};return(n,c)=>(b(),m("div",w,[(b(!0),m(T,null,S(l.options,d=>(b(),m("div",{key:d.value,class:"form-check radio mb-4 d-flex align-items-center"},[E(g("input",{id:d.id,class:"form-check-input",type:"radio",name:l.groupName,disabled:l.isDisabled||d.disabled,value:d.value,"onUpdate:modelValue":c[0]||(c[0]=N=>t.value=N),onChange:e},null,40,A),[[I,t.value]]),g("label",{for:d.id,class:"form-check-label ms-3"},F(d.label),9,M)]))),128))]))}};x.__docgenInfo={exportName:"default",displayName:"RadioButton",description:"",tags:{},props:[{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"groupName",type:{name:"string"},defaultValue:{func:!1,value:"'defaultRadioGroup'"}},{name:"options",type:{name:"array"},required:!0},{name:"defaultValue",type:{name:"string|number"},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/RadioButton.vue"]};const{fn:q}=__STORYBOOK_MODULE_TEST__,W={title:"Components/Inputs/RadioButton",component:x,tags:["autodocs"],argTypes:{groupName:{control:"text",description:"Name attribute for the radio button group"},modelValue:{control:"text",description:"Currently selected radio button value"},options:{control:"object",description:"Array of radio button options with id, label, and value"},onChange:{description:"Event emitted when radio button state changes"},isDisabled:{control:"boolean",description:"Whether the radio button is disabled"}}},r={args:{groupName:"radioGroup1",modelValue:null,options:[{id:"option1",label:"Option 1",value:"1"},{id:"option2",label:"Option 2",value:"2"},{id:"option3",label:"Option 3",value:"3"}],onchange:q()}};r.parameters={docs:{source:{code:`
          <script setup>
            import { ref } from 'vue';
            const defaultSelectedValueForEnabled = ref('1');
          <\/script>

          <template> 
              <RadioButton v-model="defaultSelectedValueForEnabled" group-name="enabledRadioOptions" :options="[
                { id: 'exampleRadioOption1', label: 'Option 1', value: '1' },
                { id: 'exampleRadioOption2', label: 'Option 2', value: '2' },
                { id: 'exampleRadioOption3', label: 'Option 3', value: '3' },
              ]" />
         </template>
      `}},testCaseId:"Test_Case_Id-TC-053"};r.play=async({args:l,canvasElement:i,parameters:o})=>{const s=v(i),t=o.testCaseId,e=s.getAllByRole("radio");await G.click(e[0]),a(e[0]).toBeChecked(),a(e[1]).not.toBeChecked(),a(e[2]).not.toBeChecked(),e.forEach((n,c)=>{a(n.name).toBe(l.groupName),a(t).toBe("Test_Case_Id-TC-053")})};const u={args:{groupName:"radioGroup2",modelValue:"1",options:[{id:"option1",label:"Option 1",value:"1"},{id:"option2",label:"Option 2",value:"2"},{id:"option3",label:"Option 3",value:"3"}]}};u.parameters={docs:{source:{code:`
 <script setup>
   import { ref } from 'vue';
   const defaultSelectedValueForEnabled = ref('1');
 <\/script>

 <template> 
     <RadioButton v-model="defaultSelectedValueForEnabled" group-name="enabledRadioOptions" :options="[
       { id: 'exampleRadioOption1', label: 'Option 1', value: '1' },
       { id: 'exampleRadioOption2', label: 'Option 2', value: '2' },
       { id: 'exampleRadioOption3', label: 'Option 3', value: '3' },
     ]" />
</template>
      `}},testCaseId:"Test_Case_Id-TC-054"};u.play=async({args:l,canvasElement:i,parameters:o})=>{const s=v(i),t=o.testCaseId,e=s.getAllByRole("radio");a(e[0]).toBeChecked(),a(e[1]).not.toBeChecked(),a(e[2]).not.toBeChecked(),e.forEach((n,c)=>{a(n.name).toBe(l.groupName),a(t).toBe("Test_Case_Id-TC-054")})};const p={args:{groupName:"radioGroup3",modelValue:1,options:[{id:"option1",label:"Option 1",value:"1"},{id:"option2",label:"Option 2",value:"2"},{id:"option3",label:"Option 3",value:"3"}],isDisabled:!0}};p.parameters={docs:{source:{code:`
<script setup>
   import { ref } from 'vue';
   const defaultSelectedValueForDisabled = ref('2');
 <\/script>

 <template> 
     <RadioButton v-model="defaultSelectedValueForDisabled" group-name="disabledRadioOptions" :is-disabled="true" 
     :options="[
       { id: 'exampleRadioOption1', label: 'Option 1', value: '1' },
       { id: 'exampleRadioOption2', label: 'Option 2', value: '2' },
       { id: 'exampleRadioOption3', label: 'Option 3', value: '3' },
     ]" />
</template>
      `}},testCaseId:"Test_Case_Id-TC-055"};p.play=async({args:l,canvasElement:i,parameters:o})=>{const s=v(i),t=o.testCaseId,e=s.getAllByRole("radio");a(e[0]).toBeChecked(),a(e[1]).not.toBeChecked(),a(e[2]).not.toBeChecked(),e.forEach(n=>{a(n).toBeDisabled()}),e.forEach((n,c)=>{a(n.name).toBe(l.groupName),a(t).toBe("Test_Case_Id-TC-055")})};var O,h,C;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    groupName: 'radioGroup1',
    modelValue: null,
    options: [{
      id: 'option1',
      label: 'Option 1',
      value: '1'
    }, {
      id: 'option2',
      label: 'Option 2',
      value: '2'
    }, {
      id: 'option3',
      label: 'Option 3',
      value: '3'
    }],
    onchange: fn()
  }
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var B,y,V;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    groupName: 'radioGroup2',
    modelValue: '1',
    options: [{
      id: 'option1',
      label: 'Option 1',
      value: '1'
    }, {
      id: 'option2',
      label: 'Option 2',
      value: '2'
    }, {
      id: 'option3',
      label: 'Option 3',
      value: '3'
    }]
  }
}`,...(V=(y=u.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var R,_,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    groupName: 'radioGroup3',
    modelValue: 1,
    options: [{
      id: 'option1',
      label: 'Option 1',
      value: '1'
    }, {
      id: 'option2',
      label: 'Option 2',
      value: '2'
    }, {
      id: 'option3',
      label: 'Option 3',
      value: '3'
    }],
    isDisabled: true
  }
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const Y=["Default","Checked","Disabled"];export{u as Checked,r as Default,p as Disabled,Y as __namedExportsOrder,W as default};
