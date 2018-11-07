<template>
<div class="text-center">
  <h4 style="cursor: pointer" v-on:click="toggleFactionInfo()">{{ factions[currentFactionID].name }}</h4>
  <div class="container-fluid" v-show="expandedFactionInfo">
    <ul>
      <li v-for="effect in factions[currentFactionID].effects" style="text-align:left;">{{ effect }}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      currentFactionID: 1,
      expandedFactionInfo: false,

      factions: {
        1: {
          name: 'Neutral',
          image: '',
          description: '',
          effects: ['You do not belong to any faction', 'The imperials are imposing a tax on you', 'You will be taxed for 20 percent of your income every 4 minutes']
        },
        2: {
          name: 'Rebel Alliance',
          image: '',
          description: '',
          effects: ['']
        },
        3: {
          name: 'Galactic Empire',
          image: '',
          description: '',
          effects: ['']
        },
        4: {
          name: 'Underworld',
          image: '',
          description: '',
          effects: ['']
        }
      }

    }
  },

  methods: {
    toggleFactionInfo () {
      this.expandedFactionInfo = !this.expandedFactionInfo
    }
  },

  created () {
    // Every 5 seconds get tax
    this.taxLoop = setInterval(() => {
      if (this.currentFactionID === 1) {
        Event.$emit('ImperialTax')
      }
      if (this.player_faction === 'Rebel Alliance') {
        Event.$emit('ImperialAttack')
        this.$snotify.warning('The Imperials are launching an attack on you.', 'Attack')
      }
      if (this.player_faction === 'Galactic Empire') {
        Event.$emit('RebelAttack')
        this.$snotify.warning('The Rebels are launching an attack on you.', 'Attack')
      }
      if (this.player_faction === 'Underworld') {
        Event.$emit('UnderworldEvent')
        console.log('RandomUnderworldEvent')
      }
    }, 120000)
  }
}
</script>

<style scoped lang="scss">
.stats-display {
    background: rgba(63, 137, 255, .3);
    width: 100%;
    //border: 1px solid blue;
}
</style>
