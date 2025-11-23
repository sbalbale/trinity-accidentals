import {defineType} from 'sanity'

export default defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'gradYear', title: 'Class Year', type: 'number'},
    {
      name: 'voicePart',
      title: 'Voice Part',
      type: 'string',
      options: {
        list: ['Tenor 1', 'Tenor 2', 'Baritone', 'Bass', 'Vocal Percussion'],
      },
    },
    {name: 'major', title: 'Major', type: 'string'},
    {name: 'hometown', title: 'Hometown', type: 'string'},
    {name: 'bio', title: 'Biography', type: 'text'},
    {name: 'image', title: 'Headshot', type: 'image'},
    {name: 'isActive', title: 'Current Member?', type: 'boolean'},
  ],
})
