// This script creates placeholder video and audio files
// Run with: node scripts/create-media-placeholder.js

import fs from 'fs';
import path from 'path';

const videoDirPath = './public/videos';
const audioDirPath = './public/audios';

// Create directories if they don't exist
if (!fs.existsSync(videoDirPath)) {
  fs.mkdirSync(videoDirPath, { recursive: true });
}
if (!fs.existsSync(audioDirPath)) {
  fs.mkdirSync(audioDirPath, { recursive: true });
}

// Minimal valid MP4 file header (will be a small placeholder)
const mp4Header = Buffer.from([
  0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70,
  0x69, 0x73, 0x6f, 0x6d, 0x00, 0x00, 0x00, 0x00,
  0x69, 0x73, 0x6f, 0x6d, 0x69, 0x73, 0x6f, 0x32,
  0x6d, 0x70, 0x34, 0x31, 0x69, 0x73, 0x6f, 0x6d,
]);

// Write minimal MP4 file
fs.writeFileSync(
  path.join(videoDirPath, 'special-video.mp4'),
  mp4Header
);

console.log('✓ Placeholder video file created at public/videos/special-video.mp4');
console.log('✓ Replace it with your actual video file');

// Create a minimal MP3 file placeholder
const mp3Data = Buffer.from([
  0xFF, 0xFB, 0x90, 0x00, // MP3 frame sync and header
]);

fs.writeFileSync(
  path.join(audioDirPath, 'special-audio.mp3'),
  mp3Data
);

console.log('✓ Placeholder audio file created at public/audios/special-audio.mp3');
console.log('✓ Replace it with your actual audio file');
