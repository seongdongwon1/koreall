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
      <tr
        v-for="(item, index) in movieInfo"
        :key="index"
      >
        <td>
          <span style="width:50%; font-weight: bold">
            {{ item.rank }}
          </span>
          <span :class="`${$searchColor(item.rankInten)}`">{{ Math.abs(item.rankInten) }}</span>
        </td>
        <td>
          <span
            v-if="item.rankOldAndNew === 'NEW'"
            class="w3-tag w3-round-large w3-red w3-center"
          >new</span>
          {{ item.movieNm }}
        </td>
        <td>{{ $formatDate(item.openDt) }}</td>
        <td>
          <span style="width:50%;">{{ item.audiCnt | formatNum }}명</span>
          <span :class="`${$searchColor(item.audiInten)}`" style="width:50%; text-align: center">{{ Math.abs(item.audiInten) | formatNum }}</span>
        </td>
        <td>{{ item.audiAcc | formatNum }}명</td>
      </tr>
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
            detail: [],
            searchCode: '',
            searchData: null
        }
    },
    async fetch () {
        await axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c2b7583f12c7500b27e82f366ed6cdbb&targetDt=' + this.date + '')
            .then((res) => {
                this.movieInfo = res.data.boxOfficeResult.dailyBoxOfficeList
            }).catch((err) => {
                console.log('err', err)
            })
    }
}
</script>

<style scoped>
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
    table tbody tr td {
        border : 1px solid #eee;
        border-bottom-color: #ddd;
        padding : 13px 10px;
    }
    table tbody tr td:first-child {
        text-align: center;
        display: flex;
    }
    table tbody tr td:nth-child(2) {
        padding-left : 15px;
    }
    table tbody tr td:nth-child(3) {
        text-align: center;
    }
    table tbody tr td:nth-child(4) {
        display: flex;
        text-align: right;
        padding-right: 15px;
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
        margin-right: 4px;
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
        margin-right: 4px;
    }
    .same::before {
        content: '';
        display: inline-block;
        margin-right: 4px;
        width: 10px;
        height: 4px;
        background: #888;
        vertical-align: 3px;
    }
</style>
