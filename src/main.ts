import {createApp} from "vue"
import App from './App.vue'
import router from "@/router";
import "@/assets/color.scss"
import "@/assets/style.scss"
import "@/assets/inputs.scss"

const app = createApp(App)
app.directive('click-outside', {
    mounted(el, binding) {
        el.clickOutsideEvent = function (event: any) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };
        window.requestAnimationFrame(() => {
            document.body.addEventListener('click', el.clickOutsideEvent)
        });
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});
app.use(router);
app.mount('#app')