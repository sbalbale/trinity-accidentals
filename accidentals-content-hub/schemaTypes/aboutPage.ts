import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Legacy',
    }),
    defineField({
      name: 'description',
      title: 'Main Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Value Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Value Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
})
