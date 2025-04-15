<template>
    <div class="guidecontent">
        <div class="guidetitle">{{ sampleProps?.title }}
            <button type="button" class="btn-sample" @click="goToPage('/boxlayout')">샘플페이지 보기</button>
        </div>
        <div class="guidememo">
            <div class="memotitle">검색 박스</div>
            <ul class="memolist">
                <li><strong class="tagstyle">&lt;FormLine :labelText="'빌드 명'" :required="true"&gt;</strong> labelText: 필드명, required: 필수 여부</li>
                <li><strong class="tagstyle">:initial-values</strong> 폼 초기값 설정이 필요한 경우 사용</li>
                <li>VeeForm 사용 시 VeeField 컴포넌트에 name 값 필수</li>
                <li>폼 입력 바인딩 방법과 초기값 셋팅은 하단 스크립트 참조</li>
                <li>폼 유효성 체크는 <strong class="tagstyle">import { rules } from '@/_setting/validate';</strong>에 정의되어 있고 추가로 필요한 경우 커스텀 하여 사용 가능</li>
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
            sampleCodeJS: `<VeeForm
            ref="formRef"
            v-slot="{ values }"
            :validation-schema="schema"
            :initial-values="{}"
        >
        <div class="ui-section">
            <div class="tbl-reg-wrap">
                
                <FormLine :labelText="'빌드 명'" :required="true">
                    <div>
                        <VeeField v-slot="{ errors, handleChange }" name="projectName">
                            <InputText 
                                :inputPlaceholder="'기업명을 입력하세요.'" 
                                :inputType="'text'" 
                                :model-value="values.projectName"
                                :error-messages="errors"
                                @update:model-value="handleChange"
                            />
                        </VeeField>
                    </div>
                </FormLine>
            </div>
        </div> 
</VeeForm>`
        }, 
        {
            title: 'JS',
            sampleCodeJS: `// VeeForm 사용 시 VeeField 컴포넌트에 name 값 필수
// import { Form as VeeForm } from 'vee-validate'
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import * as yup from 'yup'
// 유효성 검사 규칙 default 제공 (전화번호)
import { rules } from '@/_setting/validate';
// 폼 입력 바인딩 
const formRef = defineModel({
  type: Object,
  default: {},
  required: true,
})

const schema = yup.object().shape({
 // 아이디 규칙 
    userID: rules.id,
 // 이름 규칙 
    userName: rules.name,
 // 전화번호 규칙 
    userPhone: rules.phone,
 // 이메일 규칙 
    userEmail: rules.email,
 // 비밀번호 규칙 
    userPassword: rules.password,
 // 비밀번호 확인 규칙 
    userPasswordConfirm: rules.passwordConfirm, 
 //  필수값인지만 체크시 
    projectName: rules.create('폼라벨 작성').required()
});
// 폼 유효성 검사
const validate = async () => {
  if (formRef.value) {
    const { valid } = await formRef.value.validate()
    console.log(valid)
    return valid
  }
}
onMounted(() => {
   // 폼 초기값 셋팅 시 (단건)
    formRef.value.setFieldValue('라벨명', value)
    // 폼 초기값 셋팅 시 (여러건)
    formRef.value.setValues({
    필드명1: '값1',
    필드명2: '값2',
    필드명3: '값3'
    // 필요한 만큼 필드 추가
}) `  
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

