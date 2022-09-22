<template>
  <div class="weather-area">
    <MARQUEE loop="infinite" class="move-text" scrolldelay="100">
      <ul class="content-items">
        <li
          v-for="(item, index) in weather"
          :key="index"
          class="weather-list"
        >
          <strong class="name">{{ item }}</strong>
          <span style="margin-left: 5px;">{{ inputData[index] }}&deg;C</span>
        </li>
      </ul>
    </MARQUEE>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SubHeader',
    data () {
        return {
            weather: [
                '서울특별시',
                '부산광역시',
                '대구광역시',
                '인천광역시',
                '광주광역시',
                '대전광역시',
                '울산광역시',
                '경기도',
                '강원도',
                '충청북도',
                '충청남도',
                '경상북도',
                '경상남도',
                '전라북도',
                '전라남도',
                '제주특별자치도',
                '세종특별자치도'
            ],
            matchingCode: {
                서울특별시: {
                    nx: 60, ny: 127
                },
                부산광역시: {
                    nx: 98, ny: 76
                },
                대구광역시: {
                    nx: 89, ny: 90
                },
                인천광역시: {
                    nx: 55, ny: 124
                },
                광주광역시: {
                    nx: 58, ny: 74
                },
                대전광역시: {
                    nx: 67, ny: 100
                },
                울산광역시: {
                    nx: 102, ny: 84
                },
                경기도: {
                    nx: 60, ny: 120
                },
                강원도: {
                    nx: 73, ny: 134
                },
                충청북도: {
                    nx: 69, ny: 107
                },
                충청남도: {
                    nx: 68, ny: 100
                },
                경상북도: {
                    nx: 89, ny: 91
                },
                경상남도: {
                    nx: 91, ny: 77
                },
                전라북도: {
                    nx: 63, ny: 89
                },
                전라남도: {
                    nx: 51, ny: 67
                },
                제주특별자치도: {
                    nx: 52, ny: 38
                },
                세종특별자치도: {
                    nx: 66, ny: 103
                }
            },
            apiKey: 'pYO1nVorD2xTWG%2F6GzmC3bRYZoOOMyJ0YbEG3ByX4l22EpmZoYkFO6UsMt%2BDM5PKg9BpyLbSiVN5HMIaf6PUTQ%3D%3D',
            inputData: [],
            tDate: '',
            tTime: ''
        }
    },
    mounted () {
        this.getTodayInfo()
    },
    methods: {
        getTodayInfo () {
            const nowDate = new Date()
            const now = new Date(nowDate.setHours(nowDate.getHours() - 1))
            const yyyy = now.getFullYear().toString()
            const MM = this.pad(now.getMonth() + 1, 2)
            const dd = this.pad(now.getDate(), 2)
            const hh = this.pad(now.getHours(), 2)
            const mm = '00'

            this.tDate = yyyy + MM + dd
            this.tTime = hh + mm
            this.getWeatherData()
        },
        pad (number, length) {
            let str = '' + number
            while (str.length < length) {
                str = '0' + str
            }
            return str
        },
        async getWeatherData () {
            const sendArr = []
            for (let i = 0; i < this.weather.length; i++) {
                await axios.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=' + this.apiKey + '&numOfRows=10&pageNo=1&base_date=' + this.tDate + '&base_time=' + this.tTime + '&nx=' + this.matchingCode[this.weather[i]].nx + '&ny=' + this.matchingCode[this.weather[i]].ny + '&category=T1H&dataType=json')
                    .then((res) => {
                        const getData = res.data.response.body.items.item
                        getData.forEach((obj) => {
                            if (obj.category === 'T1H') {
                                sendArr.push(obj.obsrValue)
                            }
                        })
                        this.inputData = sendArr
                    }).catch((err) => {
                        console.log('err', err)
                    })
            }
        }
    }
}
</script>

<style scoped>
    .weather-area {
        width: 100%;
        height : 30px;
        background-color: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .move-text {
        width : 1140px;
    }
    .content-items {
        display: flex;
        margin : 0;
    }
    .weather-list {
        list-style : none;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    .name {
        display: inline-block;
        margin-right: 3px;
        margin-left: 40px;
        font-weight: normal;
        vertical-align: -1px;
    }
</style>
