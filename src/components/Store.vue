<template>
<div>
  <div class="row">

    <div class="col-4 p-0">
      <button class="btn btn-primary" v-on:click="ChangeMenu('Building')">Build</button>
    </div>

    <div class="col-4 p-0">
      <button class="btn btn-primary" v-on:click="ChangeMenu('Upgrade')">upgrade</button>
    </div>

    <div class="col-4 p-0">
      <button class="btn btn-primary" v-on:click="ChangeMenu('Unit')">hire</button>
    </div>

  </div>
  <BuildingList v-show="buildingMenuActive"></BuildingList>
  <UpgradeList v-show="upgradeMenuActive"></UpgradeList>
  <UnitList v-show="unitMenuActive"></UnitList>
</div>
</template>

<script>
import BuildingList from './BuildingList.vue'
import UpgradeList from './UpgradeList.vue'
import UnitList from './UnitList.vue'

export default {

  data () {
    return {
      buildingMenuActive: true,
      upgradeMenuActive: false,
      unitMenuActive: false
    }
  },

  methods: {
    ChangeMenu (menu) {
      if (menu === 'Building') {
        this.buildingMenuActive = true
        this.upgradeMenuActive = false
        this.unitMenuActive = false
      }

      if (menu === 'Upgrade') {
        this.upgradeMenuActive = true
        this.buildingMenuActive = false
        this.unitMenuActive = false
      }

      if (menu === 'Unit') {
        this.unitMenuActive = true
        this.upgradeMenuActive = false
        this.buildingMenuActive = false
      }
    }
  },

  components: {
    BuildingList,
    UpgradeList,
    UnitList
  }
}
</script>

<style lang="scss">
</style>
