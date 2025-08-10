// Formatea el valor aplicando un descuento del 21% antes de mostrarlo
export function tax(value: number, currency: string) {
    const discounted = (value * 1.21) - value;
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        minimumFractionDigits: 0,
        currency: currency,
    }).format(value - discounted);
}
