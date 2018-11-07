<template>
  <div>
    <Upgrade v-for="(upgrade, index) in upgrades"
    v-if="upgrade.unlocked"
    v-bind:upgrade="upgrade"
    v-bind:index="index"
    v-bind:key="upgrade.id">
  </Upgrade>
</div>
</template>

<script>
import Upgrade from './Upgrade.vue'

export default {

  components: {
    Upgrade
  },

  data () {
    return {
      upgrades: [{
        id: 1,
        name: 'EC-17 hold-out blaster',
        upgrade_for: "Click",
        price: 300,
        unlocked_at: 500,
        unlocked: false,
        owned: false,
        description: 'You gain twice as many credits from clicking',
        image: 'Scout_Pistol_DICE.png'
      },
      {
        id: 2,
        name: 'Improved Water Pump Units',
        upgrade_for: 1,
        price: 120,
        unlocked_at: 800,
        unlocked: false,
        owned: false,
        description: 'Your Vaporators bring in twice as many credits per second',
        image: 'Scout_Pistol_DICE.png'
      },
      {
        id: 3,
        name: 'Improved Condensor Systems',
        upgrade_for: 1,
        price: 1600,
        unlocked_at: 1800,
        unlocked: false,
        owned: false,
        description: 'Your Vaporators bring in twice as many credits per second',
        image: 'Scout_Pistol_DICE.png'
      }]
    }
  },

  created () {
    Event.$on('Update', (totalCredits) => {
      this.upgrades.forEach(function (upgrade) {
        if (totalCredits >= upgrade.unlocked_at) {
          upgrade.unlocked = true
        }
      })

      Event.$emit('UpgradeData', this.upgrades)
    })
  }

}
</script>

<style scoped lang="scss">
</style>
