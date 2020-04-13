<template>
  <div id="samplesection">
    Sample
    <div id="test">
      #test
      <div id="inner">
        #inner
      </div>
    </div>
    <div id="target">
      #target
    </div>
    <div
      @click="change"
    >
      a
    </div>
    <div
      class="static"
      :class="{ 'active': isActive}"
    >
      a
    </div>
    <div v-if="isActive">
      BBBBB
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
  isActive: true
    }
  },
  methods: {
    change(){
      this.isActive=!this.isActive
    }
  }
}
</script>

<style scoped>
#samplesection {
  height: 200px;
  background-color: gray;
}

#test:hover {
  background-color: blue;
}

#test:hover + #target {
  background-color: red;
}

#test:hover > #inner {
  display: none;
}

#test:hover > #inner:hover {
  opacity: 0.7;
}

.static {
  color: red;
}

.active {
  font-size: 30px;
}

</style>
