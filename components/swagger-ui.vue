 <template>
  <div id="swagger" class="swagger"></div>
</template>

 <script>
import SwaggerUIBundle from "~/assets/swagger/swagger-ui-bundle.min.js";
export default {
  name: "Swagger-UI",

  props: {
    url: {
      required: true,
    },
  },

  mounted() {
    SwaggerUIBundle({
      url: this.url,
      dom_id: "#swagger",
    });
  },
};
</script>


<style>
</style>