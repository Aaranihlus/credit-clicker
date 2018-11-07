<template>
  <div id="app" class="container-fluid">

    <div class="row header">

      <div class="col-2 text-center">
        <h2>Credit Clicker</h2>
      </div>

      <div class="col-8">
        <vue-snotify></vue-snotify>
      </div>

      <div class="col-1 text-center">
        <OptionsMenu></OptionsMenu>
      </div>

      <div class="col-1 text-center">
        <StatsMenu></StatsMenu>
      </div>

    </div>

    <div class="row" style="min-height:94vh;">

      <div class="col-2 p-0 blue-background">
        <Clicker></Clicker>
        <div class="stats-display">
          <Stats></Stats>
          <Reputation></Reputation>
          <Resources></Resources>
        </div>
      </div>

      <div class="main-game col-8" id="game-area">
        <GameArea></GameArea>
      </div>

      <div class="col-2 text-center">
        <Store></Store>
      </div>

    </div>

  </div>
</template>

<script>
import Clicker from './components/Clicker.vue'
import Stats from './components/Stats.vue'
import GameArea from './components/GameArea.vue'
import Reputation from './components/Reputation.vue'
import Store from './components/Store.vue'
import Resources from './components/Resources.vue'
import StatsMenu from './components/StatsMenu.vue'
import OptionsMenu from './components/OptionsMenu.vue'

export default {
  name: 'app',
  components: {
    Clicker,
    Stats,
    GameArea,
    Reputation,
    Store,
    Resources,
    StatsMenu,
    OptionsMenu
  }
}
</script>

<style lang="scss">

$yellow: #ffd60c;

.btn-primary {
  width: 100%;
  background-color: black;
  border-radius: 0;
  border-color: $yellow;
  text-align: center;
}

@font-face {
  font-family: 'StarWars';
  src: url('assets/Starjedi.ttf');
}

h1, h2, h3, h4, h5, h6, p, span, a, html, body, div {
  font-family: 'StarWars';
  color: $yellow;
  line-height: 1.4;
}

span {
  font-size: 10px;
  cursor: pointer;
}

.blue-background {
  background: rgba(63, 137, 255, .3);
}

.stats-display {
  background: rgba(63, 137, 255, .3);
}

.main-game {
  background-image: url('assets/background.jpeg');
  border-left:1px solid $yellow;
  border-right:1px solid $yellow;
}

.show-cursor {
  cursor: pointer;
}

.header {
  min-height:6vh;
  border-bottom:1px solid $yellow;
}

html, body, .row, .container {
  background-color: black;
}

.item-panel {
  border-radius: 10px;
  border:2px solid $yellow;
  margin-top: 1vh;
  min-height: 12vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

.div-faded {
  background: rgba(25, 25, 25, .5);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.div-faded-bottom {
  background: rgba(25, 25, 25, .5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

</style>
