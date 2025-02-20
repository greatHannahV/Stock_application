import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import DeleteButton from "./DeleteButton";
import { Meta } from "../../services/StockServices.types";
import { vi } from "vitest";

describe("DeleteButton", () => {
  it("should call onClick with the correct stock when clicked", async () => {
    const mockOnClick = vi.fn();

    const mockStock: Meta = {
      shortName: "Apple",
      symbol: "AAPL",
      regularMarketChange: -2.55,
      regularMarketChangePercent: -1.35,
      currency: "USD",
      exchangeName: "NASDAQ",
      fullExchangeName: "NASDAQ Stock Market",
      instrumentType: "EQUITY",
      regularMarketTime: 1666666,
    };

    render(
      <MemoryRouter>
        <DeleteButton stock={mockStock} onClick={mockOnClick} />
      </MemoryRouter>
    );

    const button = screen.getByTestId("delete-button-container");

    await userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(mockStock);
  });
});
