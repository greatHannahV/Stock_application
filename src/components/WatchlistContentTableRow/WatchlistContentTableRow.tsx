import {
  TableBodyItems,
  TableNameAndSymbol,
  ShortNameStyle,
  MarketChange,
  SymbolStyle,
} from "./WatchlistContentTableRow.styles.";

export type TableRowProps = {
  stock: {
    shortName: string;
    symbol: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketPrice?: number;
    currency: string;
  };
};

function WatchlistContentTableRow({ stock }: TableRowProps) {
  const $isNegativeChange =
    stock.regularMarketChange < 0 || stock.regularMarketChangePercent < 0;

  const $isNegativePrice =
    stock.regularMarketPrice !== undefined && stock.regularMarketPrice < 0;

  return (
    <TableBodyItems to={`/chart/${stock.symbol}`}>
      <TableNameAndSymbol>
        <ShortNameStyle>{stock.shortName}</ShortNameStyle>
        <SymbolStyle>{stock.symbol}</SymbolStyle>
      </TableNameAndSymbol>
      <MarketChange $isNegative={$isNegativePrice} data-testid="test-cell">
        {stock.currency === "USD" ? "$" : stock.currency}
        {stock.regularMarketPrice ? stock.regularMarketPrice.toFixed(2) : 0}
      </MarketChange>
      <MarketChange $isNegative={$isNegativeChange}>
        {stock.regularMarketChange.toFixed(2)}
      </MarketChange>
    </TableBodyItems>
  );
}

export default WatchlistContentTableRow;
