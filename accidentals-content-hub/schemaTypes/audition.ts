import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'audition',
  title: 'Audition Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Audition Information',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'signupLink',
      title: 'Sign-up Link',
      type: 'url',
    }),
  ],
})
