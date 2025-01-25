import { put } from '@vercel/blob';
import fs from 'fs';

async function uploadFile() {
  try {

    const filePath = '/Users/sanjnah/Downloads/sanjnah-profileimage.jpg'; 

    // Read the file you want to upload
    const file = fs.readFileSync(filePath);

    // Upload the file to Vercel Blob
    const { url } = await put('sanjnah-profileimage.jpg', file, { 
      access: 'public', // making the file publicly accessible
      token: 'gFKbhkMWhBKpqLswBWsg7aZF',
    });

    console.log('File uploaded successfully. URL:', url);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

uploadFile();