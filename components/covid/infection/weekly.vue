<template>
  <table style="width: 100%;">
    <thead>
      <tr
        v-if="type === 'week'"
      >
        <th>날짜</th>
        <th
          v-for="(item, index) in weekly.date"
          :key="index"
        >
          {{ item }}
        </th>
      </tr>
      <tr
        v-else
      >
        <th>월별</th>
        <th
          v-for="(item, index) in weekly.date"
          :key="index"
        >
          {{ item }}월
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>확진자</td>
        <td
          v-for="(item, index) in weekly.infection"
          :key="index"
        >
          {{ item | formatNum }}명
        </td>
      </tr>
      <tr>
        <td>사망자</td>
        <td
          v-for="(item, index) in weekly.death"
          :key="index"
        >
          {{ item | formatNum }}명
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name: 'InfectionWeekly',
    props: ['weekly', 'type']
}
</script>

<style scoped>
table thead tr th {
    padding: 3px 2px;
    border: 1px solid #504e4e;
    border-bottom-color: #504e4e;
    font-weight: bold;
    background-color: #95abdd;
    text-align: center;
    color: white;
    font-size: 13px;
}
table tbody tr td {
    padding: 3px 2px;
    border: 1px solid #504e4e;
    font-weight: normal;
    text-align: center;
    font-size: 12px;
}
</style>
