import { Counter } from './Counter'
import { HelloWorld } from './HelloWorld'

export const App = (): JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <h1>vite + React + TypeScript ボイラープレート</h1>
    <HelloWorld name="Engineer" />
    <Counter />
  </div>
)
