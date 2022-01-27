<template>
  <div id="app">
    <Header />
    <div class="container">
      <Prefectures :prefectures="prefectures" @addPref="addPref" />
      <highchart :options="options" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }){
    const { data } = await $axios.get('/api/v1/prefectures');
    const prefectures = data.result.map(val => {
          return {
            id: val.prefCode,
            name: val.prefName,
            isChecked: false
          };
        });
    return {
      prefectures,
    };
  },
  data(){
    return{
      // HighchartOption
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
            categories: ['1960','1965','1970','1975','1980','1985','1990','1995','2000','2005','2010','2015','2020','2025','2030','2035','2040','2045'],
            labels: {
              formatter() {
                return this.value + '年';
              }
            }
          },
          yAxis: {
            title: {
              text: '人口数'
            },
            labels: {
              formatter() {
                return this.value/10000 + '万';
              }
            }
          },
          // DrawingData Array<Object>
          series: [],
      },
    }
  },
  methods: {
    addPref(prefData){
      this.options.series.push(prefData);
    }
  }
}
</script>
