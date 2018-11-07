<template>
  <div class="text-center">
    <h4>{{ player.current_credits }} Credits</h4>
    <p v-show="player.cps > 0">Per Second: {{ player.cps }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      new_cps: 0,
      player: {
        cps: 0,
        cpc: 1,
        current_credits: 0,
        total_credits: 0,
        time_played: 0,
        earned_since_last_tax: 0
      }
    }
  },

  methods: {
    /*formatSecondsPlayed (seconds) {
      this.player.time_played = moment.duration(seconds, 'seconds').format('hh:mm:ss')
    }*/
  },

  created () {
    // Every second send an update event, with the players current total credits
    this.UpdateLoop = setInterval(() => {
      Event.$emit('Update', this.player.total_credits)
      this.player.time_played += 1
      //this.formatSecondsPlayed(this.player.time_played)
    }, 1000)

    Event.$on('StatsMenuOpen', () => {
      Event.$emit('PlayerStats', this.player)
    })

    // If we recieve a building data event, iterate over the array and calculate the new cps from buildings
    Event.$on('BuildingData', (buildings) => {
      let newCPS = 0
      buildings.forEach(function (building) {
        newCPS += (building.credits_per_second * building.owned)
      })
      Event.$emit('UpdateCPS', newCPS)
    })

    // If we recieve an update cps event, set the players cps to the new value and add this to the total and current credit counts
    Event.$on('UpdateCPS', (newCPS) => {
      this.player.cps = newCPS
      this.player.current_credits += newCPS
      this.player.total_credits += newCPS
      this.player.earned_since_last_tax += newCPS
    })

    // When the player clicks the credit icon, add the current cpc to current and total credits
    Event.$on('Clicked', () => {
      this.player.current_credits += this.player.cpc
      this.player.total_credits += this.player.cpc
      this.player.earned_since_last_tax += this.player.cpc
    })

    Event.$on('ImperialTax', () => {
      let taxableAmount = Math.round(this.player.earned_since_last_tax / 100 * 20)
      this.player.current_credits -= taxableAmount
      this.player.earned_since_last_tax = 0

      if (taxableAmount > 0) {
        this.$snotify.info('You have paid ' + taxableAmount + ' credits to the imperials as Tax.', 'Tax')
      } else {
        this.$snotify.info('You have earned no credits since last being taxed.', 'Tax')
      }
    })

    // When the player tries to buy a building, check if they can afford it and update
    Event.$on('BuyBuilding', (building) => {
      if (this.player.current_credits >= building.price) {
        building.owned += 1
        this.player.current_credits -= building.price
        building.price = Math.round(building.price * 1.1)
        Event.$emit('Update')
      } else {
        this.$snotify.info('Not enough credits')
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .stats-display {
    background: rgba(63, 137, 255, .3);
    width:100%;
    //border: 1px solid blue;
  }
</style>
