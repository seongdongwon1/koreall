<template>
  <div class="korea-map-area">
    <img class="korea-map" src="~/assets/images/koreamap.png" style="width: 120%; opacity: 0.8">
    <template
      v-for="(item, index) in area.englishName"
    >
      <div
        :key="index"
        :class="`arrow-${item} arrow-items`"
      >
        <div class="top">
          {{ area.city[index] }}
        </div>
        <div class="bottom">
          {{ area.totalInfection[index] | formatNum }}
          <span style="color:red">(+{{ area.todayInfection[index] | formatNum }})</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>

export default {
    name: 'AreaMap',
    props: ['area']
}
</script>

<style>
.korea-map-area {
    position: relative;
}

.arrow-items {
    position : absolute;
    width : 100px;
    display: flex;
    flex-direction: column;
    border-color : #95abdd;
    font-weight: bold;
    font-size: 11px;
}

.top {
    text-align: center;
}

.bottom {
    text-align: center;
    display: flex;
    flex-direction: column;
}

.arrow-Lazaretto {
    left : 230px;
    top : 35px;
}

.arrow-Jeju {
    left : 20px;
    top : 230px;
}

.arrow-Gyeongsangnam-do {
    left : 82px;
    top : 157px;
}

.arrow-Gyeongsangbuk-do {
    left : 100px;
    top : 90px;
}

.arrow-Jeollanam-do {
    left : 0px;
    top : 183px;
}

.arrow-Jeollabuk-do {
    left : 10px;
    top : 136px;
}

.arrow-Chungcheongnam-do {
    left : -6px;
    top : 84px;
}

.arrow-Chungcheongbuk-do {
    left : 48px;
    top : 83px;
}

.arrow-Gangwon-do {
    left : 88px;
    top : 15px;
}

.arrow-Gyeonggi-do {
    left : -22px;
    top : 26px;
}

.arrow-Sejong {
    left : -180px;
    top : 35px;
}

.arrow-Ulsan {
    left : -180px;
    top : 145px;
}

.arrow-Daejeon {
    left : -180px;
    top : 90px;
}

.arrow-Gwangju {
    left : -120px;
    top : -20px;
}

.arrow-Incheon {
    left : -180px;
    top : -20px;
}

.arrow-Daegu {
    left : -180px;
    top : 200px;
}

.arrow-Busan {
    left : -120px;
    top : 35px;
}

.arrow-Seoul {
    left : 30px;
    top : 15px;
}

.arrow-Total {
    left : 230px;
    top : -20px;
}

</style>
