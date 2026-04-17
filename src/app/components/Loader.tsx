'use client';

import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loader for 4 seconds on first page load
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-50">
      <div className="loader">
        <div className="blackhole">
          <div className="blackhole-circle"></div>
          <div className="blackhole-disc"></div>
        </div>

        <div className="curve">
          <svg viewBox="0 0 500 500">
            <path id="loading" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"></path>
            <text width="500">
              <textPath xlinkHref="#loading">
                loading...
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
