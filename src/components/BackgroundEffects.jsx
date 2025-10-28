import React from 'react';
import '../index.css';

function BackgroundEffects() {
    const stars = Array.from({ length: 40 }).map((_, i) => ({
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        size: Math.random() * 2 + 1 + 'px',
    }));

    return (
        <div className="starry-background">
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                    }}
                ></div>
            ))}

            {/* One or more meteors */}
            <div
                className="meteor"
                style={{
                    top: '20%',
                    left: '90%',
                    width: '120px',
                    height: '2px',
                    animationDelay: '1s',
                }}
            ></div>
            <div
                className="meteor"
                style={{
                    top: '60%',
                    left: '80%',
                    width: '100px',
                    height: '2px',
                    animationDelay: '3s',
                }}
            ></div>
        </div>
    );
}

export default BackgroundEffects;
