<template>
  <div class="contents-container">
    <div class="left-month-info">
      <div class="covid-top-text">
        <strong style="font-size: 24px; font-weight: bold">코로나 19</strong>
      </div>
      <div class="covid-main-contents">
        <div class="covid-infection">
          <div class="text-header">
            <strong style="font-weight: bold">감연현황</strong>
          </div>
          <div class="infection-contents">
            asd
          </div>
        </div>
        <div class="covid-age-group">
          <div class="text-header">
            <strong style="font-weight: bold">연령별 감염률</strong><span style="margin-left: 5px; font-size: 12px; font-weight: bold; color:#888">({{ ageSex.date }})</span>
          </div>
          <div class="age-group-contents">
            <age-sex-chart
              :agesex="ageSex.gubun"
            />
          </div>
        </div>
        <div class="covid-city">
          <div class="text-header">
            <strong style="font-weight: bold">도시별 현황</strong>
          </div>
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
              <div class="item">
                <vaccination-today-chart
                  :today="vaccination.today"
                />
              </div>
              <div class="item">
                <vaccination-total-chart
                  :total="vaccination.total"
                />
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
import vaccinationTotalChart from '~/components/covid/vaccination/totalChart'
import ageSexChart from '~/components/covid/ageSex/ageChart'

export default {
    name: 'MainContents',
    components: {
        vaccinationTodayChart,
        vaccinationTotalChart,
        ageSexChart
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
                }
            },
            ageSex: {
                date: '',
                gubun: {
                    zeroToNine: {
                        confCase: '',
                        confCaseRate: ''
                    },
                    tenToNineteen: {
                        confCase: '',
                        confCaseRate: ''
                    },
                    twentyToTwentyNine: {
                        confCase: '',
                        confCaseRate: ''
                    },
                    thirtyToThirtyNine: {
                        confCase: '',
                        confCaseRate: ''
                    },
                    fortyToFortyNine: {
                        confCase: '',
                        confCaseRate: ''
                    },
                    fiftyToFiftyNine: {
                        confCase: '',
                        confCaseRate: ''
                    },
                    sixtyToSixtyNine: {
                        confCase: '',
                        confCaseRate: ''
                    },
                    seventyToSeventyNine: {
                        confCase: '',
                        confCaseRate: ''
                    },
                    eightyUp: {
                        confCase: '',
                        confCaseRate: ''
                    }
                    // woman: {
                    //     confCase: '',
                    //     confCaseRate: ''
                    // },
                    // man: {
                    //     confCase: '',
                    //     confCaseRate: ''
                    // }
                }
            }
        }
    },
    mounted () {
        this.getAgeSex()
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
        },
        async getAgeSex () {
            await axios.get('/api/agesex')
                .then((res) => {
                    console.log('res', res.data)
                    const dataSet = res.data
                    const today = dataSet.response.body.items.item[0].createDt.split(' ')
                    this.ageSex.date = today[0]
                    this.ageSex.gubun.zeroToNine.confCase = dataSet.response.body.items.item[0].confCase
                    this.ageSex.gubun.zeroToNine.confCaseRate = dataSet.response.body.items.item[0].confCaseRate
                    this.ageSex.gubun.tenToNineteen.confCase = dataSet.response.body.items.item[1].confCase
                    this.ageSex.gubun.tenToNineteen.confCaseRate = dataSet.response.body.items.item[1].confCaseRate
                    this.ageSex.gubun.twentyToTwentyNine.confCase = dataSet.response.body.items.item[2].confCase
                    this.ageSex.gubun.twentyToTwentyNine.confCaseRate = dataSet.response.body.items.item[2].confCaseRate
                    this.ageSex.gubun.thirtyToThirtyNine.confCase = dataSet.response.body.items.item[3].confCase
                    this.ageSex.gubun.thirtyToThirtyNine.confCaseRate = dataSet.response.body.items.item[3].confCaseRate
                    this.ageSex.gubun.fortyToFortyNine.confCase = dataSet.response.body.items.item[4].confCase
                    this.ageSex.gubun.fortyToFortyNine.confCaseRate = dataSet.response.body.items.item[4].confCaseRate
                    this.ageSex.gubun.fiftyToFiftyNine.confCase = dataSet.response.body.items.item[5].confCase
                    this.ageSex.gubun.fiftyToFiftyNine.confCaseRate = dataSet.response.body.items.item[5].confCaseRate
                    this.ageSex.gubun.sixtyToSixtyNine.confCase = dataSet.response.body.items.item[6].confCase
                    this.ageSex.gubun.sixtyToSixtyNine.confCaseRate = dataSet.response.body.items.item[6].confCaseRate
                    this.ageSex.gubun.seventyToSeventyNine.confCase = dataSet.response.body.items.item[7].confCase
                    this.ageSex.gubun.seventyToSeventyNine.confCaseRate = dataSet.response.body.items.item[7].confCaseRate
                    this.ageSex.gubun.eightyUp.confCase = dataSet.response.body.items.item[8].confCase
                    this.ageSex.gubun.eightyUp.confCaseRate = dataSet.response.body.items.item[8].confCaseRate
                    // this.ageSex.gubun.woman.confCase = dataSet.response.body.items.item[9].confCase
                    // this.ageSex.gubun.woman.confCaseRate = dataSet.response.body.items.item[9].confCaseRate
                    // this.ageSex.gubun.man.confCase = dataSet.response.body.items.item[10].confCase
                    // this.ageSex.gubun.man.confCaseRate = dataSet.response.body.items.item[10].confCaseRate
                })
                .catch((err) => {
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
    display: flex;
    justify-content: center;
    align-items: center;
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
