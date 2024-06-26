const PRODUCT_DATA = [
  {
    title: 'BBQ',
    desc: 'Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.Pihviä, juustoa, tomaattia, suolakurkkua, salaattia, pekonia, grillikastiketta.',
    price: 15,
    image:  require ('../images/dev/DevImage.png'),
    weight: 250,
    classTab: 'Breakfast',
  },
  {
    title: 'Sinihomejuusto',
    desc: 'Naudanlihapihvi, tomaattia, juustoa homeella, sipulihilloa, aesar-kastiketta.',
    price: 20,
    image:  require ('../images/dev/DevImage.png'),
    weight: 250,
    classTab: 'Breakfast',
  },
  {
    title: 'Cheeseburger Pihviä, juustoa, tomaattia, suolakurkkua, salaatinlehteä. ',
    desc: 'Pihviä, juustoa, tomaattia, suolakurkkua, salaatinlehteä.',
    price: 22,
    image:  require ('../images/dev/DevImage.png'),
    weight: 250,
    classTab: 'Breakfast',
  },
  {
    title: 'Chicken BBQ',
    desc: 'Kanafileetä.',
    price: 35,
    image:  require ('../images/dev/DevImage.png'),
    weight: 350,
    classTab: 'Breakfast',
  },
  {
    title: 'Chickenburger',
    desc: 'Kanafileetä, tomaattia, suolakurkkua, salaattia, caesar-kastiketta.',
    price: 22,
    image:  require ('../images/dev/DevImage.png'),
    weight: 370,
    classTab: 'Breakfast',
  },
  {
    title: 'Crabsburger',
    desc: 'Leivitetty turskafilee, tartar-kastike, cole slow, musta pulla.',
    price: 12,
    image:  require ('../images/dev/DevImage.png'),
    weight: 420,
    classTab: 'Breakfast',
  },
  {
    title: 'Deer',
    desc: 'Pekonia, sipulihilloa, cheddarjuustoa, suolakurkkua.',
    price: 24,
    image:  require ('../images/dev/DevImage.png'),
    weight: 380,
    classTab: 'Breakfast',
  },
  {
    title: 'Fresh burger',
    desc: 'Naudanlihapihvi, tomaattia, tuoretta kurkkua, punasipulia, basilikaa.',
    price: 19,
    image:  require ('../images/dev/DevImage.png'),
    weight: 350,
    classTab: 'Breakfast',
  },
  {
    title: 'Farmer’s breakfast',
    desc: 'Naudanlihapihvi, cheddaria, kananmunaa, pekonia, BBQ-kastiketta.',
    price: 21,
    image:  require ('../images/dev/DevImage.png'),
    weight: 280,
    classTab: 'Lunch',
  },
  {
    title: 'Hawaii',
    desc: 'Pihviä, juustoa, tomaattia, pekonihilloa, salaattia, ananasta, jalapenoa.',
    price: 14,
    image:  require ('../images/dev/DevImage.png'),
    weight: 285,
    classTab: 'Lunch',
  },
  {
    title: 'LAB',
    desc: '2 naudanlihapihviä, savujuustoa, pikkelöityä kurkkua, tomaattia, sipulihilloa.',
    price: 24,
    image:  require ('../images/dev/DevImage.png'),
    weight: 285,
    classTab: 'Lunch',
  },
  {
    title: 'Mexico',
    desc: 'Naudanlihapihvi, pikkelöityä kurkkua, jalapenopippuria, cheddaria',
    price: 17,
    image:  require ('../images/dev/DevImage.png'),
    weight: 285,
    classTab: 'Lunch',
  },
  {
    title: 'Montreal burger',
    desc: 'Pihviä, tomaattia, pekonia, karpalohilloa, maapähkinätahnaa.',
    price: 23,
    image:  require ('../images/dev/DevImage.png'),
    weight: 250,
    classTab: 'Lunch',
  },
  {
    title: 'New Mexico',
    desc: 'Naudanlihapihvi, tomaattia, cheddaria, guacamolea, Chipotle-pippuria.',
    price: 17,
    image:  require ('../images/dev/DevImage.png'),
    weight: 250,
    classTab: 'Lunch',
  },
  {
    title: 'NY Burger',
    desc: 'Naudanlihapihvi, basilikaa, salaattia, kermakastiketta pekonilla.',
    price: 23,
    image:  require ('../images/dev/DevImage.png'),
    weight: 250,
    classTab: 'Lunch',
  },
  {
    title: 'Steakburger',
    desc: 'Naudan sisäfileetä, grillattua tomaattia, pikkelöityä kurkkua, salaattia, NY-kastiketta.',
    price: 24,
    image:  require ('../images/dev/DevImage.png'),
    weight: 460,
    classTab: 'Lunch',
  },
  {
    title: 'Tofu Burger',
    desc: 'Grillattua tofujuustoa, tomaattia, chukasalaattia, pähkinäkastiketta',
    price: 26,
    image:  require ('../images/dev/DevImage.png'),
    weight: 180,
    classTab: 'Dinner',
  },
  {
    title: 'XXXL',
    desc: '3 naudanlihapihviä, 3 juustoa, 3 pekonia, grillikastiketta, salaattia, sipulirenkaita',
    price: 19,
    image:  require ('../images/dev/DevImage.png'),
    weight: 190,
    classTab: 'Dinner',
  },
  {
    title: 'Pork burger',
    desc: 'Hampurilainen revityllä possulla ja Puolijumalakastikkeella',
    price: 15,
    image:  require ('../images/dev/DevImage.png'),
    weight: 180,
    classTab: 'Dinner',
  },
  {
    title: 'Tennessee burger',
    desc: 'Kaksi ilmavaa pullaa mehevällä naudanlihapihvillä, tomaattia, mozzarellaa.',
    price: 21,
    image:  require ('../images/dev/DevImage.png'),
    weight: 200,
    classTab: 'Dinner',
  },
  {
    title: 'Sipuligrilli',
    desc: 'Mehukas 100% naudanlihapihvi sulatettuna juustoa, sipulirenkaitasa.',
    price: 28,
    image:  require ('../images/dev/DevImage.png'),
    weight: 180,
    classTab: 'Dinner',
  },
  {
    title: 'Tennessee sandwichs',
    desc: 'Kananrintaa Tennesseen glaseerauksessa.',
    price: 23,
    image:  require ('../images/dev/DevImage.png'),
    weight: 180,
    classTab: 'Dinner',
  },
  {
    title: 'Cheddar',
    desc: 'Hampurilainen naudanlihalla ja cheddarjuustolla',
    price: 18,
    image:  require ('../images/dev/DevImage.png'),
    weight: 160,
    classTab: 'Dinner',
  },
  {
    title: 'Burger lampaan kanssa',
    desc: 'Burger lampaan cutletilla ja sinihomejuustollas',
    price: 27,
    image:  require ('../images/dev/DevImage.png'),
    weight: 190,
    classTab: 'Dinner',
  },
];

const getID = () => Math.random().toString() + new Date().getDate().toString();

export const PRODUCT_DATA_ARRAY = PRODUCT_DATA.map(el => {
  return {
    ...el,
    count: 1,
    inBasket: false,
    id: getID(),
  };
});
