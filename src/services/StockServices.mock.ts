import { fn } from "@storybook/test";
import * as actual from "./StockServices";

export * from "./StockServices";
export const getStocksData = fn(actual.getStocksData).mockName("getStocksData");
export const fetchStockTicker = fn(actual.fetchStockTicker).mockName(
  "fetchStockTicker"
);
