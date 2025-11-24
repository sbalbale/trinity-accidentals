import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'The Trinity College Accidentals',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'blockContent',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featuredTitle',
      title: 'Featured Section Title',
      type: 'string',
      initialValue: 'Experience the Harmony',
    }),
    defineField({
      name: 'featuredDescription',
      title: 'Featured Section Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
