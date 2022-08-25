<template>
  <div>
    <v-card class="mx-auto mb-4" max-width="700" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            Offene Geodaten des Landes Saarland
          </div>
          <v-list-item-title class="text-h5 mb-1">
            Geoportal Saarland
          </v-list-item-title>
          <v-list-item-subtitle
            >Sammlung der vom Geoportal Saarland zur Verfügung gestellen OpenAPI
            Dokumentationen.
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="100" class="geoportal-sl"
          >geoportal.<br />saarland.de
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
          href="https://geoportal.saarland.de/"
          target="_blank"
        >
          Homepage
        </v-btn>
        <v-spacer />
        <v-chip v-if="count" class="geoportal-sl">{{ count }} APIs</v-chip>
      </v-card-actions>
    </v-card>
    <Geoportal :apis="apis"></Geoportal>
  </div>
</template>

<script>
export default {
  data: () => ({
    apis: [],
    count: null,
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
  async fetch() {
    const response = await fetch(
      "https://t-huyeng.github.io/geoportal-openapis/geoportal_sl.json"
    );
    const data = await response.json();
    this.count = data.length;
    this.apis = data;
  },
};
</script>

<style>
</style>