
import './styleSidebar.css';


function Side(props) {
    return (<>
      <div id="mySidebar" className="sidebar">
        <a href="#" className="closebtn" onClick={props.onClick}>×</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

    </>  );
}

export default Side;




