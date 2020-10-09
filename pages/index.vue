<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="Espresso"
            :counter="10"
            label="Espresso "
            required
          />
          <v-text-field
            v-model="Cappuccino"
            :counter="10"
            label="Cappuccino"
            required
          />
          <v-text-field v-model="Mocca" :counter="10" label="Mocca " required />

          <v-text-field v-model="Latte" :counter="10" label="Latte" required />

          <v-text-field
            v-model="Doppio"
            :counter="10"
            label="Doppio"
            required
          />
          <v-text-field
            v-model="Americano"
            :counter="10"
            label="Americano"
            required
          />
        </v-col>
      </v-row>
    </v-container>

    <v-btn color="success" class="mr-4" @click="validate"> submit </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      Espresso: '',
      Cappuccino: '',
      Mocca: '',
      Email: '',
      Doppio: '',
      Americano: '',
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const Espresso = this.Espresso
      const Cappuccino = this.Cappuccino
      const Mocca = this.Mocca
      const Latte = this.Latte
      const Doppio = this.Doppio
      const Americano = this.Americano
      this.$store.commit('input', {
        Espresso,
        Cappuccino,
        Mocca,
        Latte,
        Doppio,
        Americano,
      })
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url(https://www.khundee.com/wp-content/uploads/2019/01/roasted-bean.png);
  background-size: cover;
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
}
</style>
