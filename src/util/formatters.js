// Remove the linter directive after more functions have been added
// eslint-disable-next-line import/prefer-default-export
export function formatDollars(amount) {
  return amount ? `$${amount.toFixed(2)}` : '$0.00';
}
