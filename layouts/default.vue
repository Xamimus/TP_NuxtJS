/* <template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" /> 
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    let isLogged = this.$store.state.users.isLogged

    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Rendu TP NuxtJS / Maxime MARTIN - Nathan PIGNON'
    }
  },

/*     created() {
    item = [
      {
        icon = 'mdi-apps',
        title = 'Accueil',
        to = '/'
      }
    ]
      this.items.push(item)
    }, */
}
</script>
 */
