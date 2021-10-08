/* <template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <template 
        v-for="(item, i) in items" 
        >
          <v-list-item
          v-if="item.visible"
          :key="i"
          :to="item.to"
          router
          exact
          >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
      items: [
        {
          icon: 'mdi-apps',
          title: 'Accueil',
          to: '/',
          visible: true,
        },
        {
          icon: 'mdi-login',
          title: 'Connexion',
          to: '/auth/login',
          visible: !isLogged,
        },
        {
          icon: 'mdi-account-plus',
          title: 'Inscription',
          to: '/auth/register',
          visible: !isLogged,
        },
        {
          icon: 'mdi-power',
          title: 'Déconnexion',
          to: '',
          visible: isLogged,
        }, 
        {
          icon: 'mdi-delete-forever',
          title: 'Supprimer mon compte',
          to: '',
          visible: isLogged,
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Accueil'
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