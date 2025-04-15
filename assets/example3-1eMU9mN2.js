import{r as y,g as l,e as o,f as t,i as S,a0 as d,t as n,F as b,j as h,n as p}from"./index-B6GtFO2S.js";const C={class:"guidecontent"},k={class:"guidetitle"},f=["onClick"],T=["onClick"],x={__name:"example3",props:{sampleProps:{type:Object,default:()=>{}}},setup(m){const c=y({className:"",codeSample:[{title:"HTML",sampleCodeJS:`<SearchBox @onSearchResult="onSearchResult" @onReload="onReload">
        <template #formItem>
            <div class="item">
                <label>기간조회</label>
                <div class="input">
                    <div class="dv"><DatePicker ref="datepicker" :dayOpionType=state.dayOpionType  @selectDay ="selectDay" :optionsType="true"/></div>
                </div>
            </div>
            <div class="item">
                <label>키워드 검색</label>
                <div class="input">
                    <div class="dv"><input type="text" class="form-control" placeholder="키워드를 검색 하세요" style="width:360px;"/></div>
                </div>
            </div>
        </template>
    </SearchBox>`},{title:"JS",sampleCodeJS:`/** 검색 박스 이벤트 처리 
    @param {string} searchKeyWord 검색어
*/
const onEnterSearch = (searchKeyWord) => {
    console.log('onEnterSearch', searchKeyWord);
}`}]}),u=s=>{const e=document.getElementsByClassName("codewrap");e[s].classList.contains("up")?e[s].classList.remove("up"):e[s].classList.add("up")},v=s=>{navigator.clipboard.writeText(s).then(()=>{alert("코드가 클립보드에 복사되었습니다.")}).catch(e=>{console.error("클립보드 복사 실패:",e),alert("클립보드 복사에 실패했습니다.")})};return(s,e)=>{var i;return o(),l("div",C,[t("div",k,[d(n((i=m.sampleProps)==null?void 0:i.title)+" ",1),t("button",{type:"button",class:"btn-sample",onClick:e[0]||(e[0]=a=>s.goToPage("/boxlayout"))},"샘플페이지 보기")]),e[2]||(e[2]=S('<div class="guidememo"><div class="memotitle">검색 박스</div><ul class="memolist"><li><strong class="tagstyle">onSearchResult</strong>검색 조회 이벤트</li><li><strong class="tagstyle">onReload:</strong> 리로드 이벤트</li><li><strong class="tagstyle">&lt;template #formItem&gt;</strong>슬롯으로 사용하여 폼, 피커 추가 할 수 있음</li></ul></div>',1)),(o(!0),l(b,null,h(c.codeSample,(a,r)=>(o(),l("div",{class:"codewrap",key:r},[t("div",{class:p(["codetitle",c.className])},[t("span",{onClick:g=>u(r)},n(a.title),9,f),t("button",{type:"button",class:"btn btn-ss",onClick:g=>v(a.sampleCodeJS)},e[1]||(e[1]=[t("span",{class:"ico-menu"},null,-1),d(" 복사하기")]),8,T)],2),t("div",{class:p(["code",a.title])},[t("pre",null,[t("code",null,n(a.sampleCodeJS),1)])],2)]))),128))])}}};export{x as default};
