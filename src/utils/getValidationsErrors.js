import { ValidationError } from "yup";

export default function getValidationErrors(err = ValidationError()) {
  err.inner.forEach((error) => {
    error[error.path] = error.message;
  });

  return err;
}
