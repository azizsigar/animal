import { create } from "zustand";
import babyNames from "../../babyNamesData.json";

const useSearchStore = create((set) => ({
  searchQuery: "",
  filteredNames: babyNames,
  setSearchQuery: (query) =>
    set((state) => ({
      searchQuery: query,
      filteredNames: babyNames.filter((baby) =>
        baby.name.toLowerCase().includes(query.toLowerCase())
      ),
    })),
}));

export default useSearchStore;
