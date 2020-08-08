//  整个包入口

// 导入组件
import kButton from './button.vue'

// 存储组件
const components = [
    kButton
]
const install = function (Vue) {
    components.forEach((item) => {
        Vue.component(item.name , item)
    })
}

// 判断是否全局是直接引入文件， 如果是 就不用调用Vue.use()
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


export default {
    install
};