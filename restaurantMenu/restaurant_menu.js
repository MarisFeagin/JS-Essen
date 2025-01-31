const breakfastMenu = ['Pancakes - $12.00', 'Eggs Benedict - $12.00', 'Oatmeal - $10.00', 'Frittata - $13.00'];
const mainCourseMenu = ['Steak - $15.00', 'Pasta - $10.00', 'Borgor - $12.00', 'Salmon- $20.00'];
const dessertMenu = ['Cake - $5.00', 'Ice Cream $3.00', 'Pudding - $2.00', 'Fruit Salad $3.00'];

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
       document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

 let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;