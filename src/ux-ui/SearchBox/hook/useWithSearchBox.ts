import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "../../../store/useStore";// Assuming this is a custom hook to fetch items

export function useWithSearchBox() {
    const { isFocused, searchText, setIsFocused, setSearchText } = useStore()
    const router = useRouter();
    const searchParams = useSearchParams();

    React.useEffect(() => {
        const param = searchParams.get("search") ?? "";
        setSearchText?.(param);
    }, [searchParams]);



    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchText?.(e.target.value);
    }

    function handleFocus() {
        setIsFocused?.(true);
    }

    function handleBlur() {
        setIsFocused?.(false);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Solo redireccionar si el submit es por Enter o click en el botón submit
        if (searchText.trim()) {
            router.push(`/items?search=${encodeURIComponent(searchText)}`);
        }
    }

    return {
        isFocused,
        searchText,
        handleInputChange,
        handleFocus,
        handleBlur,
        handleSubmit
    };
}