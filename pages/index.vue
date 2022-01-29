<template>
  <div id="app">
    <Header />
    <div class="container">
      <Prefectures
        :prefectures="prefectures"
        @addPref="addPref"
        @removePref="removePref"
      />
      <highchart :options="options" />
    </div>
  </div>
</template>

<script>
import Prefectures from '@/components/Prefectures.vue';

export default {
  components: {
    Prefectures,
  },
  async asyncData({ $axios }){
    try{
      const { data } = await $axios.get('/api/v1/prefectures');
      const prefectures = data.result.map(val => {
            return {
              id: val.prefCode, // Number
              name: val.prefName, // String
              isChecked: false // Boolean
            };
          });
      return {
        prefectures // Array
      };
    } catch (e) {
      alert(e.code + ":" + e.message);
    }
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
      this.prefectures[prefData.id - 1].isChecked = true;
    },
    removePref(id){
      this.options.series = this.options.series.filter(val => val.id !== id);
      this.prefectures[id - 1].isChecked = false;
    }
  }
}
</script>
