<template>
  <GChart :type="type" :data="data" :options="options" />
</template>

<script>
import { GChart } from 'vue-google-charts'
import { chartType, chartData, chartOptions } from '~/plugins/googleChart'

export default {
    name: 'TodayChart',
    components: {
        GChart
    },
    props: ['vaccination'],
    data () {
        return {
            type: chartType,
            data: chartData,
            options: chartOptions
        }
    },
    mounted () {
        this.google.charts.load('current', { packages: ['corechart', 'bar'] })
        this.google.charts.setOnLoadCallback(this.drawBasic)
    },
    methods: {
        drawBasic () {
            const data = this.google.visualization.arrayToDataTable([
                ['City', '2010 Population'],
                ['New York City, NY', 8175000],
                ['Los Angeles, CA', 3792000],
                ['Chicago, IL', 2695000],
                ['Houston, TX', 2099000],
                ['Philadelphia, PA', 1526000]
            ])

            const options = {
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '50%' },
                hAxis: {
                    title: 'Total Population',
                    minValue: 0
                },
                vAxis: {
                    title: 'City'
                }
            }

            const chart = new this.google.visualization.BarChart(this.$refs.chart_div)

            chart.draw(data, options)
        }
    }
}
</script>

<style scoped>

</style>
