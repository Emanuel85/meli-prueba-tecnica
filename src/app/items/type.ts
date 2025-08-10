export interface Props {
    searchParams: Promise<{ search?: string }>;
}

export interface Items {
    id: string,
    title: string,
    price: {
        "currency": string,
        "amount": number,
        "decimals": number
    },
    picture: string,
    condition: string,
    free_shipping: boolean
}