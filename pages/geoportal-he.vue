<template>
  <div>
    <v-card class="mx-auto mb-4" max-width="700" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            Offene Geodaten des Landes Hessen
          </div>
          <v-list-item-title class="text-h5 mb-1">
            Geoportal Hessen
          </v-list-item-title>
          <v-list-item-subtitle
            >Sammlung der vom Geoportal Hessen zur Verfügung gestellen OpenAPI
            Dokumentationen.
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" class="geoportal-he"
          >geoportal.<br />hessen.de
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
          href="https://www.geoportal.hessen.de/"
          target="_blank"
        >
          Homepage
        </v-btn>
        <v-spacer />
        <v-chip v-if="count" class="geoportal-he">{{ count }} APIs</v-chip>
      </v-card-actions>
    </v-card>
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
              :href="selectedAPI.rawOpenAPI"
              v-if="selectedAPI.rawOpenAPI"
              target="_blank"
            >
              Offizielle OpenAPI</v-btn
            >
            <v-btn
              elevation="2"
              outlined
              :href="selectedAPI.page"
              v-if="selectedAPI.page"
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
  data: () => ({
    apis: [],
    url: "",
    selectedAPI: null,
    show: false,
    count: null,
    rawUrl:
      "https://raw.githubusercontent.com/t-huyeng/geoportal-openapis/main/",
  }),

  methods: {
    async update() {
      this.show = false;
      if (this.selectedAPI) {
        this.url = this.rawUrl + this.selectedAPI.url;
        var rawPage = this.selectedAPI.rawOpenAPI;
        this.selectedAPI.page = rawPage.slice(0, rawPage.lastIndexOf("/"));
        await this.$nextTick();
        this.show = true;
      }
    },
  },
  async fetch() {
    const response = await fetch(
      "https://t-huyeng.github.io/geoportal-openapis/geoportal_he.json"
    );
    const data = await response.json();
    this.count = data.length;
    console.log(data.length);
    this.apis = data;
  },
};
</script>

<style>
</style>