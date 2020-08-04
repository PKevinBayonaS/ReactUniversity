import React from 'react'
import styles from './Image.module.css'

const {card, image: imageclass, footer, avatar} = styles;
const Image = ({image}) => (
    <div className={card}>
        <img src={image.source}
        alt='Imagen'
        className={imageclass}/>
        <div className={footer}>
            <img src={image.author.avatar}
              alt='Avatar'
              className={avatar}  
            />
            <div>
                Autor: {image.author.name}
            </div>
            <div>
                Views: {image.view}
            </div>
        </div>
    </div>
)

export default Image