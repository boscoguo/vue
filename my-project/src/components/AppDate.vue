<!-- <v-layout id="date"> -->
        <v-flex xs12 sm4>
            <v-card class="card-title">
                <v-card-title class="title">find car in</v-card-title>
            </v-card>
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
                                        <v-date-picker class="select" v-model="editableDate" style="width:100%" actions>
                                            <template>
                                                <v-btn 
                                                class="blue--text darken-1" 
                                                flat 
                                                @click.native = "editDialog = false">close</v-btn>
                                                <!-- <v-btn 
                                                class="blue--text darken-1" 
                                                flat 
                                                @click.native = "onSaveChanges">Save</v-btn> -->
                                            </template>
                                        </v-date-picker>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
            </v-dialog>
        </v-flex>
        <v-flex xs12 sm4>
            <v-card class="card-title">
                <v-card-title class="title">pick up</v-card-title>
            </v-card>
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
            <v-card class="card-title">
                <v-card-title class="title">drop off</v-card-title>
            </v-card>
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
            <a href="#">
                <img class="arrow" src="../assets/arrow.jpg" alt="">
            </a>
        </v-flex>
    <!-- </v-layout>   -->
<template>
  <v-layout row wrap id="date">
    <v-flex xs12 sm6 md3>
        <v-card class="card-title">
            <v-card-text class="title">find car in</v-card-text>
        </v-card>
      <v-dialog
        ref="dialog"
        v-model="modal1"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
    
        <v-text-field
          slot="activator"
          v-model="date"
          append-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal1 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs12 sm6 md3>
        <v-card class="card-title">
            <v-card-text class="title">find car in</v-card-text>
        </v-card>
      <v-dialog
        ref="dialog2"
        v-model="modal2"
        :return-value.sync="date2"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date2"
          append-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date2" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog2.save(date2)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-flex xs12 sm6 md3>
      <v-card class="card-title">
         <v-card-text class="title">find car in</v-card-text>
      </v-card>
      <v-dialog
        ref="dialog3"
        v-model="modal3"
        :return-value.sync="date3"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date3"
          append-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date3" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal3 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog3.save(date3)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-flex xs12 sm3>
        <a href="#">
            <img class="arrow" src="../assets/arrow.jpg" alt="">
        </a>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
</template>
<style>
#date .card-title > .title {
    font-weight: bold;
}
#date .v-card {
    box-shadow:none;
}
#date .v-card__text {
    padding-top:25px;
}
#date .arrow {
    padding-top:54px;
    padding-left:16px;
}
/* #date {
    margin-top: 50px;
}
  #date .card-title {
      box-shadow: none;
  }
  #date .title {
      padding:0px;
  }
  #date .arrow {
      padding-top:42px;
      padding-left:16px; */
      /* width: 28px;
      height: 28px; */
      /* width: 46px;
  } */
 
</style>

<script>
const app = document.createElement('div');
app.setAttribute('data-app', true);
document.body.append(app);
export default {
    data: () => ({
      date: null,
      date2:null,
      date3:null,
      modal1: false,
      modal2: false,
      modal3: false
    })
//   data () {
//     return {
//       editDialog: false,
//       editableDate: null
//     };
//   },
//   methods: {
//     onSaveChanges() {
//       const newDate = new Date(this.meetup.date);
//       const newDay = new Date(this.editableDate).getUTCDate();
//       const newMonth = new Date(this.editableDate).getUTCMonth();
//       const newYear = new Date(this.editableDate).getUTCFullYear();
//       newDate.setUTCDate(newDay);
//       newDate.setUTCMonth(newMonth);
//       newDate.setUTCFullYear(newYear);
//       this.$store.dispatch("updateMeetupData", {
//         id: this.meetup.id,
//         date: newDate
//       });
//     }
//   },
//   created() {
//     this.editableDate = new Date(this.meetup.date);
//   },
}
</script>
