<template>
    <div class="guidecontent">
        <div class="guidetitle">{{ sampleProps?.title }}
            <button type="button" class="btn-sample" @click="goToPage('/boxlayout')">샘플페이지 보기</button>
        </div>
        <div class="guidememo">
            <div class="memotitle">검색 박스</div>
            <ul class="memolist">
                <li><strong class="tagstyle">dayOpionType</strong>초기값 설정 month(1개월), month6(6개월), year(1년), week(일주일), day(당일), self(직접입력)</li>
                <li><strong class="tagstyle">optionsType:</strong> 버튼 사용 여부 defalult:true</li>
                <li><strong class="tagstyle">singleType:</strong> 단일사용 여부 defalult:false</li>
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
            sampleCodeJS: `<DatePicker ref="datepicker" :dayOpionType=state.dayOpionType  @selectDay ="selectDay" :optionsType="true"/>`
        }, 
        {
            title: 'JS',
            sampleCodeJS: `/** 검색 박스 이벤트 처리 
    @param {string} searchKeyWord 검색어
*/
const onEnterSearch = (searchKeyWord) => {
    console.log('onEnterSearch', searchKeyWord);
}
const state = reactive({
/** 피커 초기값 설정  month(1개월), month6(6개월), year(1년), week(일주일), day(당일), self(직접입력) */
    dayOpionType: 'month'
})`  
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

