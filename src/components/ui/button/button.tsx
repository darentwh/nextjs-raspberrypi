'use client';
import { useRouter } from 'next/navigation';

function NavigationButton({ destination, label }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(destination);
    router.refresh();
  };

  return (
    <button onClick={handleClick} className="btn">
      {label}
    </button>
  );
}

export default NavigationButton;