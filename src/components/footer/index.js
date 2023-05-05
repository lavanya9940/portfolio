import "./footer.css"
function Footer(props) {
    return (
        <>
            <footer className="container">
                <div className="footer-text">
                    Developed by{" "}
                    <a href={process.env.PUBLIC_URL}>@Premkumar</a>
                </div>
                <div className="contact-me">
                    <a href="https://api.whatsapp.com/send?phone=919553261501&text=I've%20seen%20your%20profile%20at%20premkumar0.github.io%0A" target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + "/img/whatsapp.svg"} alt="contact" />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;