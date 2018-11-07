<template>
  <div>
    <h2 class="show-cursor" v-on:click="OpenStatsMenu()">Stats</h2>

     <div v-if="statsMenuOpen" class="modal" style="display: block;">
      <div class="modal-dialog" role="document" style="border:1px solid yellow; border-radius: 7px; margin-top:10vh">
        <div class="modal-content">
          <div class="modal-header" style="background-color:black;">
            <h4 class="modal-title">Stats</h4>
          </div>

          <div class="modal-body text-left" style="background-color:black;">
            <p>Credits Per Click: {{ PlayerStats.cpc }}</p>
            <p>Credits Per Second: {{ PlayerStats.cps }}</p>
            <p>Time Played: {{ PlayerStats.time_played }}</p>
            <p>Current Credits: {{ PlayerStats.current_credits }}</p>
            <p>Total Credits Earned: {{ PlayerStats.total_credits }}</p>
          </div>

          <div class="modal-footer p-2" style="background-color:black;">
            <button type="button" class="btn btn-primary" v-on:click="CloseStatsMenu()"> Close </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      statsMenuOpen: false,
      PlayerStats: []
    }
  },

  methods: {
    OpenStatsMenu () {
      Event.$emit('StatsMenuOpen')

      if (this.statsMenuOpen === false) {
        this.statsMenuOpen = true
      } else {
        this.statsMenuOpen = false
      }
    },

    CloseStatsMenu () {
      this.statsMenuOpen = false
    }
  },

  created () {
    Event.$on('OptionsMenuOpen', () => {
      this.statsMenuOpen = false
    })

    Event.$on('PlayerStats', (Stats) => {
      this.PlayerStats = Stats
    })
  }
}
</script>

<style scoped lang="scss">
</style>
