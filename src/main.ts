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

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
