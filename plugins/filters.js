import Vue from 'vue'

Vue.filter('formatNum', (value) => {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
})
