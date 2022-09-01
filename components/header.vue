<template>
  <div class="all-header">
    <div style="margin: 0 auto; max-width: 1140px;">
      <b-navbar toggleable="sm" type="light">
        <b-navbar-brand href="#">
          <strong>꼬레올</strong>
        </b-navbar-brand>
        <b-collapse id="nav-text" is-nav>
          <b-navbar-nav class="mr-auto">
            <b-nav-text>KOREA의 모든 정보</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav class="header-menu">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              MENU1
            </b-nav-item>
            <b-nav-item href="#">
              MENU2
            </b-nav-item>
            <b-nav-item href="#">
              MENU3
            </b-nav-item>
            <b-nav-item href="#">
              MENU4
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AllHeader'
}
</script>

<style scoped>
.all-header {
    background-color :#f2f2f2;
    width : 100%;
    /* position: fixed; */
}
</style>
