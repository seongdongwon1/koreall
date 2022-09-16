<template>
  <div class="korea-map-area">
    <img class="korea-map" src="~/assets/images/koreamap.png" style="width: 120%;">
    <div class="arrow-seoul arrow-items">
      <strong>서울</strong> <span style="color:gray;">780명</span>
    </div>
  </div>
</template>

<script>

export default {
    name: 'AreaMap',
    data () {
        return {
        }
    },
    computed: {

    },
    created () {

    },
    mounted () {
    },
    methods: {
    }
}
</script>

<style>
.korea-map-area {
    position: relative;
}

.arrow-items {
    position : absolute;
    width : 100px;
}

.arrow-seoul {
    border-color : #95abdd;
    left : -50px;
    top : 0px;
    font-weight: bold;
    font-size: 12px;
}
/*.arrow-seoul:before {*/
/*    content: '';*/
/*    position: absolute;*/
/*    bottom: 0;*/
/*    left: 50%;*/
/*    z-index: 2;*/
/*    transform: translateX(-50%);*/
/*    display: inline-block;*/
/*    width: 7px;*/
/*    height: 7px;*/
/*    border-width: 5px;*/
/*    border-style: solid;*/
/*    border-radius: 100%;*/
/*    border-color: #b8d1fc;*/
/*    background: black;*/
/*}*/
</style>
