# 코레올 | 코리아의 모든 정보 

## 공공기관 Open API로 만든 웹사이트

> 사이트 보러가기 : https://seongdongwon1.github.io/koreall/

현재 컨텐츠
 - 코로나 19 상황판
    - dev 환경에서는 proxy 설정으로 데이터를 잘 받아서 잘 처리가 됐는데... 
      배포했을땐 cors에 걸려 데이터를 못받고 있습니다...
      왜그런지 잘 모르겠으나 여러방면으로 시도해서 처리하도록 할 예정!
        
      <dev 환경의 코로나 19 상황판>
      ![image](https://user-images.githubusercontent.com/49185772/191913356-b0b9c70e-1e3a-42ae-87c7-8b0339af52ca.png)
        
 - 일일 박스오피스
    - dev환경이든 배포환경이든 둘다 데이터 잘 받아서 처리 하고 있음.
    - table tr 클릭이벤트 주어서 영화 상세목록을 노출시키고 있음.
    ![image](https://user-images.githubusercontent.com/49185772/191913711-0e89af0d-bd40-47d7-b074-4d9f0d7745cc.png)

데이터 출처
 > 공공기관 open api
  - 코로나19.감염현황 -  공공데이터활용지원센터
  - 코로나19.예방접종 현황 - 질병관리청
  - 코로나19.연령별 감염률 - 공공데이터활용지원센터
  - 코로나19.도시별 감염현황 - 공공데이터활용지원센터
  - 상단 날씨 - 기상청
 > 영화
  - 일일 박스오피스 - 영화진흥위원회
  - 영화 상세 - 영화진흥위원회

현재 cors에 막혀서 코로나19 데이터를 못가져와서 컨텐츠가 제대로 작동하지 않는 상황입니다... 이 부분 얼른 조치를 해서
제 자신감도 찾고 경험을 쌓도록 할 것 입니다. 
현재 사람들에게 정보제공 할 만한 open api를 계속해서 찾고 있는 중이며, 지속적으로 컨텐츠 추가할 예정입니다.
포트폴리오 목적으로 만들었지만 서비스 함으로써 운영도 같이 해보고 싶습니다.
디자인과 퍼블은 할줄 몰라서... 데이터 처리와 데이터 사용에만 봐주시면 감사하겠습니다.. (_ _)

<!-- ```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store). -->
