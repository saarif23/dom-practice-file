// const placeslist = document.getElementById('places-list')
// //1.  Where to add
// const li = document.createElement('li');
// // 2. what to be added 
// li.innerText = 'pathartuliban'
// // 3. add to child
// placeslist.appendChild(li);


// 1 where to add
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
mainContainer.appendChild(section);
const h1 = document.createElement('h1');
h1.innerText = 'My Food  List'
section.appendChild(h1)
const ul = document.createElement('ul');
section.appendChild(ul);
const li1 = document.createElement('li');
li1.innerText =  'Biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText =  'Borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText =  'Salat';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText =  'With dim';
ul.appendChild(li4);


// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section </h1>
<ul>
    <li>T-shirt </li>
    <li>Ganji </li>
    <li>jurcy </li>
    <li>shoes </li>
    <li>pant </li>
    </ul>
`
mainContainer.appendChild(sectionDress);