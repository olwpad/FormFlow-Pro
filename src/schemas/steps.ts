import * as Yup from "yup";

export const validation1 = Yup.object().shape({
  firstName: Yup.string()
    .required("The Name is required!"),
    lastName:Yup.string()
    .required("The lastname is required!"),
});

export const validation2 = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Enter a valid phone number')
    .required("Phone is required!"),
});

export const validation3 = Yup.object().shape({
  address: Yup.string()
    .required("Address is required"),
  city: Yup.string()
    .required("City is required"),
});


export const validation4 = Yup.object().shape({
  username: Yup.string()
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const validation5=Yup.object().shape({
  additionalInfo : Yup.string()
    .required(" additionalInfo is required"),
});