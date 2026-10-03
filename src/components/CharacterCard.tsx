import React from 'react';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
    url?: string;
  };
  origin?: {
    name: string;
    url?: string;
  };
}

export interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  if (!character) return null;

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.status} - {character.species}</p>
      <p>Ubicación: {character.location?.name}</p>
    </div>
  );
}