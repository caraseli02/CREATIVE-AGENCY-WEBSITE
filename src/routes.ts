import Home from "./views/Index.vue";
import Contact from "./views/Contact.vue";
import Services from "./views/Services.vue";
import Work from "./views/Work.vue";
import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", component: Home, name: "Home", meta: { title: "Home" } },
  {
    path: "/contact",
    component: Contact,
    name: "Contact",
    meta: { title: "Contact" },
  },
  {
    path: "/services",
    component: Services,
    name: "Services",
    meta: { title: "Services" },
  },
  { path: "/work", component: Work, name: "Work", meta: { title: "Work" } },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: { title: "Page not found" },
  },
];
