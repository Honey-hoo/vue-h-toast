import vueToast from './vue-toast.vue'
const Toast = {
    install(Vue, options) {
        Vue.component(vueToast.name, vueToast)
    }
}