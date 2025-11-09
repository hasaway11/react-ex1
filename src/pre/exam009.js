const arr = [75, 55, 65, 80, 90];

const newArr =  arr.filter(item => item!==75);

console.log(arr, newArr);

const users = [
  {id: 1, username: 'velopert', email: 'public.velopert@gmail.com' },
  {id: 2, username: 'tester', email: 'tester@example.com'},
  {id: 3, username: 'liz', email: 'liz@example.com'}
];

const newUsers = users.filter(item=>item.id!==2);

console.log(newUsers);