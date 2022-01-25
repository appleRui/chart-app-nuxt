<template>
  <div id="prefectures">
    <h2 class="prefectures_ttl">都道府県</h2>
    <div
      v-for="prefecture in prefectures"
      :key="prefecture.prefCode"
      class="prefecture"
    >
      <label :for="prefecture.prefCode" class="prefecture-label">
        <input type="checkbox" class="prefecture-checkbox" />
        {{ prefecture.prefName }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prefectures: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scopped>
#prefectures {
  margin: 1rem 0;
}
.prefectures_ttl {
  font-size: 18px;
  margin: 0.75rem 0;
}
.prefecture {
  margin: 0.2rem 0.5rem;
  display: inline-block;
}
</style>