<template>
    <div class="guidecontent">
        <div class="guidetitle">{{ sampleProps?.title }}
            <button type="button" class="btn-sample" @click="goToPage('/boxlayout')">샘플페이지 보기</button>
        </div>
        <div class="guidememo">
            <div class="memotitle">검색 박스</div>
            <ul class="memolist">
                <li><strong class="tagstyle">ui-editor, editor_container</strong>클래스 필수 사용</li>
                <li><strong class="tagstyle">optionsType:</strong> 버튼 사용 여부 defalult:true</li>
                <li><strong class="tagstyle">singleType:</strong> 단일사용 여부 defalult:false</li>
                <li>initializeEditor() 에디터 초기화 함수</li>
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
            sampleCodeJS: `<div class="ui-editor">
        <div id="editor" class="editor_container">
            <CKEditor :model-value="state.ctsTxt" :editor="ClassicEditor" />
        </div>
    </div>`
        }, 
        {
            title: 'JS',
            sampleCodeJS: `import { initializeEditor } from '@/_setting/ckeditor';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
const state = reactive({
    ckeditor: ClassicEditor,
    ctsTxt:''
})
let editor;
onMounted(async () => {
    editor = await initializeEditor();
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

