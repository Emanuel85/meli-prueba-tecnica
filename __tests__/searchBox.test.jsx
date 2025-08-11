import { render, screen, fireEvent } from '@testing-library/react'
import SearchBox from '../src/ux-ui/SearchBox/SearchBox'
import '@testing-library/jest-dom'

// Mock de los hooks de next/navigation
jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }), useSearchParams: () => ({ get: jest.fn() }) }))
let searchText = ''
const setSearchText = jest.fn(val => { searchText = val })
jest.mock('../src/store/useStore', () => ({
    useStore: () => ({
        isFocused: false,
        searchText,
        setIsFocused: jest.fn(),
        setSearchText,
        items: [],
        isLoading: false,
        setItems: jest.fn(),
        setIsLoading: jest.fn(),
    })
}))

beforeEach(() => {
    searchText = ''
    setSearchText.mockClear()
})

describe('SearchBox', () => {
    it('Renderizar inputs y button', () => {
        render(<SearchBox />)
        const input = screen.getByTestId('search-input')
        const button = screen.getByTestId('search-button')
        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it('Permite escribir en el input', () => {
        render(<SearchBox />)
        const input = screen.getByTestId('search-input')
        fireEvent.change(input, { target: { value: 'test' } })
        // Simula el cambio de estado
        expect(setSearchText).toHaveBeenCalledWith('test')
    })

    it('Envía el formulario', () => {
        render(<SearchBox />)
        const input = screen.getByTestId('search-input')
        const button = screen.getByTestId('search-button')
        fireEvent.change(input, { target: { value: 'test' } })
        fireEvent.click(button)
        // Puedes agregar más asserts aquí si mockeas router.push
    })
})