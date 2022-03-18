export function validate(value: any, type: string): boolean {
  let valid = true;
  if (type === "string") {
    if (!(typeof value === "string" && value.match(/[A-Za-z]/))) valid = false;
  } else if (type === "order") {
    if (!(typeof value === "string" && ["asc", "desc"].includes(value)))
      valid = false;
  }
  return valid;
}
