export function isRequired(value) {
  return value.trim().length > 0;
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateStudent(student) {
  if (!isRequired(student.name)) {
    return "Student name is required.";
  }

  if (!isRequired(student.email)) {
    return "Student email is required.";
  }

  if (!isValidEmail(student.email)) {
    return "Student email is invalid.";
  }

  if (!isRequired(student.major)) {
    return "Student major is required.";
  }

  return null;
}
