<template>
  <div>
    <v-autocomplete
      return-object
      v-model="selectedAPI"
      :items="apis"
      item-text="name"
      @change="update()"
      menu-props="closeOnContentClick"
      clearable
      chips
    ></v-autocomplete>
    <template v-if="selectedAPI">
      <v-card flat>
        <div class="content">
          <h3>
            <span class="institution">{{ selectedAPI.office }}:</span>
            {{ selectedAPI.name }}
          </h3>
          <p>{{ selectedAPI.description }}</p>
          <v-btn
            elevation="2"
            outlined
            :href="selectedAPI.githubURL"
            v-if="selectedAPI.githubURL"
            target="_blank"
          >
            GitHub</v-btn
          >
        </div>
      </v-card>
    </template>
    <Swagger-Ui v-if="show" :url="url"></Swagger-Ui>
    <span v-else> Please select an API </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    apis: [],
    url: "",
    selectedAPI: null,
    show: false,
  }),

  methods: {
    async update() {
      this.show = false;
      if (this.selectedAPI) {
        this.url = this.selectedAPI.rawOpenAPI;
        await this.$nextTick();
        this.show = true;
      }
    },
  },
  async fetch() {
    const response = await fetch(
      // TODO use api.bund.dev
      "https://t-huyeng.github.io/bunddev-apis/"
    );
    const data = await response.json();
    this.apis = data;
  },
};
</script>

<style>
</style>