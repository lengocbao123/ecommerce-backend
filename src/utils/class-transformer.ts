export function stringToBoolean(value: string): boolean {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true';
  }
  throw new Error('The value must be a string');
}
