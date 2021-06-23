import React from "react";
// @ts-ignore
import {objectFactory} from "@microfrontend-with-singlespa/utility";

export default function Root(props) {
  objectFactory();
  return <section>{props.name} is mounted!</section>;
}
