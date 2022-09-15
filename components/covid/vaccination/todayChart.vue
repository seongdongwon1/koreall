<template>
  <Bar
    :chart-data="getChartData"
    :chart-options="chartOptions"
    style="height:100%; width:250px;"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: ['today'],
    data () {
        return {
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (tooltipItems, data) => {
                                return tooltipItems.dataset.label + ':' + tooltipItems.formattedValue + '명'
                            }
                        }
                    }
                }
            }
        }
    },
    computed: {
        getChartData () {
            const chartData = {
                labels: [],
                datasets: [
                    {
                        label: '오늘 접종현황',
                        backgroundColor: '#95abdd',
                        data: []
                    }
                ]
            }
            chartData.labels.push('1차', '2차', '3차', '4차')
            chartData.datasets[0].data.push(this.today.first)
            chartData.datasets[0].data.push(this.today.second)
            chartData.datasets[0].data.push(this.today.third)
            chartData.datasets[0].data.push(this.today.four)
            return chartData
        }
    }
}
</script>
<style scoped>

</style>
