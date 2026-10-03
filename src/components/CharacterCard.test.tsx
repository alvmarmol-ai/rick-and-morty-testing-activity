// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterCard, { Character } from './CharacterCard';

const mockCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
};

describe('CharacterCard', () => {
  it('debe renderizar el nombre y la especie del personaje', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText(/Rick Sanchez/i)).toBeDefined();
    expect(screen.getByText(/Alive - Human/i)).toBeDefined();
    expect(screen.getByText(/Citadel of Ricks/i)).toBeDefined();
  });
});