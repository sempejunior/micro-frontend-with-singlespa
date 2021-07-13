import React, { useState } from "react";
// @ts-ignore
import {objectFactory} from "@microfrontend-with-singlespa/utility";

export default function Root(props) {

  console.log(objectFactory);

  const [state] = useState(objectFactory());

  objectFactory();
  return <section>{props.name} is mounted and the state is {state.status}!</section>;
}
