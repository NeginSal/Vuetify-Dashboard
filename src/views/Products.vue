<template>
  <div class="products">
    <h1>Products</h1>
    <v-container class="mx-5 my-5">
<!-----Tabs------>
      <v-tabs >
         <v-tab>Instances</v-tab>
         <v-tab>SnapShots</v-tab>
         <v-tab>ISOs</v-tab>
         <v-tab>Scripts</v-tab>
         <v-tab>DNS</v-tab> 
         <v-tab>Block Storage</v-tab>
         <v-tab>Objects</v-tab>
         <v-tab>Firewall</v-tab>
         <v-tab>Network</v-tab>
         <v-tab>Load Balancers</v-tab>
      </v-tabs>
      <v-divider />

<!-----Plus btn------>
      <div class="text-center">
          <v-menu open-on-hover bottom offset-y >
          <template v-slot:activator="{ on, attrs }">
            <v-btn to="../Newpage" v-bind="attrs" v-on="on" class=" my-1 mx-1" absolute centered right fab dark color="indigo">
             <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
               <v-icon class="blue--text">mdi-comment-plus-outline</v-icon>
               <v-list-title class="blue--text">Deploy New Server</v-list-title>
            </v-list-item>
             <v-divider></v-divider>
             <v-list-item v-for="(item, index) in items" :key="index">
             <v-icon>{{ item.icon }}</v-icon>
             <v-list-item-title>{{ item.title }}</v-list-item-title>
             </v-list-item>
           </v-list>
          </v-menu>
      </div>

      
<!-----content ---->
      <v-container grid-list-md text-xs-center fluid class="my-5 mx-3">
         <v-layout row wrap>
           <v-flex xs12 >
              <div class="d1" >
                  <v-card class="my-5 pa-3 white blue--text">Read How-To Aritcles and FAQs on <a href="https://www.vultr.com/docs/">Vultr Docs</a></v-card>
              </div>  
            </v-flex>
            <v-flex xs12 >
              <div class="d2">
                   <v-card class=" my-5 pa-3 white green--text">Good News- Your account can earn some additional free credit! <a href="#####"> Click here to view available promos</a></v-card>
              </div>
            </v-flex>
          </v-layout>
      </v-container>

<!-----message btn-->
      <v-btn class=" my-10 mx-1 " absolute centered right bottom fab dark color="green">
         <v-icon dark> mdi-message-text-outline </v-icon>
      </v-btn>

    </v-container>
  </div>
</template>


<script>
export default {
  data: () => ({
      items: [
        { icon: 'mdi-earth',title: 'Add Domain' },
        { icon: 'mdi-fire',title: 'Add Firewall Group' },
        { icon: 'mdi-white-balance-sunny',title: 'Add Load Balancers' },
        { icon: 'mdi-backup-restore',title: 'Add Object Storage' },
        { icon: 'mdi-security-network',title: 'Add Reserved IP' },
        { icon: ' mdi-dots-horizontal',title: 'View More Option' },
      ],
    }),
 
}
</script>
<style>
.d1{
  height: 50px;
  border-left: 4px solid blue;
}
.d2{
  height: 50px;
  border-left: 4px solid green;
}
.v-tab {
text-transform: none !important;
}
</style>





