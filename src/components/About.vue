<template>
  <div>
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
          基本的にはインドアです。漫画とかドラマ、アニメ見てます。
          マイブームはカタンっていうボードゲームです。
          飲みとかテニスとか遊びに誘われたらいつでも行きたいです！<br>
          <br>
          かなり口下手です。頭の中で色々考えてしまって整理するのに
          時間かかってしまうのが今後の課題です。
          自分が経験したことない話を聞くのがとても好きなので、
          ぜひ色々な人とお話したいです。上手く喋れるように頑張ります！
          以上です、よろしくお願いします！
          <br>
          <br>
          内定者サイトで紹介していただきました！作ってくださった方々ありがとうございます！
        </p>
        <a
          id="profileLink"
          href="https://www.seattleconsulting.co.jp/team20/person/person23.html"
        >https://www.seattleconsulting.co.jp/team20/person/person23.html</a>
      </div>
    </div>
    <div>
      <!--ここはvalueをv-bindでcomputedのmessageと繋いでる-->
      <!--つまり、入力フォームの初期値にstoreのmessageを使っている-->
      <!--storeのメッセージを表示してるのはApp.vueの方なので注意-->
      <input
        type="text"
        :value="message"
        @input="doUpdate"
      >
    </div>
  </div>
</template>

<script>
export default {
  name:'EditForm',
  computed:{
    message(){
      return this.$store.getters.message
    }
  },
  methods:{
    doUpdate(event){
      //ディスパッチでstoreのアクションを呼んでいる
      //event.targetは押された要素を指すのでここではinputタグを指してる
      //そのvalueなので、event.target.valueは入力された文字
      //つまり、入力された文字を引数として渡してstoreのdoUpdateアクションを呼んでる
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
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
  font-size: 23pt;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  padding-bottom: 40px;
  text-shadow: 0 0 4px gray;
}

#aboutExplain {
  font-size: 12pt;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  line-height: 1.5;
  word-break: break-all;
  margin: auto;
  text-align: left;

  #profileLink {
    color: #20879f;
    font-weight: bold;
  }
}

a {
  position: relative;
}

@media (max-width: 2560px) {
  #aboutExplain {
    width: 60%;
  }
}

@media (max-width: 1000px) {
  #aboutExplain {
    width: 75%;
  }
}
</style>
