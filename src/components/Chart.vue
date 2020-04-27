<script>
import {Radar} from 'vue-chartjs';
import {mapGetters} from 'vuex';


export default {
  name: 'Chart',
  extends: Radar,
  props: {
    category: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1,
          },
        },
        legend: {
          display: false,
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      getCategoryInfo: 'getSkills',
    }),
  },
  watch: {
    category() {
      this.rendarSkillChart();
    },
  },
  mounted() {
    this.rendarSkillChart();
  },
  methods: {
    rendarSkillChart() {
      this.setChartInfo();
      this.renderChart(this.data, this.options);
    },
    setChartInfo() {
      const chartInfo = this.getCategoryInfo(this.category);
      // labels
      this.data.labels = chartInfo.skills.map((skill) => skill.name);
      // datasets[0].data
      this.data.datasets[0].data = chartInfo.skills.map((skill) => skill.score);
      // color
      this.data.datasets[0].backgroundColor = chartInfo.color;
      this.data.datasets[0].borderColor = chartInfo.borderColor;
    },
    getChartInfo() {
      this.getCategoryInfo(this.category);
    },
  },
};
</script>
