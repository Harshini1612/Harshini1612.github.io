import{c as h,b as d,t as x,h as T}from"./iframe-CwuKlC4w.js";import{w as _,u as S,e as o}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const D={class:"flex-grow-1 mb-3"},L={for:"formFileLg",class:"form-label"},v=["disabled"],i={__name:"SelectFile",props:{labelFile:{type:String,required:!0},isDisabled:{type:Boolean,default:!1}},setup(e){return(a,n)=>(T(),h("div",D,[d("label",L,x(e.labelFile),1),d("input",{disabled:e.isDisabled,class:"form-control sequence-setup-form-control",id:"formFileLg",type:"file",accept:"*",ref:"fileInput"},null,8,v)]))}};i.__docgenInfo={exportName:"default",displayName:"SelectFile",description:"",tags:{},props:[{name:"labelFile",type:{name:"string"},required:!0},{name:"isDisabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/packages/domino-mock-ui-test/src/components/SelectFile.vue"]};const{fn:C}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Inputs/SelectFile",component:i,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the select file component"},onChange:{description:"Event emitted when file is selected"}}},t={render:e=>({components:{SelectFile:i},setup(){return{args:e}},template:'<SelectFile v-bind="args" />'}),args:{label:"Select File",labelFile:"Label",onChange:C()}};t.parameters={docs:{source:{code:`
        <SelectFile labelFile="Label"></SelectFile>
      `}},testCaseId:"Test_Case_Id-TC-062"};t.play=async({args:e,canvasElement:a,parameters:n})=>{const r=_(a),c=n.testCaseId,s=r.getByLabelText(e.labelFile),p=new File(["file content"],"example.txt",{type:"text/plain"});await S.upload(s,p),await new Promise(y=>setTimeout(y,100)),o(c).toBe("Test_Case_Id-TC-062")};const l={render:e=>({components:{SelectFile:i},setup(){return{args:e}},template:'<SelectFile v-bind="args" />'}),args:{label:"Select File",labelFile:"Label",onChange:C(),isDisabled:!0}};l.parameters={docs:{source:{code:`
        <SelectFile isDisabled labelFile="Label"></SelectFile>
      `}},testCaseId:"Test_Case_Id-TC-063"};l.play=async({args:e,canvasElement:a,parameters:n})=>{const r=_(a),c=n.testCaseId,s=r.getByLabelText(e.labelFile);o(s).toBeDisabled();const p=new File(["file content"],"example.txt",{type:"text/plain"});await S.upload(s,p),o(s.files).toHaveLength(0),o(c).toBe("Test_Case_Id-TC-063")};var u,m,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectFile
    },
    setup() {
      return {
        args
      };
    },
    template: '<SelectFile v-bind="args" />'
  }),
  args: {
    label: 'Select File',
    labelFile: 'Label',
    onChange: fn()
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var F,f,g;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SelectFile
    },
    setup() {
      return {
        args
      };
    },
    template: '<SelectFile v-bind="args" />'
  }),
  args: {
    label: 'Select File',
    labelFile: 'Label',
    onChange: fn(),
    isDisabled: true
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const O=["Default","Disabled"];export{t as Default,l as Disabled,O as __namedExportsOrder,E as default};
