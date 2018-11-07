<template>
  <div class="mx-auto item-panel" v-on:click="BuyUpgrade(upgrade)" v-bind:style="{ backgroundImage: 'url(' + upgrade.image + ')' }">

    <div class="div-faded">
      <p>{{ upgrade.name }}</p>
    </div>

    <div class="row div-faded-bottom" style="margin-left: auto; margin-right: auto; margin-top:7vh">
      <div class="col-12">
        <p style="margin-bottom:0;">{{ upgrade.price }} cr</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  props: ['upgrade'],

  methods: {
    BuyUpgrade (upgrade) {
      Event.$emit('BuyUpgrade', upgrade)
    }
  }

}
</script>

<style scoped lang="scss">
</style>
