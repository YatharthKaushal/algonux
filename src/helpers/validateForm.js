export const validateForm = (data) => {
  const errors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  if (!data.college.trim()) {
    errors.college = "College name is required";
  }

  if (!data.branch.trim()) {
    errors.branch = "Branch is required";
  }

  if (!data.semester) {
    errors.semester = "Please select a semester";
  }

  if (!data.bootcamp) {
    errors.bootcamp = "Please select a bootcamp";
  }

  return errors;
};
