const quotes = [
  {
    text: 'The only thing you really need to know is the location of the library.',
    author: 'Albert Einstein',
    backgroundImage:
      'url(https://plus.unsplash.com/premium_photo-1695844419317-c219363c14af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    text: 'A room without books is like a body without a soul.',
    author: 'Marcus Tullius Cicero',
    backgroundImage:
      'url(https://plus.unsplash.com/premium_photo-1695844419317-c219363c14af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
  },

  {
    text: 'Libraries are the warehouses of our collective knowledge and imagination.',
    author: 'Neil Gaiman',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'The library is the temple of learning, and learning has liberated more people than all the wars in history.',
    author: 'Carl T. Rowan',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'Libraries store the energy that fuels the imagination.',
    author: 'Sidney Sheldon',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'A library is not a luxury but one of the necessities of life.',
    author: 'Henry Ward Beecher',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80)',
  },
  {
    text: 'The library is the last, best socialized institution in American culture and the most effective leveler of privilege.',
    author: 'Susan Orlean',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1526306063970-d6e594004d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },

  {
    text: 'A library is a hospital for the mind.',
    author: 'Anonymous',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'Libraries are reservoirs of strength, grace and wit, reminders of order, calm and continuity, lakes of mental energy.',
    author: 'Germaine Greer',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'In a library we are surrounded by many hundreds of dear friends.',
    author: 'Ralph Waldo Emerson',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'The truth is libraries are raucous clubhouses for free speech, controversy and community.',
    author: 'Paula Poundstone',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80)',
  },

  {
    text: 'Libraries: where ideas spark and minds ignite.',
    author: 'Neil Gaiman',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'In libraries, whispers echo louder than shouts.',
    author: 'Terry Pratchett',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'Libraries: portals to a thousand worlds.',
    author: 'Jorge Luis Borges',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
  },
  {
    text: 'Libraries breathe life into forgotten stories.',
    author: 'Ursula K. Le Guin',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80)',
  },
];

export default quotes;
