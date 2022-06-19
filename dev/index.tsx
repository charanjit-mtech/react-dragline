import React from 'react'
import ReactDOM from 'react-dom/client'
import { DraggableContainer, DraggableChild } from '../src/index'

// interface Props {
//   children: React.ReactNode
// }

// class Com1 extends React.Component<Props> {
//   render() {
//     return (
//       <h1>{ this.props.children }</h1>
//     )
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <Com1>hello 1111 world</Com1>
//       123
//     </div>
//   )
// }



const initialChildren = [
  { id: 1, background: '#8ce8df', size: 100, position: { x: 100, y: 10 }},
  { id: 2, background: '#8ce8df', size: 100, position: { x: 400, y: 106 }},
  { id: 3, background: '#d2aff6', size: 150, position: { x: 100, y: 316 }},
  { id: 4, background: '#fee493', size: 200, position: { x: 480, y: 376 }},
]


function App() {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: 600,
    boxShadow: '0 0 5px 1px #CCC inset',
    background: '#F5F8FA',
    color: '#4A4A4A',
    margin: 20,
  }

  const childStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'move',
  }

  return (
    <div>
      <style>{'.active { opacity: .5; }'}</style>
      <DraggableContainer style={containerStyle}>
        {
          initialChildren.map(({ id, background, size, position }) => (
            <DraggableChild
              key={id}
              defaultPosition={position}
            >
              <div
                className="item"
                style={{
                  ...childStyle,
                  background,
                  width: size,
                  height: size,
                }}
              >
                <span>size: {size}</span>
                <span>drag me</span>
              </div>
            </DraggableChild>
          ))
        }
      </DraggableContainer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
