<template>
  <div id="prefectures">
    <h2 class="prefectures_ttl">都道府県</h2>
    <div
      v-for="prefecture in prefectures"
      :key="prefecture.prefCode"
      class="prefecture"
    >
      <label :for="prefecture.prefCode" class="prefecture__label">
        <input
          class="prefecture__checkbox"
          type="checkbox"
          :checked="prefecture.isChecked"
          @click="
            switchChart(prefecture.id, prefecture.name, prefecture.isChecked)
          "
        />
        {{ prefecture.name }}
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
  },
  methods: {
    async switchChart(id, name, isChecked){
      const path = `/api/v1/population/composition/perYear?cityCode=-&prefCode=${id}`;
      const res = await this.$axios.get(path);
      const prefVal = res.data.result.data[0].data.map(
          val => val.value
        );
      const prefData = {
        id,
        name,
        data: prefVal,
      };
      this.$emit("addPref", prefData);
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