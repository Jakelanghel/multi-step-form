// import checkName from "./checkName";

import { checkName } from "./checkName";
import { checkEmail } from "./checkEmail";
import { checkPhone } from "./checkPhone";

const check = {
  name: checkName,
  email: checkEmail,
  phone: checkPhone,
};

export default check;
