import { Check } from './Check'
import './TestRunner.css'

const LINES = [
    { label: 'pricing.formula', count: '12 ✓' },
    { label: 'stock.deduction', count: '8 ✓' },
    { label: 'auth.flow',       count: '6 ✓' },
    { label: 'ipc.bridge',      count: '5 ✓' },
    { label: 'ci.pipeline',     count: '7 ✓' },
]

const TestRunner = () => (
    <aside className="runner" aria-hidden="true">
        <header className="runner__head">
            <span className="runner__lights"><i /><i /><i /></span>
            <span className="runner__cmd">$ npm test --watch</span>
        </header>
        <ul className="runner__body">
            {LINES.map((l) => (
                <li key={l.label} className="runner__line">
                    <Check />
                    <strong>{l.label}</strong>
                    <span className="runner__count">{l.count}</span>
                </li>
            ))}
        </ul>
        <footer className="runner__sum">
            <span><b className="runner__pass">38</b> passed</span>
            <span><b>0</b> failed</span>
            <span><b>1.42s</b></span>
        </footer>
    </aside>
)

export default TestRunner
