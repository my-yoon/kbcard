<template>
    <div>메인 페이지</div>
</template>

<script setup>
import { reactive, computed, nextTick, ref, onMounted, markRaw, watch } from 'vue';
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
    
})
</script>
