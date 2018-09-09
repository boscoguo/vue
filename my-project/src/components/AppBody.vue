<template>
   <v-card id = "body">
       <!-- <button @click="show">click</button> -->
       <v-layout>
           <v-flex xs12 sm8>
               <v-card
                    flat
                    tile
                    class="indigo lighten-1 white--text "
                    >
                        <v-card-text class="white--text pt-0 text-top">
                            Easy rent a car
                        </v-card-text>
                        <v-card-text class="white--text pt-0">
                            Easy make money by your car
                        </v-card-text>
                        <v-card-text class="white--text pt-0">
                            We are <span class="bee-color">Bee</span>here
                        </v-card-text>
                        <!-- <v-layout > -->
                            <app-date></app-date>
                            <!-- <v-flex xs12 sm4>
                                <v-dialog width="350px" persistent v-model = "editDialog">
                                    
                                            <v-overflow-btn xs12 sm4 label="enter a location" fab accent slot = "activator">
                                                Edit Date
                                            </v-overflow-btn>
                                            <v-card>
                                                <v-container>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <v-card-title>Edit Meetup Date</v-card-title>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-divider></v-divider>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <v-date-picker v-model="editableDate" style="width:100%" actions>
                                                                <template>
                                                                    <v-btn 
                                                                    class="blue--text darken-1" 
                                                                    flat 
                                                                    @click.native = "editDialog = false">close</v-btn>
                                                                    <v-btn 
                                                                    class="blue--text darken-1" 
                                                                    flat 
                                                                    @click.native = "onSaveChanges">Save</v-btn>
                                                                </template>
                                                            </v-date-picker>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-card>
                                </v-dialog>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-dialog width="350px" persistent v-model = "editDialog">
                                    
                                            <v-overflow-btn xs12 sm4 label="enter a location" fab accent slot = "activator">
                                                Edit Date
                                            </v-overflow-btn>
                                            <v-card>
                                                <v-container>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <v-card-title>Edit Meetup Date</v-card-title>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-divider></v-divider>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <v-date-picker v-model="editableDate" style="width:100%" actions>
                                                                <template>
                                                                    <v-btn 
                                                                    class="blue--text darken-1" 
                                                                    flat 
                                                                    @click.native = "editDialog = false">close</v-btn>
                                                                    <v-btn 
                                                                    class="blue--text darken-1" 
                                                                    flat 
                                                                    @click.native = "onSaveChanges">Save</v-btn>
                                                                </template>
                                                            </v-date-picker>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-card>
                                </v-dialog>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-dialog width="350px" persistent v-model = "editDialog">
                                    
                                            <v-overflow-btn xs12 sm4 label="enter a location" fab accent slot = "activator">
                                                Edit Date
                                            </v-overflow-btn>
                                            <v-card>
                                                <v-container>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <v-card-title>Edit Meetup Date</v-card-title>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-divider></v-divider>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <v-date-picker v-model="editableDate" style="width:100%" actions>
                                                                <template>
                                                                    <v-btn 
                                                                    class="blue--text darken-1" 
                                                                    flat 
                                                                    @click.native = "editDialog = false">close</v-btn>
                                                                    <v-btn 
                                                                    class="blue--text darken-1" 
                                                                    flat 
                                                                    @click.native = "onSaveChanges">Save</v-btn>
                                                                </template>
                                                            </v-date-picker>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-card>
                                </v-dialog>
                            </v-flex> -->
                        <!-- </v-layout> -->
                </v-card>
           </v-flex>
            <v-flex  class="car-box">
                   <img src="../assets/car-bg.jpg" style="width:359px; height:578px;display:block">
                <!-- <transition enter-active-class="animated bounceInLeft">                 -->
                   <img src="../assets/car2.jpg" style="width:245px; height:94px" class="car" v-show='isShow'>                 
                <!-- </transition> -->
            </v-flex>
       </v-layout>
        <v-layout class="part-two">
            <v-flex xs12 sm4>
                <img src="../assets/pic.jpg" style="width:256px;height:416px">
            </v-flex>
            <v-flex xs12 sm4>
                <v-card class="shop">
                    <v-card-text class="word-top">Tap and</v-card-text>
                    <span class="word-go">Go</span>
                    <a href="#">
                        <img src="../assets/google.jpg" alt="">
                    </a>
                    
                    <v-card-text class="apple-wrap">
                        <a href="#">
                            <img src="../assets/apple.jpg" alt="">
                        </a>
                    </v-card-text>
                    <v-card-text class="any-wrap">
                        Any time,Any where
                    </v-card-text>
                </v-card>
                <v-card class="bottom-word">
                    <v-card-text class="v-card-text">Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do</v-card-text>
                    <v-card-text class="v-card-text">eisusmod tempor incididunt ut labore et dolore magna aliqua. Ut</v-card-text>
                    <v-card-text class="v-card-text">enim ad minim veniam, quis nostrud exercitation ullamco</v-card-text>
                    <v-card-text class="v-card-text">laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm4 class="phone">
                <img src="../assets/x-bg.jpg" alt="">
            </v-flex>
        </v-layout> 
   </v-card>    
</template>
<script>
import AppDate from './AppDate.vue'
import 'animate.css/animate.css'
export default {
  components:{AppDate},
  data: function() {
     return {isShow:true} 
  },
  methods: {
    show:function() {
        this.isShow = true
    }
  }
};
</script>
<style>
#body {
  box-shadow: none;
}
#body  .indigo.lighten-1 {
  background-color: #fff !important;
  padding-left: 100px;
}
#body  .indigo > .white--text {
  color: black !important;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 24px;
}
#body  .indigo.lighten-1 > .text-top {
  margin-top: 114px;
}
#body  .indigo > .white--text > .bee-color {
  color: #f69721;
}
.car-box {
    position:relative;
    margin-left:316px;
}
.car-box > .car {
    position:absolute;
    bottom:85px;
    left:-47px;
}
#body .part-two .word-top {
    padding-top:0px;
    font-size: 22px;
    font-weight:bold;
}
#body .part-two .word-go {
    color:#f69721;
    font-size: 40px;
    font-weight:bold;
}
#body .part-two .shop  {
    box-shadow: none;
    margin-left:0px;
}
#body .part-two .shop > .apple-wrap {
    padding-top:0px;
    padding-left:60px;
} 

#body .part-two .shop > .any-wrap {
    padding-top:18px;
    padding-left:60px;
    font-size:18px;
    font-weight:bold;
}
#body .part-two > .phone > img {
    margin-left:97px;
}
#body .part-two .bottom-word {
    box-shadow: none;  
    margin-top:30px; 
} 
#body .part-two .bottom-word > .v-card-text {
    padding-top:5px;
}
</style>


