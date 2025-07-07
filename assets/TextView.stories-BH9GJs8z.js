import{c as x,b as e,i as h,w as _,z as w,h as g}from"./iframe-CBz0_xCM.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{w as u,e as r}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const m={},b={class:"row mt-4"},C={class:"col-12"};function f(a,t){const o=w("BasicCard");return g(),x("div",b,[e("div",C,[h(o,{"card-heading":"Text"},{default:_(()=>t[0]||(t[0]=[e("hr",null,null,-1),e("h4",{class:"mb-4"},"Large heading (24px) (1.5rem)",-1),e("h5",{class:"mb-4"},"Small heading (20px) (1.25rem) ",-1),e("p",{class:"mb-4"},[e("strong",null,"Bold text (16px) (1rem)")],-1),e("p",{class:"mb-4"},"Text (16px) (1rem) ",-1)])),_:1,__:[0]})])])}const d=T(m,[["render",f]]);m.__docgenInfo={displayName:"TextView",description:"",tags:{},sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/services/web-app/src/views/docs/TextView.vue"]};const D={title:"Components/Text/TextView",component:d,tags:["autodocs"]},B=a=>({components:{TextView:d},template:'<TextView data-testid="text-view" />'}),s=B.bind({});s.args={};s.parameters={docs:{source:{code:`

      <BasicCard card-heading="Text">
        <hr>
        <!-- <h1 class="mb-4 fw-normal">Mega text (40px) (2.5rem)</h1>
        <h2 class="mb-4">h2 (32px) (2rem)</h2>
        <h3 class="mb-4">h3 text (28px) (1.75rem)</h3> -->
        <h4 class="mb-4">Large heading (24px) (1.5rem)</h4>
        <h5 class="mb-4">Small heading (20px) (1.25rem) </h5>
        <p class="mb-4"><strong>Bold text (16px) (1rem)</strong></p>
        <p class="mb-4">Text (16px) (1rem) </p>
      </BasicCard>
    `}},testCaseId:"Test_Case_Id-TC-081"};s.play=async({canvasElement:a,parameters:t})=>{const o=u(a),p=t.testCaseId,l=o.getByTestId("text-view");r(l).toBeInTheDocument(),r(p).toBe("Test_Case_Id-TC-081")};var c,n,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    TextView
  },
  template: '<TextView data-testid="text-view" />'
})`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const M=["Default"];export{s as Default,M as __namedExportsOrder,D as default};
