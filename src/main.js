import Vue from 'vue'
import App from './App.vue'
import { Button, Select, Option, Checkbox, CheckboxGroup } from 'element-ui'
import ElAllSelect from './components/ElAllSelect'

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.component(ElAllSelect.name, ElAllSelect)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#el-select-all')
