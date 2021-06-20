import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@microfrontend-with-singlespa/app1",
  app: () => System.import("@microfrontend-with-singlespa/app1"),
  //activeWhen is used to call another mfe when call this props
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
