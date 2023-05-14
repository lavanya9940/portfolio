import "./sections.css"
import Resume from "./resume"
import Work from "./work";
import Skills from "./skills";
function Sections(props) {
    return (
        <>
            <Skills />
            <Resume />
            <Work />
        </>
    );
}

export default Sections;
