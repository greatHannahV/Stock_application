import DeleteButton from '../DeleteButton/DeleteButton'
import WatchlistContentTableRow from '../WatchlistContentTableRow/WatchlistContentTableRow'
import { TableBody, BookedStocksStyle } from './WatchlistContentBody.styles'
import { Meta } from '#src/services/StockServices.types.ts'

export type WatchlistContentBodyProps = {
  bookedStocks: Meta[]
  removeBookmark: (stock: Meta) => void
}
function WatchlistContentBody({
  bookedStocks,
  removeBookmark,
}: WatchlistContentBodyProps) {
  return (
    <TableBody>
      {bookedStocks
        .filter((stock): stock is Meta & { shortName: string } =>
          Boolean(stock.shortName),
        )
        .map((stock) => (
          <BookedStocksStyle key={stock.symbol} data-testid="stock-row">
            <WatchlistContentTableRow stock={stock} />
            <DeleteButton stock={stock} onClick={removeBookmark} />
          </BookedStocksStyle>
        ))}
    </TableBody>
  )
}

export default WatchlistContentBody
