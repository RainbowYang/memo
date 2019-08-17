import Vue from 'vue'
import App from './App.vue'
import global_ from './components/Global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.GLOBAL = global_
Vue.config.productionTip = true
new Vue({
    render: h => h(App),
    mounted() {
        axios.get('https://raw.githubusercontent.com/RainbowYang/Bookcase/master/bookinfo.json')
            .then(response => {
                let data = response.data
                for (let t in data) {
                    this.$set(this.GLOBAL.book_info, t, data[t])
                }
            })
    }
}).$mount('#app')
