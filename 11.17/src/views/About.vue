<template>
    <div :class="$style.index">
      <MyNewComponent />

      <div v-for="(item, index) in membersArray" :key="index">
        {{item.name}}
      </div>
    </div>
  </template>
  
  <style lang="scss" module>
  .index {
    
  }
  
  </style>
  
  <script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyNewComponent from '@/components/MyNewComponent.vue'
import MyJsonFile from '@/assets/members.json'
  
  
  @Component({
    components: {
        MyNewComponent
    },
  })
  export default class AboutView extends Vue {
    membersArray: any[] = []

    myObject: any = {
        id: 12345,
        abcd: "asdasd",
        hello: ["asd", "fff"],
        hihi : false,
        subObject: {
            abc: 123123
        }
    }
    
    websiteSettings: any = {
        darkMode: false,
        language: "ko",
        level: 3
    }

    mounted() {
        this.membersArray = MyJsonFile.members
        // console.log(MyJsonFile.members[0].email)
        this.$router.push("/about")
        
        this.websiteSettings.darkMode = true
        this.$store.commit("setWebsiteSettings", this.websiteSettings)
    }
  }
  </script>
  