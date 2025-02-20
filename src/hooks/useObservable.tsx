import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export const useObservable = <T,>(fa: Observable<T>, initialValue: T): T => {
  const [value, setValue] = useState(() => initialValue);
  useEffect(() => {
    const subscription = fa.subscribe((a) => {
      setValue(a);
    });
    return () => subscription.unsubscribe();
  }, [fa]);
  return value;
};
