<template>
  <div id="app">
    <Header />
    <div class="container">
      <Prefectures :prefectures="prefectures" />
      <highchart :options="options" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }){
    const { data } = await $axios.get('/api/v1/prefectures');
    return {
      prefectures: data.result,
    };
  },
  data(){
    return{
      options: {
          chart: {
            type: 'spline'
          },
          title: {
            text: '都道府県別の総人口推移グラフ'
          },
          subtitle: {
            text: 'from RESAS API'
          },
          xAxis: {
            categories: ['1960','1965','1970','1975','1980','1985','1990','1995','2000','2005','2010','2015','2020','2025','2030','2035','2040','2045']
          },
          yAxis: {
            title: {
              text: '人口数'
            },
          }
      }
    }
  }
}
</script>
