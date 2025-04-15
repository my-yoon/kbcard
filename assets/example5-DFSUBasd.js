import{r as C,g as i,e as l,f as e,i as k,a0 as d,t as a,F as y,j as f,n as p}from"./index-B6GtFO2S.js";const b={class:"guidecontent"},E={class:"guidetitle"},_=["onClick"],S=["onClick"],N={__name:"example5",props:{sampleProps:{type:Object,default:()=>{}}},setup(m){const r=C({className:"",codeSample:[{title:"HTML",sampleCodeJS:`<div class="ui-editor">
        <div id="editor" class="editor_container">
            <CKEditor :model-value="state.ctsTxt" :editor="ClassicEditor" />
        </div>
    </div>`},{title:"JS",sampleCodeJS:`import { initializeEditor } from '@/_setting/ckeditor';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
const state = reactive({
    ckeditor: ClassicEditor,
    ctsTxt:''
})
let editor;
onMounted(async () => {
    editor = await initializeEditor();
})`}]}),u=s=>{const t=document.getElementsByClassName("codewrap");t[s].classList.contains("up")?t[s].classList.remove("up"):t[s].classList.add("up")},g=s=>{navigator.clipboard.writeText(s).then(()=>{alert("코드가 클립보드에 복사되었습니다.")}).catch(t=>{console.error("클립보드 복사 실패:",t),alert("클립보드 복사에 실패했습니다.")})};return(s,t)=>{var c;return l(),i("div",b,[e("div",E,[d(a((c=m.sampleProps)==null?void 0:c.title)+" ",1),e("button",{type:"button",class:"btn-sample",onClick:t[0]||(t[0]=o=>s.goToPage("/boxlayout"))},"샘플페이지 보기")]),t[2]||(t[2]=k('<div class="guidememo"><div class="memotitle">검색 박스</div><ul class="memolist"><li><strong class="tagstyle">ui-editor, editor_container</strong>클래스 필수 사용</li><li><strong class="tagstyle">optionsType:</strong> 버튼 사용 여부 defalult:true</li><li><strong class="tagstyle">singleType:</strong> 단일사용 여부 defalult:false</li><li>initializeEditor() 에디터 초기화 함수</li></ul></div>',1)),(l(!0),i(y,null,f(r.codeSample,(o,n)=>(l(),i("div",{class:"codewrap",key:n},[e("div",{class:p(["codetitle",r.className])},[e("span",{onClick:v=>u(n)},a(o.title),9,_),e("button",{type:"button",class:"btn btn-ss",onClick:v=>g(o.sampleCodeJS)},t[1]||(t[1]=[e("span",{class:"ico-menu"},null,-1),d(" 복사하기")]),8,S)],2),e("div",{class:p(["code",o.title])},[e("pre",null,[e("code",null,a(o.sampleCodeJS),1)])],2)]))),128))])}}};export{N as default};
