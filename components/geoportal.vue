<template>
  <div>
    <v-row align="center" justify="center">
      <v-col md="8" sm="10" xs="12">
        <v-autocomplete
          return-object
          v-model="selectedAPI"
          :items="apis"
          :item-text="(item) => item.name + ' (' + item.id + ')'"
          @change="update()"
          menu-props="closeOnContentClick"
          clearable
          chips
          label="Please select an API"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <template v-if="selectedAPI">
      <v-card flat>
        <div>
          <h3>
            <span v-if="selectedAPI.office">{{ selectedAPI.office }}:</span>
            {{ selectedAPI.name }}
          </h3>
          <p>{{ selectedAPI.description }}</p>
          <v-card-actions>
            <v-btn
              elevation="2"
              outlined
              :href="selectedAPI.officalAPI"
              v-if="selectedAPI.officalAPI"
              target="_blank"
            >
              Offizielle OpenAPI</v-btn
            >
            <v-btn
              elevation="2"
              outlined
              :href="selectedAPI.url"
              v-if="selectedAPI.url"
              target="_blank"
            >
              Homepage</v-btn
            >
          </v-card-actions>
        </div>
      </v-card>
    </template>
    <Swagger-Ui v-if="show" :url="url"></Swagger-Ui>
  </div>
</template>

<script>
export default {
  props: {
    apis: {},
  },

  data: () => ({
    url: "",
    selectedAPI: null,
    show: false,
  }),

  methods: {
    async update() {
      this.show = false;
      if (this.selectedAPI) {
        this.url = this.selectedAPI.rawOpenAPI;
        this.selectedAPI.officalAPI = this.selectedAPI.url + "/api";
        await this.$nextTick();
        this.show = true;
      }
    },
  },
};
</script>

<style>
</style>