<template>
  <div id="mainSection">
    <div id="userName">
        R.Matsunawa
    </div>
    <div id="companyName">
        Seattleconsulting
    </div>
    <img id="profilePicture" src="../assets/sample.png">
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#mainSection {
    background: linear-gradient(180deg, #80E1F7, #06C1E6);
    padding-bottom: 30px;
    text-align: center;

    #userName, #companyName {
        color: #FFFFFF;
        font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        font-weight: bold;
        font-size: 18pt;
        text-shadow: 0px 0.5px 2px black;
        padding: 20px 0;
        }

    #userName {
        border-bottom: 1px solid#FFFFFF;
        }

    #profilePicture {
        border-radius: 50%;
        width: 64px;
        height: 64px;
        }
}

</style>
