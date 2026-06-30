'use client'
import { useState, useRef, useEffect, CSSProperties } from 'react';
import { Wheel } from 'react-custom-roulette';
import type { WheelData } from 'react-custom-roulette';

const COLORS = [
  { bg: '#FF6B6B', text: '#FFF' },
  { bg: '#4ECDC4', text: '#FFF' },
  { bg: '#45B7D1', text: '#FFF' },
  { bg: '#F9CA24', text: '#000' },
  { bg: '#6C5CE7', text: '#FFF' },
  { bg: '#A29BFE', text: '#000' },
  { bg: '#FD79A8', text: '#FFF' },
  { bg: '#FDCB6E', text: '#000' },
];

const DEFAULT_OPTIONS = `Premio 1
Premio 2
Premio 3
Premio 4
Premio 5
Premio 6
Premio 7
Premio 8`;

// ============================================
// INLINE STYLES
// ============================================

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.9,
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '350px 1fr 300px',
    gap: '20px',
    maxWidth: '1800px',
    margin: '0 auto',
  },
  panel: {
    background: 'white',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    marginBottom: '15px',
    color: '#333',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    fontSize: '1rem',
    minHeight: '150px',
    fontFamily: 'inherit',
    resize: 'vertical' as const,
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginTop: '15px',
    flexWrap: 'wrap' as const,
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'white',
    transition: 'all 0.3s',
  },
  buttonPrimary: {
    background: '#667eea',
  },
  buttonSecondary: {
    background: '#95a5a6',
  },
  buttonDanger: {
    background: '#e74c3c',
  },
  spinButton: {
    padding: '20px 50px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(102,126,234,0.4)',
  },
  spinButtonDisabled: {
    background: '#bdc3c7',
    cursor: 'not-allowed',
  },
  wheelPanel: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '30px',
  },
  wheelContainer: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'center',
  },
  winnerBox: {
    background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    color: 'white',
    padding: '25px',
    borderRadius: '15px',
    textAlign: 'center' as const,
    fontSize: '1.8rem',
    fontWeight: 'bold',
    boxShadow: '0 5px 20px rgba(17,153,142,0.4)',
  },
  infoGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    background: '#f8f9fa',
    borderRadius: '8px',
  },
  slider: {
    width: '100%',
    height: '8px',
    cursor: 'pointer',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    color: '#555',
  },
};

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [currentSegment, setCurrentSegment] = useState(-1);
  const [tickCount, setTickCount] = useState(0);
  const [inputText, setInputText] = useState(DEFAULT_OPTIONS);
  const [wheelData, setWheelData] = useState<WheelData[]>([]);
  const [spinDuration, setSpinDuration] = useState(1.0);
  const [spinRevolutions, setSpinRevolutions] = useState(4);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [tickSoundEnabled, setTickSoundEnabled] = useState(true);
  
  const tickAudioRef = useRef<HTMLAudioElement | null>(null);
  const winAudioRef = useRef<HTMLAudioElement | null>(null);
  const spinAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    tickAudioRef.current = new Audio('/audio/efect.mp3');
    winAudioRef.current = new Audio('/audio/efectorl.mp3');
    spinAudioRef.current = new Audio('/audio/efect.mp3');

    if (tickAudioRef.current) tickAudioRef.current.volume = 0.3;
    if (winAudioRef.current) winAudioRef.current.volume = 0.5;
    if (spinAudioRef.current) spinAudioRef.current.volume = 0.4;

    return () => {
      tickAudioRef.current?.pause();
      winAudioRef.current?.pause();
      spinAudioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    const lines = inputText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    if (lines.length === 0) {
      setWheelData([]);
      return;
    }

    const data: WheelData[] = lines.map((line, index) => ({
      option: line,
      style: {
        backgroundColor: COLORS[index % COLORS.length].bg,
        textColor: COLORS[index % COLORS.length].text,
      },
    }));

    setWheelData(data);
  }, [inputText]);

  const playTickSound = () => {
    if (soundEnabled && tickSoundEnabled && tickAudioRef.current) {
      tickAudioRef.current.currentTime = 0;
      tickAudioRef.current.play().catch(() => {});
    }
  };

  const playWinSound = () => {
    if (soundEnabled && winAudioRef.current) {
      winAudioRef.current.currentTime = 0;
      winAudioRef.current.play().catch(() => {});
    }
  };

  const playSpinSound = () => {
    if (soundEnabled && spinAudioRef.current) {
      spinAudioRef.current.currentTime = 0;
      spinAudioRef.current.play().catch(() => {});
    }
  };

  const handleSpinClick = () => {
    if (!mustSpin && wheelData.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * wheelData.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setWinner(null);
      setTickCount(0);
    }
  };

  const handleSpinStart = () => {
    console.log('✅ [onSpinStart] Spin started');
    playSpinSound();
  };

  const handleTick = (segment: number) => {
    setCurrentSegment(segment);
    setTickCount(prev => prev + 1);
    playTickSound();
    console.log(`🎯 [onTick] Segment: ${segment}, Option: ${wheelData[segment]?.option || 'N/A'}`);
  };

  const handleSpinEnd = (prize: number) => {
    setMustSpin(false);
    const winnerOption = wheelData[prize]?.option || 'Unknown';
    setWinner(winnerOption);
    playWinSound();
    console.log(`🏆 [onSpinEnd] Winner: ${winnerOption}`);
  };

  const handleLoadDefault = () => setInputText(DEFAULT_OPTIONS);
  const handleClear = () => setInputText('');
  const handleAddExample = () => setInputText('Opción A\nOpción B\nOpción C\nOpción D');

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🎰 React Custom Roulette v2.0</h1>
        <p style={styles.subtitle}>Test & Debug Environment</p>
      </header>

      <div style={styles.contentWrapper}>
        <aside>
          <div style={styles.panel}>
            <h2 style={styles.sectionTitle}>📝 Opciones</h2>
            <textarea
              style={styles.textarea}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Una opción por línea..."
            />
            <div style={styles.buttonGroup}>
              <button onClick={handleLoadDefault} style={{...styles.button, ...styles.buttonPrimary}}>
                Defecto
              </button>
              <button onClick={handleAddExample} style={{...styles.button, ...styles.buttonSecondary}}>
                Ejemplo
              </button>
              <button onClick={handleClear} style={{...styles.button, ...styles.buttonDanger}}>
                Limpiar
              </button>
            </div>
          </div>

          <div style={{...styles.panel, marginTop: '20px'}}>
            <h2 style={styles.sectionTitle}>⚙️ Config</h2>
            <div style={{marginBottom: '20px'}}>
              <label>Duración: <strong>{spinDuration}s</strong></label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={spinDuration}
                onChange={(e) => setSpinDuration(parseFloat(e.target.value))}
                style={styles.slider}
              />
            </div>
            <div>
              <label>Revoluciones: <strong>{spinRevolutions}</strong></label>
              <input
                type="range"
                min="2"
                max="10"
                step="1"
                value={spinRevolutions}
                onChange={(e) => setSpinRevolutions(parseInt(e.target.value))}
                style={styles.slider}
              />
            </div>
          </div>

          <div style={{...styles.panel, marginTop: '20px'}}>
            <h2 style={styles.sectionTitle}>🔊 Sonido</h2>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
                style={styles.checkbox}
              />
              Sonido General
            </label>
            <label style={{...styles.checkboxLabel, marginTop: '10px'}}>
              <input
                type="checkbox"
                checked={tickSoundEnabled}
                onChange={(e) => setTickSoundEnabled(e.target.checked)}
                disabled={!soundEnabled}
                style={styles.checkbox}
              />
              Sonido Tick
            </label>
          </div>
        </aside>

        <main style={{...styles.panel, ...styles.wheelPanel}}>
          {wheelData.length > 0 ? (
            <>
              <div style={styles.wheelContainer}>
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={wheelData}
                  onSpinStart={handleSpinStart}
                  onTick={handleTick}
                  onSpinEnd={handleSpinEnd}
                  onStopSpinning={() => setMustSpin(false)}
                  spinDuration={spinDuration}
                  spinRevolutions={spinRevolutions}
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
                style={mustSpin ? {...styles.spinButton, ...styles.spinButtonDisabled} : styles.spinButton}
              >
                {mustSpin ? '🎰 GIRANDO...' : '🎰 GIRAR'}
              </button>

              {winner && <div style={styles.winnerBox}>🏆 {winner}</div>}
            </>
          ) : (
            <p style={{color: '#999', fontSize: '1.3rem'}}>⚠️ Agrega opciones</p>
          )}
        </main>

        <aside>
          <div style={styles.panel}>
            <h2 style={styles.sectionTitle}>📊 Stats</h2>
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <span>Opciones:</span>
                <strong>{wheelData.length}</strong>
              </div>
              <div style={styles.infoItem}>
                <span>Segmento:</span>
                <strong>{currentSegment >= 0 ? wheelData[currentSegment]?.option || '-' : '-'}</strong>
              </div>
              <div style={styles.infoItem}>
                <span>Ticks:</span>
                <strong>{tickCount}</strong>
              </div>
              <div style={styles.infoItem}>
                <span>Estado:</span>
                <strong>{mustSpin ? '🔄 Girando' : '⏸️ Parado'}</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
