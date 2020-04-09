<template>
  
  <div>
    <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
    <transition name="fade">
      <a href="#" v-scroll-to="'#top'" class="scroll-top" v-show="isShow">
        <i class="fa fa-angle-up fa-lg scroll-top__ico"></i>
      </a>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
import Vue from "vue";
import VueScrollTo from "vue-scrollto";


Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease"
});

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  data() {
    return {
      scrollY: 0
    };
  },
  mounted() {
    // スクロールを取得
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", () => {
      this.onScroll();
    });
  },
  computed: {
    isShow() {
      return this.scrollY > 200 ? true : false;
    }
  },
  methods: {
    // スクロール値の取得
    onScroll() {
      this.scrollY = window.pageYOffset;
    }
  }
};
</script>

<style lang="scss">
.scroll-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background-color: #000;
  padding: 10px 16px;
  border-radius: 32px;
  &__ico {
    font-weight: bold;
    font-size: 20px;
    color: #fff;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 768px;
  max-height:1024px;
}


</style>
