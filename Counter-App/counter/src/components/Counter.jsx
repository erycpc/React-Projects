function Counter({ label, count, setCount }) {
    return (
        <div className="counter">
            <h1>{label}: {count}</h1>
            <button className="incr-btn" onClick={() => setCount(c => c + 1)}>+</button>
            <button className="decr-btn" onClick={() => setCount(c => Math.max(0, c - 1))}>-</button>
            <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;