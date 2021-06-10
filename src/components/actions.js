// Action : 
/** an action is a arrow function that returns an objet 
 * the objet should conatin the type (of action) , may contain playoad (data)
 
 */
export const addTocart = (Product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    };
};