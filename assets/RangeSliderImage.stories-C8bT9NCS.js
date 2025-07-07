import{C as o,c as _,b as c,t as u,k as B,e as p,F as S,h as L}from"./iframe-CBz0_xCM.js";import{w as f,u as D,e as t}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const N=["for"],R={class:"d-flex justify-content-center"},C={class:""},T={class:"d-flex"},H={class:"pe-3 d-flex align-items-center"},k=["id","min","max","step","value","disabled"],q={class:"ps-3 d-flex align-items-center"},g={__name:"RangeSliderImage",props:{modelValue:{type:Number,required:!0},rangeName:{type:String,required:!0},minValue:{type:Number,required:!0},maxValue:{type:Number,required:!0},step:{type:Number,default:1},isDisabled:{type:Boolean,default:!1},sliderId:{type:String,default:"customRange"}},emits:["update:modelValue","change"],setup(s,{emit:m}){const r=s,n=m,l=o({get(){return r.modelValue},set(a){n("update:modelValue",a),n("change",a)}}),e=o(()=>l.value);function I(a){const h=Number(a.target.value);l.value=h}return(a,h)=>(L(),_(S,null,[c("label",{class:"form-label",for:s.sliderId},u(s.rangeName),9,N),c("div",R,[c("div",C,[B(u(e.value),1),p(a.$slots,"default")])]),c("div",T,[c("div",H,[p(a.$slots,"lowimage")]),c("input",{class:"form-range",id:s.sliderId,min:s.minValue,max:s.maxValue,step:s.step,value:l.value,onInput:I,disabled:s.isDisabled,type:"range"},null,40,k),c("div",q,[p(a.$slots,"highimage")])])],64))}};g.__docgenInfo={exportName:"default",displayName:"RangeSliderImage",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"rangeName",type:{name:"string"},required:!0},{name:"minValue",type:{name:"number"},required:!0},{name:"maxValue",type:{name:"number"},required:!0},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sliderId",type:{name:"string"},defaultValue:{func:!1,value:"'customRange'"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"default"},{name:"lowimage"},{name:"highimage"}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/RangeSliderImage.vue"]};const{fn:b}=__STORYBOOK_MODULE_TEST__,A={title:"Components/Inputs/RangeSliderImage",component:g,tags:["autodocs"],argTypes:{modelValue:{control:"number",description:"Current value of the range slider"},minValue:{control:"number",description:"Minimum value of the range"},maxValue:{control:"number",description:"Maximum value of the range"},rangeName:{control:"text",description:"Title of the range slider"},step:{control:"number",description:"Step increment of the range slider"},sliderId:{control:"text",description:"Unique ID for the slider input"},isDisabled:{control:"boolean",description:"Disables the range slider"},onChange:{description:"Event emitted when slider value changes"}}},d={args:{modelValue:50,minValue:0,maxValue:100,isDisabled:!1,rangeName:"Brightness",step:1,sliderId:"default-range-slider-image","onUpdate:modelValue":b()},render:s=>({components:{RangeSliderImage:g},setup(){return{args:s}},template:`<RangeSliderImage v-model="args.modelValue" :minValue="args.minValue" :maxValue="args.maxValue" :rangeName="args.rangeName" :step="args.step" :sliderId="args.sliderId" :isDisabled="args.isDisabled">
        <template #lowimage>
          <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"></path><path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path></svg>
        </template>
        <template #highimage>
          <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"></path><path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><g><line class="cls-1" x1="16.8" y1="5.5" x2="20.3" y2="2"></line><path class="cls-1" d="m16.8,6c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="1.8" y1="2" x2="5.3" y2="5.5"></line><path class="cls-1" d="m5.3,6c-.1,0-.3,0-.4-.1L1.4,2.4c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="16.8" y1="16" x2="20.3" y2="19.5"></line><path class="cls-1" d="m20.3,20c-.1,0-.3,0-.4-.1l-3.5-3.5c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="1.8" y1="19.5" x2="5.3" y2="16"></line><path class="cls-1" d="m1.8,20c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z"></path></g></svg>
        </template>
      </RangeSliderImage>
    `})};d.parameters={docs:{source:{code:`
<script setup>
          import { ref } from 'vue';
          const bright_ness = ref(50)
          function syncToBackend(newValue) {
          // call your API here
          console.log('send to server:', newValue)}
      <\/script>
      <template>
        <RangeSliderImage v-model="bright_ness" range-name="Brightness" :min-value="0" :max-value="100" :step="10"
            :isDisabled="false" slider-id="brightnessSlider" @change="syncToBackend">
            <template #lowimage> <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path class="cls-1"
                  d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z" />
                <path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z" />
                <path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z" />
                <path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z" />
                <path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z" />
              </svg></template>
            <template #highimage>
              <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path class="cls-1"
                  d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z" />
                <path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z" />
                <path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z" />
                <path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z" />
                <path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z" />
                <g>
                  <line class="cls-1" x1="16.8" y1="5.5" x2="20.3" y2="2" />
                  <path class="cls-1"
                    d="m16.8,6c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z" />
                </g>
                <g>
                  <line class="cls-1" x1="1.8" y1="2" x2="5.3" y2="5.5" />
                  <path class="cls-1"
                    d="m5.3,6c-.1,0-.3,0-.4-.1L1.4,2.4c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z" />
                </g>
                <g>
                  <line class="cls-1" x1="16.8" y1="16" x2="20.3" y2="19.5" />
                  <path class="cls-1"
                    d="m20.3,20c-.1,0-.3,0-.4-.1l-3.5-3.5c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z" />
                </g>
                <g>
                  <line class="cls-1" x1="1.8" y1="19.5" x2="5.3" y2="16" />
                  <path class="cls-1"
                    d="m1.8,20c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z" />
                </g>
              </svg>
            </template>
          </RangeSliderImage>     
      </template>
      `}},testCaseId:"Test_Case_Id-TC-058"};d.play=async({args:s,canvasElement:m,parameters:r})=>{const n=f(m),l=r.testCaseId,e=n.getByRole("slider",{name:s.rangeName});await D.type(e,"50"),t(e).toHaveValue("50"),t(e).not.toBeDisabled(),t(e).toHaveAttribute("id",s.sliderId),t(l).toBe("Test_Case_Id-TC-058")};const i={args:{modelValue:50,minValue:0,maxValue:100,isDisabled:!0,rangeName:"Brightness",step:1,sliderId:"disabled-range-slider-image","onUpdate:modelValue":b()},render:s=>({components:{RangeSliderImage:g},setup(){return{args:s}},template:`<RangeSliderImage v-model="args.modelValue" :minValue="args.minValue" :maxValue="args.maxValue" :rangeName="args.rangeName" :isDisabled="args.isDisabled" :step="args.step" :sliderId="args.sliderId">
        <template #lowimage>
          <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"></path><path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path></svg>
        </template>
        <template #highimage>
          <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"></path><path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><g><line class="cls-1" x1="16.8" y1="5.5" x2="20.3" y2="2"></line><path class="cls-1" d="m16.8,6c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="1.8" y1="2" x2="5.3" y2="5.5"></line><path class="cls-1" d="m5.3,6c-.1,0-.3,0-.4-.1L1.4,2.4c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="16.8" y1="16" x2="20.3" y2="19.5"></line><path class="cls-1" d="m20.3,20c-.1,0-.3,0-.4-.1l-3.5-3.5c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="1.8" y1="19.5" x2="5.3" y2="16"></line><path class="cls-1" d="m1.8,20c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z"></path></g></svg>
        </template>
      </RangeSliderImage>
    `})};i.parameters={docs:{source:{code:`
<script setup>
          import { ref } from 'vue';
          const bright_ness = ref(50)
          function syncToBackend(newValue) {
          // call your API here
          console.log('send to server:', newValue)}
      <\/script>
      <template>
        <RangeSliderImage v-model="bright_ness" range-name="Brightness" :min-value="0" :max-value="100" :step="10"
            :isDisabled="true" slider-id="brightnessSlider" @change="syncToBackend">
            <template #lowimage> <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path class="cls-1"
                  d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z" />
                <path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z" />
                <path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z" />
                <path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z" />
                <path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z" />
              </svg></template>
            <template #highimage>
              <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path class="cls-1"
                  d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z" />
                <path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z" />
                <path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z" />
                <path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z" />
                <path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z" />
                <g>
                  <line class="cls-1" x1="16.8" y1="5.5" x2="20.3" y2="2" />
                  <path class="cls-1"
                    d="m16.8,6c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z" />
                </g>
                <g>
                  <line class="cls-1" x1="1.8" y1="2" x2="5.3" y2="5.5" />
                  <path class="cls-1"
                    d="m5.3,6c-.1,0-.3,0-.4-.1L1.4,2.4c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z" />
                </g>
                <g>
                  <line class="cls-1" x1="16.8" y1="16" x2="20.3" y2="19.5" />
                  <path class="cls-1"
                    d="m20.3,20c-.1,0-.3,0-.4-.1l-3.5-3.5c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z" />
                </g>
                <g>
                  <line class="cls-1" x1="1.8" y1="19.5" x2="5.3" y2="16" />
                  <path class="cls-1"
                    d="m1.8,20c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z" />
                </g>
              </svg>
            </template>
          </RangeSliderImage>     
      </template>
      `}},testCaseId:"Test_Case_Id-TC-059"};i.play=async({args:s,canvasElement:m,parameters:r})=>{const n=f(m),l=r.testCaseId,e=n.getByRole("slider",{name:s.rangeName});t(e).toBeDisabled(),t(e).toHaveAttribute("id",s.sliderId),t(l).toBe("Test_Case_Id-TC-059")};var v,y,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    minValue: 0,
    maxValue: 100,
    isDisabled: false,
    rangeName: 'Brightness',
    step: 1,
    sliderId: 'default-range-slider-image',
    'onUpdate:modelValue': fn()
  },
  render: args => ({
    components: {
      RangeSliderImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`<RangeSliderImage v-model="args.modelValue" :minValue="args.minValue" :maxValue="args.maxValue" :rangeName="args.rangeName" :step="args.step" :sliderId="args.sliderId" :isDisabled="args.isDisabled">
        <template #lowimage>
          <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"></path><path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path></svg>
        </template>
        <template #highimage>
          <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"></path><path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><g><line class="cls-1" x1="16.8" y1="5.5" x2="20.3" y2="2"></line><path class="cls-1" d="m16.8,6c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="1.8" y1="2" x2="5.3" y2="5.5"></line><path class="cls-1" d="m5.3,6c-.1,0-.3,0-.4-.1L1.4,2.4c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="16.8" y1="16" x2="20.3" y2="19.5"></line><path class="cls-1" d="m20.3,20c-.1,0-.3,0-.4-.1l-3.5-3.5c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="1.8" y1="19.5" x2="5.3" y2="16"></line><path class="cls-1" d="m1.8,20c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z"></path></g></svg>
        </template>
      </RangeSliderImage>
    \`
  })
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var Z,w,V;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    minValue: 0,
    maxValue: 100,
    isDisabled: true,
    rangeName: 'Brightness',
    step: 1,
    sliderId: 'disabled-range-slider-image',
    'onUpdate:modelValue': fn()
  },
  render: args => ({
    components: {
      RangeSliderImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`<RangeSliderImage v-model="args.modelValue" :minValue="args.minValue" :maxValue="args.maxValue" :rangeName="args.rangeName" :isDisabled="args.isDisabled" :step="args.step" :sliderId="args.sliderId">
        <template #lowimage>
          <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"></path><path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path></svg>
        </template>
        <template #highimage>
          <svg width="24" height="24" fill="#2d2d2d" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="m11,6c-2.8,0-5,2.2-5,5s2.2,5,5,5,5-2.2,5-5-2.2-5-5-5Zm0,9c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z"></path><path class="cls-1" d="m21.5,11h-4c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m4.5,11H.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5h4c.3,0,.5.2.5.5s-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,5c-.3,0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><path class="cls-1" d="m11.5,22c-.3,0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0,.3-.2.5-.5.5Z"></path><g><line class="cls-1" x1="16.8" y1="5.5" x2="20.3" y2="2"></line><path class="cls-1" d="m16.8,6c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="1.8" y1="2" x2="5.3" y2="5.5"></line><path class="cls-1" d="m5.3,6c-.1,0-.3,0-.4-.1L1.4,2.4c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="16.8" y1="16" x2="20.3" y2="19.5"></line><path class="cls-1" d="m20.3,20c-.1,0-.3,0-.4-.1l-3.5-3.5c-.2-.2-.2-.5,0-.7s.5-.2.7,0l3.5,3.5c.2.2.2.5,0,.7s-.2.1-.4.1Z"></path></g><g><line class="cls-1" x1="1.8" y1="19.5" x2="5.3" y2="16"></line><path class="cls-1" d="m1.8,20c-.1,0-.3,0-.4-.1-.2-.2-.2-.5,0-.7l3.5-3.5c.2-.2.5-.2.7,0s.2.5,0,.7l-3.5,3.5c0,0-.2.1-.4.1Z"></path></g></svg>
        </template>
      </RangeSliderImage>
    \`
  })
}`,...(V=(w=i.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const F=["Default","Disabled"];export{d as Default,i as Disabled,F as __namedExportsOrder,A as default};
