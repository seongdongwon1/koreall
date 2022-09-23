<template>
  <div class="contents-container">
    <div class="left-month-info">
      <div class="covid-top-text">
        <strong style="font-size: 24px; font-weight: bold">코로나 19</strong>
      </div>
      <div class="covid-main-contents">
        <div class="covid-infection">
          <div class="text-header">
            <strong style="font-weight: bold">감염현황</strong><span style="margin-left: 5px; font-size: 12px; font-weight: bold; color:#888">({{ infection.date }})</span>
          </div>
          <div class="infection-contents">
            <div class="infection-text-info">
              <div class="text">
                <strong>확진자 및 사망자 현황</strong>
                <infection-text
                  :infection="infection"
                />
              </div>
            </div>
            <div class="infection-weekly">
              <div class="chart">
                <strong>주간 현황</strong>
                <infection-weekly
                  :weekly="infection.weekly"
                  :type="'week'"
                />
              </div>
            </div>
            <div class="infection-monthly">
              <div class="chart">
                <strong>월간 현황</strong>
                <infection-weekly
                  :weekly="infection.monthly"
                  :type="'month'"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="covid-Vaccination">
          <div
            class="text-header"
          >
            <strong style="font-weight: bold">예방접종 현황</strong><span v-if="vaccinationType" style="margin-left: 5px; font-size: 12px; font-weight: bold; color:#888">({{ vaccination.date[0] }})</span>
          </div>
          <div class="Vaccination-contents">
            <div
              v-if="vaccinationType"
              class="items"
            >
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
            <div
              v-else
            >
              주말엔 데이터가 없습니다. :(
            </div>
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
            <strong style="font-weight: bold">도시별 감염현황</strong><span style="margin-left: 5px; font-size: 12px; font-weight: bold; color:#888">({{ area.date }})  단위: 명</span>
          </div>
          <div class="city-contents">
            <area-map
              :area="area"
            />
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
import infectionText from '~/components/covid/infection/text'
import infectionWeekly from '~/components/covid/infection/weekly'
import areaMap from '~/components/covid/area/areaMap'

export default {
    name: 'MainContents',
    components: {
        vaccinationTodayChart,
        vaccinationTotalChart,
        ageSexChart,
        infectionText,
        infectionWeekly,
        areaMap
    },
    data () {
        return {
            vaccinationType: true,
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
                }
            },
            infection: {
                date: '',
                today: {
                    infection: '',
                    death: ''
                },
                weekly: {
                    date: [],
                    infection: [],
                    death: []
                },
                monthly: {
                    date: [],
                    infection: [],
                    death: []
                },
                total: {
                    infection: '',
                    death: ''
                }
            },
            area: {
                date: '',
                city: [],
                totalInfection: [],
                todayInfection: [],
                englishName: []
            }
        }
    },
    mounted () {
        this.getAgeSex()
        this.getVaccination()
        this.getInfection()
        this.getArea()
    },
    methods: {
        /**
         *  접종현황 api 호출
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
                    this.vaccinationType = false
                    console.log('hi 12333')
                    console.error('접종현황 데이터가 없거나 오류 입니다.', err)
                })
        },
        /**
         *  성별 감연현황 api 호출
         */
        async getAgeSex () {
            await axios.get('/api/agesex')
                .then((res) => {
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
                })
                .catch((err) => {
                    console.error('성별 감염현황 데이터가 없거나 오류 입니다.', err)
                })
        },
        /**
         *  감연현황 api 호출
         */
        async getInfection () {
            await axios.get('api/infection')
                .then((res) => {
                    const dataSet = res.data
                    const today = dataSet.response.body.items.item[0].createDt.split(' ')
                    this.infection.date = today[0]
                    const todayData = dataSet.response.body.items.item[0]
                    const totalData = dataSet.response.body.items.item[1]
                    this.infection.today.infection = todayData.decideCnt - totalData.decideCnt
                    this.infection.today.death = todayData.deathCnt - totalData.deathCnt
                    this.infection.total.infection = totalData.decideCnt
                    this.infection.total.death = totalData.deathCnt

                    // weekly
                    for (let i = 1; i < 8; i++) {
                        const pushSet = dataSet.response.body.items.item
                        const split = pushSet[i].createDt.split(' ')
                        const split2 = split[0].split('-')
                        const date = split2[1] + '.' + split2[2]
                        this.infection.weekly.date.unshift(date)
                        this.infection.weekly.infection.unshift(pushSet[i - 1].decideCnt - pushSet[i].decideCnt)
                        this.infection.weekly.death.unshift(pushSet[i - 1].deathCnt - pushSet[i].deathCnt)
                    }

                    // monthly
                    this.monthlyFunc(dataSet.response.body.items.item)
                })
                .catch((err) => {
                    console.error('감염현황 데이터가 없거나 오류 입니다.', err)
                })
        },
        async getArea () {
            await axios.get('api/area')
                .then((res) => {
                    const dataSet = res.data.response.body.items
                    const today = dataSet.item[0].createDt.split(' ')
                    this.area.date = today[0]
                    for (let i = 0; i < dataSet.item.length; i++) {
                        this.area.city.push(dataSet.item[i].gubun)
                        this.area.totalInfection.push(dataSet.item[i].defCnt)
                        this.area.todayInfection.push(dataSet.item[i].incDec)
                        this.area.englishName.push(dataSet.item[i].gubunEn)
                    }
                }).catch((err) => {
                    console.log('err', err)
                })
        },
        monthlyFunc (data) {
            const lineMonth = new Date(data[0].createDt).getMonth() + 1
            let changeMonth = lineMonth
            this.infection.monthly.date.unshift(changeMonth)
            let sumInfection = 0
            let sumDeath = 0
            for (let i = 0; i < data.length; i++) {
                const monthCheck = new Date(data[i].createDt).getMonth() + 1
                if (monthCheck > lineMonth - 5) {
                    if (changeMonth === monthCheck) {
                        sumInfection = sumInfection + (data[i].decideCnt - data[i + 1].decideCnt)
                        sumDeath = sumDeath + (data[i].deathCnt - data[i + 1].deathCnt)
                    } else {
                        this.infection.monthly.infection.unshift(sumInfection)
                        this.infection.monthly.death.unshift(sumDeath)
                        sumInfection = 0
                        sumDeath = 0
                        changeMonth = monthCheck
                        this.infection.monthly.date.unshift(changeMonth)
                    }
                } else {
                    this.infection.monthly.infection.unshift(sumInfection)
                    this.infection.monthly.death.unshift(sumDeath)
                    return
                }
            }
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
    display: grid;
    /*grid-template-rows: 0.7fr 1fr 1fr*/
}

.covid-infection .infection-contents .infection-text-info {
    display: flex;
    justify-content: center;
    align-items: center;
}

.covid-infection .infection-contents .infection-weekly {
    display: flex;
    justify-content: center;
    align-items: center;
}

.covid-infection .infection-contents .infection-monthly {
    display: flex;
    justify-content: center;
    align-items: center;
}

.covid-infection .infection-contents .infection-text-info .text {
    width : 95%;
    height : 95%;
}

.covid-infection .infection-contents .infection-weekly .chart {
    width : 95%;
    height : 95%;
}

.covid-infection .infection-contents .infection-monthly .chart {
    width : 95%;
    height : 95%;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
