import asset from '../data/asset.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__reel">
        <video
          src={asset("/assets/video/hero.mp4")}
          poster={asset("/assets/video/hero-poster.jpg")}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="reel__badge">
          <i />
          SHOWREEL 2026
        </div>
      </div>
    </section>
  )
}
