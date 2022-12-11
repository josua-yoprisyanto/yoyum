export const checkPassword = (password, confirmPassword) => {
  // Check password length
  if (password.length < 8) {
    return "Weak: Password must be at least 8 characters long";
  }

  // Check for at least one letter and one number
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    return "Weak: Password must contain at least one letter and one number";
  }

  // Check for at least one special character
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return "Weak: Password must contain at least one special character";
  }
  if (password !== confirmPassword) {
    return "password kamu ga sama woy!!";
  }
  return "Strong";
};
