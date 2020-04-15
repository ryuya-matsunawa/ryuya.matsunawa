<template>
  <div id="drawerSection">
    <span
      id="drawerButton"
      class="css-bar"
    />
    <ul id="drawerMenuSection">
      <li
        id="drawerMenuItem"
      >
        <a
          id="drawerMenuItemLink"
          href="#app"
          @click="clickSmoothScroll()"
        >Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#aboutSection"
          @click="clickSmoothScroll()"
        >About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#skillSection"
          @click="clickSmoothScroll()"
        >Skill Sets</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#visionSection"
          @click="clickSmoothScroll()"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isActive: true
    }
  },
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        'y'
      );
      this.$emit('sample')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#drawerSection {
  background-color: #f3f3f3;
  width: 100%;

  #drawerButton {
    background-color: #f3f3f3;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
  }

  #drawerMenuSection,
  #drawerMenuItem {
    background-color: #fff;
    width: 100%;
    height: 0 auto;
  }

  #drawerMenuSection {
    margin-top: 60px;
  }

  #drawerMenuItem {
    height: 50px;
    border-bottom: 0.1px solid #707070;
  }

  #drawerMenuItemLink {
    padding: 10px;
    color: #707070;
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-size: 12px;
    font-weight: bold;
    border-bottom: 2px solid #fff;
    text-decoration: none; /* リンクの下線消す */
    display: block; /* リンクの範囲広くするため */
    position: relative; /* 文字を移動できるように */
    top: 10px; /* 上から10px移動する */

    a {
      height: 100%;
    }
  }
}

li {
  display: block;
}
</style>
