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

const { bootstrap: _bootstrap , mount: _mount, unmount: _unmount } = lifecycles;

export async function bootstrap(...props): Promise<any>{
  return await _bootstrap(...props);
}

export async function mount(props): Promise<any>{
  return await _mount(...props);
}

export async function unmount(props): Promise<any>{
  return await _unmount(...props);
}