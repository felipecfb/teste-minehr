import React from "react";
import Graphs from "../Graphs";
import Header from "../Header";
import { Container } from "./styles";

export default function Content() {
  return (
    <Container>
        <Header />
        <Graphs />
    </Container>
  );
}
