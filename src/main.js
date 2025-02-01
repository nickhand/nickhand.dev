import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import "./index.css";

/* import specific icons */
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationPin,
  faCheck,
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faGithub,
  faTwitter,
  faLinkedinIn,
  faEnvelope,
  faLocationPin,
  faCheck,
  faXmark,
  faCircleXmark,
  faArrowUpRightFromSquare
);

// Create the app
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(createMetaManager())
  .use(router)
  .mount("#main");
