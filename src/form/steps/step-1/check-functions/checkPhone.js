export const checkPhone = (phoneRef) => {
  const res = /^[0-9]+$/.test(phoneRef.current.value);
  if (res) {
    return phoneRef.current.value.length === 10 ? true : false;
  } else {
    return false;
  }
};
