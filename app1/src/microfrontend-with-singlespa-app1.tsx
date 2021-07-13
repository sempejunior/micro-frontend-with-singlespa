import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

const { bootstrap: _bootstrap, mount: _mount, unmount: _unmount } = lifecycles;


export function bootstrap(props) {
  return Promise.resolve().then(() => {
    _bootstrap(props);
    console.log('bootstrapped app1!');
  });
};

export function mount(props) {
  return Promise.resolve().then(() => {
    _mount(props);
    console.log('mounted app1!');
  });
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    _unmount(props);
    // Do framework UI unrendering here
    console.log('unmounted app1!');
  });
}