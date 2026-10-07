import   {render, screen, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore.js";
import Header from "../Header.js";
import UserContext from "../../utils/UserContext.js";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

test("should load header component with login button", () => {
    render(<BrowserRouter><Provider store={appStore}><UserContext.Provider value={{loggedInUser: "Satish"}}><Header /></UserContext.Provider></Provider></BrowserRouter>);
    const button = screen.getByRole("button",{name:"Login"});
    expect(button).toBeInTheDocument();
})

test("should load header component with cart item", () => {
    render(<BrowserRouter><Provider store={appStore}><UserContext.Provider value={{loggedInUser: "Satish"}}><Header /></UserContext.Provider></Provider></BrowserRouter>);
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

test("should change login button to logout onclick", () => {
    render(<BrowserRouter><Provider store={appStore}><UserContext.Provider value={{loggedInUser: "Satish"}}><Header /></UserContext.Provider></Provider></BrowserRouter>);
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})