<template>
  <div>
    <h2 class="show-cursor" v-on:click="OpenOptionsMenu()">options</h2>

     <div v-if="optionsMenuOpen" class="modal" style="display: block">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">options</h4>
          </div>

          <div class="modal-body">
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="CloseOptionsMenu()"> Close </button>
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
      optionsMenuOpen: false
    }
  },

  methods: {
    OpenOptionsMenu () {
      Event.$emit('OptionsMenuOpen')
      if (this.optionsMenuOpen === false) {
        this.optionsMenuOpen = true
      } else {
        this.optionsMenuOpen = false
      }
    },

    CloseOptionsMenu () {
      this.optionsMenuOpen = false
    }
  },

  created () {
    Event.$on('StatsMenuOpen', () => {
      this.optionsMenuOpen = false
    })
  }
}
</script>

<style scoped lang="scss">
</style>
