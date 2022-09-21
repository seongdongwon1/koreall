<template>
  <div id="wrap" class="koreall">
    <all-header />
    <sub-header />
    <main-contents />
    <movie-contents />
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
    }
}
</script>
<style scoped>
html, body {
    margin : 0;
    padding : 0;
}
</style>
