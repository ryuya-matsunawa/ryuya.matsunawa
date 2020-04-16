<template>
  <div id="contactSection">
    <div id="contactTitle">
      お問い合わせはこちらから
    </div>
    <div id="contactForm">
      <p>メールアドレス</p>
      <input v-model="inputMail">
      <p>お問い合わせ内容</p>
      <textarea v-model="inputText" />
      <button
        :disabled="inputCheck"
        :class="{'change': colorChange}"
        class="contact-submit"
        @click="resetMail"
      >
        送信
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      inputMail: '',
      inputText: ''
    }
  },
  computed:{
    inputCheck(){
      if(this.inputMail!='' && this.inputText!=''){
        return false
      }else{
        return true
      }
    },
    colorChange(){
      if(this.inputMail!='' && this.inputText!=''){
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    resetMail(){
      this.inputMail=''
      this.inputText=''
    }
  }
}
</script>

<style lang="scss" scoped>
#contactSection {
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0;
  text-align: center;

  #contactTitle {
    border-bottom: 2px solid #dee7ec;
    font-size: 18px;
    padding-bottom: 15px;
    margin: 0 auto 50px auto;
  }

  #contactForm {
    margin: auto;
  }

  input,
  textarea {
    width: 50%;
    margin: 20px auto 20px auto;
    padding: 20px;
    font-size: 18px;
    border: 1px solid #dee7ec;
    outline: none;
  }

  .contact-submit {
    background-color: #dee7ec;
    color: #889eab;
    width: 50%;
    margin: 20px auto 20px auto;
    padding: 20px;
    font-size: 18px;
    border: 1px solid #dee7ec;
    outline: none;
  }

  .change {
    background-color: rgba(83, 191, 73, 0.5);
    color: white;
    transition: all 0.5s;
  }

  .change:hover {
    background-color: rgba(83, 191, 73, 1);
    cursor: pointer;
  }
}

@media (max-width: 2560px) {
  #contactTitle,
  #contactForm {
    width: 60%;
  }
}

@media (max-width: 1000px) {
  #contactTitle,
  #contactForm {
    width: 75%;
  }
}

</style>
