<template>
  <!-- <v-app>
    <app-toolbar></app-toolbar>
    <app-body></app-body>
    <app-footer></app-footer>     
  </v-app> -->
  <v-container  text-xs-center class="box">
    <v-layout row wrap>
      <v-flex xs12>
        <app-toolbar></app-toolbar>
      </v-flex>
       <app-body></app-body>
      <v-flex xs12>
        <app-footer></app-footer>
      </v-flex>
    </v-layout>
  </v-container>
    
</template>

<script>
import AppFooter from './components/AppFooter'
import AppToolbar from './components/AppToolbar'
import AppBody from './components/AppBody'
export default {
  components:{AppFooter,AppToolbar,AppBody}
}
</script>

<style>
  .box {
    padding:0px;
  }
</style>

  

