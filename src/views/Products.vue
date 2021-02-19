<template>
  <div class="products">
    <h1>Products</h1>
    <v-container class="mx-5 my-5">
      <!--Tabs-->
      <v-tabs>
         <v-tab>Instances</v-tab>
         <v-tab>SnapShots</v-tab>
         <v-tab>ISOs</v-tab>
         <v-tab>Scripts</v-tab>
         <v-tab>DNS</v-tab>
         <v-tab>Objects</v-tab>
         <v-tab>Firewall</v-tab>
         <v-tab>Network</v-tab>
         <v-tab>Load Balancers</v-tab>
      </v-tabs>
      <v-divider />

      <!--Plus btn-->
      <v-btn class="mx-2" absolute centered right fab dark color="indigo">
         <v-icon dark> mdi-plus </v-icon>
      </v-btn>
      
      <!-- content -->
      <v-container grid-list-md text-xs-center fluid>
         <v-layout row wrap>
           <v-flex xs12>
              <v-card class=" my-5 pa-2">
                  <v-card-text class=" white blue--text">gjf jsljkfsjfgjksdjfgkjgsskljgklsjglksjsl</v-card-text>
              </v-card>  
            </v-flex>
            <v-flex xs12 >
              <v-card class=" my-5 pa-2">
                   <v-card-text class="white green--text">12wijrijgorwjgoijoijgjwojo</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>

    </v-container>
  </div>
</template>


<script>
export default {
 
}
</script>


