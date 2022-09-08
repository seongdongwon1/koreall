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
    props: ['total'],
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
                        label: '전체 접종현황',
                        backgroundColor: '#142c67',
                        data: []
                    }
                ]
            }
            chartData.labels.push('1차', '2차', '3차', '4차')
            chartData.datasets[0].data.push(this.total.first)
            chartData.datasets[0].data.push(this.total.second)
            chartData.datasets[0].data.push(this.total.third)
            chartData.datasets[0].data.push(this.total.four)
            return chartData
        }
    }
}
</script>
<style scoped>

</style>
