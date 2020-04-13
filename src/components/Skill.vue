<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Sets
    </div>
    <div id="skillExplain">
      <p>
        説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
      </p>
    </div>
    <label id="gitHubLabel">
      Github:
      <a
        id="gitHubLink"
        href="https://github.com/ryuya-matsunawa"
      > https://github.com/ryuya-matsunawa</a>
    </label>
    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="front"
            @click="F_change"
          >
            Front-end
          </span>
        </li>
        <li>
          <span
            id="back"
            @click="B_change"
          >
            Back-end
          </span>
        </li>
        <li>
          <span
            id="DevOps"
            @click="D_change"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': frontChange}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': backChange}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': devChange}"
      >
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div
      v-if="frontChange"
    >
      <FrontChart />
    </div>
    <div
      v-if="backChange"
    >
      <BackChart />
    </div>
    <div
      v-if="devChange"
    >
      <DevChart />
    </div>
  </div>
</template>

<script>

import FrontChart from '../components/FrontChart.vue';
import BackChart from '../components/BackChart.vue';
import DevChart from '../components/DevChart.vue';

export default {
  components: {
    FrontChart,
    BackChart,
    DevChart
  },
  data(){
    return {
      frontChange: true,
      backChange: false,
      devChange: false
    }
  },
  methods: {
    F_change(){
      this.frontChange=!this.frontChange
    },
    B_change(){
      this.backChange=!this.backChange
    },
    D_change(){
      this.devChange=!this.devChange
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#skillSection {
  height: auto;
  background-color: #fff;
  text-align: center;
  padding: 20px 0;

  #skillTitle {
    color: #20879f;
    font-weight: bold;
    font-size: 18pt;
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    padding-bottom: 10px;
  }

  #skillExplain {
    font-size: 12pt;
    color: #707070;
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    line-height: 1.5;
    word-break: break-all;
    margin: auto;
    width: 75%;
    padding-bottom: 10px;
  }

  #gitHubLabel,
  #gitHubLink {
    font-size: 12pt;
    color: #20879f;
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-weight: bold;
  }

  #skillCategories {
    padding: 20px 0;

    #front {
      color: #b51a1a;
      font-size: 18px;
      cursor: pointer;
    }

    #back {
      color: #0f8839;
      font-size: 18px;
      cursor: pointer;
    }

    #DevOps {
      color: #571083;
      font-size: 18px;
      cursor: pointer;
    }
  }

  #skillList {
    font-size: 18px;
    width: auto;

    li {
      display: inline-block;
    }

    .front-change li {
      background-color: rgba(181, 26, 26, 0.25);
    }

    .back-change li {
      background-color: rgba(15, 136, 57, 0.25);
    }

    .dev-change li {
      background-color: rgba(87, 16, 131, 0.25);
    }

    #front-end li {
      color: rgba(181, 26, 26, 0.75);
      height: 30px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
    }

    #back-end li {
      color: rgba(15, 136, 57, 0.75);
      height: 30px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
    }

    #devops li {
      color: rgba(87, 16, 131, 0.75);
      height: 30px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
    }
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
