import "./work.css"
function Work(props) {
    return (
        <>
            <section id="work" className="container">
                <div className="section-title">
                    <div className="text-blue font-maitree">Work</div>
                </div>
                <div className="work-body">
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/img/project.png"} alt="Project-1" />
                        <h1>Project 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi?</p>
                    </div>
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/img/project.png"} alt="Project-2" />
                        <h1>Project 2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi?</p>
                    </div>
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/img/project.png"} alt="Project-3" />
                        <h1>Project 3</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi?</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Work;
