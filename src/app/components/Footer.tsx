'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 py-3 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-500 text-center">
          © {currentYear} Hanif Mohammad. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        footer {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(17, 24, 39, 0.5) 100%);
        }
      `}</style>
    </footer>
  )
}

