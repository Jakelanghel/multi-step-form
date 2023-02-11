import { validateName } from "./validation-functions/validateName";
import { validateEmail } from "./validation-functions/validateEmail";
import { validatePhone } from "./validation-functions/validatePhone";
import { handleErrors } from "./validation-functions/handleErrors";

export const checkStep1 = (refArr, setData) => {
  const validName = validateName(refArr[0]);
  const validEmail = validateEmail(refArr[1]);
  const validPhone = validatePhone(refArr[2]);

  const noErrors = handleErrors(refArr, [validName, validEmail, validPhone]);

  noErrors
    ? setData((oldState) => ({
        ...oldState,
        name: refArr[0].current.value,
        email: refArr[1].current.value,
        phone: refArr[2].current.value,
      }))
    : null;

  return noErrors ? true : false;
};
