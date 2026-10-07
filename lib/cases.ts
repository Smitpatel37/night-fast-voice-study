/** How many numbered record screens the night includes. Any length works the same way. */
export const CASE_COUNT = 5;

export function caseNumbers(count = CASE_COUNT) {
  return Array.from({ length: count }, (_, index) => index + 1);
}
