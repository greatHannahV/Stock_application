import { describe, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import WatchlistContentBody from "./WatchlistContentBody";
import { AppContext } from "../../AppContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mockStocks = [
  {
    shortName: "Apple",
    symbol: "AAPL",
    regularMarketChange: -2.55,
    regularMarketChangePercent: -1.35,
    currency: "USD",
    exchangeName: "NASDAQ",
    fullExchangeName: "NASDAQ Stock Market",
    instrumentType: "EQUITY",
    regularMarketTime: 1733323171,
  },
  {
    shortName: "Tesla",
    symbol: "TSLA",
    regularMarketChange: 1.25,
    regularMarketChangePercent: 3.8,
    currency: "USD",
    exchangeName: "NASDAQ",
    fullExchangeName: "NASDAQ Stock Market",
    instrumentType: "EQUITY",
    regularMarketTime: 1733323171,
  },
];
const setBookedStocks = vi.fn();
const setFilteredStocks = vi.fn();
const mockSetStocks = vi.fn();
const mockSetSearch = vi.fn();

const mockContextValue = {
  bookedStocks: mockStocks,
  setBookedStocks: setBookedStocks,
  setFilteredStocks: setFilteredStocks,
  stocks: [],
  setStocks: mockSetStocks,
  filteredStocks: [],
  search: "Tesla",
  setSearch: mockSetSearch,
  isLoading: false,
};

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={["/watchlist"]}>
      <AppContext.Provider value={mockContextValue}>
        <QueryClientProvider client={queryClient}>
          <WatchlistContentBody
            bookedStocks={mockStocks}
            removeBookmark={setBookedStocks}
          />
        </QueryClientProvider>
      </AppContext.Provider>
    </MemoryRouter>
  );
});

describe("WatchlistContent component works correctly", () => {
  it("the button should be clicked", async () => {
    const buttons = screen.getAllByTestId("delete-button-container");
    await userEvent.click(buttons[0]);

    expect(setBookedStocks).toHaveBeenCalledTimes(1);
  });

  it("Applies correct styles based on props", () => {
    // Check the first stock (Apple)
    const appleCell = screen.getByText("-2.55");
    expect(appleCell).toHaveStyle("color:#A80000");

    // Check the second stock (Tesla)
    const teslaCell = screen.getByText("1.25");
    expect(teslaCell).toHaveStyle("color:#005700");
  });
});
