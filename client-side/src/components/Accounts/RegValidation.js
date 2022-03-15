export const validation = (values, props) => {
  let errorMessage = {};

  if (values.firstname.trim().length === 0) {
    errorMessage = {
      ...errorMessage,
      firstname: "Please enter your firstname!",
    };
  }
  if (values.lastname.trim().length === 0) {
    errorMessage = {
      ...errorMessage,
      lastname: "Please enter your lastname!",
    };
  }

  if (values.email.trim().length === 0) {
    errorMessage = {
      ...errorMessage,
      email: "Please enter a valid email!",
    };
  }

  if (
    values.password.trim().length === 0 ||
    values.password.trim().length < 6
  ) {
    errorMessage = {
      ...errorMessage,
      password: "Password must be at least 6 characters",
    };
  } else if (values.password.trim().length > 20) {
    errorMessage = {
      ...errorMessage,
      password: "Password too long, max 20 characters",
    };
  }

  if (values.confirmPassword.length === 0) {
    errorMessage = {
      ...errorMessage,
      confirmPassword: "Please confirm password!",
    };
  }

  if (values.confirmPassword !== values.password) {
    errorMessage = {
      ...errorMessage,
      confirmPassword: "Passwords do not match!",
    };
  }
  return errorMessage;
};
