import { StringRule, DateRule } from "sanity";

export const experienceSchema = [
  {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'position',
        title: 'Position',
        type: 'string',
        validation: (Rule: StringRule) => Rule.required(),
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
        validation: (Rule: StringRule) => Rule.required(),
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
        validation: (Rule: StringRule) => Rule.required(),
      },
      {
        name: 'startDate',
        title: 'Start date',
        type: 'date',
        validation: (Rule: DateRule) => Rule.required(),
      },
      {
        name: 'endDateOrActive',
        title: 'End Date ?',
        type: 'boolean',
        initialValue: true,
      },
      {
        name: 'endDate',
        title: 'End date',
        type: 'date',
        hidden: ({ document }) => !document.endDateOrActive
      },
    ],

    preview: {
      select: {
        title: 'company',
      },
    },
  },
]
