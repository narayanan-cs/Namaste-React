    import { render, screen , fireEvent} from "@testing-library/react";    
    import RestaurantMenu from "../RestaurantMenu.js";  
    import MOCK_DATA  from "../mocks/mockresmenu.json";
    import {act} from "react-dom/test-utils";
    import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import Header from "../Header.js";
import { BrowserRouter} from "react-router-dom";
import Cart from "../Cart.js";

    global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
    );


    it('should load restaurant menu component with data', async () => {
        
        await act( async () => {
            render(<BrowserRouter><Provider store={appStore}><Header/><RestaurantMenu /><Cart /></Provider></BrowserRouter>);
        });

        const accordionHeader = screen.getAllByText("Beverages (1)");
        expect(accordionHeader[0]).toBeInTheDocument();
        fireEvent.click(accordionHeader[0]);
        expect(screen.getAllByTestId("food-items").length).toBe(1);
        const menuItem = screen.getByText("Chilled 500ml Coca Cola");
        expect(menuItem).toBeInTheDocument();

        const addBtn = screen.getAllByRole("button",{value: "Add"})
        
        expect(screen.getByText("Cart (0)")).toBeInTheDocument();
        fireEvent.click(addBtn[1]);
        expect(await screen.findByText("Cart (1)")).toBeInTheDocument();
        fireEvent.click(addBtn[1]);
        expect(screen.getByText("Cart (2)")).toBeInTheDocument();

        expect(screen.getAllByTestId("food-items").length).toBe(3);
        fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}))
        expect(screen.getByText("Cart is empty")).toBeInTheDocument();


    });    