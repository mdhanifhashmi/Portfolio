'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = typeof window !== 'undefined' ? window.scrollY || window.pageYOffset : 0
      setIsVisible(scrollPosition > 100)
    }

    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Back to Top"
          title="Back to Top"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}

      <style jsx>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.85) 0%, rgba(139, 92, 246, 0.85) 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: fadeInScale 0.4s ease-out;
          padding: 0;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.6);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .scroll-to-top-btn:hover {
          transform: translateY(-4px);
          background: linear-gradient(135deg, rgba(168, 85, 247, 1) 0%, rgba(139, 92, 246, 1) 100%);
          box-shadow: 0 8px 32px rgba(168, 85, 247, 0.5);
        }

        .scroll-to-top-btn:active {
          transform: translateY(-2px);
        }

        .scroll-to-top-btn svg {
          width: 20px;
          height: 20px;
          animation: arrowBounce 2s ease-in-out infinite;
        }

        @keyframes arrowBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .scroll-to-top-btn:hover svg {
          animation: arrowBounce 1s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
          }

          .scroll-to-top-btn svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </>
  )
}