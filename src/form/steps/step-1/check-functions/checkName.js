export const checkName = (nameRef) => {
  return nameRef.current.value.trim().split(" ").length === 2 ? true : false;
};
