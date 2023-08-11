export const validateEmail = (email: string): boolean => {
  const validReges =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return validReges.test(email);
};
