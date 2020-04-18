<template>
  <div
    id="headerSection"
    :class="{ 'change': scrollY > 60 }"
  >
    <button
      type="button"
      class="btn_menu"
      :class="{'active': isActive}"
      @click="menu"
    >
      <span class="bar bar1" />
      <span class="bar bar2" />
      <span class="bar bar3" />
    </button>
    <nav
      :class="{'open':isActive}"
    >
      <Menu @sample="menuClose" />
    </nav>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue"

export default {
  name: "Header",
  components: {
    Menu
  },
  data(){
    return {
      isActive: false,
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    menu(){
      this.isActive=!this.isActive
    },
    menuClose(){
      this.isActive=false
    },
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#headerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  top: 0;
  transition: all 1s;

  nav {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform: translate(-100%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
  }

  nav.open {
    transform: translateX(0);
    position: fixed;
    z-index: 10;
  }

  /* ボタンタグ設定 */
  button {
    display: block;
    background: none;
    border: none;
    padding: 0;
    width: 30px;
    color: #333;
    cursor: pointer;
    text-align: left;
    outline: none;
  }

  /* ハンバーガーボタン3本線 */
  button span.bar {
    display: block;
    height: 2px;
    background-color: #333;
    margin: 10px 0;
    transition: all 0.2s;
    transform-origin: 0 0;
  }

  /* メニューアクティブ時 */
  button.active {
    width: 50px;
  }

  button.active span.bar {
    width: 48px;
  }

  button.active .bar1 {
    transform: rotate(42deg);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1001;
  }

  button.active .bar2 {
    opacity: 0;
  }

  button.active .bar3 {
    transform: rotate(-42deg);
    position: fixed;
    right: 0;
    z-index: 1001;
  }
}

.change {
  opacity: 0.8;
}

</style>
