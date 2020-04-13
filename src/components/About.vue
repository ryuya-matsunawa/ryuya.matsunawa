<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      <p>
        千葉出身の新入社員です。大学、大学院共に数学を学んでいました。学生のうちは、
        プログラミングの勉強をしたり、友達の勧めでライティングゼミにも通っていました。
        AIに興味があり、pythonの勉強をしようと考えています。
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
  padding: 40px 0;
  height: 300px;
  width: 100%;
}

#aboutTitle {
  color: #20879f;
  font-weight: bold;
  font-size: 18pt;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  padding-bottom: 10px;
}

#aboutExplain {
  font-size: 12pt;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  line-height: 1.5;
  word-break: break-all;
  margin: auto;
  width: 75%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
