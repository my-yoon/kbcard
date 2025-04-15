import{r as f,g as a,e as r,f as e,a0 as i,t as l,F as g,j as C,n as m}from"./index-B6GtFO2S.js";const k={class:"guidecontent"},S={class:"guidetitle"},b=["onClick"],y=["onClick"],h={__name:"example0",props:{sampleProps:{type:Object,default:()=>{}}},setup(p){const c=f({className:"",codeSample:[{title:"HTML",sampleCodeJS:`<template>
    <div>
        페이지 내용
    </div>
</template>`},{title:"JS",sampleCodeJS:`import { reactive, computed, nextTick, ref, onMounted, markRaw, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useCommFunc } from '@/_setting/helper';
//ckEditor셋팅
import { initializeEditor } from '@/_setting/ckeditor';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
//lodash 셋팅
import * as _ from 'lodash-es'
// 공통함수
const {  dayJS, goToPage, chartColorSet } = useCommFunc();
// store사용
import { useCommonStore } from '@/stores/common/common';    
const commonStore = useCommonStore();
const { value } = storeToRefs(commonStore);
const router = useRouter();
const route = useRoute();


const props = defineProps({
  propsName: {
    type: Object,
    default: () => {},
  },
});
const emits = defineEmits([''])
const state = reactive({
})

const sample = () =>{
    console.log("sample")
}

watch(
  () => props,
  () => {
    console.log('>> watch props')
    
  },
)
onMounted(async () => {
    
})`}]}),d=t=>{const o=document.getElementsByClassName("codewrap");o[t].classList.contains("up")?o[t].classList.remove("up"):o[t].classList.add("up")},u=t=>{navigator.clipboard.writeText(t).then(()=>{alert("코드가 클립보드에 복사되었습니다.")}).catch(o=>{console.error("클립보드 복사 실패:",o),alert("클립보드 복사에 실패했습니다.")})};return(t,o)=>(r(),a("div",k,[e("div",S,[i(l(p.sampleProps.title)+" ",1),e("button",{type:"button",class:"btn-sample",onClick:o[0]||(o[0]=s=>t.goToPage("/boxlayout"))},"샘플페이지 보기")]),o[2]||(o[2]=e("div",{class:"guidememo"},[e("div",{class:"memotitle"},"기본 템플릿"),e("ul",{class:"memolist"},[e("li",null,"템플릿 기본 구조")])],-1)),(r(!0),a(g,null,C(c.codeSample,(s,n)=>(r(),a("div",{class:"codewrap",key:n},[e("div",{class:m(["codetitle",c.className])},[e("span",{onClick:v=>d(n)},l(s.title),9,b),e("button",{type:"button",class:"btn btn-ss",onClick:v=>u(s.sampleCodeJS)},o[1]||(o[1]=[e("span",{class:"ico-menu"},null,-1),i(" 복사하기")]),8,y)],2),e("div",{class:m(["code",s.title])},[e("pre",null,[e("code",null,l(s.sampleCodeJS),1)])],2)]))),128))]))}};export{h as default};
