<template>
 <!-- <v-container> -->
   <v-card id ="body">
       
       <v-layout>
           <v-flex xs12 sm6>
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
            <v-flex xs12 sm6  class="car-box">
                   <img src="../assets/road.png" class="road" style="width:430px; height:492pxss">
                   <button @click="show" class="btn">
                       <img src="../assets/btn.png"  style = "width:100px; height:100px">
                   </button>
                   
                <transition enter-active-class="animated bounceInLeft">                
                   <img src="../assets/car.png"  class="car" v-show='isShow'>                 
                </transition>
            </v-flex>
       </v-layout>
        <v-layout class="part-two">
            <v-flex xs12 sm6 class="left">
                <img src="../assets/pic.jpg" style="width:256px;height:416px">
            </v-flex>
            <v-flex xs12 sm5 class="center">
                <v-card class="shop">
                    <v-card-text class="word-top">Tap and</v-card-text>
                    <v-layout>
                        <v-flex>
                            <span class="word-go">Go</span>
                        </v-flex>
                        <v-flex class="store-btn">
                            <a href="#" class="google-wrap">
                                <img src="../assets/google.png" style= "width:132px;height:44px">
                            </a>
                            <v-card-text class="apple-wrap">
                                <a href="#">
                                    <img src="../assets/apple.png" style= "width:132px;height:44px">
                                </a>
                            </v-card-text>
                            <v-card-text class="any-wrap">
                                Any time,Any where
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                    
                    
                    
                    <!-- <v-card-text class="apple-wrap">
                        <a href="#">
                            <img src="../assets/apple.png" style= "width:132px;height:44px">
                        </a>
                    </v-card-text>
                    <v-card-text class="any-wrap">
                        Any time,Any where
                    </v-card-text> -->
                </v-card>
                <v-card class="bottom-word">
                    <v-card-text class="v-card-text">Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do</v-card-text>
                    <v-card-text class="v-card-text">eisusmod tempor incididunt ut labore et dolore magna aliqua. Ut</v-card-text>
                    <v-card-text class="v-card-text">enim ad minim veniam, quis nostrud exercitation ullamco</v-card-text>
                    <v-card-text class="v-card-text">laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm4 class="phone">
                <img src="../assets/mobile.png" style="width:350px;height:460px">
            </v-flex>
        </v-layout> 
   </v-card>  
  <!-- </v-container> -->
</template>
<script>
import AppDate from "./AppDate.vue";
import "animate.css/animate.css";
export default {
  components: { AppDate },
  data: function() {
    return { isShow: false };
  },
  methods: {
    show: function() {
      this.isShow = true;
    }
  }
};
</script>
<style>
#body {
  width: 100%;
  height: 100%;
  background-color: pink;
  box-shadow: none;
  background: url(../assets/whole1.jpg) no-repeat;
  background-size: cover;
}
#body .indigo.lighten-1 {
  background-color: #fff !important;
  padding-left: 100px;
}
#body .indigo > .white--text {
  color: black !important;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 24px;
}
#body .indigo.lighten-1 > .text-top {
  margin-top: 114px;
}
#body .indigo > .white--text > .bee-color {
  color: #f69721;
}
.car-box {
  position: relative;
  margin-left: 316px;
}
#body .car-box > .road {
  position:absolute;
  top:19px;
  left:163px;
  opacity:.3;
}
#body .car-box > .btn {
  position:absolute;
  top:235px;
  left:361px;
}
.car-box > .car {
  width: 375px;
  height: 220px;
  position: absolute;
  bottom: -207px;
  left: 60px;
}
#body .part-two {
    margin-top:265px;
}
#body .part-two > .left {
    padding-top:76px;
}
#body .part-two > .center {
    padding-top:76px;
}
#body .part-two .word-top {
  padding-top: 0px;
  font-size: 40px;
  font-weight: bold;
}
#body .part-two .word-go {
  color: #f69721;
  font-size: 65px;
  font-weight: bold;
}
#body .part-two .shop {
  box-shadow: none;
  margin-left: 0px;
}
#body .part-two .shop .store-btn {
    padding-top: 19px;
}
#body .part-two .shop .google-wrap {
  padding-left: 50px;
}
#body .part-two .shop .apple-wrap {
  padding-top: 10px;
  padding-left: 50px;
}

#body .part-two .shop .any-wrap {
  padding-top: 18px;
  padding-left: 50px;
  font-size: 15px;
  font-weight: bold;
}
#body .part-two .bottom-word {
  box-shadow: none;
  margin-top: 30px;
  opacity:.3;
}
#body .part-two .bottom-word > .v-card-text {
  padding-top: 5px;
}
</style>


