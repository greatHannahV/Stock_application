import { memo, useEffect, useRef } from "react";
import { map, fromEvent } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";
import { Input, SearchBarContainer, SearchIcon } from "./Search.style";
import { useAppContext } from "../../AppContext";
import SearchBarResult from "../SearchBarResult/SearchBarResult";
import { BiSearch } from "react-icons/bi";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
type SearchProps = {
  isLoading: boolean;
};
const Search: React.FC<SearchProps> = ({ isLoading }) => {
  const { setSearch, search, stocks, bookedStocks } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const subscription = fromEvent(inputRef.current, "input")
        .pipe(
          debounceTime(400),
          map((event: Event) => (event.target as HTMLInputElement).value),
          tap((search) => setSearch(search))
        )
        .subscribe({
          error: (error) => {
            console.error("Error fetching data:", error);
          },
        });

      return () => subscription.unsubscribe();
    }
  }, [setSearch, inputRef]);

  return (
    <SearchBarContainer>
      <SearchIcon>
        <BiSearch style={{ fontSize: "24px" }} />
      </SearchIcon>
      <Input
        data-testid="search-input"
        ref={inputRef}
        type="text"
        placeholder="Search..."
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SearchBarResult
          search={search}
          stocks={stocks}
          bookedStocks={bookedStocks}
          onSearch={setSearch}
        />
      )}
    </SearchBarContainer>
  );
};

export default memo(Search);
