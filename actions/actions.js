export const saveItems = (item) => ({
    type: 'PUSH_ITEMS',
    payload: item,
  });
  
export const deleteItems = (id) => ({
    type: 'DELETE_ITEM',
    payload: id,
});
