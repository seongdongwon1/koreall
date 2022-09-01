<template>
  <div id="wrap" class="koreall">
    <all-header />
    <sub-header />
    <main-contents />
  </div>
</template>

<script>
import allHeader from '~/components/header'
import subHeader from '~/components/subHeader'
import mainContents from '~/components/mainContents'

export default {
    name: 'IndexPage',
    components: { allHeader, mainContents, subHeader },
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
    }
}
</script>
<style scoped>
html, body {
    margin : 0;
    padding : 0;
}
</style>
