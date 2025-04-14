import vuetify from '@/_setting/vuetify/vuetify.js'
import { createPinia } from 'pinia'
import VueUniversalModal from 'vue-universal-modal'
import dayjs from 'dayjs'
import { Bubble, Bar, Line } from 'vue-chartjs'
import i18n from '@/_setting/plugins/i18n';

export const registerPlugins = (app) => {
    app.use(createPinia())
    app.use(vuetify)
    app.use(Bubble)
    app.use(Bar)
    app.use(Line)
    app.use(i18n);
    app.use(dayjs)
    app.use(VueUniversalModal, { teleportTarget: '#modals' })
    
    // 전역 객체 설정
    app.provide('dayJS', dayjs)
} 