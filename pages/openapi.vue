<template>
  <Swagger-Ui :spec="spec"></Swagger-Ui>
</template>

<script>
export default {
  data: () => ({
    spec: require("~/assets/openapi/openapi.json"),
  }),
};
</script>

<style>
</style>