import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard.js";
import {VegRestaurantCard} from "../VegRestaurantCard.js";
import "@testing-library/jest-dom";
import  resData  from "../mocks/resCardMock.json";

it("should load restaurant card component with data", () => {
    
    render(<RestaurantCard {...resData} />);
    console.log({...resData})
    const restaurantName = screen.getByText("Test Restaurant");
    expect(restaurantName).toBeInTheDocument();
});

it("should load restaurant card component with Vegetarian label", () => {
    
    const VegCard = VegRestaurantCard(RestaurantCard);
    render(<VegCard {...resData} />);
    const vegLabel = screen.getByText("Vegetarian");
    expect(vegLabel).toBeInTheDocument();
})