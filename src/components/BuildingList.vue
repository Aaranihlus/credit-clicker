<template>
  <div>
    <Building v-for="(building, index) in buildings" v-if="building.unlocked" v-bind:building="building" v-bind:index="index" v-bind:key="building.id"></Building>
  </div>
</template>

<script>
import Building from './Building.vue'

export default {

  components: {
    Building
  },

  data () {
    return {
      buildings: [{
        id: 1,
        name: 'Gx-8 Moisture vaporator',
        image: 'vaporators.jpg',
        description: 'Water Vaporators extract water from the planets atmosphere',
        resources: {
          0: {
            name: 'Water Container',
            time_to_produce: 120
          }
        },
        price: 15,
        unlocked_at: 25,
        unlocked: false,
        owned: 0,
        credits_per_second: 1
      },
      {
        id: 2,
        name: 'Scavenger',
        image: 'scavenger.jpg',
        description: 'Scavengers collect lost and abandoned items and recover parts from wreckages and the remnants of disasters and battles',
        resources: ['Common Metal', 'Rare Metal', 'Ship Components', 'Weapon Parts'],
        price: 300,
        unlocked_at: 500,
        unlocked: false,
        owned: 0,
        credits_per_second: 3
      }]
    }
  },

  created () {
    Event.$on('Update', (totalCredits) => {
      this.buildings.forEach(function (building) {
        if (totalCredits >= building.unlocked_at) {
          building.unlocked = true
        }
      })

      Event.$emit('BuildingData', this.buildings)
    })
  }
}
</script>

<style scoped lang="scss">
</style>
