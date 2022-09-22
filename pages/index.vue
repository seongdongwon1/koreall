<template>
  <div id="wrap" class="koreall">
    <all-header />
    <sub-header />
    <main-contents />
    <hr class="line">
    <movie-contents
      :date="date"
      :textDate="textDate"
    />
  </div>
</template>

<script>
import allHeader from '~/components/header'
import subHeader from '~/components/subHeader'
import mainContents from '~/components/mainContents'
import movieContents from '~/components/movieContents'

export default {
    name: 'IndexPage',
    components: { allHeader, mainContents, subHeader, movieContents },
    data () {
        return {
            date: '',
            textDate: ''
        }
    },
    head () {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.description
                }
            ]
        }
    },
    computed: {
        title () {
            return '꼬레올 | KOREA의 모든 것'
        },
        description () {
            return '시민들을 위한 공공 정보 제공 사이트'
        }
    },
    created () {
        console.log('%c' +
            '               ███████ ██████      ███████ ████████ ██    ██ ██████  ██    ██ \n' +
            '               ██      ██   ██     ██         ██    ██    ██ ██   ██  ██  ██  \n' +
            '               ███████ ██   ██     ███████    ██    ██    ██ ██   ██   ████   \n' +
            '                    ██ ██   ██          ██    ██    ██    ██ ██   ██    ██    \n' +
            '               ███████ ██████      ███████    ██     ██████  ██████     ██    \n\n' +
            '               %c동원이의 공부방 임미당 https://github.com/seongdongwon1', 'color:blue;', 'color:pink;')
    },
    beforeMount () {
        const date = new Date()
        const yesterday = new Date(date.setDate(date.getDate() - 1))
        const year = yesterday.getFullYear()
        const month = ('0' + (1 + yesterday.getMonth())).slice(-2)
        const day = ('0' + yesterday.getDate()).slice(-2)
        this.date = year + month + day
        this.textDate = year + '.' + month + '.' + day
    }
}
</script>
<style scoped>
html, body {
    margin : 0;
    padding : 0;
}

.line {
    width: 1100px;
    height: 5px;
    margin: 0 auto;
    margin-top: 20px;
    border-color: #888;
    margin-bottom: 20px;
    background-color: #888;
    opacity: 0;
}
</style>
