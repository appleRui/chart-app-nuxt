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
          class="refecture__checkbox"
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
      switchChart(id, name, isChecked){
        if(isChecked){
          this.deletePref(id);
          }else{
            this.feachPref(id, name, isChecked);
        }
      },
    async feachPref(id, name, isChecked){
      const path = `/api/v1/population/composition/perYear?cityCode=-&prefCode=${id}`;
      await this.$axios.get(path).then((res)=>{
        const data = res.data.result.data[0].data.map(
            val => val.value
          );
        const prefData = {
          id, // Number
          name, // String
          data, // Array
        };
        this.$emit("addPref", prefData);
      })
      .catch((e) => {
        alert(e.code + ":" + e.message);
      });
    },
    deletePref(id){
      this.$emit("removePref", id);
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
.prefecture__label {
  cursor: pointer;
}
</style>