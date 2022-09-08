<template>
  <Pie
    :chart-data="getChartData"
    :chart-options="chartOptions"
    style="width:80%; height: 80%; display:flex;"
  />
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
    name: 'AgeChart',
    components: { Pie },
    props: ['agesex'],
    data () {
        return {
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    tooltip: {
                        callbacks: {
                            label: (tooltipItems, data) => {
                                return tooltipItems.label + ':' + tooltipItems.formattedValue + '%'
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
                labels: ['0~9세', '10~19세', '20~29세', '30~39세', '40~49세', '50~59세', '60~69세', '70~79세', '80세 이상'],
                datasets: [
                    {
                        backgroundColor: ['#FF0000', '#FF7F00', '#FFE302', '#7FFF00', '#008000', '#00FFFF', '#0000FF', '#000080', '#800080'],
                        data: [],
                        dataLabels: {
                            color: 'white'
                        }
                    }
                ]
            }
            for (const i in this.agesex) {
                chartData.datasets[0].data.push(this.agesex[i].confCaseRate)
            }
            return chartData
        }
    }
}
</script>

<style scoped>

</style>
