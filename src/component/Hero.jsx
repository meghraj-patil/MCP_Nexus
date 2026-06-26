import "../App.css";

export default function Hero() {
return ( <div className="hero">


  <div className="hero-content">

    <p className="hero-label">
      See Beyond the Shipment
    </p>

    <h1 className="hero-title">
      MCP
      <br />
      <span className="hero-subtitle">
        Nexus
      </span>
    </h1>

    <p className="hero-text">
      Track orders, monitor deliveries,
      and get real-time updates through
      intelligent conversations.
    </p>

    <div className="hero-actions">

      <button className="hero-btn">
        Launch Dashboard →
      </button>

      <button className="hero-link">
        Watch film
      </button>

    </div>

    <div className="hero-footer">

      <span>v2.4 · Nexus</span>

      <div className="hero-line"></div>

      <span>Live</span>

    </div>

  </div>

</div>


);
}
