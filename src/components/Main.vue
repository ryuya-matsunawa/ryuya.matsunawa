<template>
  <div id="mainSection">
    <div id="userName">
      R.Matsunawa
    </div>
    <hr
      width="20%"
      align="center"
      size="1"
      color="#f3f3f3"
    >
    <div id="companyName">
      Seattleconsulting
    </div>
    <img
      id="profilePicture"
      src="../assets/profile.png"
    >
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#mainSection {
  background: linear-gradient(180deg, #80e1f7, #06c1e6);
  padding: 120px 0;
  text-align: center;
  margin: -40px 0;
  height: auto;

  #userName,
  #companyName {
    color: #fff;
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: 0 0 6px gray;
    padding: 20px 0;
  }

  #profilePicture {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

  hr {
    display: inline-block;
  }
}

</style>
