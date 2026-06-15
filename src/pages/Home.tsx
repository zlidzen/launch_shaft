const Home = () => (
  <section className="page page-home">
    <div className="home-avatar" aria-hidden="true">
      <img
        className="home-avatar-image"
        src="https://images.evetech.net/characters/2120139145/portrait?tenant=tranquility&size=512"
        alt="EVE Online avatar"
      />
    </div>
    <div className="home-text">
      <p>
        Hi, I&apos;m <span className="home-name">Yulong Smith</span> and I&apos;m a passionate EVE Online player.
      </p>
      <p>
        I think that missiles are the most versatile and fun weapon system in the game, and I want to share my love
        for them with you. This website is dedicated to providing you with the best missile fittings, guides, and
        resources for all your EVE Online needs. Whether you&apos;re a beginner or a veteran, you&apos;ll find something
        useful here.
      </p>
      <p>So buckle up and let&apos;s rocket it together!</p>
      <p>
        If you find that info usefull you may support me by donating some ISK to my character{' '}
        <span className="home-name">Yulong Smith</span> (2120139145). Your support will help me create more content
        and improve the website. Thank you for visiting and fly safe!
      </p>
    </div>
  </section>
)

export default Home