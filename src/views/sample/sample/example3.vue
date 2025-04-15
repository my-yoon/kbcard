<template>
    <div class="guidecontent">
        <div class="guidetitle">{{ sampleProps?.title }}
            <button type="button" class="btn-sample" @click="goToPage('/boxlayout')">샘플페이지 보기</button>
        </div>
        <div class="guidememo">
            <div class="memotitle">검색 박스</div>
            <ul class="memolist">
                <li><strong class="tagstyle">onSearchResult</strong>검색 조회 이벤트</li>
                <li><strong class="tagstyle">onReload:</strong> 리로드 이벤트</li>
                <li><strong class="tagstyle">&lt;template #formItem&gt;</strong>슬롯으로 사용하여 폼, 피커 추가 할 수 있음</li>
            </ul>
        </div>
        <div class="codewrap" v-for="(item, index) in state.codeSample" :key="index">
            <div :class="['codetitle', state.className]" >
                <span @click="toggleAcc(index)">{{item.title}}</span>
                <button type="button" class="btn btn-ss" @click="copyCode(item.sampleCodeJS)"> <span class="ico-menu"></span> 복사하기</button>
            </div>
            <div :class="['code', item.title]" >
<pre><code>{{ item.sampleCodeJS }}</code></pre>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineComponent, onMounted, reactive, computed, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
// import { useCommFunc } from '@/core/helper/common.js';
const props = defineProps({ 
    sampleProps: {
    type: Object,
    default: () => {},
} });
// const { goToPage } = useCommFunc();
const state = reactive({
    className: '',
    codeSample: [
        {
            title: 'HTML',
            sampleCodeJS: `<SearchBox @onSearchResult="onSearchResult" @onReload="onReload">
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
    </SearchBox>`
        }, 
        {
            title: 'JS',
            sampleCodeJS: `/** 검색 박스 이벤트 처리 
    @param {string} searchKeyWord 검색어
*/
const onEnterSearch = (searchKeyWord) => {
    console.log('onEnterSearch', searchKeyWord);
}`  
  }
    ]
});

const toggleAcc = (idx) => {
    const tags = document.getElementsByClassName('codewrap');
    tags[idx].classList.contains('up') ? tags[idx].classList.remove('up') : tags[idx].classList.add('up');
};
const copyCode = (code) => {
    navigator.clipboard.writeText(code)
    .then(() => {
        alert('코드가 클립보드에 복사되었습니다.');
    })
    .catch((err) => {
        console.error('클립보드 복사 실패:', err);
        alert('클립보드 복사에 실패했습니다.');
    });
};

</script>

