import useSearchStore from "./store.js";

export const useSearch = () => {
  const filteredNames = useSearchStore((state) => state.filteredNames);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  return { filteredNames, setSearchQuery };
};
