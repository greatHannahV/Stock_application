import { useAppContext } from "../../AppContext";

import {
  WatchlistContentStyle,
  WatchlistHeader,
} from "./WatchlistContent.styles";
import SkeletonWatchlist from "../skeletons/SkeletonWatchlist/SkeletonWatchlist";
import { memo } from "react";
import WatchlistContentBody from "../WatchlistContentBody/WatchlistContentBody";
import WatchlistContentHeader from "../WatchlistContentHeader/WatchlistContentHeader";
import { useBookmarks } from "#src/hooks/useBookmarks.tsx";

function WatchlistContent() {
  const { isLoading } = useAppContext();
  const { removeBookmark } = useBookmarks();

  const { bookedStocks } = useAppContext();

  if (isLoading) {
    return <SkeletonWatchlist />;
  }

  return (
    <WatchlistContentStyle>
      <WatchlistHeader>
        Equity Watchlist ({bookedStocks.length})
      </WatchlistHeader>
      <WatchlistContentHeader />
      <WatchlistContentBody
        bookedStocks={bookedStocks}
        removeBookmark={removeBookmark}
      />
    </WatchlistContentStyle>
  );
}

export default memo(WatchlistContent);
