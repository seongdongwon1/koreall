<template>
  <div class="contents-container">
    <div class="left-month-info">
      <div class="text">
        이번주 소식
      </div>
      <div class="image">
        asd
      </div>
    </div>
    <div class="right-weather">
      <div class="weather-area">
        asd
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
    name: 'MainContents',
    mounted () {
    },
    methods: {

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
    width : 150%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.left-month-info .text {
    width: 90%;
}
.left-month-info .image {
    width: 90%;
    height : auto;
}
.right-weather {
    width : 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.right-weather .weather-area {
    width : 90%;
    height : 90%;
    border: 1px solid gray;
}
.right-weather::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 8px;
    left: 0px;
    width: 1px;
    background: #ddd;
}
</style>
