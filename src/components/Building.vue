<template>
  <div class="mx-auto item-panel" v-on:click="BuyBuilding(building)" v-bind:style="{ backgroundImage: 'url(' + building.image + ')' }">

    <div class="div-faded">
      <p>{{ building.name }}</p>
    </div>

    <div class="row div-faded-bottom" style="margin-left: auto; margin-right: auto; margin-top:7vh">
      <div class="col-6">
        <p style="margin-bottom:0;">{{ building.price }} cr</p>
      </div>
      <div class="col-6">
        <p style="margin-bottom:0;">x {{ building.owned }}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  props: ['building'],

  methods: {
    BuyBuilding (building) {
      Event.$emit('BuyBuilding', building)
    }
  }

}
</script>

<style scoped lang="scss">
</style>
