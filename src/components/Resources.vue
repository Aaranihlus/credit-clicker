<template>
  <div class="text-center" v-show="resourceGeneration.length > 0">
    <h4>Resources</h4>
    <ul>
      <li v-for="resource in resourceGeneration">{{ resource.name }} (time: {{ resource.time_to_produce }})</li>
    </ul>
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
    Event.$on('BuildingSuccess', (buildingData) => {
      Object.keys(buildingData.resources).forEach(key => {
        if (!(key in this.resourceGeneration)) {
          this.resourceGeneration.push(buildingData.resources[key])
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
</style>
