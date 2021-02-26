<template>
  <div class="newpage">
    <h1>Deploy New Instance</h1>
    <v-container class="mx-5 my-4">
<!--- deploy-->
      <h2>Choose Serevr</h2>
      <v-layout row wrap class="my-3" >
        <v-flex xs12 sm6 md4 lg3 v-for="server in servers" :key="server.name">
          <v-card  class="text-xs-center ma-3">
            <v-responsive class="pt-4" align="center" justify="center">  
              <v-avatar size="200" class=" text-center grey lighten-5" >
                <img :src="server.avatar" contain  >
               </v-avatar>
            </v-responsive>
            <v-card-text >
              <div class=" text-center subheading black--text">{{server.name}}</div>
            </v-card-text>
          </v-card>
        </v-flex>  
      </v-layout>
<!--location-->
    <h2 class="my-5">Server Location</h2>
    <v-tabs>
       <v-tab>All Locations</v-tab>
       <v-tab>America</v-tab>
       <v-tab>Europe</v-tab>
       <v-tab>Astralia</v-tab>
       <v-tab>Asia</v-tab>
    </v-tabs>
      <v-layout row wrap class="my-5">
        <v-flex  xs12 sm6 md4 lg3 v-for="country in countries" :key="country.name">
          <v-list-item class="my-2 mx-2">
            <v-list-item-avatar tile>
              <v-img :src="country.avatar" ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
               <v-list-item-title>{{country.city}}</v-list-item-title>
               <v-list-item-subtitle class="caption grey--text">{{country.name}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-flex> 
      </v-layout> 
<!-- Server Type--->
    <h2 class="my-5">Server Type</h2>
    <v-tabs>
       <v-tab>64bit OS</v-tab>
       <v-tab>32bit OS</v-tab>
       <v-tab>Application</v-tab>
       <v-tab>Upload ISO</v-tab>
       <v-tab>ISO Library</v-tab>
       <v-tab>Backup</v-tab>
       <v-tab>Snapshot</v-tab>
    </v-tabs>
        <v-layout row wrap class="my-5">
        <v-flex xs12 sm6 md4 lg3 v-for="type in types" :key="type.name">
          <v-list-item class="my-2 mx-2">
            <v-list-item-avatar>
              <v-img :src="type.avatar" contain></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
               <v-list-item-title>{{type.title}}</v-list-item-title>
               <v-list-item-subtitle class="caption grey--text">{{type.name}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-flex> 
        </v-layout>
<!-- Server Size--->
      <h2>Server Size</h2>
      <v-layout row wrap class="my-5">
        <v-flex xs12 sm6 md4 lg3 v-for="size in sizes" :key="size.title" >
          <v-card  class="text-xs-center ma-3">
            
            <v-card-text align="center" justify="center">
              <div class=" black--text my-2"><b>{{size.title}}</b></div>
              <div class=" blue--text my-2"><h1>{{size.price1}}</h1></div>
              <div class="subheading grey--text my-2">{{size.price2}}</div>
             
               <v-divider class="blue my-5" width="50"></v-divider>
             
              <div class="subheading grey--text my-2"><b>{{size.cpu}}</b></div>
              <div class="subheading grey--text my-2">{{size.memory}}</div>
              <div class="subheading grey--text my-2">{{size.bandwith}}</div>
            </v-card-text>
          </v-card>
        </v-flex>  
      </v-layout>
<!--Additional Features-->
    <h2 class="my-5">Additional Features</h2>
    <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <div>  Enable IPv6 </div> 
        </template> 
    </v-checkbox>
    <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <div> 
              Enable <a target="_blank" href="###" @click.stop v-on="on">Auto Backups</a>
          </div>
        </template>
    </v-checkbox>
    <v-checkbox v-model="checkbox">
        <template v-slot:label>
            <div> 
              Enable <a target="_blank" href="http://vuetifyjs.com" @click.stop v-on="on">DDOS protection</a> 
            </div>
         </template>
      </v-checkbox>
      <v-checkbox v-model="checkbox">
        <template v-slot:label>
           <div> 
              Enable Private Networking
            </div>
        </template>
    </v-checkbox>

<!--Startup Script-->
    <div class="my-5 "><h2>Startup Script <a href="##" class="caption">( Manage )</a></h2></div>
        <v-card width="300" class="my-5">
          <v-list-item class="my-5" >
            <v-btn class="my-4 mx-2"  fab black color="white">
            <v-icon dark> mdi-plus</v-icon>
            </v-btn>
            <v-list-item-content class="mx-5">
               <v-list-item-title>AddNew</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card> 

<!--SSHKey-->
    <h2 class="my-5">SSH Keys <a href="##" class="caption">( Manage )</a></h2>
    <v-row class="my-5">
    <v-col cols="12" sm="3">
    <v-card width="300">
      <v-list-item class="my-5" >
        <v-btn class="my-4 mx-2"  fab white color="blue">
          <v-icon > mdi-key-variant</v-icon>
        </v-btn>
        <v-list-item-content class="mx-5">
            <v-list-item-title>Blenheim</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    </v-col>
    <v-col cols="12" sm="3">
    <v-card width="300">
      <v-list-item class="my-5" >
        <v-btn class="my-4 mx-2"  fab black color="white">
          <v-icon dark> mdi-plus</v-icon>
        </v-btn>
        <v-list-item-content class="mx-5">
          <v-list-item-title>Add New</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    </v-col>
    </v-row>

<!--Server Hostname&Lable-->
    <h2 class="my-5 ">Server Hostname&Lable</h2>
    <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Enter Server hostname" single-line outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Enter Server label" single-line outlined></v-text-field>
        </v-col>
    </v-row>
    

      


      
      
    </v-container>

  </div>
 
</template>


<script>
export default {
  data() {

    return{
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,

      countries:[
        {city: 'Amsterdam',name:'Netherlands',avatar: '/Netherlands.png'},
        {city: 'Paris',name:'France',avatar:'/France.png'},
        {city: 'Frankfurt' ,name:'Germany',avatar:'/Germany.png'},
        {city: 'London',name:'United Kingdom',avatar:'/United-Kingdom.png'},
        {city: 'Atlanta',name:'United States',avatar:'/United-States.png'},
        {city: 'New York(NJ)',name:'United States',avatar:'/United-States.png'},
        {city: 'Chicago',name:'United States',avatar:'/United-States.png'},
        {city: 'Dallas',name:'United States',avatar:'/United-States.png'},
        {city: 'Los Angeles',name:'United States',avatar:'/United-States.png'},
        {city: 'Miami',name:'United States',avatar:'/United-States.png'},
        {city: 'Seattle',name:'United States',avatar:'/United-States.png'},
        {city: 'Silicon Valley',name:'United States',avatar:'/United-States.png'}
      ],
       

      servers:[
        {name: 'Cloud Compute',avatar: '/card1.png'},
        {name: 'High Frequency',avatar:'/card2.png'},
        {name: 'Bare Metal' ,avatar:'/card3.png'},
        {name: 'Dedicated Cloud',avatar:'/card4.png'}
      ],
      types:[
        {title: 'CentOS',name:'8 ⨉64',avatar: '/cent.png'},
        {title: 'CoreOS',name:'Stable ⨉64',avatar:'/core.png'},
        {title: 'Debian' ,name:'SeletVersion',avatar:'/debian.png'},
        {title: 'Fedora',name:'SelectVersion',avatar:'/fedorra.png'},
        {title: 'FreeBSD',name:'SelectVersion',avatar:'/free.png'},
        {title: 'OpenBSD',name:'SelectVersion',avatar:'/open.png'},
        {title: 'Ubuntu',name:'SelectVersion',avatar:'/ubuntu.png'},
        {title: 'Windows',name:'SelectVersion',avatar:'/windows.png'}

      ],
      sizes:[
        {title: '25 GB SSD',price1:'$5/mo',price2:'$0.007/h',cpu:'1 CPU',memory:'1024MB Memory',bandwith:'1000GB Bandwidth',avatar: '/card1.png'},
        {title: '55 GB SSD',price1:'$10/mo',price2:'$0.015/h',cpu:'1 CPU',memory:'2048MB Memory',bandwith:'2000GB Bandwidth',avatar:'/card2.png'},
        {title: '80 GB SSD' ,price1:'$20/mo',price2:'$0.03/h',cpu:'2 CPU',memory:'4096MB Memory',bandwith:'3000GB Bandwidth',avatar:'/card3.png'},
        {title: '160 GB SSD',price1:'$40/mo',price2:'$0.06/h',cpu:'4 CPU',memory:'8192MB Memory',bandwith:'4000GB Bandwidth',avatar:'/card4.png'},
        {title: '320 GB SSD',price1:'$80/mo',price2:'$0.119/h',cpu:'6 CPU',memory:'1024MB Memory',bandwith:'5000GB Bandwidth',avatar:'/card4.png'},
        {title: '640  GB SSD',price1:'$160/mo',price2:'$0.238/h',cpu:'8 CPU',memory:'1024MB Memory',bandwith:'6000GB Bandwidth',avatar:'/card4.png'}

      ],
      player_one: {
        score: 0
      },
      player_two: {
        score: 0
      },

    } 
  },
  methods: {
    increaseScore(player) {
      player.score += 1;
    },
    decreaseScore(player) {
      if(player.score > 0) {
          player.score -= 1;
      }
    }
  },
 
}
</script>
<style>

.v-btn {
text-transform: none !important;
}
.v-footer {
  max-width: auto;
  margin: auto;
}
</style>





