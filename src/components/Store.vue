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
  <BuildingList v-show="activeMenu === 'Building'"></BuildingList>
  <UpgradeList v-show="activeMenu === 'Upgrade'"></UpgradeList>
  <UnitList v-show="activeMenu === 'Unit'"></UnitList>
</div>
</template>

<script>
import BuildingList from './BuildingList.vue'
import UpgradeList from './UpgradeList.vue'
import UnitList from './UnitList.vue'

export default {

  data () {
    return {
      activeMenu: 'Building'
    }
  },

  methods: {
    ChangeMenu (menu) {
      this.activeMenu = menu
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
