export const handleErrors = (refArr, validArr) => {
  validArr.forEach((isValid, i) => {
    !isValid
      ? refArr[i].current.classList.add("error")
      : refArr[i].current.classList.remove("error");
  });

  return validArr.every((isValid) => isValid);
};
