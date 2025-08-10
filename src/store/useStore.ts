import { create } from 'zustand';
import { IUseStore } from './type';

export const initialState:IUseStore = {
    isFocused: false,
    searchText: "",
    items: [],
    isLoading: false,
}


export const useStore = create<IUseStore>((set => ({
    ...initialState,
    setIsFocused: isFocused => set(state => ({ ...state, isFocused })),
    setSearchText: searchText => set(state => ({ ...state, searchText })),
    setItems: items => set(state => ({ ...state, items })),
    setIsLoading: isLoading => set(state => ({ ...state, isLoading })),
})))
