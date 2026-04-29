  import sharp from 'sharp';
  import { readdirSync } from 'fs';

  const dir = './public/images';

  for (const file of readdirSync(dir).filter(f => f.endsWith('.png'))) {
    await sharp(`${dir}/${file}`)
      .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(`${dir}/${file}.tmp.png`);

    const { renameSync } = await import('fs');
    renameSync(`${dir}/${file}.tmp.png`, `${dir}/${file}`);
    console.log(`✓ ${file}`);
  }