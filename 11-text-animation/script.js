const logo = document.querySelectorAll('#logo path');

console.log('logo! ', logo);

for(let i = 0; i < logo.length; i++) {
    console.log(`${i} is ${logo[i].getTotalLength()}`);
}