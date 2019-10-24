let bottle = [1,1,1,1],
    mouse = [1,1];


bottle[Math.floor(Math.random() * 3)] = 0;

console.log(`Бутылка с ядом (0): ${bottle}`);

mouse[0] = bottle[0] * mouse[0];
mouse[0] = bottle[1] * mouse[0];
mouse[1] = bottle[1] * mouse[1];
mouse[1] = bottle[2] * mouse[1];

switch (mouse.toString([])) {
    case '0,1':
        console.log('Первая сдохла, вторая жива => яд в первой склянке');
        break;
    
    case '0,0':
        console.log('Обе сдохли => яд во второй склянке');
        break;
    
    case '1,0':
        console.log('Первая жива, вторая сдохла => яд в третьей склянке');
        break;
                
    case '1,1':
        console.log('Обе живы => яд в четвёртой склянке');
        break;

    default:
        console.log('lol');
};