<template>
  <div>
    <v-card class="mx-auto mb-4" max-width="700" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            Offene Geodaten des Landes Rheinland-Pfalz
          </div>
          <v-list-item-title class="text-h5 mb-1">
            Geoportal Rheinland-Pfalz
          </v-list-item-title>
          <v-list-item-subtitle
            >Sammlung der vom Geoportal Rheinland-Pfalz zur Verfügung gestellen
            OpenAPI Dokumentationen.
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="100" class="geoportal-rlp"
          >geoportal.<br />rlp.de
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
          href="https://www.geoportal.rlp.de/"
          target="_blank"
        >
          Homepage
        </v-btn>
        <v-spacer />
        <v-chip v-if="count" class="geoportal-rlp">{{ count }} APIs</v-chip>
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

  async fetch() {
    const response = await fetch(
      "https://t-huyeng.github.io/geoportal-openapis/geoportal_rlp.json"
    );
    const data = await response.json();
    this.count = data.length;
    this.apis = data;
  },
};
</script>

<style>
</style>