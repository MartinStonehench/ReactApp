import React from 'react';

const images = [
    {
        src: 'https://images.freeimages.com/images/previews/388/spider-1520858.jpg',
        alt: 'Vogelspinne',
        width:640,
        height:480
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/9dd/night-time-1360836.jpg',
        alt: 'Nächtlicher Nebel',
        width:640,
        height:480
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/a1b/the-sun-1396604.jpg',
        alt: 'Sonne am Horizont',
        width:640,
        height:480
    },
    {
        src:'data:image/jpeg;base64,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',
        alt:'Terminator',
        width:800,
        height:600
    }
];
const style = {
    "text-align": "center"
};

export class ImageChanger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageIndex: 0,
            timer: 1_000
        };

        setInterval(() => {
            this.changeImage();
        }, this.state.timer);
    }

    changeImage() {
        this.setState((state, props) => {
            return {
                imageIndex: this.getNextIndex(images, state.imageIndex)
            }
        });
    }

    getNextIndex(images, currentIndex) {
        return currentIndex == images.length - 1 ? 0 : currentIndex + 1;
    }

    render() {
        const currentImage = images[this.state.imageIndex];

        return (
            <>
                <h1 style={style}> {currentImage.alt} </h1>
                <br />

                <div style={style}>
                    <img
                        width={currentImage.width}
                        height={currentImage.height}
                        src={currentImage.src}
                        alt={currentImage.alt}
                    />
                </div>
            </>
        );
    }
}