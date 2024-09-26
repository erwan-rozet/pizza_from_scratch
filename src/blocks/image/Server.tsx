import React from 'react'
import Image from 'next/image'

export default function ImageBlockServer({
  image,
}: {
  image: { url: string; alt: string; description: string }
}) {
  console.log('ImageBlockServer Props:', image)
  return (
    <div className="mx-80">
      <Image
        src={image.url}
        alt={image.alt}
        width={1920}
        height={1080}
        // layout="fill" // Occupe tout l'espace parent
        // objectFit="cover" // Assure que l'image couvre sans être déformée
        // objectPosition="center" // Centre l'image
        priority={true} // Charge l'image immédiatement pour éviter le lazy loading si nécessaire
        quality={100} // Optionnel, pour la qualité maximale de l'image
        // sizes="(max-width: 2768px) 100vw, (max-width: 1848px)"
      />
      <div>
        <h1>{image.description}</h1>
      </div>
    </div>
  )
}
