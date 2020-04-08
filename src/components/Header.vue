<template>
  <div id="headerSection">
    <button @click="toggle" class="btn"><img id="headerButton" src="../assets/button.png"></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">
          <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
import Menu from "../components/Menu.vue"
 
export default {
  name: "Header",
  components: {
    Drawer,
    Menu
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
"~bootstrap/scss/buttons";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headerSection {
    background-color: #F3F3F3;
    width: 100%;
    height: auto;
    display: block;
}

#headerButton {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: auto;
  border-inline: none;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
