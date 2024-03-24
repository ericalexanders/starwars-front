// CardItem.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import CardItem from "../../components/Card";

const mockItem = {
  url: "https://example.com/people/1",
  rgx: /\/people\/(\d+)\//,
  title: "Título de Prueba",
  header: "Masculino",
  body1: "Este es el primer párrafo del cuerpo.",
  body2: "Este es el segundo párrafo del cuerpo.",
  extended1: "Información extendida 1",
  extended2: "Información extendida 2",
  extended3: "Información extendida 3"
};

describe("CardItem Component", () => {
  const asPath = "/"
  it("renders without crashing", () => {
    render(<CardItem item={mockItem} asPath={asPath} />);
    expect(screen.getByText("Título de Prueba")).toBeInTheDocument();
    expect(screen.getByText("Genero: Masculino")).toBeInTheDocument();
  });

  it("does not render the footer if noFooter is true", () => {
    render(<CardItem item={mockItem} noFooter={true} asPath={asPath} />);
    expect(screen.queryByText("Ver más detalles")).not.toBeInTheDocument();
  });

  it("renders extended information when extended is true", () => {
    render(<CardItem item={mockItem} extended={true} asPath={asPath} />);
    expect(screen.getByText("Información extendida 1")).toBeInTheDocument();
    expect(screen.getByText("Información extendida 2")).toBeInTheDocument();
    expect(screen.getByText("Información extendida 3")).toBeInTheDocument();
  });

  it("displays 'Null' when no item is provided", () => {
    render(<CardItem item={null} asPath={asPath} />);
    expect(screen.getByText("Null")).toBeInTheDocument();
  });
});
