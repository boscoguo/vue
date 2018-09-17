<template>

  <!-- <v-container> -->
      <v-toolbar id="toolbar">
          <v-toolbar-title>
            <img src="../assets/logo (2).png" alt="">
          </v-toolbar-title>
          <v-toolbar-items>
            <v-btn flat class="aver"></v-btn>
          </v-toolbar-items>
          
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat class="aver"><a href="http://www.google.com" style="text-decoration:none;color:black">FIND A CAR</a></v-btn>
            <v-btn flat class="aver"><a href="http://www.google.com" style="text-decoration:none;color:black">JOIN YOUR CAR</a></v-btn>
            <v-btn flat class="aver"><a href="http://www.google.com" style="text-decoration:none;color:black">SUPPORT</a></v-btn>
            <v-btn flat class="aver"><a href="http://www.google.com" style="text-decoration:none;color:black">CONTACT</a></v-btn>
            <!-- <v-btn flat class="login">LOG IN</v-btn>
            <v-btn flat class="join">JOIN</v-btn> -->
          </v-toolbar-items>
          <!-- <v-flex xm1></v-flex> -->
          <v-btn flat></v-btn>
          <v-toolbar-items class="last-btn">
             <!-- <v-flex xm1 class="two-btn"> -->
              <v-btn flat class="login">LOG IN</v-btn>
            <!-- </v-flex> -->
            <!-- <v-flex xm1 class="two-btn"> -->
              <v-btn flat class="join">JOIN</v-btn>
            <!-- </v-flex> -->
          </v-toolbar-items>
          
            
            
            
          
            
          <!-- <v-btn color="info">LOG IN</v-btn>
              <v-overflow-btn 
                label="JOIN"
                target="#dropdown-example"
              ></v-overflow-btn> -->
      </v-toolbar>
  <!-- </v-container> -->
    
</template>
<style>
#toolbar {
    box-shadow: none;
  }
  /* .v-toolbar > .v-toolbar__content {
    background-color: #fdfbfc;
  }*/
  .v-toolbar > .v-toolbar__content > .v-toolbar__title {
    padding-left: 74px;
  }
  /* .v-toolbar > .v-toolbar__content > .v-toolbar__items {
    padding-left: 150px;
  } */
  .v-toolbar > .v-toolbar__content > .v-toolbar__title > img {
    width: 108px;
    height: 32px;
    margin-top: 5px;
  } 
  #toolbar .two-btn .v-btn {
    padding:0px;
    margin:6px 0px;
    /* width:30px; */
    /* min-width:30px; */
  }
  #toolbar .last-btn > .flex {
    flex-grow:0;
  }
  #toolbar .login .v-btn__content {
    background-color: #F8911B;
    padding:5px 9px;
    border-radius:4px;
  }
  #toolbar .join .v-btn__content {
    background-color: #fff;
    padding:5px 12px;
    border:1px solid #DADEBD;
    border-radius:4px;
  }
  /* .v-toolbar > .v-btn { */

  /* } */
  /* .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #fff;
  }
  .v-input {
    flex: 0;
  }
  .v-overflow-btn .v-label {
    margin-left: 9px;
  }
  .v-overflow-btn .v-input__append-inner {
    width: 24px;
  }

  .v-overflow-btn .v-select__slot {
    height: 24px;
  }

  .v-toolbar > .v-toolbar__content > .v-btn {
    height: 22px;
    margin: 0 5px;
    padding: 0 10px;
    min-width: 54px; */
    /* margin-left: 270px; */
  /* }
  .v-toolbar .v-select > .v-input__control > .v-input__slot {
    margin-top: 7px;
  } */
  /* #toolbar .login {
    margin-left:182px;
    margin-right:7px;
  } */

  /* #toolbar .aver {
    margin-right:30px;
  } */

  /* #toolbar .join {
    padding:0px;
  }

  #toolbar .login .v-btn__content {
    background-color:#f29827;
    padding:8px 12px;
    border-radius:5px;
  }

  #toolbar .join .v-btn__content {
    background-color:#fff;
    padding:8px 12px;
    border:1px solid black;
    border-radius:5px;
  }

  .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
   background-color:none;
  } */
  /* .v-input > .v-input__control > .v-input__slot > .v-select__slot {
    border: 1px solid #eee;
    border-radius: 5px;
  } */
  
</style>


