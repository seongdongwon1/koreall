<template>
  <div class="contents-container">
    <div class="left-month-info">
      <div class="covid-top-text">
        <strong style="font-size: 24px; font-weight: bold">코로나 19</strong>
      </div>
      <div class="covid-main-contents">
        <div class="covid-infection">
          <strong style="font-weight: bold">감연현황</strong>
          <div class="infection-contents">
            asd
          </div>
        </div>
        <div class="covid-age-group">
          <strong style="font-weight: bold">연령대 별 현황</strong>
          <div class="age-group-contents">
            asd
          </div>
        </div>
        <div class="covid-city">
          <strong style="font-weight: bold">도시별 현황</strong>
          <div class="city-contents">
            asd
          </div>
        </div>
        <div class="covid-Vaccination">
          <strong style="font-weight: bold">예방접종 현황</strong>
          <div class="Vaccination-contents">
            asd
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import convert from 'xml-js'

export default {
    name: 'MainContents',
    mounted () {
        this.getVaccination()
    },
    methods: {
        /**
         *  접종현황 data
         */
        async getVaccination () {
            await axios.get('/api/vaccination')
                .then((res) => {
                    const dataSet = res.data
                    const json = convert.xml2json(dataSet, { compact: true })
                    console.log('res', JSON.parse(json))
                }).catch((err) => {
                    console.log('err', err)
                })
        }
    }
}
</script>

<style scoped>
.contents-container {
    width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
}
.left-month-info {
    width: 100%;
}

.covid-main-contents {
    width : 100%;
    height : 700px;
    border-radius: 10px;
    margin-top: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px 15px;
    display : grid;
}

.covid-infection {
    display: grid;
    grid-template-rows: 1fr 10fr;
}

.covid-infection .infection-contents{
    border: 1px solid #888;
    border-radius: 10px;
}

.covid-age-group {
    display: grid;
    grid-template-rows: 1fr 10fr;
}
.covid-age-group .age-group-contents{
    border: 1px solid #888;
    border-radius: 10px;
}

.covid-city {
    display: grid;
    grid-template-rows: 1fr 10fr;
}

.covid-city .city-contents{
    border: 1px solid #888;
    border-radius: 10px;
}

.covid-Vaccination {
    display: grid;
    grid-template-rows: 1fr 10fr;
}

.covid-Vaccination .Vaccination-contents{
    border: 1px solid #888;
    border-radius: 10px;
}
</style>
