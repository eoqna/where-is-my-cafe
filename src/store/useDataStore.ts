import { create } from "zustand";

interface DataState {
  login: boolean;
  isLogin: (data: boolean) => void;
  allCafeList: ApiResponse.CafeInfoProps[];
  setAllCafeList: (data: ApiResponse.CafeInfoProps[]) => void;
  cafeList: ApiResponse.CafeInfoProps[];
  setCafeList: (data: ApiResponse.CafeInfoProps[]) => void;
};

const useDataStore = create<DataState>()((set) => ({
  login: false,
  isLogin: (data) => set({ login: data }),
  allCafeList: [],
  setAllCafeList: (data) => set({ allCafeList: data }),
  cafeList: [],
  setCafeList: (data) => set({ cafeList: data }),
}));

export default useDataStore;