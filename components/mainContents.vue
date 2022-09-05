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
          <div class="text-header">
            <strong style="font-weight: bold">예방접종 현황</strong><span style="margin-left: 5px; font-size: 12px; font-weight: bold; color:#888">({{ vaccination.date[0] }})</span>
          </div>
          <div class="Vaccination-contents">
            <div class="items">
              <div ref="vaccination-left" class="item">
                <vaccination-today-chart
                  :today="vaccination.today"
                  :total="vaccination.total"
                  :area="getHeight"
                />
              </div>
              <div class="item">
                item2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import convert from 'xml-js'
import vaccinationTodayChart from '~/components/covid/vaccination/todayChart'

export default {
    name: 'MainContents',
    components: {
        vaccinationTodayChart
    },
    data () {
        return {
            vaccination: {
                date: '',
                today: {
                    first: '',
                    second: '',
                    third: '',
                    four: ''
                },
                total: {
                    first: '',
                    second: '',
                    third: '',
                    four: ''
                },
                width: '',
                height: ''
            }
        }
    },
    computed: {
        getHeight () {
            return {
                width: this.$refs['vaccination-left'].scrollWidth,
                height: this.$refs['vaccination-left'].scrollHeight
            }
        }
    },
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
                    const json = JSON.parse(convert.xml2json(dataSet, { compact: true }))
                    const today = json.response.body.dataTime._text.split(' ')
                    this.vaccination.date = today
                    this.vaccination.today.first = json.response.body.items.item[0].firstCnt._text
                    this.vaccination.today.second = json.response.body.items.item[0].secondCnt._text
                    this.vaccination.today.third = json.response.body.items.item[0].thirdCnt._text
                    this.vaccination.today.four = json.response.body.items.item[0].fourCnt._text

                    this.vaccination.total.first = json.response.body.items.item[2].firstCnt._text
                    this.vaccination.total.second = json.response.body.items.item[2].secondCnt._text
                    this.vaccination.total.third = json.response.body.items.item[2].thirdCnt._text
                    this.vaccination.total.four = json.response.body.items.item[2].fourCnt._text
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
    background-color: #ede9e9;
    border-radius: 10px;
}

.covid-age-group {
    display: grid;
    grid-template-rows: 1fr 10fr;
}
.covid-age-group .age-group-contents{
    background-color: #ede9e9;
    border-radius: 10px;
}

.covid-city {
    display: grid;
    grid-template-rows: 1fr 10fr;
}

.covid-city .city-contents{
    background-color: #ede9e9;
    border-radius: 10px;
}

.covid-Vaccination {
    display: grid;
    grid-template-rows: 1fr 10fr;
}

.covid-Vaccination .Vaccination-contents{
    background-color: #ede9e9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.covid-Vaccination .Vaccination-contents .items{
    width : 95%;
    height : 95%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
}

</style>
