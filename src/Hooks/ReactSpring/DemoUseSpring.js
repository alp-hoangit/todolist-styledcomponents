import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function DemoUseSpring(props) {
    const propsAnim = useSpring({ from: { opacity: 0, color: 'red', fontWeight: 300 }, to: { opacity: 1, color: 'green', fontWeight: 700 }, config: { duration: 1000 } });

    const propsAnimNumber = useSpring({ from: { num: 0, color: 'black' }, to: { num: 200, color: 'red' }, config: { duration: 3000 } });

    const propsAnimScroll = useSpring({ from: { scroll: 0 }, to: { scroll: 1000 }, config: { duration: 1000 } })

    return <div>
        <h1>Change color text</h1>
        <animated.div style={propsAnim}>Hello World</animated.div>
        <hr />
        <h1>Change number</h1>
        <animated.h1 style={{ color: propsAnimNumber.color }}>
            {propsAnimNumber.num}
        </animated.h1>
        <animated.p style={{ fontSize: propsAnimNumber.num }}>1</animated.p>

        <animated.div scrollTop={propsAnimScroll.scroll}>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
            <h4>Hello</h4>
        </animated.div>
    </div>
}
