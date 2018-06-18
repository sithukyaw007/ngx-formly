(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{GOer:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},"Gp/P":function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},OpPB:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'marvel1\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'select\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Normal Select\'</span><span class="token punctuation" >,</span>\n        options<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Iron Man\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'iron_man\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Captain America\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'captain_america\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Black Widow\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'black_widow\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Hulk\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'hulk\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Captain Marvel\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'captain_marvel\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'marvel2\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'select\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Grouped Select\'</span><span class="token punctuation" >,</span>\n        options<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Iron Man\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'iron_man\'</span><span class="token punctuation" >,</span> group<span class="token punctuation" >:</span> <span class="token string" >\'Male\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Captain America\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'captain_america\'</span><span class="token punctuation" >,</span> group<span class="token punctuation" >:</span> <span class="token string" >\'Male\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Black Widow\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'black_widow\'</span><span class="token punctuation" >,</span> group<span class="token punctuation" >:</span> <span class="token string" >\'Female\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Hulk\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'hulk\'</span><span class="token punctuation" >,</span> group<span class="token punctuation" >:</span> <span class="token string" >\'Male\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Captain Marvel\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'captain_marvel\'</span><span class="token punctuation" >,</span> group<span class="token punctuation" >:</span> <span class="token string" >\'Female\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'marvel3\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'select\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Select with custom name/value/group\'</span><span class="token punctuation" >,</span>\n        options<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Iron Man\'</span><span class="token punctuation" >,</span> id<span class="token punctuation" >:</span> <span class="token string" >\'iron_man\'</span><span class="token punctuation" >,</span> gender<span class="token punctuation" >:</span> <span class="token string" >\'Male\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Captain America\'</span><span class="token punctuation" >,</span> id<span class="token punctuation" >:</span> <span class="token string" >\'captain_america\'</span><span class="token punctuation" >,</span> gender<span class="token punctuation" >:</span> <span class="token string" >\'Male\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Black Widow\'</span><span class="token punctuation" >,</span> id<span class="token punctuation" >:</span> <span class="token string" >\'black_widow\'</span><span class="token punctuation" >,</span> gender<span class="token punctuation" >:</span> <span class="token string" >\'Female\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Hulk\'</span><span class="token punctuation" >,</span> id<span class="token punctuation" >:</span> <span class="token string" >\'hulk\'</span><span class="token punctuation" >,</span> gender<span class="token punctuation" >:</span> <span class="token string" >\'Male\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Captain Marvel\'</span><span class="token punctuation" >,</span> id<span class="token punctuation" >:</span> <span class="token string" >\'captain_marvel\'</span><span class="token punctuation" >,</span> gender<span class="token punctuation" >:</span> <span class="token string" >\'Female\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n        groupProp<span class="token punctuation" >:</span> <span class="token string" >\'gender\'</span><span class="token punctuation" >,</span>\n        valueProp<span class="token punctuation" >:</span> <span class="token string" >\'id\'</span><span class="token punctuation" >,</span>\n        labelProp<span class="token punctuation" >:</span> <span class="token string" >\'label\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'multiselect\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'select\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Multi-select\'</span><span class="token punctuation" >,</span>\n        multiple<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n        options<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Iron Man\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'iron_man\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Captain America\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'captain_america\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Black Widow\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'black_widow\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Hulk\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'hulk\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >{</span>label<span class="token punctuation" >:</span> <span class="token string" >\'Captain Marvel\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'captain_marvel\'</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},WcIy:function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'marvel1',\n      type: 'select',\n      templateOptions: {\n        label: 'Normal Select',\n        options: [\n          {label: 'Iron Man', value: 'iron_man'},\n          {label: 'Captain America', value: 'captain_america'},\n          {label: 'Black Widow', value: 'black_widow'},\n          {label: 'Hulk', value: 'hulk'},\n          {label: 'Captain Marvel', value: 'captain_marvel'},\n        ],\n      },\n    },\n    {\n      key: 'marvel2',\n      type: 'select',\n      templateOptions: {\n        label: 'Grouped Select',\n        options: [\n          {label: 'Iron Man', value: 'iron_man', group: 'Male'},\n          {label: 'Captain America', value: 'captain_america', group: 'Male'},\n          {label: 'Black Widow', value: 'black_widow', group: 'Female'},\n          {label: 'Hulk', value: 'hulk', group: 'Male'},\n          {label: 'Captain Marvel', value: 'captain_marvel', group: 'Female'},\n        ],\n      },\n    },\n    {\n      key: 'marvel3',\n      type: 'select',\n      templateOptions: {\n        label: 'Select with custom name/value/group',\n        options: [\n          {label: 'Iron Man', id: 'iron_man', gender: 'Male'},\n          {label: 'Captain America', id: 'captain_america', gender: 'Male'},\n          {label: 'Black Widow', id: 'black_widow', gender: 'Female'},\n          {label: 'Hulk', id: 'hulk', gender: 'Male'},\n          {label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female'},\n        ],\n        groupProp: 'gender',\n        valueProp: 'id',\n        labelProp: 'label',\n      },\n    },\n    {\n      key: 'multiselect',\n      type: 'select',\n      templateOptions: {\n        label: 'Multi-select',\n        multiple: true,\n        options: [\n          {label: 'Iron Man', value: 'iron_man'},\n          {label: 'Captain America', value: 'captain_america'},\n          {label: 'Black Widow', value: 'black_widow'},\n          {label: 'Hulk', value: 'hulk'},\n          {label: 'Captain Marvel', value: 'captain_marvel'},\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},Wnfb:function(n,a,s){"use strict";s.r(a);var t=s("CcnG"),p=s("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"marvel1",type:"select",templateOptions:{label:"Normal Select",options:[{label:"Iron Man",value:"iron_man"},{label:"Captain America",value:"captain_america"},{label:"Black Widow",value:"black_widow"},{label:"Hulk",value:"hulk"},{label:"Captain Marvel",value:"captain_marvel"}]}},{key:"marvel2",type:"select",templateOptions:{label:"Grouped Select",options:[{label:"Iron Man",value:"iron_man",group:"Male"},{label:"Captain America",value:"captain_america",group:"Male"},{label:"Black Widow",value:"black_widow",group:"Female"},{label:"Hulk",value:"hulk",group:"Male"},{label:"Captain Marvel",value:"captain_marvel",group:"Female"}]}},{key:"marvel3",type:"select",templateOptions:{label:"Select with custom name/value/group",options:[{label:"Iron Man",id:"iron_man",gender:"Male"},{label:"Captain America",id:"captain_america",gender:"Male"},{label:"Black Widow",id:"black_widow",gender:"Female"},{label:"Hulk",id:"hulk",gender:"Male"},{label:"Captain Marvel",id:"captain_marvel",gender:"Female"}],groupProp:"gender",valueProp:"id",labelProp:"label"}},{key:"multiselect",type:"select",templateOptions:{label:"Multi-select",multiple:!0,options:[{label:"Iron Man",value:"iron_man"},{label:"Captain America",value:"captain_america"},{label:"Black Widow",value:"black_widow"},{label:"Hulk",value:"hulk"},{label:"Captain Marvel",value:"captain_marvel"}]}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Select",description:"\n              Here are all of the options you have available to you with the\n              <code>select</code> type from <code>@ngx-formly/bootstrap</code>\n            ",component:o,files:[{file:"app.component.html",content:s("XpQJ"),filecontent:s("Gp/P")},{file:"app.component.ts",content:s("OpPB"),filecontent:s("WcIy")},{file:"app.module.ts",content:s("jDPX"),filecontent:s("GOer")}]}]},l=function(){},c=s("NcP4"),u=s("goW2"),i=s("MT1c"),k=s("1Q/V"),r=s("9+aI"),m=s("haId"),d=s("LJsP"),g=s("yR2A"),b=s("Bbog"),f=s("fFVA"),v=s("Nntq"),y=s("L0Z1"),w=s("grA4"),M=s("4o01"),_=s("Dl9q"),C=s("9Glx"),F=s("UcnZ"),h=s("wdLZ"),O=s("DAbo"),A=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,_.b,_.a)),t["\u0275did"](6,966656,null,0,C.a,[F.a,h.a,O.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,C.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,6,0,s.model,s.form,s.fields,s.options)},function(n,a){var s=a.component;n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending),n(a,7,0,!s.form.valid)})}var S=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,A)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),I=s("Ip0R"),B=s("eDkP"),G=s("Fzqc"),N=s("v9Dh"),P=s("M2Lx"),W=s("6LlJ"),R=s("F6kA"),H=s("4c35"),D=s("dWZg"),L=s("qAlS"),J=s("Wf4p"),Q=s("La40"),U=s("SMsm"),Z=s("UodH"),q=s("5QwG"),z=s("Nsh5"),X=s("8mMr"),j=s("LC5p"),T=s("0/Q6"),E=s("mqvi"),V=s("XR12"),Y=s("1ey0"),K=function(){},$=s("ZYCi"),nn=s("AMrk"),an=s("me7w"),sn=s("N3PW"),tn=s("l4pn"),pn=s("Fv2i"),on=s("wBYW"),en=s("IE48"),ln=s("Ltwa"),cn=s("4Mh+"),un=s("b7gF"),kn=s("DJQk"),rn=s("zn1Q"),mn=s("CgTb"),dn=s("+oK5"),gn=s("zdmU"),bn=s("cIcG");s.d(a,"ConfigModuleNgFactory",function(){return fn});var fn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,k.a,r.a,m.a,d.a,g.a,b.a,f.a,v.a,y.a,w.a,M.a,S]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,I.NgLocalization,I.NgLocaleLocalization,[t.LOCALE_ID,[2,I["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,B.c,B.c,[B.i,B.e,t.ComponentFactoryResolver,B.h,B.f,t.Injector,t.NgZone,I.DOCUMENT,G.b]),t["\u0275mpd"](5120,B.j,B.k,[B.c]),t["\u0275mpd"](5120,N.b,N.c,[B.c]),t["\u0275mpd"](4608,P.c,P.c,[]),t["\u0275mpd"](4608,W.a,W.a,[]),t["\u0275mpd"](4608,R.a,R.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,O.b,O.b,[O.a]),t["\u0275mpd"](4608,h.a,h.a,[]),t["\u0275mpd"](4608,F.a,F.a,[O.b,h.a]),t["\u0275mpd"](1073742336,I.CommonModule,I.CommonModule,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,H.g,H.g,[]),t["\u0275mpd"](1073742336,D.b,D.b,[]),t["\u0275mpd"](1073742336,L.b,L.b,[]),t["\u0275mpd"](1073742336,B.g,B.g,[]),t["\u0275mpd"](1073742336,J.l,J.l,[[2,J.d]]),t["\u0275mpd"](1073742336,N.e,N.e,[]),t["\u0275mpd"](1073742336,J.w,J.w,[]),t["\u0275mpd"](1073742336,P.d,P.d,[]),t["\u0275mpd"](1073742336,Q.i,Q.i,[]),t["\u0275mpd"](1073742336,U.b,U.b,[]),t["\u0275mpd"](1073742336,Z.c,Z.c,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,z.h,z.h,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,J.m,J.m,[]),t["\u0275mpd"](1073742336,J.u,J.u,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,T.c,T.c,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,V.a,V.a,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1073742336,K,K,[]),t["\u0275mpd"](1073742336,$.r,$.r,[[2,$.w],[2,$.o]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,O.a,function(){return[{types:[{name:"formly-group",component:nn.a}]},{types:[{name:"input",component:an.a,wrappers:["fieldset","label"]},{name:"checkbox",component:sn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:tn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:pn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:on.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:en.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:ln.a},{name:"description",component:cn.a},{name:"validation-message",component:un.a},{name:"fieldset",component:kn.a},{name:"addons",component:rn.a}],manipulators:[{class:mn.a,method:"run"},{class:dn.a,method:"run"},{class:gn.a,method:"run"}]},{types:[{name:"formly-group",component:nn.a}]},{}]},[]),t["\u0275mpd"](1024,$.m,function(){return[[{path:"",component:bn.a,data:e}]]},[])])})},XpQJ:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},jDPX:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'}}]);