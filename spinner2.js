const spinner = () => {

  process.stdout.write('hello from spinner2.js... \rheyyy\n');

  const rotate = '|/-\\';

  let cycle = 1;
  while (cycle <= 8) {
    const direct = rotate[cycle % rotate.length];
    setTimeout(() => {
      process.stdout.write(`\r${direct}   `);
    }, 166 * cycle);
    cycle ++;
  }
};
spinner();

// spinner1 1500ms to complete the full cycle
// 1500ms / 9 rotations