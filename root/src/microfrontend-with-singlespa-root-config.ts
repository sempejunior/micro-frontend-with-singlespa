import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@microfrontend-with-singlespa/navbar",
//   app: () => System.import("@microfrontend-with-singlespa/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
