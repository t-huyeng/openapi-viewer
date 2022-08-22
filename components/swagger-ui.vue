 <template>
  <div id="swagger" class="swagger"></div>
</template>

 <script>
import SwaggerUIBundle from "~/assets/swagger/swagger-ui-bundle.js";
export default {
  name: "Swagger-UI",

  props: {
    spec: {
      required: true,
    },
  },

  mounted() {
    SwaggerUIBundle({
      spec: this.spec,
      dom_id: "#swagger",
    });
  },
};
</script>


<style>
</style>