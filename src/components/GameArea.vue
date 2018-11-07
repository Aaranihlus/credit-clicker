<template>
  <div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      events: [{
        id: 1,
        name: 'Cargo Drop',
        effect: 'Random amount of credits'
      },
      {
        id: 2,
        name: 'System Overclock',
        effect: 'Doubles Credits per second'
      }]

    }
  },

  computed: {
    gameAreaDimensions: function () {
      return document.querySelector('#game-area').getBoundingClientRect()
    }
  },

  created () {
    // Every minute, send a random event
    this.randomEvent = setInterval(() => {
      let eventID = Math.floor(Math.random() * 2) + 1
      Event.$emit('RandomEvent', eventID)
    }, 5000)

    Event.$on('RandomEvent', (eventID) => {
      if (eventID === 1) {
        console.log('Cargo Drop!')
      }
      if (eventID === 2) {
        console.log('System Overclock!')
      }
    })
  }
}
</script>

<style scoped lang="scss">
</style>
