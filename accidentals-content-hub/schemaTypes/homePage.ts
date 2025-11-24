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
      type: 'text',
      initialValue:
        'A brotherhood united by harmony, tradition, and excellence in collegiate a cappella',
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
      type: 'text',
      initialValue:
        'From intimate campus concerts to regional competitions, the Accidentals deliver powerful performances that showcase our tight harmonies, dynamic stage presence, and passion for a cappella music. Every show is a celebration of our brotherhood and musical journey.',
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
