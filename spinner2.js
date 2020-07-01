const spinner = () => {

  process.stdout.write('hello from spinner2.js... \rheyyy\n');

  const pattern = '|/-\\';

  let cycle = 1;
  while (cycle <= 8) {
    const character = pattern[cycle % pattern.length];
    setTimeout(() => {
      process.stdout.write(`\r${character}   `);
    }, 166 * cycle);
    cycle ++;
  }
};
spinner();

// spinner1 1500ms to complete the full cycle
// 1500ms / 9 rotations