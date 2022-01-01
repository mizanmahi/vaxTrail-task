const persons = [
   {
      name: 'Sunil',
      age: 21,
      temperature: 98,
   },
   {
      name: 'Biplap',
      age: 22,
      temperature: 98,
   },
   {
      name: 'Kabir',
      age: 36,
      temperature: 99,
   },
   {
      name: 'Ruhul',
      age: 37,
      temperature: 99,
   },
   {
      name: 'Paul',
      age: 42,
      temperature: 98,
   },
   {
      name: 'Kat',
      age: 41,
      temperature: 98,
   },
   {
      name: 'Nayem',
      age: 50,
      temperature: 100,
   },
   {
      name: 'Sabnaj',
      age: 51,
      temperature: 101,
   },
   {
      name: 'Sabnaj',
      age: 56,
      temperature: 101,
   },
];

const vaxTrail = (persons) => {
   const result = { A: [], B: [], C: [], D: [] };

   persons.forEach((person) => {
      if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
         if (person.age % 2 === 0) {
            result['A'].unshift(person);
         } else {
            result['A'].push(person);
         }
      } else if (
         person.age >= 31 &&
         person.age <= 40 &&
         person.temperature < 100
      ) {
         if (person.age % 2 === 0) {
            result['B'].unshift(person);
         } else {
            result['B'].push(person);
         }
      } else if (
         person.age >= 41 &&
         person.age <= 50 &&
         person.temperature < 100
      ) {
         if (person.age % 2 === 0) {
            result['C'].unshift(person);
         } else {
            result['C'].push(person);
         }
      } else if (person.temperature >= 100) {
         if (person.age % 2 === 0) {
            result['D'].unshift(person);
         } else {
            result['D'].push(person);
         }
      }
   });

   return result;
};

const result = vaxTrail(persons);
console.log(result);
