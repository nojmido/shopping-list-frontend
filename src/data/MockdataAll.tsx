//MocdataAll.tsx
const shoppingList = 
  {
    id: 1235,
    name: "Nákupní seznam",
    owner: "Jakub",
    users: [
      { id: 1, name: "Jakub", owner: true },
      { id: 2, name: "Lojza", owner: false },
      { id: 3, name: "Pepa", owner: false }
    ],
    items: [
      { id: 234, name: "pivo", purchased: false },
      { id: 235, name: "chleb", purchased: true },
      { id: 236, name: "mléko", purchased: false }
    ]
  }
;


export default shoppingList;