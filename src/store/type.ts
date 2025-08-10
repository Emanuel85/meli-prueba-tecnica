
export interface IUseStore{
    isFocused: boolean;
    setIsFocused?: (isFocused: boolean) => void;
    searchText: string;
    setSearchText?: (searchText: string) => void;
    items: any[];
    setItems?: (items: any[]) => void;
    isLoading: boolean;
    setIsLoading?: (isLoading: boolean) => void;
}