import { createContext, useContext, useEffect, useMemo } from "react";
import { Meta } from "./services/StockServices.types";
import { from, startWith, catchError, switchMap, of } from "rxjs";
import {
  fetchStockDetails,
  fetchStockSuggestions,
} from "./services/StockServices";
import { useObservable } from "./hooks/useObservable";
import { useBehavior } from "./hooks/useBehavior";
import { createBehaviorAdapter } from "./utils/behavior.utils";
import { pending } from "./utils/remoteData.utils";
import { failure, LiveData, success } from "./utils/liveData.utils";

interface AppContextProps {
  search: string;
  setSearch: (value: string) => void;
  bookedStocks: Meta[];
  setBookedStocks: (value: Meta[]) => void;
  stocks: Meta[];
  isLoading: boolean;
}

const initialBookedStocks: Meta[] = JSON.parse(
  localStorage.getItem("bookedStocks") || "[]"
);

const [setSearch, searchTerm$] = createBehaviorAdapter<string>("");
const [setBookedStocks, bookedStocks$] =
  createBehaviorAdapter<Meta[]>(initialBookedStocks);

const getStockDetails = (symbols: string[]): LiveData<Error, Meta[]> => {
  return from(fetchStockDetails(symbols)).pipe(
    switchMap((res) =>
      res && Array.isArray(res)
        ? success(res)
        : failure(new Error("Invalid or empty data"))
    ),
    catchError(() => failure(new Error("Error fetching stock details")))
  );
};

const getStockSuggestions = (search: string): LiveData<Error, Meta[]> => {
  if (!search.trim()) {
    return failure(new Error("Search term is empty"));
  }
  return from(fetchStockSuggestions(search)).pipe(
    startWith(pending()),
    switchMap((res) => {
      if ("_tag" in res) return of(res);

      if (res && Array.isArray(res)) {
        return success(res);
      }

      return failure(new Error("Invalid data format"));
    }),
    switchMap((res) => {
      if (res._tag === "Success") {
        const symbols = res.value.map((stock) => stock.symbol);
        return getStockDetails(symbols);
      }
      return of(res);
    }),
    catchError(() => failure(new Error("An error occurred while fetching")))
  );
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const bookedStocks = useBehavior(bookedStocks$);
  const search = useBehavior(searchTerm$);
  const stocks$ = useMemo(() => {
    if (!search.trim()) {
      return failure(new Error("Search term is empty"));
    }
    return getStockSuggestions(search);
  }, [search]);
  const stocks = useObservable(stocks$, pending());
  const isLoading = stocks._tag === "Pending";

  const stockData = stocks._tag === "Success" ? stocks.value : [];

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        stocks: stockData,
        bookedStocks,
        setBookedStocks,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
