<template>
  <div id="app">
    <Header />
    <div class="container">
      <Prefectures :prefectures="prefectures" />
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
  created() {
  }
}
</script>
