const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-line">
          <a href="https://www.eveonline.com/" target="_blank" rel="noreferrer">
            Official EVE Online
          </a>
        </p>
        <p className="footer-line">
          <a href="https://wiki.eveuniversity.org/" target="_blank" rel="noreferrer">
            EVE University
          </a>
        </p>
        <p className="footer-line">
          <a href="https://zkillboard.com/" target="_blank" rel="noreferrer">
            zkillboard
          </a>
        </p>
        <p className="footer-line">All rights reserved {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer