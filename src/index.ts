/**
 * Adds two numbers together
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts two numbers
 * @param a - The first number
 * @param b - The second number
 * @returns The difference of a and b
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Main function to demonstrate TypeScript usage
 */
export function main(): void {
  const result1 = add(5, 3);
  const result2 = subtract(10, 4);

  console.log(`Addition: 5 + 3 = ${result1}`);
  console.log(`Subtraction: 10 - 4 = ${result2}`);
}

// Run the main function if this file is executed directly
if (require.main === module) {
  main();
}
