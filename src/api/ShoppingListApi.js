// src/api/ShoppingListApi.ts
import shoppingList from "../data/MockdataAll";

const useMockData = true; // Přepínač pro používání mock dat

const fetchShoppingList = async () => {
  if (useMockData) {
    return shoppingList;  // Vrátíme mock data
  }
  // Sem byste v budoucnu mohli přidat volání na server
  const response = await fetch('https://your-api-url.com/shopping-lists');
  const data = await response.json();
  return data;
}

export { fetchShoppingList };
