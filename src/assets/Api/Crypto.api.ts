import { objSelect, selectOption, writeHTML } from "../functions";

export const selectApi = async () =>{
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=USD';
  try {
    const result = await fetch(url)
    const response = await result.json();
    selectOption(response)
  } catch (err) {
    console.log(err);
  }
}

export const getCrypto = async () => {
  const {criptomonedas, moneda} = objSelect
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedas}&tsyms=${moneda}`

  try {
    const result = await fetch(url)
    const response = await result.json();
    return writeHTML(response.DISPLAY[criptomonedas][moneda])
  } catch (err) {
    console.error(err);
  }
}

