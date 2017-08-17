import React from 'react'

export default function bindPropsComponent(boundProps) {
    return (Component) => (props) => (
        React.createElement(Component, {...boundProps, ...props})
    )
}