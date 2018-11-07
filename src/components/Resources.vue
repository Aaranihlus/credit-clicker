<template>
  <div v-show="resourceGeneration.length > 0">
    <h4>Resource Panel</h4>
  </div>
</template>

<script>
export default {

  data () {
    return {
      resourceGeneration: []
    }
  },

  created () {
    Event.$on('BuildingData', (buildingData) => {
      console.log('Resources component recieved building data')
    })
  }

}
</script>

<style scoped lang="scss">
</style>
