<template>
  <div class="weather-area">
    <MARQUEE class="move-text" scrolldelay="100">
      asd
    </MARQUEE>
  </div>
</template>

<script>
export default {
    name: 'SubHeader',
    data () {
        return {
            weather: {
                1: '서울특별시',
                2: '부산광역시',
                3: '대구광역시',
                4: '인천광역시',
                5: '광주광역시',
                6: '대전광역시',
                7: '울산광역시',
                8: '경기도',
                9: '강원도',
                10: '충청북도',
                11: '충청남도',
                12: '경상북도',
                13: '경상남도',
                14: '전라북도',
                15: '전라남도',
                16: '제주특별자치도',
                17: '세종특별자치도'
            },
            matchingCode: {
                서울특별시: {
                    nx: '60', ny: '127'
                },
                부산광역시: {
                    nx: '98', ny: '76'
                },
                대구광역시: {
                    nx: '89', ny: '90'
                },
                인천광역시: {
                    nx: '55', ny: '124'
                },
                광주광역시: {
                    nx: '58', ny: '74'
                },
                대전광역시: {
                    nx: '67', ny: '100'
                },
                울산광역시: {
                    nx: '102', ny: '84'
                },
                경기도: {
                    nx: '60', ny: '120'
                },
                강원도: {
                    nx: '73', ny: '134'
                },
                충청북도: {
                    nx: '69', ny: '107'
                },
                충청남도: {
                    nx: '68', ny: '100'
                },
                경상북도: {
                    nx: '89', ny: '91'
                },
                경상남도: {
                    nx: '91', ny: '77'
                },
                전라북도: {
                    nx: '63', ny: '89'
                },
                전라남도: {
                    nx: '51', ny: '67'
                },
                제주특별자치도: {
                    nx: '52', ny: '38'
                },
                세종특별자치도: {
                    nx: '66', ny: '103'
                }
            }
        }
    },
    mounted () {
        this.getWeatherData()
    },
    methods: {
        getWeatherData () {
            console.log('111')
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
</style>
