<template>
    <div class="layout">
        <MainHeader />
        <!-- <button type="button" class="nav-toggle" @click="toggleNav"><span class="offscreen">메뉴숨기기</span></button> -->
        <MainMenu :menuList="state.menuList" @gnbOpen="gnbOpen" />
        <div id="adminContainer">
            <div class="contents">
                <div>
                    <Location :locations="state.currentPage?.label" />
                    <div class="temp-section">
                        <RouterView  />
                    </div>
                </div>
            </div>
        </div>
        <div id="adminFooter"> ⓒ2023 KB. All rights Reserved</div>
    </div>
    <ConfirmModal />
</template>

<script setup>
import { watch, onMounted,reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router';

import { storeToRefs } from 'pinia'
import ConfirmModal from '@/components/modal/ConfirmModal.vue';
import MainHeader from '@/components/layout/MainHeader.vue';
import MainMenu from '@/components/layout/MainMenu.vue';
import Location from '@/components/layout/Location.vue';
const router = useRouter();
const route = useRoute();
const emits = defineEmits([''])
const props = defineProps({
  id: {
    type: String,
    default: null,
  },
})
const state = reactive({
    menuList:[
        {label:'menu1', submenu:[
            {label:'menu1-1', submenu:[
                {label:'menu1-1-1', submenu:[],link:'/main'}
            ],link:'/main'},
            {label:'menu1-2', submenu:[],link:'/buildlist'},
            {label:'menu1-3',submenu:[],link:''},
        ], link:''},
        
    ],
    currentPage:null
})
const gnbOpen = (depth1, depth2, depth3) => {
    state.menuList.forEach((item, index) => {
         //depth1
        if (index === depth1) {
            if (item.submenu.length === 0) {
                router.push(item.link);
                // getMenuInfo(item);
            } else {
                item.isActive = true;
                item.submenu.forEach((list, i) => {
                    if (i === depth2) {
                        list.isActive = true;
                        if (list.submenu.length === 0) {
                            router.push(list.link);
                            // getMenuInfo(list);
                            console.log(list);

                        } else {
                            //depth3
                            list.submenu.forEach((listlast, idx) => {
                                if (idx === depth3) {
                                    listlast.isActive = true;
                                    //ums사이트 외부링크이동
                                    router.push(listlast.link);
                                        // getMenuInfo(listlast);
                                } else {
                                    listlast.isActive = false;
                                }
                            });
                        }
                    }else{
                        list.isActive = false;
                    }

                });
            }
        } else {
            item.isActive = false;
        }
    });
}
const setLocation = () => {
    state.currentPage = { 'url': route.path, 'label': route.meta.sublocation_depth, };
    console.log(state.currentPage.label);
}
onMounted(() => {
    setLocation();
})  
watch(route, () => {
    setLocation();
})
</script>
<style>
.helper{background:#e8e1d7; height:40px; }
</style>

