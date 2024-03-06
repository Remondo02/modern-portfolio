export const skillSchema = [
  {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'featuredSkill',
        title: 'Mis en avant',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        hidden: ({ document }) => !document.featuredSkill
      },
    ],
  },
]