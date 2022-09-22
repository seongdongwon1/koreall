<template>
  <div class="footer-container">
    <div class="footer">
      <div class="top">
        만든이 : 동원(SD)
      </div>
      <div class="bottom">
        <ul>
          <li>
            Github : <a href="https://github.com/seongdongwon1">동원이의 연습장 바로가기</a>
          </li>
          <li>
            Velog : <a href="https://velog.io/@dongwon">동원이의 메모장 바로가기</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FooterPage'
}
</script>

<style scoped>
    .footer-container {
        background-color :#f2f2f2;
        width : 100%;
    }
    .footer-container .footer {
        width: 1140px;
        margin : 0 auto;
        margin-top : 10px;
    }
    .top {
        height : 70px;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bottom {
        width: 100%;
        height : 70px;
        justify-content: center;
        align-items: center;
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
</style>
