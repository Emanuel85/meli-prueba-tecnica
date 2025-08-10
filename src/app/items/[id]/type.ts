export interface Props {
    params: Promise<{ id: string }>;
}

export interface Items {
    id: string,
    title: string,
    price: {
        "currency": string,
        "amount": number,
        "decimals": number
    },
    pictur: string,
    condition: string,
    free_shipping: boolean
}

export interface ProductSeller {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string,
    rating: {
        score: number,
        count: number
    }
}

export interface Seller {
    name: string,
    lastname: string
}