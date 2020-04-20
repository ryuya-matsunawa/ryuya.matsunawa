<template>
  <div id="footerSection">
    <a
      href="#app"
      @click="clickSmoothScroll()"
    ><img
      id="footerScroll"
      src="../assets/scroll.png"
    ></a>
    <div id="footerCopyright">
      &copy; Seattleconsulting
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        'y'
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#footerSection {
  background: linear-gradient(180deg, #80e1f7, #06c1e6);
  width: 100%;
  height: 80px;
  text-align: center;

  #footerScroll {
    width: 25px;
    height: 25px;
    border: 1px solid #06c1e6;
    border-radius: 50%;
    top: -10px;
    position: relative;
  }

  #footerCopyright {
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-size: 20px;
    position: relative;
    top: -5px;
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
