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
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Users (People)', value: 'Users'},
                  {title: 'Music', value: 'Music'},
                  {title: 'Award (Trophy)', value: 'Award'},
                  {title: 'Heart', value: 'Heart'},
                  {title: 'Star', value: 'Star'},
                  {title: 'Sparkles', value: 'Sparkles'},
                  {title: 'Mic (Microphone)', value: 'Mic'},
                  {title: 'Radio', value: 'Radio'},
                  {title: 'Headphones', value: 'Headphones'},
                  {title: 'Target', value: 'Target'},
                  {title: 'Zap (Lightning)', value: 'Zap'},
                  {title: 'Flame', value: 'Flame'},
                  {title: 'Crown', value: 'Crown'},
                  {title: 'Shield', value: 'Shield'},
                  {title: 'Handshake', value: 'Handshake'},
                ],
              },
              initialValue: 'Users',
            }),
          ],
        },
      ],
    }),
  ],
})
