<template>
  <v-app >
      
      <Navbar />
      <v-content class="mx-5 my-5">
        <router-view><Newpage /></router-view>
      </v-content>
  </v-app>
</template> 

<script>
import Navbar from '@/components/Navbar'
import Newpage from '@/components/Newpage'


export default {
  name: 'App',
  components:{ 
  Navbar,
  Newpage },
  
  data: () => ({
    //
  }),
};
</script>
