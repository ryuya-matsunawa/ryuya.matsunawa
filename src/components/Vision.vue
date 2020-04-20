<template>
  <div id="visionSection">
    <div id="visionTitle">
      Vision
    </div>
    <div id="visionExplain">
      <p>
        AIエンジニアになることを目標としています。
        まずは、開発の色々な工程を経験して、オールラウンドに対応できる力をつけたいです。
        広く浅くスキルを身に付けたら、そこから主にバックエンドの知識を深めていくつもりです。
        また、今回のポートフォリオ実装でデザインの興味が沸いているので、
        自分のやりたいことを増やしつつも何を一番とするのか、優先順位を明確にして勉強していきます。
      </p>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#visionSection {
  background-color: #f5f5f5;
  text-align: center;
  padding: 60px 0 60px 0;
  height: auto;
  margin-top: -60px;
  width: 100%;
}

#visionTitle {
  color: #20879f;
  font-weight: bold;
  font-size: 23pt;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  padding-bottom: 40px;
  text-shadow: 0 0 6px gray;
}

#visionExplain {
  font-size: 12pt;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  line-height: 1.5;
  word-break: break-all;
  margin: auto;
  text-align: left;
}

@media (max-width: 2560px) {
  #visionExplain {
    width: 60%;
  }
}

@media (max-width: 1000px) {
  #visionExplain {
    width: 75%;
  }
}
</style>
