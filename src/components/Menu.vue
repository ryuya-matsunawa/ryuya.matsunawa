<template>
  <div id="drawerSection">
      <span id="drawerButton" class="css-bar"><img src="../assets/back.png"></span>
      <ul id="drawerMenuSection">
          <li id="drawerMenuItem" style="list-style: disc;">
              <a id="drawerMenuItemLink" href="#">・Home</a>
          </li>
          <li id="drawerMenuItem">
              <a id="drawerMenuItemLink" href="#">・About Me</a>
          </li>
          <li id="drawerMenuItem">
              <a id="drawerMenuItemLink" href="#">・Skill Sets</a>
          </li>
          <li id="drawerMenuItem">
              <a id="drawerMenuItemLink" href="#">・Vision</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
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
        text-align: right;
    }

    .css-cancel{
        display: inline-block;
        position: relative;
        margin: 0 20px 0 7px;
        padding: 0;
        width: 4px;
        height: 20px;
        background: #000;
        transform: rotate(45deg);
    }

    .css-cancel:before{
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: -8px;
        width: 20px;
        height: 4px;
        margin-top: -2px;
        background: #000;
    }

    #drawerMenuSection, #drawerMenuItem {
        background-color: #ffffff;
        width: 100%;
        height: 0 auto;
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
    }
}




li {
  display: block;
}
</style>
