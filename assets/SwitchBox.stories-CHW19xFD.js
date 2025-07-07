import{p as y,u as _,r as I,m as O,c as T,b as r,t as p,e as v,F as D,h as L,k as V}from"./iframe-CBz0_xCM.js";import{w as h,u as d,e as c}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const E={class:"form-check form-switch mb-4"},M=["id","checked","disabled"],q=["for"],x={__name:"SwitchBox",props:y({switchId:{type:String,required:!0},labelSwitch:{type:String,required:!0},isDisabled:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=_(t,"modelValue"),s=I(a.value);O(a,e=>{s.value=e});const o=e=>{a.value=e.target.checked};return(e,N)=>(L(),T(D,null,[r("p",null,p(t.labelSwitch),1),r("div",E,[r("input",{id:t.switchId,class:"form-check-input",type:"checkbox",checked:s.value,onChange:o,disabled:t.isDisabled},null,40,M),r("label",{class:"form-check-label",for:t.switchId},[v(e.$slots,"switch-label",{isOn:s.value},()=>[V(p(s.value?"On":"Off"),1)])],8,q)])],64))}};x.__docgenInfo={exportName:"default",displayName:"SwitchBox",description:"",tags:{},props:[{name:"switchId",type:{name:"string"},required:!0},{name:"labelSwitch",type:{name:"string"},required:!0},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"switch-label",scoped:!0,bindings:[{name:"is-on",title:"binding"}]}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/SwitchBox.vue"]};const{fn:m}=__STORYBOOK_MODULE_TEST__,Y={title:"Components/Inputs/SwitchBox",component:x,tags:["autodocs"],argTypes:{switchId:{control:"text",description:"Unique identifier for the switch",table:{category:"props"}},labelSwitch:{control:"text",description:"Label text for the switch",table:{category:"props"}},modelValue:{control:"boolean",description:"Controls the checked state of the switch",table:{category:"props"}},isDisabled:{control:"boolean",description:"Disables the switch",table:{category:"props"}}}},i={args:{switchId:"switch1",labelSwitch:"Label",modelValue:!1,onChange:m()}};i.parameters={docs:{source:{code:`
          <script setup>
            import { ref } from 'vue';
            const isSwitchChecked = ref(false);
          <\/script>
          <template>
            <SwitchBox
              v-model="isSwitchChecked"
              switch-id="example"
              label-switch="Label"
            >
              <template #switch-label="{ isOn }">
                {{ isOn ? "On" : "Off" }}
              </template>
            </SwitchBox>
          </template>
 
      `}},testCaseId:"Test_Case_Id-TC-076"};i.play=async({canvasElement:t,parameters:a})=>{const s=h(t),o=a.testCaseId,e=s.getByLabelText("Off");await d.click(e),c(e).toBeChecked(),await d.click(e),c(e).not.toBeChecked(),c(o).toBe("Test_Case_Id-TC-076")};const l={args:{switchId:"switch2",labelSwitch:"Label",modelValue:!0,onChange:m()}};l.parameters={docs:{source:{code:`
          <script setup>
            import { ref } from 'vue';
            const isSwitchChecked = ref(true);
          <\/script>
          <template>
            <SwitchBox
              v-model="isSwitchChecked"
              switch-id="example"
              label-switch="Label"
            >
              <template #switch-label="{ isOn }">
                {{ isOn ? "On" : "Off" }}
              </template>
            </SwitchBox>
          </template>
      `}},testCaseId:"Test_Case_Id-TC-077"};l.play=async({canvasElement:t,parameters:a})=>{const s=h(t),o=a.testCaseId,e=s.getByLabelText("On");await d.click(e),c(e).not.toBeChecked(),await d.click(e),c(e).toBeChecked(),c(o).toBe("Test_Case_Id-TC-077")};const n={args:{switchId:"switch3",labelSwitch:"Label",modelValue:!0,isDisabled:!0,onChange:m()}};n.parameters={docs:{source:{code:`
      <script setup>
        import { ref } from "vue";
        const isSwitchcheckedDisabled = ref(true);
      <\/script>
      <template>
          <SwitchBox
            v-model="isSwitchcheckedDisabled"
            switch-id="disabledExample"
            isDisabled
            label-switch="Label"
          >
            <template #switch-label="{ isOn }">
              {{ isOn ? "On" : "Off" }}
            </template>
          </SwitchBox>
      </template>
      `}},testCaseId:"Test_Case_Id-TC-078"};n.play=async({canvasElement:t,parameters:a})=>{const s=h(t),o=a.testCaseId,e=s.getByLabelText("On");c(e).toBeDisabled(),c(o).toBe("Test_Case_Id-TC-078")};var u,w,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    switchId: 'switch1',
    labelSwitch: 'Label',
    modelValue: false,
    onChange: fn()
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var f,C,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    switchId: 'switch2',
    labelSwitch: 'Label',
    modelValue: true,
    onChange: fn()
  }
}`,...(g=(C=l.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var S,k,B;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    switchId: 'switch3',
    labelSwitch: 'Label',
    modelValue: true,
    isDisabled: true,
    onChange: fn()
  }
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const $=["Default","Checked","Disabled"];export{l as Checked,i as Default,n as Disabled,$ as __namedExportsOrder,Y as default};
