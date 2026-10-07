import { render, screen , fireEvent} from "@testing-library/react";
import Body from "../Body.js";
import "@testing-library/jest-dom";
import MOCK_DATA  from "../mocks/mockListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import UserContext from "../../utils/UserContext.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
);

describe("Body component", () => {
  beforeEach(() => {
    //fetch.mockClear();
  });
    beforeAll(() => {
    fetch.mockClear();
  });

  afterAll(() => {
   // fetch.mockClear();
  });
  afterEach(() => {
    //fetch.mockClear();
  });


it("should search reslist by input value pizza", async () => {
    await act(async ()=> await render(<BrowserRouter><Body /></BrowserRouter>));
    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByRole("button", { name: "Search" });
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    
    //screen should load 4 cards
    fireEvent.click(searchButton);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
    //expect(searchInput).toBeInTheDocument();

    expect(searchButton).toBeInTheDocument();
  })

  it("should filter top rated restaurants", async () => {
    await act(async ()=> await render(<BrowserRouter><Body /></BrowserRouter>));
    
    const topRatedRestaurantsButton = screen.getByRole("button", { name: "Top Rated Restaurants" });
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);
    fireEvent.click(topRatedRestaurantsButton);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(3);
    

    expect(topRatedRestaurantsButton).toBeInTheDocument();
  })

  it("should change context with entered input value", async () => {
    const TestProvider = ({ children }) => {
    const [userName, setUserName] = useState("Default User");

    return (
        <UserContext.Provider
            value={{
                loggedInUser: userName,
                setUserName: setUserName
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
    await act(async ()=> await render(<BrowserRouter><TestProvider><Body /></TestProvider></BrowserRouter>));
    const inputs= await screen.getAllByPlaceholderText("enter a name");
    expect(inputs[1]).toBeInTheDocument();

    fireEvent.change(inputs[1], {target: {value: "Ajju"}} );
    expect(screen.getAllByText(/Welcome, Ajju!/)[0]).toBeInTheDocument();
  })

})