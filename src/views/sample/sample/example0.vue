<template>
    <div class="guidecontent">
        <div class="guidetitle">{{ sampleProps.title }}
            <button type="button" class="btn-sample" @click="goToPage('/boxlayout')">샘플페이지 보기</button>
        </div>
        <div class="guidememo">
            <div class="memotitle">기본 템플릿</div>
            <ul class="memolist">
                <li>템플릿 기본 구조</li>
                
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
            sampleCodeJS: `<template>
    <div>
        페이지 내용
    </div>
</template>`
        },
        
        {
            title: 'JS',
            sampleCodeJS: `import { reactive, computed, nextTick, ref, onMounted, markRaw, watch } from 'vue';
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

