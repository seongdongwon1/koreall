<template>
  <div>asd</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MovieContents',
    async fetch () {
        await axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c2b7583f12c7500b27e82f366ed6cdbb&targetDt=20220920')
            .then((res) => {
                console.log('res', res)
            }).catch((err) => {
                console.log('err', err)
            })
    }
}
</script>

<style scoped>

</style>
