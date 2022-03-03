import { connect } from "react-redux";
import { addSizeToFilter, removeSizeFromFilter } from "../store/action";

function Sidebar(props) {
  let sizes = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];

  function handleSize(event) {
    if(props.size.includes(event.target.innerText)){
      props.dispatch(removeSizeFromFilter(event.target.innerText))
    }else{
      props.dispatch(addSizeToFilter(event.target.innerText));
    }
  }

  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map(size => (
          <span className="size" key={size} onClick={handleSize}>
            {size}
          </span>
        ))}
      </div>
    </aside>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    size: state.size.size
  };
}

export default connect(mapStateToProps)(Sidebar);