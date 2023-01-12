import { render, screen } from "@testing-library/react";
import LoginPage from "../components/pages/LoginPage";

test("texts display on initial render", () => {
  //   const { getByText } = render(<LoginPage />);
  // expect(getByText("Welcome!")).toBeInTheDocument();
  render(<LoginPage />);
  screen.getByRole("");

  //   expect(getByText("Login")).toBeInTheDocument();
  //   expect(getByText("Username")).toBeInTheDocument();
  //   expect(getByText("Password")).toBeInTheDocument();
  //   expect(getByText("Login")).toBeInTheDocument();
});
