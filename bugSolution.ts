function printName(name: string | null | undefined): void {
  if (name !== undefined) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Works correctly
printName(undefined); // Works correctly
printName('John'); // Works correctly