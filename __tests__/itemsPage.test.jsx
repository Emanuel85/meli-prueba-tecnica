import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ItemsPage from '../src/app/items/page'
import { getItemsSSR } from '../src/api/apiMeli';

// Mock para test
jest.mock('../src/app/items/components/Categories', () => () => (<nav data-testid="container_navBar" />))
jest.mock('../src/app/items/components/ListCard', () => () => (<div data-testid="ListCard" />))
jest.mock('../src/ux-ui/msgCustom/MsgError', () => ({ errorMsg }) => (<p data-testid="msg_secondary">{errorMsg}</p>))
jest.mock('next/link', () => ({ __esModule: true, default: ({ href, children }) => <a href={href}>{children}</a>, }))
jest.mock('../src/api/apiMeli', () => {
  const getItemsSSR = jest.fn(); const getItemByIdSSR = jest.fn(); return {
    __esModule: true, getItemsSSR, getItemByIdSSR,
    default: { getItemsSSR, getItemByIdSSR },
  };
});


it('renderiza correctamente con items y categorías', async () => {
  getItemsSSR.mockResolvedValueOnce({
    items: [{ id: 1, name: 'item1' }],
    categories: ['cat1', 'cat2'],
  });

  const ui = await ItemsPage({ searchParams: Promise.resolve({ search: 'test' }) });
  const { findByTestId } = render(ui);

  expect(await findByTestId('container_navBar')).toBeInTheDocument();
  expect(await findByTestId('ListCard')).toBeInTheDocument();
});

it('muestra mensaje de error si getItemsSSR falla', async () => {
  getItemsSSR.mockRejectedValueOnce(new Error('Estamos trabajando para solucionarlo.'));

  const ui = await ItemsPage({ searchParams: Promise.resolve({ search: 'test' }) });
  const { findByTestId } = render(ui);

  expect(await findByTestId('msg_secondary'))
    .toHaveTextContent('Estamos trabajando para solucionarlo.');
});