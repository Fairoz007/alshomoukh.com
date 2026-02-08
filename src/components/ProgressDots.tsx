interface ProgressDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const ProgressDots = ({ total, current, onDotClick }: ProgressDotsProps) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`progress-dot ${current === index ? 'active' : ''}`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
