import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemDetailPage from '../src/app/items/[id]/page';

// Mock para test
const mockGetItemByIdSSR = jest.fn();
const makeFixture = () => ({
    author: { name: 'Acme', lastname: 'Store' },
    categories: ['Tecnología', 'Celulares'],
    item: {
        id: 'MLA-1',
        title: 'iPhone 13 128GB',
        picture: 'https://picsum.photos/200/300?random=1',
        condition: 'new',
        free_shipping: true,
        price: { amount: 123456, currency: 'ARS' },
        description: 'Pantalla OLED, A15 Bionic',
        rating: { score: 4.6, count: 120 },
        sold_quantity: 3,
    },
});
jest.mock('next/link', () => ({ __esModule: true, default: ({ href, children, ...p }) => <a href={href} {...p}>{children}</a>, }));
jest.mock('next/image', () => (props) => <img {...props} alt={props.alt || ''} />);
jest.mock('../src/api/apiMeli', () => ({ __esModule: true, getItemByIdSSR: (...args) => mockGetItemByIdSSR(...args), default: { getItemByIdSSR: (...args) => mockGetItemByIdSSR(...args) }, }));


describe('ItemDetailPage (detalle de producto)', () => {
    beforeEach(async () => {
        mockGetItemByIdSSR.mockReset();
        mockGetItemByIdSSR.mockResolvedValue(makeFixture());
        const ui = await ItemDetailPage({ params: Promise.resolve({ id: 'MLA-1' }) });
        render(ui);
    });

    it('renderiza el título del producto', async () => {
        expect(await screen.findByTestId('info_title'))
            .toHaveTextContent('iPhone 13 128GB');
    });

    it('renderiza la descripción', () => {
        expect(screen.getByTestId('card_description'))
            .toHaveTextContent('Pantalla OLED, A15 Bionic');
    });

    it('renderiza el precio', async () => {
        const boxes = await screen.findAllByTestId('info_price');
        const priceBox =
            boxes.find(n => /Precio sin impuestos nacionales/i.test(n.textContent || '')) ?? boxes[0];

        // Busca el valor formateado dentro del bloque (e.g. "$ 123.456")
        expect(within(priceBox).getByText(/\$\s*123\.456\b/)).toBeInTheDocument();
    });

    it('renderiza los dos botones de acción', () => {
        expect(screen.getByRole('button', { name: /comprar ahora/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /agregar al carrito/i })).toBeInTheDocument();
    });

    it('renderiza los mensajes de envío', () => {
        expect(screen.getByText(/Llega gratis/i)).toBeInTheDocument();
        expect(screen.getByText(/Retira gratis/i)).toBeInTheDocument();
    });
});
