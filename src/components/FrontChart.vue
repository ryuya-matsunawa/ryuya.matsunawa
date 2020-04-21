
<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'FrontChart',
  extends: Radar,
  props:{
    data: {type:Object, default:null}
  },
  data () {
    return {
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
  /*computed:{
    skills : function(){
      return this.$store.state.skills
      }
  },*/
  /**/
  mounted () {
    console.log('ggggg')
    this.renderChart(this.data, this.options)
  },
  /*methods:{

  }*/
}
</script>
