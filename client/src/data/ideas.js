export const allIdeas = [

  {
    category: 'charity',
    total: 50,
    title: 'St. Judes donation',
    paid: false,
  },
  {
    id: '1a56b25a-008f-4c00-bdb7-9302ca608964',
    category: 'charity',
    total: 50,
    title: 'Planned Parenthood donation',
    paid: false,
  },
  {
    id: '5f0ca9bc-5454-4ff5-a7d7-2c8d0a0f1583',
    category: 'charity',
    total: 50,
    title: 'Doctors Without Borders donation',
    paid: false,
  },
  {
    id: 'a0afc449-6705-4c7e-8b96-efcfc997dc86',
    category: 'fun',
    total: 100,
    title: 'Beef Jerky of the Month club',
    paid: false,
  },

  {
    id: '6eaecf43-a54c-435d-a1eb-b4e7195b6a1d',
    category: 'fun',
    total: 100,
    title: 'Cooking classes',
    paid: false,
  },
  {
    id: '86520b4b-7849-4462-b511-cddc7f416ad6',
    category: 'fun',
    total: 79,
    title: 'Broadway show',
    paid: false,
  },
  {
    id: '77a12fc4-887f-4940-9670-8d216e6b653d',
    category: 'fun',
    total: 500,
    title: 'Shopping spree',
    paid: false,
  },
  {
    id: 'b29ee288-2c10-4c94-ab7b-e53c61b4990a',
    category: 'charity',
    total: 200,
    title: 'The Last Mile',
    paid: false,
  },
  {
    id: '22f3520d-573f-407b-878b-283e8421db4e',
    category: 'fun',
    total: 149,
    title: 'Spa day',
    paid: false,
  },
  {
    id: 'bf60344b-8674-451b-b39a-df59e54986e6',
    category: 'travel',
    total: 1000,
    title: 'Cruise to the Caribbean',
    paid: false,
  },
  {
    id: '4619fb66-c3da-4ae6-8ed3-894a3dce37d9',
    category: 'travel',
    total: 500,
    title: 'Flight to Europe',
    paid: false,
  },
  {
    id: '6c8e937e-3104-4ceb-a3c7-8cdd6ee90082',
    category: 'travel',
    total: 300,
    title: 'Amtrak to Montreal',
    paid: false,
  },
];

export const getByCategory = category => allIdeas.filter(idea => idea.category == category);

export const getByAmount = (from, to) => allIdeas.filter(idea => idea.total >= from && idea.total <= to);
