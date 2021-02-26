<template>
  <div class="billing">
    <h1>Join Us Now! <v-icon size="50">mdi-soundcloud</v-icon></h1>
<!--Signin-->
  <v-row >
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="blue white--text" v-bind="attrs" v-on="on" >Sign in</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="blue white--text" dar >Sign in</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-8">     
              <v-card class="elevation-12">
                 <v-toolbar color="blue" dark flat >
                 <v-toolbar-title>Sign in form</v-toolbar-title>
                    <v-spacer></v-spacer>
                 </v-toolbar>
                 <v-card-text>
                 <v-form>
                    <v-text-field label="Username" prepend-icon="mdi-account-reactivate-outline" type="text"></v-text-field>
                    <v-text-field id="password" label="Password"  prepend-icon="mdi-account-key-outline" type="password"></v-text-field>
                 </v-form>
                 </v-card-text>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn color="blue white--text">Login</v-btn>
                 </v-card-actions>
              </v-card>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false" class="blue--text">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
<!--SignUp-->
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="green white--text" v-bind="attrs" v-on="on" >Sign up</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="green white--text" dar >Sign up</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-8">     
              <v-card class="elevation-12">
                 <v-toolbar color="green" dark flat >
                 <v-toolbar-title>Sign up form</v-toolbar-title>
                    <v-spacer></v-spacer>
                 </v-toolbar>
                 <v-card-text>
                 <v-form>
                    <v-text-field label="Email" prepend-icon="mdi-email-outline" type="text"></v-text-field>
                    <v-text-field label="Username" prepend-icon="mdi-account-reactivate-outline" type="text"></v-text-field>
                    <v-text-field id="password" label="Password"  prepend-icon="mdi-account-key-outline" type="password"></v-text-field>
                 </v-form>
                 </v-card-text>
                 <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn color="green white--text">Sign up</v-btn>
                 </v-card-actions>
              </v-card>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false" class="green--text">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>


  </v-row>
  </div>
</template>