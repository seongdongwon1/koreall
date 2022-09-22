<template>
  <div class="movieContents-container">
    <div class="movieContents-title">
      <strong style="font-weight: bold; font-size:24px;">일별 박스오피스</strong><span style="margin-left: 5px; font-size: 12px; font-weight: bold; color:#888">({{ textDate }})</span>
    </div>
    <movie-table
      :date="date"
    />
  </div>
</template>

<script>
import movieTable from '~/components/movie/table'

export default {
    name: 'MovieContents',
    components: {
        movieTable
    },
    props: ['date', 'textDate']
}
</script>

<style scoped>
    .movieContents-container {
        width : 1100px;
        margin : 0 auto;
    }
    .movieContents-rankingTable {
        width : 100%;
        margin-top: 20px;
    }
</style>
