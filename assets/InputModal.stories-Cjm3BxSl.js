import{r as c,o as z,a as F,c as w,b as e,t as x,i as r,w as y,q as O,g as P,s as G,n as J,x as K,h as D}from"./iframe-CwuKlC4w.js";import{M as Q}from"./bootstrap.esm-DwOKKX6j.js";import{_ as T,I as _}from"./IconSmall-C-GLyabi.js";import{I as $}from"./IconClose-Bg3QnUke.js";import{I as L}from"./IconTick-DdZjNRTg.js";import{w as U,u as b,e as v}from"./index-F5U9YNKP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const W={class:"mb-3 embedded-input"},X=["for"],Y=["id","value","disabled"],ee={class:"modal-dialog"},te={class:"modal-content"},ne={class:"modal-body d-flex justify-content-center align-items-center"},ae={class:"card top text-input-modal m-3"},le={class:"card-header w-100 align-items-center justify-content-between d-flex p-3"},oe={class:"text-start flex-row d-flex"},se={class:"input-heading"},ie=["for"],ue={id:"input-live-help",class:"help-text mt-1 fw-normal"},de={class:"card-body w-100 pe-0"},ce={class:"pe-3"},re={class:"row"},pe={class:"flex flex-column col-md-8 col-lg-8 col-xl-6"},me=["id","type"],Ie={key:0,class:"invalid-feedback",id:"input-live-feedback"},h={__name:"InputModal",props:{inputId:{type:String,required:!0},modalinputId:{type:String,required:!0},labelInput:{type:String,required:!0},helpText:{type:String,default:""},inputType:{type:String,default:"text",validator:t=>["text","number","email","password","tel","url","date"].includes(t)},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:p}){const a=t,m=p,o=c("Value"),l=c(""),n=c(!1),I=c("error"),s=c(null),g=c(null);let d=null,C="";z(()=>{s.value&&(d=new Q(s.value,{backdrop:"static",keyboard:!0}))}),F(()=>{d&&d.dispose()});const H=()=>{C=o.value,l.value=o.value==="Click to edit"?"":o.value,d.show(),K(()=>{g.value&&g.value.focus()})},k=(M=!0)=>{M||(l.value=C),d&&d.hide()},S=()=>{l.value.trim()===""?(n.value=!0,I.value="Input cannot be empty"):(n.value=!1,I.value="")},Z=()=>{S(),n.value||(o.value=l.value,m("update:modelValue",l.value),k())};return(M,f)=>(D(),w("div",null,[e("div",W,[e("label",{class:"form-label",for:t.inputId},x(a.labelInput),9,X),e("input",{class:"form-control",id:t.inputId,type:"text",value:o.value,onClick:H,readonly:"",disabled:t.isDisabled},null,8,Y)]),e("div",{class:"modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel2","aria-hidden":"true",ref_key:"modalRef",ref:s},[e("div",ee,[e("div",te,[e("div",ne,[e("div",ae,[e("div",le,[e("div",oe,[e("h4",se,[e("label",{for:t.modalinputId},x(a.labelInput),9,ie)]),e("small",ue,x(a.helpText),1)]),r(T,{buttonType:"btn-danger",onClick:f[0]||(f[0]=B=>k(!1)),type:"button"},{default:y(()=>[r(_,null,{default:y(()=>[r($)]),_:1})]),_:1})]),e("div",de,[e("div",ce,[e("div",re,[e("div",pe,[O(e("input",{class:J(["form-control domino-text-entry sm-mt-2",{"is-invalid":n.value}]),id:t.modalinputId,type:t.inputType,"onUpdate:modelValue":f[1]||(f[1]=B=>l.value=B),onInput:S,ref_key:"modalInputRef",ref:g,"aria-invalid":"true","aria-describedby":"input-live-help input-live-feedback"},null,42,me),[[G,l.value]]),n.value?(D(),w("div",Ie,x(I.value),1)):P("",!0),r(T,{class:"w-25 mt-3 me-2 text-start",buttonType:"btn-green",buttonText:"Save",onClick:Z,disabled:n.value,type:"button"},{default:y(()=>[r(_,{class:"me-2"},{default:y(()=>[r(L)]),_:1})]),_:1},8,["disabled"])])])])])])])])])],512)]))}};h.__docgenInfo={exportName:"default",displayName:"InputModal",description:"",tags:{},props:[{name:"inputId",type:{name:"string"},required:!0},{name:"modalinputId",type:{name:"string"},required:!0},{name:"labelInput",type:{name:"string"},required:!0},{name:"helpText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inputType",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/InputModal.vue"]};const Ce={title:"Components/InputPopups/InputModal",tags:["autodocs"],component:h,argTypes:{inputId:{control:"text"},modalinputId:{control:"text"},labelInput:{control:"text"},helpText:{control:"text"},inputType:{control:"select",options:["text","number"]},onClose:{action:"close"},onSave:{action:"save"},isDisabled:{control:"boolean"}}},j=t=>({components:{InputModal:h,IconButton:T,IconSmall:_,IconTick:L,IconClose:$},setup(){return{args:t}},template:`
    <InputModal v-bind="args">
      <template #save-icon>
        <IconButton :buttonType="'btn-green'" @click="args.onSave">
          <IconSmall><IconTick /></IconSmall> Save
        </IconButton>
      </template>
      <template #close-icon>
        <IconButton :buttonType="'btn-danger'" @click="args.onClose">
          <IconSmall><IconClose /></IconSmall> Close
        </IconButton>
      </template>
    </InputModal>
  `}),i=j.bind({});i.args={inputId:"myInputId",modalinputId:"myModalInputId",labelInput:"Text input label",helpText:"Enter the device serial number",inputType:"text",isDisabled:!1};i.parameters={docs:{source:{code:`
      <template>
            <InputModal inputId="textinputexample" modalinputId="textinputmodal" inputType="text"
            labelInput="Text input label" helpText="Enter the device serial number" required pattern="^[A-Z0-9]{8}$"
            patternMessage="Serial number must be 8 characters of uppercase letters and numbers" />
      </template>
      `}},testCaseId:"Test_Case_Id-TC-019"};i.play=async({canvasElement:t,parameters:p})=>{const a=U(t),m=p.testCaseId,o=a.getAllByLabelText("Text input label").find(s=>s.hasAttribute("readonly"));await b.click(o);const n=a.getAllByLabelText("Text input label").find(s=>!s.hasAttribute("readonly"));v(n).toHaveValue("Value"),await b.clear(n),await b.type(n,"Value"),v(n).toHaveValue("Value");const I=a.getByRole("button",{name:"Save"});await b.click(I),v(m).toBe("Test_Case_Id-TC-019")};const u=j.bind({});u.args={inputId:"disabledInput",modalinputId:"disabledModalInput",labelInput:"Text input label",helpText:"Enter the device serial number",inputType:"text",isDisabled:!0};u.parameters={docs:{source:{code:`
      <template>
          <InputModal inputId="textinputexample2" modalinputId="textinputmodal2" isDisabled inputType="text" labelInput="Text input label" helpText="Enter the device serial number"
          required pattern="^[A-Z0-9]{8}$"
          patternMessage="Serial number must be 8 characters of uppercase letters and numbers" />
      </template>
      `}},testCaseId:"Test_Case_Id-TC-020"};u.play=async({canvasElement:t,parameters:p})=>{const a=U(t),m=p.testCaseId,o=a.getByRole("textbox",{name:"Text input label",id:"disabledInput"});await b.click(o);const l=a.getByRole("textbox",{name:"Text input label",id:"disabledModalInput"});v(l).toBeDisabled(),v(m).toBe("Test_Case_Id-TC-020")};var V,q,E;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    InputModal,
    IconButton,
    IconSmall,
    IconTick,
    IconClose
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <InputModal v-bind="args">
      <template #save-icon>
        <IconButton :buttonType="'btn-green'" @click="args.onSave">
          <IconSmall><IconTick /></IconSmall> Save
        </IconButton>
      </template>
      <template #close-icon>
        <IconButton :buttonType="'btn-danger'" @click="args.onClose">
          <IconSmall><IconClose /></IconSmall> Close
        </IconButton>
      </template>
    </InputModal>
  \`
})`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var R,A,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    InputModal,
    IconButton,
    IconSmall,
    IconTick,
    IconClose
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <InputModal v-bind="args">
      <template #save-icon>
        <IconButton :buttonType="'btn-green'" @click="args.onSave">
          <IconSmall><IconTick /></IconSmall> Save
        </IconButton>
      </template>
      <template #close-icon>
        <IconButton :buttonType="'btn-danger'" @click="args.onClose">
          <IconSmall><IconClose /></IconSmall> Close
        </IconButton>
      </template>
    </InputModal>
  \`
})`,...(N=(A=u.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const ke=["Default","Disabled"];export{i as Default,u as Disabled,ke as __namedExportsOrder,Ce as default};
