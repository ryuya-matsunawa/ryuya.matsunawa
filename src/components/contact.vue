<template>
  <div id="contactSection">
    <div id="contactTitle">
      お問い合わせはこちらから
    </div>
    <div id="contactForm">
      <p>メールアドレス</p>
      <input>
      <p>お問い合わせ内容</p>
      <textarea />
      <input
        class="contact-submit"
        type="submit"
        value="送信"
      >
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#contactSection {
  height: auto;
  width: 75%;
  margin: auto;
  padding: 30px 0;

  #contactTitle {
    border-bottom: 2px solid #dee7ec;
    font-size: 28px;
    padding-bottom: 15px;
    margin-bottom: 50px;
  }

  input,
  textarea {
    width: 400px;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 20px;
    font-size: 18px;
    border: 1px solid #dee7ec;
    outline: none;
  }

  .contact-submit {
    background-color: #dee7ec;
    color: #889eab;
  }
}

</style>
