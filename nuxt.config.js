export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'koreall',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap' }
        ],
        script: [
            { src: 'https://www.gstatic.com/charts/loader.js' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/bootstrap.js',
        '~/plugins/chartjs.js',
        '~/plugins/filters.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
        proxy: true
    },
    proxy: {
        '/api/vaccination': {
            target: 'https://nip.kdca.go.kr/irgd/cov19stats.do?list=all',
            pathRewrite: { '^/api/vaccination': '' },
            changeOrigin: true,
            secure: false
        },
        '/api/agesex': {
            target: 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson?ServiceKey=pYO1nVorD2xTWG%2F6GzmC3bRYZoOOMyJ0YbEG3ByX4l22EpmZoYkFO6UsMt%2BDM5PKg9BpyLbSiVN5HMIaf6PUTQ%3D%3D',
            pathRewrite: { '^/api/agesex': '' },
            changeOrigin: true,
            secure: false
        },
        '/api/infection': {
            target: 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=pYO1nVorD2xTWG%2F6GzmC3bRYZoOOMyJ0YbEG3ByX4l22EpmZoYkFO6UsMt%2BDM5PKg9BpyLbSiVN5HMIaf6PUTQ%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20220101',
            pathRewrite: { '^/api/infection': '' },
            changeOrigin: true,
            secure: false
        },
        '/api/area': {
            target: 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=pYO1nVorD2xTWG%2F6GzmC3bRYZoOOMyJ0YbEG3ByX4l22EpmZoYkFO6UsMt%2BDM5PKg9BpyLbSiVN5HMIaf6PUTQ%3D%3D',
            pathRewrite: { '^/api/area': '' },
            changeOrigin: true,
            secure: false
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
