
<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'BackChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
          }
        ]
      },
      options:{
	scale:{
		ticks:{
			beginAtZero:true,
			max:50,
      min:0,
      stepSize: 10
		}
	},
  legend: {
    display:false
  }
}
    }
  },
  mounted () {
    this.getChartName()
    this.renderChart(this.data, this.options)
  },
  methods:{
    getChartName(){
      const names = this.$store.getters.skillName(1)
      this.data.labels = names
      const scores = this.$store.getters.skillScore(1)
      this.data.datasets[0].data = scores
      const color = this.$store.getters.skillColor(1)
      this.data.datasets[0].backgroundColor = color
      const border = this.$store.getters.skillColor(1)
      this.data.datasets[0].borderColor = border
    }
  }
}
</script>
