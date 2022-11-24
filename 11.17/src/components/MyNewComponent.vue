<template>
    <div :class="$style.index">
      Saved Number: {{myNumber}}
        <div>
            <input v-model="newNumber">
            <div v-on:click="saveNewNumber">저장</div>
        </div>
    </div>
  </template>
  
  <style lang="scss" module>
  .index {
    
  }
  
  </style>
  
  <script lang="ts">
  import { watch } from 'vue';
import { Component, Vue, Watch } from 'vue-property-decorator';
  
  
  @Component({
    components: {
      // HelloWorld,
    },
  })
  export default class MyNewComponent extends Vue {
    myNumber: number = 0
    newNumber: string = "0"

    mounted() {
        this.myNumber = this.$store.getters.getMyNumber
    }

    @Watch("$store.getters.getMyNumber")
    numberUpdatedHandler() {
        this.myNumber = this.$store.getters.getMyNumber
    }

    saveNewNumber() {
        this.$store.commit("setMyNumber", Number(this.newNumber))
        alert("저장되었습니다.")
    }
  
  }
  </script>
  