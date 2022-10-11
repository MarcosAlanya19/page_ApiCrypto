export interface Search{
  moneda: string;
  criptomonedas: string;
}

export type EventElement = Event & HTMLElement & {
  target: HTMLSelectElement
};