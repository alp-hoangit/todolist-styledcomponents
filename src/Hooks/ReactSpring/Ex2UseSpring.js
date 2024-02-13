import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Ex2UseSpring(props) {

    let propsUseSpring = useSpring({
        from: {
            color: [44, 38, 203],
        },
        to: {
            color: [188, 130, 123],
        },
        config: {
            duration: 2000,
            delay: 0,
        }
    });

    //Tăng font chữ, tăng độ dài
    let propsAnimation = useSpring({
        from: {
            width: '0%',
            fontSize: '10px',
            height: '0%'
        },
        to: async (next, cancel) => {
            await next({ width: '100%', height: '100%', fontSize: '50px' });
            await next({ width: '50%', height: '50%', fontSize: '10px' });
            await next({ width: '100%', height: '100%', fontSize: '50px' });
        },
        config: {
            duration: 1000
        }
    })

    return (
        <div>
            <animated.div style={{ fontWeight: 'bolder', color: propsUseSpring.color.interpolate((r, g, b) => { return `rgb(${r},${g},${b})` }) }}>
                Phạm Huy Hoàng
            </animated.div>

            <animated.div style={propsAnimation} className='bg-dark text-light'>
                <span>Hello Huy Hoàng</span>
                <p>Hôm nay phải học 10 bài lập trình</p>
            </animated.div>
        </div>
    )
}
