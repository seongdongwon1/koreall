<template>
  <table style="width: 100%;">
    <thead>
      <tr>
        <th>오늘 확진자</th>
        <th>오늘 사망자</th>
        <th>누적 확진자</th>
        <th>누적 사망자</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ infection.today.infection | formatNum }}명</td>
        <td>{{ infection.today.death | formatNum }}명</td>
        <td>{{ infection.total.infection | formatNum }}명</td>
        <td>{{ infection.total.death | formatNum }}명</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name: 'InfectionText',
    props: ['infection']
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
        font-size: 13px;
    }
</style>
