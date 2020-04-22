<template>
  <div>
    <div class="shutter" />
    <div id="app">
      <Header />
      <Main />
      <About />
      <Skill />
      <Vision />
      <contact />
      <!-- <div>{{ test }}</div> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import contact from './components/contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    contact,
    Footer
  },
  // computed:{
  //   test(){
  //       return this.$store.getters.skillName(1)
  //     }
  // },
  mounted () {
    this.$store.dispatch('getSkills');
    // console.log(this.$store.getters.skillName)
  }
}
</script>

<style lang="scss">


.shutter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1e1e1e;
  z-index: 9999;
  -webkit-animation: byeshutter 2.6s forwards;
  animation: byeShutter 2.6s forwards;
}

.shutter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  width: 0;
  height: 1px;
  -webkit-animation: shutteropen 2.6s forwards;
  animation: shutterOpen 2.6s forwards;
}

.content {
  -webkit-animation: contentscale 2.6s forwards;
  animation: contentScale 2.6s forwards;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 1024px;
  box-sizing: border-box;
}

@keyframes byeShutter {
  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}

@keyframes shutterOpen {
  0% {
    width: 0;
    height: 1px;
  }

  50% {
    width: 100%;
    height: 1px;
  }

  90% {
    width: 100%;
    height: 100%;
  }

  100% {
    width: 100%;
    height: 100%;
  }
}

@keyframes contentScale {
  70% {
    -webkit-transform: perspective(800px) scale(0.9) rotateX(15deg);
    transform: perspective(800px) scale(0.9) rotateX(15deg);
  }

  100% {
    -webkit-transform: perspective(800px) scale(1) rotateX(0);
    transform: perspective(800px) scale(1) rotateX(0);
  }
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}

</style>
