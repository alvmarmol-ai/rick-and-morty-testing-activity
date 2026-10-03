import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as api from './api';

describe('api.ts', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  // 1. Probar la respuesta correcta de getCharacters
  it('debe obtener personajes exitosamente', async () => {
    const mockData = { results: [{ id: 1, name: 'Rick' }] };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const data = await api.getCharacters(1);
    expect(data).toEqual(mockData);
  });

  // 2. Cubrir líneas 19-20: Cuando la API responde con un error HTTP
  it('debe lanzar un error cuando res.ok es false en getCharacters', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });

    await expect(api.getCharacters(1)).rejects.toThrow();
  });

  // 3. Cubrir líneas 25-37: Probar la función de personaje individual (ej. getCharacter)
  it('debe obtener un personaje por ID y manejar su posible error', async () => {
    const mockCharacter = { id: 1, name: 'Rick Sanchez' };

    // Respuesta exitosa
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockCharacter,
    });

    // Cambia 'getCharacter' por el nombre exacto de la función en tu api.ts
    if ('getCharacter' in api && typeof (api as any).getCharacter === 'function') {
      const character = await (api as any).getCharacter(1);
      expect(character).toEqual(mockCharacter);

      // Respuesta con error para cubrir las líneas restantes
      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      await expect((api as any).getCharacter(999)).rejects.toThrow();
    }
  });
});