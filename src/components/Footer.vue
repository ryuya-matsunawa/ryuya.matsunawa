<template>
  <div id="footerSection">
    <a href="#app" @click="clickSmoothScroll()"><img src="../assets/scroll.png" id="footerScroll"></a>
    <div id="footerCopyright">
        &copy; Seattleconsulting
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },

  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#hoge'),
        400,
        null,
        null,
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
    background: linear-gradient(180deg, #80E1F7, #06C1E6);
    width: 100%;
    height: 50px;
    text-align: center;

    #footerScroll{
        width: 25px;
        height: 25px;
        border: 1px solid #06C1E6;
        border-radius: 50%;
        top: -10px;
        position: relative;
    }

    #footerCopyright {
        font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        font-size: 12px;
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
