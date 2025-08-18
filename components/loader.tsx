export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div>
        <div className="ring-3">
          <div className="ring-2">
            <div className="ring-1">
              <div className="black-hole"></div>
              <div className="glow"></div>
            </div>
          </div>
        </div>

        <div className="container-loader">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <svg key={n} className={`crescent crescent-${n}`} viewBox="0 0 50 50">
              <path
                d="M 0 0 C 54 50 185 57 226 0 C 198 39 35 32 0 0"
                fill="#ffffff55"
              ></path>
            </svg>
          ))}
        </div>

    
      </div>

      
    </div>
  );
}
