import Vue from 'vue'

import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(am4themes_animated)

Vue.use(am4themes_animated)
Vue.use(am4core)
Vue.use(am4charts)
