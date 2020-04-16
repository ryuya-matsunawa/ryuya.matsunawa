<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      <p>
        松縄竜弥です！りゅうやって呼んでください！
        生まれも育ちも千葉県の流山市です。
        中学からずっとテニスを続けているのでシアトルでも部活動に入りたいです！(ラケットはYONEX一筋です！)<br>
        趣味はテニス、ボードゲーム、筋トレ、漫画(ジャンプ系、スポーツ系、名探偵コナンetc.....)
        あとは自分でゲームを作ってみたいのでunityを勉強中です！
        今回のポートフォリオ作成で内定者課題の追加課題ができそうなので挑戦中です！
        <br>
        <br>
        基本的に寝るのは早いです。なんもない日は23時には寝ちゃいます。
        朝はだいたい7時には勝手に起きるので、最近はアラームほとんど使ってません！
        スマホいつでも近くにあるのでレスポンスは早いです！<br>
        <br>
        基本的にはインドアです。漫画とかドラマ、アニメ見てます。
        マイブームはカタンっていうボードゲームです。
        飲みとかテニスとか遊びに誘われたらいつでも行きたいです！<br>
        <br>
        かなり口下手です。頭の中で色々考えてしまって整理するのに
        時間かかってしまうのが今後の課題です。
        自分が経験したことない話を聞くのがとても好きなので、
        ぜひ色々な人とお話したいです。上手く喋れるように頑張ります！
        以上です、よろしくお願いします！
      </p>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#aboutSection {
  background-color: #f5f5f5;
  text-align: center;
  height: auto;
  width: 100%;
  padding: 60px 0 120px 0;
  margin: -60px 0;
}

#aboutTitle {
  color: #20879f;
  font-weight: bold;
  font-size: 18pt;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  padding-bottom: 10px;
  text-shadow: 0 0 2px gray;
}

#aboutExplain {
  font-size: 12pt;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  line-height: 1.5;
  word-break: break-all;
  margin: auto;
  text-align: left;
}

@media (max-width: 2560px) {
  #aboutExplain {
    width: 60%;
  }
}

@media (max-width: 1024px) {
  #aboutExplain {
    width: 75%;
  }
}
</style>
