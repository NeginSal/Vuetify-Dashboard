<template>
  <nav>
<!---Navigation-drawer--->
    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-list-item>
        <v-list-item-title class="title">
             <v-img src="@/assets/logo.svg"></v-img>
        </v-list-item-title>
      </v-list-item>
      <v-list nav>
        <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
          <v-list-item-icon class="white--text">
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!---Navigation-drawer--->

<!---Toolbar--->
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar>
            <!--Toolbar title-->
            <v-toolbar-title >
                 <span class="text-uppercase blue--text">News:</span>
                 <span class="font-weight-light">Simplified Kubernetes Support</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- User toolbar-->
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                     <v-icon left >mdi-email</v-icon>
                     <v-icon left> mdi-account-circle</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Taner Temel </v-list-tile-title>
                  <v-list-action><v-icon>mdi-menu-down</v-icon></v-list-action>
                </v-list-tile-content>
              </v-list-tile>   
            </v-list>
        </v-toolbar>
    </v-app-bar>
  <!---Toolbar--->

  </nav>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menus: [
      { title: 'Products', icon: 'mdi-web', url: '/' },
      { title: 'Billing', icon: 'mdi-home', url: '/billing' },
      { title: 'Support', icon: 'mdi-heart', url: '/support' },
      { title: 'Affiliate', icon: 'mdi-information-variant', url: '/affiliate' },
      { title: 'Account', icon: 'mdi-heart', url: '/accont' }
    ]
  })
}
</script>