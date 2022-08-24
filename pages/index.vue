<template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title> Sammlung von OpenAPI Dokumenationen </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> BundDEV</v-card-title>

                <v-card-subtitle>Bundesstelle für Open Data</v-card-subtitle>

                <v-card-actions>
                  <v-btn text to="bunddev"> APIs </v-btn>
                  <v-btn text href="https://bund.dev" target="_blank">
                    Homepage<v-icon right dark> mdi-open-in-new</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ma-3 geoportal-he-invert" size="80" tile>
                <v-img
                  max-width="80"
                  src="https://bund.dev/bundesapi.jpg"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="geoportal-he" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5"> Geoportal Hessen</v-card-title>

                <v-card-subtitle>
                  Offene Geodaten des Landes Hessen
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn text to="geoportal-he"> APIs </v-btn>
                  <v-btn
                    text
                    href="https://www.geoportal.hessen.de/"
                    target="_blank"
                  >
                    Homepage <v-icon right dark> mdi-open-in-new</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ma-3 geoportal-he-invert" size="80" tile
                >geoportal.<br />hessen.de
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="geoportal-rlp" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Geoportal Rheinland-Pfalz</v-card-title
                >

                <v-card-subtitle>
                  Offene Geodaten des Landes Rheinland-Pfalz
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn text to="geoportal-rlp"> APIs </v-btn>
                  <v-btn
                    text
                    href="https://www.geoportal.rlp.de/"
                    target="_blank"
                  >
                    Homepage <v-icon right dark> mdi-open-in-new</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ma-3 geoportal-rlp-invert" size="80" tile
                >geoportal.<br />rlp.de
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>