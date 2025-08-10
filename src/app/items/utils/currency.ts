export function currency(value: number, currency: string) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        minimumFractionDigits: 0,
        currency: currency,
    }).format(value);
}
