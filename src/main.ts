import { createApp } from "vue";
import App from "./app/App.vue";
import "swiper/css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/index.css";
import "./styles/element-plus.css";
import router from "./app/router";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";

const app = createApp(App);
const queryClient = new QueryClient();
const pinia = createPinia();

app.use(ElementPlus);
app.use(router);
app.use(pinia);
app.use(VueQueryPlugin, { queryClient });
app.mount("#app");
