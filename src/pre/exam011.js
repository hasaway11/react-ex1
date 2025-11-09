const users = [
  {id: 1, username: 'velopert', email: 'public.velopert@gmail.com', active:false },
  {id: 2, username: 'tester', email: 'tester@example.com', active:false},
  {id: 3, username: 'liz', email: 'liz@example.com', active: false}
];


const newUsers = users.map(item=>item.id==2? {...users, active:!item.active}:item );

console.log(newUsers);