<template>
  <div id="headerSection">
    <div id="nav-drawer">
      <input
        id="nav-input"
        type="checkbox"
        class="nav-unshown"
      >
      <label
        id="nav-open"
        for="nav-input"
      ><span /></label>
      <label
        id="nav-close"
        class="nav-unshown"
        for="nav-input"
      />
      <div id="nav-content">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue"

export default {
  name: "Header",
  components: {
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#headerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  max-width: 768px;
  position: fixed;
  z-index: 1000;
  top: 0;

  #headerButton {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: auto;
    border-inline: none;
  }

  #nav-drawer {
    position: relative;
  }

  /* チェックボックス等は非表示に */
  .nav-unshown {
    display: none;
  }

  /* アイコンのスペース */
  #nav-open {
    display: inline-block;
    width: 30px;
    height: 22px;
    vertical-align: middle;
  }

  /* ハンバーガーアイコンをCSSだけで表現 */
  #nav-open span,
  #nav-open span::before,
  #nav-open span::after {
    position: absolute;
    height: 3px;/* 線の太さ */
    width: 25px;/* 長さ */
    border-radius: 3px;
    background: #555;
    display: block;
    content: '';
    cursor: pointer;
  }

  #nav-open span::before {
    bottom: -8px;
  }

  #nav-open span::after {
    bottom: -16px;
  }

  /* 閉じる用の薄黒カバー */
  #nav-close {
    display: none;/* はじめは隠しておく */
    position: fixed;
    z-index: 100;
    top: 0;/* 全体に広がるように */
    right: 0;
    width: 100%;
    max-width: 40px;
    height: 40px;
    background-color: #f3f3f3;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  /* 中身 */
  #nav-content {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;/* 最前面に */
    width: 100%;/* 右側に隙間を作る */
    max-width: 768px;/* 最大幅 */
    height: 100%;
    background: #fff;/* 背景色 */
    transition: 0.3s ease-in-out;/* 滑らかに表示 */
    -webkit-transform: translateX(-105%);
    transform: translateX(-105%);/* 左に隠しておく */
  }

  /* チェックが入ったらもろもろ表示 */
  #nav-input:checked ~ #nav-close {
    display: block;/* カバーを表示 */
    opacity: 0.5;
  }

  #nav-input:checked ~ #nav-content {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);/* 中身を表示 */
    box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
  }
}

</style>
