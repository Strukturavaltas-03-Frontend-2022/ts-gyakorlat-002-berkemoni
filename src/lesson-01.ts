export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.
    
    /** @type {Array} points - számok tömbje, 1-től 10-ig egyesével. */
points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// points: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /** 
     * A tömb minden eleme legyen egy objektum, amely egy felhasználót reprezentál.
     * Kötelező elemek: name<string>, email<string>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} users - minden elem egy felhasználó.
     */
users: Array<{name:string, email: string}> = [
    {name: "Kovács János", email:"kj@itt.hu"},
    {name: "Nagy Edit", email:"ne@ott.hu"}
];

    
    /** 
     * A tömb minden eleme legyen egy objektum, amely egy terméket reprezentál.
     * Kötelező elemek: name<string>, price<number>, stock<number>.
     * Opcionális elemek: active<boolean>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} products - minden elem egy termék.
     */    
products: Array<{name: string, price: number, stock: number, active?: boolean}> = [
    {name: "apple", price: 100, stock: 10000, active: true},
    {name: "pear", price: 200, stock: 2000}
];
    
    /** 
     * Inicializálj egy tuple típust, azaz adj neki értéket is.
     * @type {Tuple} role - number, string, boolean. 
     */
role: [number, string, boolean] = [1, "abc", false];

}
