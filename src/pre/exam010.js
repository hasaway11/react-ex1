const arr = [75, 55, 65, 80, 90];
const newArr = [...arr, 100];

console.log(newArr, arr);

const users = [
  {id: 1, username: 'velopert', email: 'public.velopert@gmail.com' },
  {id: 2, username: 'tester', email: 'tester@example.com'}
];

// users.push({id: 3, username: 'liz', email: 'liz@example.com'})

const newUsers = [...users, {id: 3, username: 'liz', email: 'liz@example.com'}];