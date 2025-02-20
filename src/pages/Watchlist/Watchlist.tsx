import { memo } from "react";
import Navigation from "../../components/Navigation/Navigation";
import WatchlistContent from "../../components/WatchlistContent/WatchlistContent";
import { useQuery } from "@tanstack/react-query";
import { getStocksData } from "#src/services";

function Watchlist() {
  const { refetch, isFetching } = useQuery({
    queryKey: ["watchlistStocks"],
    queryFn: getStocksData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  return (
    <>
      <Navigation refetch={refetch} isFetching={isFetching} />
      <WatchlistContent />
    </>
  );
}

export default memo(Watchlist);
