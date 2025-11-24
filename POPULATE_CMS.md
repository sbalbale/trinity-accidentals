# How to Populate CMS with Initial Content

This guide explains how to populate your Sanity CMS with the initial placeholder content.

## Option 1: Using Sanity Studio (Manual - Recommended)

1. **Log in to Sanity Studio**
   - Navigate to `http://localhost:3333`
   - Log in with your Google account

2. **Create Home Page Document**
   - Click "Home Page" in the sidebar
   - Click "Create" or "+"
   - Fill in:
     - Hero Title: `The Trinity College Accidentals`
     - Hero Subtitle: `A brotherhood united by harmony, tradition, and excellence in collegiate a cappella`
     - Featured Title: `Experience the Harmony`
     - Featured Description: `From intimate campus concerts to regional competitions, the Accidentals deliver powerful performances that showcase our tight harmonies, dynamic stage presence, and passion for a cappella music. Every show is a celebration of our brotherhood and musical journey.`
   - Click "Publish"

3. **Create About Page Document**
   - Click "About Page" in the sidebar
   - Click "Create" or "+"
   - Fill in:
     - Page Title: `Our Legacy`
     - Main Description: `Since our founding, the Trinity College Accidentals have been more than just a vocal group—we're a brotherhood bound by our love of music and commitment to excellence. Through generations of performers, we've carried forward a tradition of artistry, camaraderie, and unforgettable performances.`
     - Core Values (add 3 items):
       1. Title: `Brotherhood`, Description: `We're not just singers—we're brothers who support each other on stage and in life.`
       2. Title: `Musical Excellence`, Description: `Our dedication to perfect harmony and innovative arrangements sets us apart.`
       3. Title: `Storied Tradition`, Description: `Decades of performances at Trinity and beyond have built our prestigious reputation.`
   - Click "Publish"

4. **Create Audition Info Document**
   - Click "Audition Info" in the sidebar
   - Click "Create" or "+"
   - Fill in:
     - Title: `Join the Brotherhood`
     - Description: `Auditions are held at the beginning of every semester. We're looking for talented singers who are passionate about a cappella music.`
     - FAQs (add 3 items):
       1. Question: `Do I need to read music?`, Answer: `It helps, but it is not required. We test for ear and pitch.`
       2. Question: `What should I prepare?`, Answer: `A verse and a chorus of a song that fits your voice.`
       3. Question: `What is the time commitment?`, Answer: `We rehearse 3 times a week.`
     - Sign-up Link: `https://forms.google.com/placeholder`
   - Click "Publish"

## Option 2: Using the Populate Script (Automated)

If you want to automate this process, you can use the `populate-cms.mjs` script:

### Prerequisites

1. **Create a Sanity API Token**
   - Go to https://www.sanity.io/manage
   - Select your project
   - Go to "API" > "Tokens"
   - Click "Add API token"
   - Name it "Populate Script"
   - Set permissions to "Editor"
   - Copy the token

2. **Add the token to your environment**
   - Open `web/.env.local`
   - Add this line: `SANITY_API_TOKEN=your_token_here`
   - Replace `your_token_here` with the token you copied

### Run the Script

```bash
cd c:\Users\seanb\Documents\trinity-accidentals
node populate-cms.mjs
```

The script will create all three documents with the placeholder content automatically.

## Verification

After creating the documents (using either method):

1. Wait about 60 seconds for Next.js to revalidate
2. Visit your website pages:
   - Home: `http://localhost:3000`
   - About: `http://localhost:3000/about`
   - Auditions: `http://localhost:3000/auditions`
3. Verify that the content appears correctly

## Next Steps

Once the initial content is in Sanity, you can:

- Edit the content directly in Sanity Studio
- Add images to the hero and featured sections
- Customize the text with rich formatting (bold, italic, lists, etc.)
- Changes will appear on the website within 60 seconds
