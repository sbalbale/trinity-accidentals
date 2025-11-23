import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'song',
  title: 'Repertoire',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Song Title', type: 'string'}),
    defineField({name: 'originalArtist', title: 'Original Artist', type: 'string'}),
    defineField({
      name: 'soloists',
      title: 'Soloist(s)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'member'}]}],
    }),
    defineField({
      name: 'arrangers',
      title: 'Arranger(s)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'member'}]}],
    }),
    defineField({name: 'semesterLearned', title: 'Semester Learned', type: 'string'}),
  ],
})
