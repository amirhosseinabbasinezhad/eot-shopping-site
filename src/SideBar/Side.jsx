

function Side(props) {
    return (<>
      <div id="mySidebar" className="sidebar">
        <a href="#" className="closebtn" onClick={props.onClick}>×</a>
        <a href="#">خانه</a>
        <a href="#">خدمات</a>
        <a href="#">محصولات</a>
        <a href="#">تخفیفات</a>
      </div>

    </>  );
}

export default Side;




