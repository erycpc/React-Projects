import { useState } from 'react';

function Tip() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState(1);

  const activeTip = customTip !== "" ? Number(customTip) : tipPercentage;
  const tipAmount = (bill * activeTip) / 100;
  const totalBill = Number(bill) + tipAmount;
  const tipPerPerson = people > 0 ? tipAmount / people : 0;
  const totalPerPerson = people > 0 ? totalBill / people : 0;
  const isValid = bill !== '' && people > 0

  const presets = [5, 10, 15, 25, 50];

  return (
    <div className="tip-calculator">
        bill: <input type="number" value={bill} onChange={e => setBill(e.target.value)} />
        <br />
        tip percentage:
        <input
            type="number"
            placeholder="Custom"
            value={customTip}
            onChange={e => {
                setCustomTip(e.target.value);
                setTipPercentage(0);  // clear preset when custom is entered
            }}
        />
        {presets.map(preset => (
            <button
                key={preset}
                className={tipPercentage === preset && customTip === '' ? 'active' : ''}
                onClick={() => {
                setTipPercentage(preset)
                setCustomTip('')  // clear custom when preset selected
                }}
            >
                    {preset}%
            </button>
        ))}
        <div className="people-counter">
            <button onClick={() => setPeople(p => Math.max(1, p - 1))}>-</button>
            <span>{people} people</span>
            <button onClick={() => setPeople(p => p + 1)}>+</button>
        </div>
        <div className="results">
            <p>Tip per person: {isValid ? `$${tipPerPerson.toFixed(2)}` : '—'}</p>
            <p>Total per person: {isValid ? `$${totalPerPerson.toFixed(2)}` : '—'}</p>
            <p>Total bill: {isValid ? `$${totalBill.toFixed(2)}` : '—'}</p>
        </div>
    </div>
    
  )
}

export default Tip;