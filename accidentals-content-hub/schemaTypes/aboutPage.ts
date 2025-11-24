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
      type: 'text',
      initialValue:
        "Since our founding, the Trinity College Accidentals have been more than just a vocal group—we're a brotherhood bound by our love of music and commitment to excellence. Through generations of performers, we've carried forward a tradition of artistry, camaraderie, and unforgettable performances.",
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
