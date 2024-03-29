import "./global.css";
import "regenerator-runtime/runtime";
import ViewHome from "./routes/home";
import ViewAbout from "./routes/about";
import ViewTabs from "./routes/tabs";
import ViewTabRelated from "./routes/tabs/tab-related";
import ViewTabInfo from "./routes/tabs/tab-info";
import ViewContacts from "./routes/contacts";

//registers custom elements (routes & components)
window.customElements.define("view-home", ViewHome);
window.customElements.define("view-about", ViewAbout);
window.customElements.define("view-tabs", ViewTabs);
window.customElements.define("tab-info", ViewTabInfo);
window.customElements.define("tab-related", ViewTabRelated);
window.customElements.define("view-contacts", ViewContacts);
