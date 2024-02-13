module.exports = {
    validProps(valid) {
        return (propsToCheck) => {
            for (const prop in propsToCheck) {
                if (!valid.includes(prop)) {
                    throw new Error("Invalid field: " + prop);
                }
            }
            return propsToCheck;
        }
    },

    requiredProps(required) {
        return (propsToCheck) => {
            for (const prop of required) {
                if (!propsToCheck[prop]) {
                    throw new Error("Missing required field:" + prop);
                }
            }
            return propsToCheck;
        }
    }
}






// Add to users.controller.js
const { validProps, requiredProps } = require("../util/validation");

const validateProps = validProps([
    
    "first_name",
    "nick_name",
    "password"
  ]);

  const validateRequired = requiredProps(["first_name", "nick_name", "password"]);