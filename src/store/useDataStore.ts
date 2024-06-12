import { create } from "zustand";

interface DataState {
  login: boolean;
  isLogin: (data: boolean) => void;
};

const useDataStore = create<DataState>()((set) => ({
  login: false,
  isLogin: (data) => set({ login: data }),
}));

export default useDataStore;