![](https://laravel-og.beyondco.de/Rainbow.png?theme=dark&packageManager=npm+install&packageName=%40itsrennyman%2Frainbow&pattern=hexagons&style=style_2&description=Fancy+Color+Picker%2C+designed+for+Humans.&md=1&showWatermark=0&fontSize=100px&images=cake)

## Installation

```bash
npm install @itsrennyman/rainbow
```

## Usage

You can use Rainbow with _zero configuration_.

```javascript
import Rainbow from '@itsrennyman/rainbow'

function App() {
  return <Rainbow />
}

export default App
```

## Customizations

There TailwindCSS color palette is loaded by default. You can exclude some colors by passing it to the _exclude_ property:

```javascript
import Rainbow from '@itsrennyman/rainbow'

function App() {
  return (
    <Rainbow
      exclude={[
        'trueGray',
        'blueGray',
        'coolGray',
        'warmGray',
        'orange',
        'rose'
      ]}
    />
  )
}

export default App
```

You can also get the callback value when a color is selected:

```javascript
import Rainbow from '@itsrennyman/rainbow'

function App() {
  return (
    <Rainbow onColorSelected={(color) => console.log('Selected:', color)} />
  )
}

export default App
```
