/** Extrae el id numérico de una URL de PokéAPI: .../pokemon/25/ -> 25 */
export function idFromUrl(url: string): number {
  const parts = url.split('/').filter(Boolean);
  return Number(parts[parts.length - 1]);
}
