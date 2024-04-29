export const nameRules = [
    value => !!value || 'You must enter your first name.'
  ];

export const emailRules = [
  value => !!value || 'E-mail is required.',
  value => /.+@.+\..+/.test(value) || 'E-mail must be valid.'
];

export const nicNumberRules = [
  value => value.length>=9 || 'NIC Number Should be Valid',
  value => !!value || 'You must enter your NIC number'
]

export const nationalityRules = [
  value => !!value || 'You must select nationality'
] 

export const titleRules = [
  value => !!value || 'You must select title'
]
export const imageRules = [
  value => !!value || 'You must upload an image'
]




