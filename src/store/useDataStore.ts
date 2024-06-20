import { create } from "zustand";

interface DataState {
  login: boolean;
  isLogin: (data: boolean) => void;
  cafeList: ApiResponse.CafeInfoProps[];
  setCafeList: (data: ApiResponse.CafeInfoProps[]) => void;
};

const useDataStore = create<DataState>()((set) => ({
  login: false,
  isLogin: (data) => set({ login: data }),
  cafeList: [],
  setCafeList: (data) => set({ cafeList: data }),
}));

export default useDataStore;