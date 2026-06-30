import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import type { WheelData } from 'react-custom-roulette';

const data: WheelData[] = [
  { 
    option: 'Prize 1', 
    style: { backgroundColor: '#ff6b6b', textColor: '#fff' } 
  },
  { 
    option: 'Prize 2', 
    style: { backgroundColor: '#4ecdc4', textColor: '#fff' } 
  },
  { 
    option: 'Prize 3', 
    style: { backgroundColor: '#45b7d1', textColor: '#fff' } 
  },
  { 
    option: 'Prize 4', 
    style: { backgroundColor: '#f9ca24', textColor: '#000' } 
  },
  { 
    option: 'Prize 5', 
    style: { backgroundColor: '#6c5ce7', textColor: '#fff' } 
  },
  { 
    option: 'Prize 6', 
    style: { backgroundColor: '#a29bfe', textColor: '#000' } 
  },
  { 
    option: 'Prize 7', 
    style: { backgroundColor: '#fd79a8', textColor: '#fff' } 
  },
  { 
    option: 'Prize 8', 
    style: { backgroundColor: '#fdcb6e', textColor: '#000' } 
  },
];

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [currentSegment, setCurrentSegment] = useState(-1);
  const [winner, setWinner] = useState<string | null>(null);
  const [tickCount, setTickCount] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setWinner(null);
      setTickCount(0);
    }
  };

  const handleSpinStart = () => {
    console.log('[onSpinStart] Spin started');
  };

  const handleTick = (segment: number) => {
    setCurrentSegment(segment);
    setTickCount(prev => prev + 1);
    console.log(`[onTick] Segment: ${segment}, Option: ${data[segment]?.option}`);
  };

  const handleSpinEnd = (prize: number) => {
    setMustSpin(false);
    setWinner(data[prize].option);
    console.log(`[onSpinEnd] Winner: ${data[prize].option}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Custom Roulette v2.0</h1>
      <p style={styles.subtitle}>React 19 - Enhanced with Tick Events</p>
      
      <div style={styles.wheelContainer}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onSpinStart={handleSpinStart}
          onTick={handleTick}
          onSpinEnd={handleSpinEnd}
          spinDuration={1.0}
          spinRevolutions={4}
          outerBorderColor="#333"
          outerBorderWidth={10}
          innerRadius={20}
          radiusLineColor="#fff"
          radiusLineWidth={2}
          fontSize={16}
          textDistance={70}
        />
      </div>

      <button
        onClick={handleSpinClick}
        disabled={mustSpin}
        style={{
          ...styles.button,
          backgroundColor: mustSpin ? '#ccc' : '#4ecdc4',
          cursor: mustSpin ? 'not-allowed' : 'pointer',
        }}
      >
        {mustSpin ? 'SPINNING...' : 'SPIN THE WHEEL'}
      </button>

      <div style={styles.infoBox}>
        <div style={styles.infoRow}>
          <strong>Current Segment:</strong>
          <span>{currentSegment >= 0 ? data[currentSegment]?.option : '-'}</span>
        </div>
        <div style={styles.infoRow}>
          <strong>Tick Count:</strong>
          <span>{tickCount}</span>
        </div>
        {winner && (
          <div style={styles.winner}>
            WINNER: {winner}
          </div>
        )}
      </div>

      <div style={styles.console}>
        <h3>Console Log</h3>
        <p>Open browser DevTools to see event logs</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px',
    color: '#333',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  },
  wheelContainer: {
    marginBottom: '30px',
  },
  button: {
    padding: '15px 40px',
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    marginBottom: '30px',
    transition: 'all 0.3s ease',
  },
  infoBox: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    minWidth: '350px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #e0e0e0',
  },
  winner: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#4ecdc4',
    color: '#fff',
    textAlign: 'center' as const,
    fontSize: '20px',
    fontWeight: 'bold' as const,
    borderRadius: '8px',
  },
  console: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#2d3748',
    color: '#fff',
    borderRadius: '8px',
    textAlign: 'center' as const,
  },
};

export default App;
