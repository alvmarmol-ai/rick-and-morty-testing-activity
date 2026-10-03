// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('debe renderizar correctamente los enlaces de navegación y la página actual', () => {
    render(<Pagination currentPage={2} totalPages={5} />);

    expect(screen.getByText(/Page 2 of 5/i)).toBeDefined();

    const prevLink = screen.getByRole('link', { name: /← Previous/i });
    const nextLink = screen.getByRole('link', { name: /Next →/i });

    expect(prevLink.getAttribute('href')).toBe('/?page=1');
    expect(nextLink.getAttribute('href')).toBe('/?page=3');
  });

  it('debe manejar correctamente la primera página', () => {
    render(<Pagination currentPage={1} totalPages={5} />);
    
    // Verifica el comportamiento cuando se está en la página 1
    expect(screen.getByText(/Page 1 of 5/i)).toBeDefined();
  });

  it('debe manejar correctamente la última página', () => {
    render(<Pagination currentPage={5} totalPages={5} />);
    
    // Verifica el comportamiento cuando se está en la página final
    expect(screen.getByText(/Page 5 of 5/i)).toBeDefined();
  });
});