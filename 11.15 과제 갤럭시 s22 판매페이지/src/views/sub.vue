<template>
    <div :class="$style.index">
        뷰전환용 서브페이지
    </div>
  </template>
  
  <style lang="scss" module>
  .index {
    
  }
  
  </style>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  
  @Component({
    components: {
      // HelloWorld,
    },
  })
  export default class HelloWorld extends Vue {}
  </script>
  