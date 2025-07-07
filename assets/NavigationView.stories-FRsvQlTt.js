import{c as _,b as t,i as n,w as r,z as c,h as f,k as w}from"./iframe-CwuKlC4w.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{w as b,e as d}from"./index-F5U9YNKP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DrFu-skq.js";const h="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10px'%20height='17px'%20%3e%3cg%20transform='matrix(1%200%200%201%20-203%20-46%20)'%3e%3cpath%20d='M%200.2108843537415055%200.5578231292516875%20L%200.2108843537415055%2016.54421768707482%20L%209.734693877551024%208.721088435374213%20L%200.2108843537415055%200.5578231292516875%20Z%20'%20fill-rule='nonzero'%20fill='%23b4b4b4'%20stroke='none'%20transform='matrix(1%200%200%201%20203%2046%20)'%20/%3e%3c/g%3e%3c/svg%3e",g={},C={class:"row mt-4"},y={class:"col-12"},N={class:"d-flex border-bottom my-4 pb-2"},k={class:"d-flex justify-content-start align-items-center navigation-breadcrumb"};function V(o,e){const a=c("RouterLink"),i=c("BasicCard");return f(),_("div",C,[t("div",y,[n(i,{"card-heading":"Desktop breadcrumb"},{default:r(()=>[e[3]||(e[3]=t("hr",null,null,-1)),t("div",N,[t("div",k,[n(a,{class:"",to:"/"},{default:r(()=>e[0]||(e[0]=[w("Home")])),_:1,__:[0]}),e[1]||(e[1]=t("img",{src:h,width:"10px",height:"17px",class:"mx-1 ms-2"},null,-1))]),e[2]||(e[2]=t("div",{class:"d-flex justify-content-between align-items-center"},[t("div",{class:"fw-bold"},"Select default device")],-1))])]),_:1,__:[3]})])])}const v=x(g,[["render",V]]);g.__docgenInfo={displayName:"NavigationView",description:"",tags:{},sourceFiles:["C:/Users/rsriharshin/Downloads/Main test storybook 3/Main test storybook/d-ui/services/web-app/src/views/docs/NavigationView.vue"]};const j={title:"Components/Navigation/NavigationView",component:v,tags:["autodocs"]},B=o=>({components:{NavigationView:v},template:"<NavigationView />"}),s=B.bind({});s.args={};s.parameters={docs:{source:{code:`

      <BasicCard card-heading="Desktop breadcrumb">
        <hr>
        <div class="d-flex border-bottom my-4 pb-2">
          <div class="d-flex justify-content-start align-items-center navigation-breadcrumb">
            <RouterLink class="" to="/">Home</RouterLink>
            <img src="@/assets/Symbol_ArrowRight_10x17.svg" width="10px" height="17px" class="mx-1 ms-2">
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="fw-bold">Select default device</div>
          </div>
        </div>
      </BasicCard>
    `}},testCaseId:"Test_Case_Id-TC-022"};s.play=async({canvasElement:o,parameters:e})=>{const a=b(o),i=e.testCaseId,u=a.getByText("Home");d(u).toBeInTheDocument(),d(i).toBe("Test_Case_Id-TC-022")};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    NavigationView
  },
  template: '<NavigationView />'
})`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const S=["Default"];export{s as Default,S as __namedExportsOrder,j as default};
