const $ = < T = HTMLElement>(id: string) => {
  const element = document.querySelector(id);
  if(element) return element as T;
  throw new Error('Element not found')
}

export const $form = $<HTMLFormElement>('#formulario')
export const $selectCrypto = $<HTMLSelectElement>('#criptomonedas')
export const $selectMoney = $<HTMLFormElement>('#moneda')
export const $result = $<HTMLElement>('#resultado')

