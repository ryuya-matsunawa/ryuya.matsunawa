<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillExplain">
      <p>
        スキルをまとめました。フロントエンドのスキルはポートフォリオ実装でかなり力がつきました。
        特に、Vue.jsは内定者課題で使おうとしていて、理解できなかったものでしたが、
        今回の実装である程度理解できました。バックエンドに関してはまだまだ経験不足で
        今後学ぶものとしてリストアップしています。AIに興味があるので、特にPythonの知識を深めていきたいです。<br>
        下のグラフの評価基準として、Front-endはポートフォリオ実装でどれだけ使えたか(1~5段階)、
        Back-endは今までどれだけ使ったことがあるか(1~5段階)、DevOpsはBack-endと同じですが、
        ほとんど差がないので(1~3段階)とさせていただきます。
      </p>
    </div>
    <label id="gitHubLabel">
      Github:
      <a
        id="gitHubLink"
        href="https://github.com/ryuya-matsunawa"
      > https://github.com/ryuya-matsunawa</a>
    </label>
    <div
      id="skillCategories"
    >
      <ul>
        <li>
          <span
            id="front"
            :class="{'front-change': isFrontActive}"
            @click="setChartCategory('front-end')"
          >
            Front-end
          </span>
          <span
            id="back"
            :class="{'back-change': isBackActive}"
            @click="setChartCategory('back-end')"
          >
            Back-end
          </span>
          <span
            id="DevOps"
            :class="{'dev-change': isDevOpsActive}"
            @click="setChartCategory('devops')"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
        <li>Python</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
        <li>AWS</li>
      </ul>
    </div>
    <div
      v-if="loaded"
      id="skillGraph"
    >
      <Chart :category="chartCategory" />
    </div>
  </div>
</template>

<script>

import Chart from '../components/Chart.vue';
import {mapState} from 'vuex';

export default {
  components: {
    Chart
  },
  data: function() {
    return {
      chartCategory: 'front-end'
    }
  },
  computed: {
    isFrontActive() {
      return this.chartCategory=='front-end';
    },
    isBackActive() {
      return this.chartCategory=='back-end';
    },
    isDevOpsActive() {
      return this.chartCategory=='devops';
    },
    ...mapState(['loaded'])
  },
  methods: {
    setChartCategory(category) {
      this.chartCategory = category;
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
  padding: 60px 0 80px 0;
  margin-top: -80px;

  #skillTitle {
    color: #20879f;
    font-weight: bold;
    font-size: 23pt;
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    padding-bottom: 40px;
    text-shadow: 0 0 6px gray;
  }

  #skillExplain {
    font-size: 12pt;
    color: #707070;
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    line-height: 1.5;
    word-break: break-all;
    margin: auto;
    text-align: left;
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
    padding: 40px 0 20px 0;

    li {
      display: inline-block;

      span {
        outline: none;
        padding: 10px;
        box-shadow: 2px 2px  rgba($color:gray, $alpha: 1);
        transition: all 0.2s;
        border: 1px solid gray;
        margin: 0 10px;
      }

      :first-child:hover {
        background-color: rgba(181, 26, 26, 0.25);
      }

      :nth-of-type(2):hover {
        background-color: rgba(15, 136, 57, 0.25);
      }

      :last-child:hover {
        background-color: rgba(87, 16, 131, 0.25);
      }
    }

    #front,
    #back,
    #DevOps {
      font-size: 18px;
      cursor: pointer;
    }

    #front {
      color: #b51a1a;
    }

    #back {
      color: #0f8839;
    }

    #DevOps {
      color: #571083;
    }

    .front-change {
      background-color: rgba(181, 26, 26, 0.25);
      box-shadow: none;
      cursor: default !important;
    }

    .back-change {
      background-color: rgba(15, 136, 57, 0.25);
      box-shadow: none;
      cursor: default !important;
    }

    .dev-change {
      background-color: rgba(87, 16, 131, 0.25);
      box-shadow: none;
      cursor: default !important;
    }
  }

  #skillList {
    font-size: 18px;
    width: auto;

    li {
      display: inline-block;
      margin: 10px 10px;
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

  #skillGraph {
    margin: 20px auto;
    padding: 0 50px;
  }
}

@media (max-width: 2560px) {
  #skillExplain {
    width: 60%;
  }
}

@media (max-width: 1000px) {
  #skillExplain {
    width: 75%;
  }
}

@media (max-width: 2560px) {
  #skillGraph {
    width: 41%;
    height: 40%;
  }
}

@media (max-width: 750px) {
  #skillGraph {
    width: 60%;
    height: 60%;
  }
}
</style>
