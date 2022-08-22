<template>
  <div>
    <v-autocomplete
      return-object
      v-model="selectedAPI"
      :items="items"
      item-text="name"
      @change="update()"
      menu-props="closeOnContentClick"
      clearable
    ></v-autocomplete>

    <Swagger-Ui v-if="show" :spec="spec"></Swagger-Ui>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Pegel-online API",
        spec: require("~/assets/openapi/openapi.json"),
      },
    ],
    spec: "",
    selectedAPI: null,
    show: false,
  }),

  methods: {
    update() {
      this.show = false;
      if (this.selectedAPI) {
        this.spec = this.selectedAPI.spec;
        this.show = true;
      }
    },
  },
};
</script>

<style>
</style>