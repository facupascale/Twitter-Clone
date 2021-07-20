export const DELETE_VISIBLE = "DELETE_VISIBLE";
export const DELETE_INVISIBLE = "DELETE_INVISBLE";
export const deleteVisible = (visible) => ({
  type: DELETE_VISIBLE,
  payload: visible,
});
export const deleteInvisible = (visible) => ({
  type: DELETE_INVISIBLE,
  payload: visible,
});
