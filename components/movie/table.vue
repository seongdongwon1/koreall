<template>
  <table style="width: 100%;">
    <thead>
      <tr>
        <th>
          순위
        </th>
        <th style="width:30%;">
          영화명
        </th>
        <th style="width:5%;">
          개봉일
        </th>
        <th style="width:15%;">
          일일 관객수(전일대비 관객수)
        </th>
        <th style="width:15%;">
          누적 관객수
        </th>
      </tr>
    </thead>
    <tbody>
      <template
        v-for="(item, index) in movieInfo"
      >
        <tr
          :key="index"
          class="movieContents-table-info"
        >
          <td>
            <div class="left">
              {{ item.rank }}
            </div>
            <div :class="`right ${$searchColor(item.rankInten)}`">
              {{ Math.abs(item.rankInten) }}
            </div>
          </td>
          <td
            @click="clickTab(item.movieCd)"
          >
            <span
              v-if="item.rankOldAndNew === 'NEW'"
              class="w3-tag w3-round-large w3-red w3-center"
            >new</span>
            {{ item.movieNm }}
          </td>
          <td>{{ $formatDate(item.openDt) }}</td>
          <td>
            <div class="left">
              {{ item.audiCnt | formatNum }}명
            </div>
            <div :class="`right ${$searchColor(item.audiInten)}`">
              {{ Math.abs(item.audiInten) | formatNum }}
            </div>
          </td>
          <td>{{ item.audiAcc | formatNum }}명</td>
        </tr>
        <tr
          v-if="item.movieCd === clickCode"
          :key="item.movieCd"
        >
          <td colspan="5">
            <div class="movieDetail">
              <div class="movieDetail-top">
                <div class="thumb">
                  썸네일
                </div>
                <div class="detail-info">
                  <span style="font-weight: bold; font-size: 18px;">{{ detail.name }}</span> <span :class="`w3-tag w3-round-large ${$movieState(detail.state)} w3-center`" style="margin-left:10px;">{{ detail.state }}</span>
                </div>
              </div>
              <div class="movieDetail-bottom">
                asd
              </div>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MovieTable',
    props: ['date'],
    data () {
        return {
            movieInfo: '',
            detail: '',
            searchCode: '',
            searchData: null,
            clickCode: null
        }
    },
    async fetch () {
        await axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c2b7583f12c7500b27e82f366ed6cdbb&targetDt=' + this.date + '')
            .then((res) => {
                this.movieInfo = res.data.boxOfficeResult.dailyBoxOfficeList
            }).catch((err) => {
                console.log('err', err)
            })
    },
    methods: {
        clickTab (value) {
            if (this.clickCode === value) {
                this.clickCode = null
            } else {
                this.clickCode = value
                this.detail = ''
                this.getMovieDetail(value)
            }
        },
        async getMovieDetail (code) {
            await axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=c2b7583f12c7500b27e82f366ed6cdbb&movieCd=' + code + '')
                .then((res) => {
                    console.log('res', res)
                    const data = res.data.movieInfoResult.movieInfo
                    this.detail = {
                        name: data.movieNm,
                        state: data.prdtStatNm,
                        nation: data.nation,
                        running: data.showTm,
                        actors: data.actors,
                        audit: data.audits,
                        company: data.companys,
                        director: data.directors,
                        gubun: data.genres
                    }
                }).catch((err) => {
                    console.log('err', err)
                })
        }
    }
}
</script>

<style scoped>
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    table thead th {
        text-align: center;
        padding: 13px 10px;
        border: 1px solid #eee;
        border-bottom-color: #ddd;
        background-color: #95abdd;
        color: white;
        font-size : 14px;
    }
    table thead th:first-child {
        padding-left: 5px;
        width: 10%;
    }
    table tbody .movieContents-table-info td {
        border : 1px solid #eee;
        border-bottom-color: #ddd;
        padding : 13px 10px;
    }
    table tbody tr td:first-child {
        text-align: center;
    }
    table tbody tr td:first-child .left{
        font-weight: bold;
        width: 40%;
        float: left;
        margin: 0 auto;
        text-align: right;
    }
    table tbody tr td:first-child .right{
        float: left;
        width: 40%;
        margin: 0 auto;
        text-align: center;
    }
    table tbody tr td:nth-child(2) {
        padding-left : 15px;
    }
    table tbody tr td:nth-child(3) {
        text-align: center;
    }
    table tbody tr td:nth-child(4) {
        text-align: right;
        padding-right: 15px;
    }
    table tbody tr td:nth-child(4) .left{
        width: 50%;
        float: left;
        margin: 0 auto;
        text-align: right;
    }
    table tbody tr td:nth-child(4) .right{
        float: left;
        width: 45%;
        margin: 0 auto;
        text-align: right;
    }
    table tbody tr td:nth-child(5) {
        text-align: right;
        padding-right: 15px;
    }
    .up {
        color : red;
    }
    .down {
        color : blue;
    }
    .same {
        color : gray;
    }
    .down::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 9px solid #2175ff;
        vertical-align: baseline;
        display: inline-block;
    }
    .up::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 9px solid #ff0000;
        vertical-align: 1px;
        display: inline-block;
    }
    .same::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 4px;
        background: #888;
        vertical-align: 3px;
    }
    .movieDetail {
        padding:30px;
        display: flex;
        flex-direction: column;
    }
    .movieDetail .movieDetail-top {
        display: flex;
    }
    .movieDetail .movieDetail-top .thumb {
        width : 30%;
    }
    .movieDetail .movieDetail-top .detail-info {
        width : 70%;
        text-align: left;
        display: flex;
        align-items: center;
    }
</style>
