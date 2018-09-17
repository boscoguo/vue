<template>
        <v-flex xs12 id="body">
                <v-layout>
                    <v-flex xs12 xm6 text-xs-left>
                        <!-- <v-card
                            flat
                            tile
                            class="indigo lighten-1 white--text "
                            > -->
                        <div class="body-left">
                                <v-card-text class="white--text pt-0 text-top">
                                    Easy rent a car
                                </v-card-text>
                                <v-card-text class="white--text pt-0">
                                    Easy make money by your car
                                </v-card-text>
                                <v-card-text class="white--text pt-0">
                                    We are <span class="bee-color">Bee</span>here
                                </v-card-text> 
                                <app-date></app-date>
                        </div>
                                
                        <!-- </v-card>         -->
                    </v-flex>
                    <v-flex xs12 xm6 class="car-box"  text-xs-center text-sm-center hidden-md-and-down>                       
                        <!-- <div class="mask">
                            <img src="../assets/road.png" class="road">
                        </div> -->
                        <!-- <v-flex class="btn-wrap"> -->
                            <button @click="show">
                               <img src="../assets/btn.png" class="btn">
                            </button>
                        <!-- </v-flex> -->
                        <!-- <v-flex class="car-wrap"> -->
                        <!-- <transition enter-active-class="animated bounceInLeft"> -->
                            <transition name="move">
                              <img src="../assets/car.png" class="car" v-show="isShow">
                            </transition>    
                        <!-- </transition>   -->
                        <!-- </v-flex> -->
                    </v-flex>
                </v-layout>
                <v-layout class="part-two">
                    <v-flex xs12 sm3 class="left">
                        <!-- <img src="../assets/pic.jpg" style="width:256px;height:416px;display:block"> -->
                    </v-flex>
                    <v-flex xs12 sm5 class="center" text-xs-left>
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
        </v-flex>
 <!-- <v-content>
   <v-container> -->
       <!-- <v-card id ="body">
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
                                    </v-card-text> -->
                                    <!-- <v-layout > -->
                                        <!-- <app-date></app-date> -->
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
                            <!-- </v-card>
                    </v-flex>
                    <v-flex xs12 sm6  class="car-box">
                        <img src="../assets/road.jpg" class="road" style="width:430px; height:492px">
                        <button @click="show" class="btn">
                            <img src="../assets/btn.png"  style = "width:100px; height:100px">
                        </button> -->
                        
                        <!-- <transition enter-active-class="animated bounceInLeft">                 -->
                        <!-- <transition name="move" class="car"> -->
                            <!-- <p style="background:red" v-show='isShow'></p> -->
                        <!-- <img src="../assets/car.png"  class="car" v-show='isShow'>                 
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
                        </v-layout> -->
                        
                        
                        
                        <!-- <v-card-text class="apple-wrap">
                            <a href="#">
                                <img src="../assets/apple.png" style= "width:132px;height:44px">
                            </a>
                        </v-card-text>
                        <v-card-text class="any-wrap">
                            Any time,Any where
                        </v-card-text> -->
                    <!-- </v-card>
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
       </v-card> -->
   <!-- </v-container>
      
</v-content> -->
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
    //   this.isShow = !this.isShow;
        this.isShow = true;
    }
  }
};
</script>
<style>
/* p {
    width:100px;
    height:100px;
}*/
.move-enter-active,.move-leave-active {
    transition:1s all ease;
}
/* .car {
    transform:tanslate(-300px);
} */
.move-enter {
    opacity: 0;
    transform:tanslate(0px);
}
.move-enter-to {
    opacity:1;
    transform:translate(-1000px);
}
.move-leave {
    opacity:1;
    transform:translate(-1000px);
}
.move-leave-to {
    opacity:1;
    transform:translate(0px);
}
/* @media screen {
    
} */
#body {
  /* margin-top:100px; */
  width: 100%;
  height: 100%;
  /* background-color: pink; */
  box-shadow: none;
  background: url(../assets/body-bg.jpg) no-repeat 180px 0px;
  background-size: cover;
}
#body .car-box  .road {
    width: 75%;  
    opacity:.5;
}
/* #body .indigo.lighten-1 {
  background-color: #fff !important;
  padding-left: 100px;
} */
#body .body-left {
  padding-left: 100px;
}
#body .body-left > .white--text {
  color: black !important;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 24px;
}
/* #body .indigo.lighten-1 > .text-top {
  margin-top: 114px;
} */
#body .body-left > .text-top {
    margin-top:114px;
}
/* #body .indigo > .white--text > .bee-color {
  color: #f69721;
} */
#body .body-left > .white--text > .bee-color {
    color:#f69721;
}
#body .car-box {
  position: relative;
  /* margin-left: 316px; */
}

#body .car-box > .mask {
  /* position:absolute; */
  margin-top:15px;
  /* left:70px; */
  width:100%;
  height:750px;
  /* background-color:#ccc; */
  /* opacity:.5; */
  background:url(../assets/bubble.png) no-repeat 145px -5px;
  /* overflow: hidden; */
  /* border-top-left-radius:20em; */
}
#body .car-box .btn {
  width:100px;
  position: absolute;
  top:205px;
  right:44px;
}
#body .car-box .car {
  width: 308px;
  height: 219px;
  position: absolute;
  bottom:-260px;
  left:129px;
}
#body .part-two {
    margin-top:155px;
   
}
#body .part-two > .left {
    padding-top:76px;
    background:url(../assets/pic1-01.png) no-repeat -65px 0px;
}
#body .part-two > .center {
    padding-top:76px;
    /* background:url(../assets/whole.png) no-repeat -2000px 144px; */
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


