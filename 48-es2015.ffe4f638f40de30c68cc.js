(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{Thvt:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputCardGroupedModule",(function(){return Y}));var o=n("2kYt"),r=n("nIj0"),a=n("sEIs"),i=n("T8fS"),c=n("SVIu"),l=n("Qq0t"),d=n("dvRg"),u=n("Piem"),s=n("EM62"),p=n("WupT"),m=n("K/iL"),g=n("OZlg"),f=n("e0eB"),h=n("iyc4"),b=n("l4xa"),C=n("qfv1"),y=n("kNZY");function x({value:e}){return e&&e.card&&!Object(i.isCardNumberValid)(e.card)?{card:new b.TuiValidationError("Invalid card number")}:null}function v({value:e}){return e&&5===e.expire.length&&!Object(i.isExpireValid)(e.expire)?{expire:new b.TuiValidationError("Expire date")}:null}let V=(()=>{class e{constructor(){this.control=new r.FormControl(null,[x,v])}get card(){const e=this.control.value?this.control.value.card:"";if(e.length<7)return null;switch(e.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";case"8":case"9":default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-card-grouped-example-1"]],decls:2,vars:3,consts:[[3,"cardSrc","formControl"],[3,"formControl"]],template:function(e,t){1&e&&(s["\u0275\u0275element"](0,"tui-input-card-grouped",0),s["\u0275\u0275element"](1,"tui-field-error",1)),2&e&&(s["\u0275\u0275property"]("cardSrc",t.card)("formControl",t.control),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formControl",t.control))},directives:[C.a,r.NgControlStatus,r.FormControlDirective,y.a],encapsulation:2,changeDetection:0}),e})();var E=n("EPR0"),w=n("yHor"),P=n("zGJC"),S=n("FSyC"),T=n("u8jZ");const M=["heading",$localize`:␟576c74546986ae39d66902c10b330cef17c11742␟2004268377756025676:With validation`];function I(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275elementStart"](1,"code"),s["\u0275\u0275text"](2,"InputCardGrouped"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](3," is used to input a card as a separated control "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](5,M),s["\u0275\u0275element"](6,"tui-input-card-grouped-example-1"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("content",e.example1)}}var O,N,A,L,_,D,G,$,F;function z(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-input-card-grouped",11),s["\u0275\u0275listener"]("binChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"](2).onBinChange(t)})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("formControl",e.control)("autocompleteEnabled",e.autocompleteEnabled)("cardSrc",e.cardSrc)("codeLength",e.codeLength)("exampleText",e.exampleText)("readOnly",e.readOnly)("focusable",e.focusable)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)}}function j(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,N),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function k(e,t){1&e&&s["\u0275\u0275i18n"](0,A)}function R(e,t){1&e&&s["\u0275\u0275i18n"](0,L)}function B(e,t){1&e&&s["\u0275\u0275i18n"](0,_)}function H(e,t){1&e&&s["\u0275\u0275i18n"](0,D)}function q(e,t){1&e&&s["\u0275\u0275i18n"](0,G)}function J(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",3),s["\u0275\u0275template"](1,z,1,11,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"div",4),s["\u0275\u0275elementStart"](3,"p"),s["\u0275\u0275i18nStart"](4,O),s["\u0275\u0275element"](5,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"tui-doc-documentation"),s["\u0275\u0275template"](7,j,2,0,"ng-template",5),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](8,k,1,0,"ng-template",6),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().autocompleteEnabled=t})),s["\u0275\u0275template"](9,R,1,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().cardSrcSelected=t})),s["\u0275\u0275template"](10,B,1,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().exampleText=t})),s["\u0275\u0275template"](11,H,1,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().codeLength=t})),s["\u0275\u0275template"](12,q,1,0,"ng-template",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](13,"inherited-documentation")}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.autocompleteEnabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.cardSrcVariants)("documentationPropertyValue",e.cardSrcSelected),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.exampleText),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.codeLengthVariants)("documentationPropertyValue",e.codeLength)}}function Z(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",12),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,$),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,F),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}O=$localize`:␟af399160ce687f2b638d3c19892948d18a7ecd7a␟4281817233970958464: Add ${"\ufffd#5\ufffd"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `,N=$localize`:␟31216ee7e86a9a777c7e1c7cad3dc3bb8dc54c35␟472633322147615044: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,A=$localize`:␟83ad20bde41f48a65e1ef7997973b9229940e933␟7840524756891506982: Browser autocomplete of card `,L=$localize`:␟fc048dc15100d76d9c59634a4cd574e69f6c4c27␟4001054117328009637: SVG card icon `,_=$localize`:␟26c4e17869f9a11168b776fecc88a93ba994a18b␟6871064863310761724: An example of input `,D=$localize`:␟8772d8eccb2dc868d0dec6c6c5db9e2264085070␟7430416980180297706: Code length `,G=$localize`:␟8457ba25b1fa93009d4263b1ed4635c9d9c693f1␟3816861219916976422: BIN value (card first 6 symbols) `,$=$localize`:␟d044cc22bef8913930d6e6bfe728fb3f7f69ab76␟2559873188996387781: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputCardGroupedModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,F=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let W=(()=>{class e extends p.a{constructor(e){super(),this.notifications=e,this.exampleImportModule="import {TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiInputCardGroupedModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-input-card-grouped formControlName="card"></tui-input-card-grouped>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';\nimport {isCardNumberValid, isExpireValid} from '@taiga-ui/addon-commerce';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\n\nfunction cardNumberValidator({value}: AbstractControl): ValidationErrors | null {\n    return value && value.card && !isCardNumberValid(value.card)\n        ? {\n              card: new TuiValidationError('Invalid card number'),\n          }\n        : null;\n}\n\nfunction cardExpireValidator({value}: AbstractControl): ValidationErrors | null {\n    return value && value.expire.length === 5 && !isExpireValid(value.expire)\n        ? {\n              expire: new TuiValidationError('Expire date'),\n          }\n        : null;\n}\n\n@Component({\n    selector: 'tui-input-card-grouped-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport class TuiInputCardGroupedExample1 {\n    readonly control = new FormControl(null, [cardNumberValidator, cardExpireValidator]);\n\n    get card(): string | null {\n        const value = this.control.value ? this.control.value.card : '';\n\n        if (value.length < 7) {\n            return null;\n        }\n\n        switch (value.charAt(0)) {\n            case '0':\n            case '1':\n            case '2':\n                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';\n            case '3':\n            case '4':\n            case '5':\n                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';\n            case '6':\n            case '7':\n                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';\n            case '8':\n            case '9':\n            default:\n                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';\n        }\n    }\n}\n",HTML:'<tui-input-card-grouped\n    [cardSrc]="card"\n    [formControl]="control"\n></tui-input-card-grouped>\n<tui-field-error [formControl]="control"></tui-field-error>\n'},this.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.cardSrcVariants=Object.keys(this.cards),this.cardSrcSelected=null,this.autocompleteEnabled=!1,this.exampleText="0000 0000 0000 0000",this.codeLengthVariants=[3,4],this.codeLength=this.codeLengthVariants[0],this.control=new r.FormControl}get cardSrc(){return null===this.cardSrcSelected?null:this.cards[this.cardSrcSelected]}onBinChange(e){this.notifications.show("bin: "+e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.TuiNotificationsService))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-input-card-grouped"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(s.forwardRef)(()=>e)}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputCardGrouped","package","ADDON-COMMERCE","type","components"],["pageTab",""],["id","validation",3,"content",6,"heading"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autocompleteEnabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cardSrc","documentationPropertyMode","input","documentationPropertyType","string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","codeLength","documentationPropertyMode","input","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","binChange","documentationPropertyMode","output","documentationPropertyType","string | null"],[3,"formControl","autocompleteEnabled","cardSrc","codeLength","exampleText","readOnly","focusable","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","binChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,I,7,1,"ng-template",1),s["\u0275\u0275template"](2,J,14,8,"ng-template",1),s["\u0275\u0275template"](3,Z,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[g.a,f.a,h.a,V,E.a,w.a,P.a,S.a,C.a,r.NgControlStatus,r.FormControlDirective,T.a],styles:[".form[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.control[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-bottom:4px}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:20px}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}"],changeDetection:0}),e})(),Y=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.TuiInputCardGroupedModule,l.TuiLinkModule,d.TuiFieldErrorModule,o.c,r.ReactiveFormsModule,...c.e,u.a,a.f.forChild(Object(c.o)(W))]]}),e})()}}]);