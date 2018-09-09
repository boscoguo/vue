<template>
    <v-layout id="date">
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
    </v-layout>  
</template>
<style>
  #date .card-title {
      box-shadow: none;
  }
  #date .title {
      padding:0px;
  }
  #date .arrow {
      padding-top:42px;
      padding-left:16px;
      /* width: 28px;
      height: 28px; */
      width: 46px;
  }
 
</style>

<script>
const app = document.createElement('div');
app.setAttribute('data-app', true);
document.body.append(app);
export default {
  data () {
    return {
      editDialog: false,
      editableDate: null
    };
  },
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
