<template>
  <div>
    <!--<div class="shutter" />-->
    <div id="app">
      <Header />
      <Main />
      <div>{{ this.skills }}</div>
      <About />
      <Skill />
      <Vision />
      <contact />
      <div>
        <h1>ユーザ一覧</h1>
        <div
          v-for="skill in users"
          :key="skill.id"
        >
          {{ skill.username }}
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import contact from './components/contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    contact,
    Footer
  },
  data() {
    return {
      skills: []
    }
  },
  computed : {
    users : function(){
      return this.$store.state.users
      }
  },
  mounted () {
    this.getSkills();
    this.$store.dispatch('getUsers');
  },
  methods: {
    getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-portfolio-d9ccd.cloudfunctions.net/skills')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
    },
    increment : function(){
      this.$store.commit('increment')
      }
  }
}
</script>

<style lang="scss">


.shutter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1e1e1e;
  z-index: 9999;
  -webkit-animation: byeshutter 2.6s forwards;
  animation: byeShutter 2.6s forwards;
}

.shutter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  width: 0;
  height: 1px;
  -webkit-animation: shutteropen 2.6s forwards;
  animation: shutterOpen 2.6s forwards;
}

.content {
  -webkit-animation: contentscale 2.6s forwards;
  animation: contentScale 2.6s forwards;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 1024px;
  box-sizing: border-box;
}

@keyframes byeShutter {
  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}

@keyframes shutterOpen {
  0% {
    width: 0;
    height: 1px;
  }

  50% {
    width: 100%;
    height: 1px;
  }

  90% {
    width: 100%;
    height: 100%;
  }

  100% {
    width: 100%;
    height: 100%;
  }
}

@keyframes contentScale {
  70% {
    -webkit-transform: perspective(800px) scale(0.9) rotateX(15deg);
    transform: perspective(800px) scale(0.9) rotateX(15deg);
  }

  100% {
    -webkit-transform: perspective(800px) scale(1) rotateX(0);
    transform: perspective(800px) scale(1) rotateX(0);
  }
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}

</style>
