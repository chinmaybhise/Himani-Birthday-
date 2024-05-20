
function displayOption(number) {
    let message = '';
    switch (number) {
        case 1:
            message = 'Choose your breakfast: <br> 1. Pancakes <br> 2. Acai bowl <br> 3. Croissants';
            break;
        case 2:
            message = 'Choose your lunch: <br> 1. Sushi <br> 2. Italian <br> 3. Vegan Delight';
            break;
        case 3:
            message = 'Choose your snack: <br> 1. Fruit Salad <br> 2. Cheese Platter <br> 3. Smoothie';
            break;
        case 4:
            message = 'Choose how to relax: <br> 1. Read a book <br> 2. Online shopping spree <br> 3. Coffee break';
            break;
    }
    document.getElementById('result').innerHTML = message;
}
