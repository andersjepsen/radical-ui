export function getInitials(value: string) {
  const names = value.split(" ");

  const firstInitial = names[0][0];

  const secondInitial = names.length > 1 ? names[names.length - 1][0] : "";

  return `${firstInitial}${secondInitial}`.toUpperCase();
}
