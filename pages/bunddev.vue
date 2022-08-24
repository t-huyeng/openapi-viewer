<template>
  <div>
    <v-card class="mx-auto mb-4" max-width="700" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Bundesstelle für Open Data</div>
          <v-list-item-title class="text-h5 mb-1"> Bund DEV </v-list-item-title>
          <v-list-item-subtitle>API-Portal des Bundes</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80"
          ><v-img max-width="80" src="https://bund.dev/bundesapi.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text href="https://bund.dev" target="_blank">
          Homepage
        </v-btn>
        <v-btn
          outlined
          rounded
          text
          href="https://github.com/bundesAPI"
          target="_blank"
        >
          GitHub
        </v-btn>
        <v-spacer />
        <v-chip v-if="count">{{ count }} APIs</v-chip>
      </v-card-actions>
    </v-card>
    <v-row align="center" justify="center">
      <v-col md="8" sm="10" xs="12">
        <v-autocomplete
          return-object
          v-model="selectedAPI"
          :items="apis"
          item-text="name"
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
              :href="selectedAPI.githubURL"
              v-if="selectedAPI.githubURL"
              target="_blank"
            >
              GitHub</v-btn
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
  data: () => ({
    apis: [],
    url: "",
    selectedAPI: null,
    show: false,
    count: null,
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
    this.count = data.length;
    this.apis = data;
  },
};
</script>

<style>
</style>