import fs from 'fs';

const buf = fs.readFileSync('public/videos/highlight-1.mp4');

// Search for 'mvhd', 'tkhd', or 'rotate'
console.log('File size:', buf.length);

// Look for 'tkhd' atom matrix
const tkhdIndex = buf.indexOf(Buffer.from('tkhd'));
if (tkhdIndex !== -1) {
  console.log('tkhd atom found at offset:', tkhdIndex);
  // Matrix is at offset 48 from tkhd version/flags
  const matrixOffset = tkhdIndex + 4 + 1 + 3 + 4 + 4 + 4 + 4 + 8 + 8 + 4 + 2 + 2; // ~ offset 48
  const a = buf.readInt32BE(matrixOffset);
  const b = buf.readInt32BE(matrixOffset + 4);
  const c = buf.readInt32BE(matrixOffset + 8);
  const d = buf.readInt32BE(matrixOffset + 12);
  console.log('Matrix values:', { a, b, c, d });
  
  if (b === 0x00010000 && c === -0x00010000) {
    console.log('Rotation: 90 degrees');
  } else if (b === -0x00010000 && c === 0x00010000) {
    console.log('Rotation: 270 degrees');
  } else if (a === -0x00010000 && d === -0x00010000) {
    console.log('Rotation: 180 degrees');
  } else {
    console.log('Rotation: 0 degrees (normal)');
  }
} else {
  console.log('tkhd atom not found');
}
