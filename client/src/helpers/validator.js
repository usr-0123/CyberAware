export const validatePasswordPattern = (_, password) => {
    return new Promise((resolve, reject) => {
      const minLength = 8;
      const hasUpperCase = /[A-Z]/;
      const hasLowerCase = /[a-z]/;
      const hasDigit = /\d/;
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  
      const result = {
        minLength: password.length >= minLength,
        upperCase: hasUpperCase.test(password),
        lowerCase: hasLowerCase.test(password),
        digit: hasDigit.test(password),
        specialChar: hasSpecialChar.test(password),
      };
  
      const unmetRequirements = [];
      if (!result.minLength)
        unmetRequirements.push('Minimum length of 8 characters');
      if (!result.upperCase)
        unmetRequirements.push('At least one uppercase letter');
      if (!result.lowerCase)
        unmetRequirements.push('At least one lowercase letter');
      if (!result.digit) unmetRequirements.push('At least one digit');
      if (!result.specialChar)
        unmetRequirements.push('At least one special character');
  
      if (unmetRequirements.length === 0) {
        resolve();
      } else {
        reject(unmetRequirements.join(', '));
      }
    });
  };

  export const validateNameLength = (rule, value) => {
    const fieldName = rule.field;
    const field = fieldName === 'firstName' ? 'First Name' : 'Last Name';
  
    if (!value) {
      return Promise.reject(`Please enter ${field} `);
    }
    if (value.length >= 3) {
      return Promise.resolve();
    } else {
      return Promise.reject(`${field} is too short.`);
    }
  };

  export const validateUserNameLength = (rule, value) => {
    if (!value) {
      return Promise.reject(`Please enter username`);
    }
    
    if (value.length >= 3) {
      return Promise.resolve();
    } else {
      return Promise.reject(`Username should be atleast 3 characters.`);
    }
  }