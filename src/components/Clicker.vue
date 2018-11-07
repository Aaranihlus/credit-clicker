<template>
  <div>
    <img class="img-fluid mx-auto d-block clicker" :class="{'bounce animated': animated}" @animationend="animated = false" src="credit.png" v-on:click="Click()" style="width:80%;">
  </div>
</template>

<script>
export default {

  data () {
    return {
      animated: false
    }
  },

  methods: {
    Click () {
      this.animated = true
      Event.$emit('Clicked')
    }
  }
}
</script>

<style scoped lang="scss">
  .clicker {
    cursor: pointer;
  }
</style>
