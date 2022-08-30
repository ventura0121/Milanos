import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <h3 className="footer">Milano's Masonry</h3>
            <p className="footer">
                498 Marion Ln. <br />
                Paramus, NJ 07652 <br />
                (201) 615-2515 <br />
            </p> 
            <p className="copyright footer">© {new Date().getFullYear()} OsunaDesigns LLC</p>
        </footer>
    )

  }