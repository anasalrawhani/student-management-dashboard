const STORAGE_KEY = "student_management_students";

export function getStudentsFromStorage() {
  const storedStudents = localStorage.getItem(STORAGE_KEY);

  if (!storedStudents) {
    return [];
  }

  try {
    return JSON.parse(storedStudents);
  } catch {
    return [];
  }
}

export function saveStudentsToStorage(students) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}
