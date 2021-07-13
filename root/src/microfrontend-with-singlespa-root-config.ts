import { registerApplication, start } from "single-spa";

registerApplication({
  name: "app1",
  app: () => System.import("@microfrontend-with-singlespa/app1"),
  //activeWhen is used to call another mfe when call this props
  //this example is always true
  activeWhen: () => true,
});

registerApplication({
  name: "app2",
  app: () => System.import("@microfrontend-with-singlespa/app2"),
  //activeWhen is used to call another mfe when call this props
  //this example is mounted when /app2 is called
  activeWhen: ["/app2"],
});

registerApplication({
  name: "app3",
  app: () => System.import("@microfrontend-with-singlespa/appvue"),
  //activeWhen is used to call another mfe when call this props
  //this example is mounted when /app2 is called
  activeWhen: ["/app3"],
});

start({
  urlRerouteOnly: true,
});
