import { SlugRule, TextRule } from "sanity";

export const projectSchema = [
  {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation: (Rule: SlugRule) => Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        rows: 4,
        validation: (Rule: TextRule) => Rule.required().min(80).max(160),
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'altText',
            title: 'Alternative text',
            type: 'string',
          },
        ],
      },
      {
        name: 'projectLink',
        title: 'Live project',
        type: 'url',
      },
      {
        name: 'repositoryLink',
        title: 'Repository Link',
        type: 'url',
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{type: 'reference', to: {type: 'skill'}}],
      },
      {
        name: 'createdAt',
        title: 'Created at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'projectImages',
        title: 'Images of the project',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'altText',
                title: 'Alternative text',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],

    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
    },
  },
]
