import {render, screen} from "@testing-library/react";
import ContactUs from "../ContactUs.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load contact component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

