import React from "react";

function Card(props) {
  const [state, setState] = React.useState(props.state);

  function handleClick() {
    setState(true);
    if (state == false) {
      props.setCount((preValue) => {
        return preValue - 1;
      });
    }
  }

  React.useEffect(() => {
    if (props.markState) {
      setState(true);
    }
  }, [props.markState]);

  return (
    <div
      onClick={handleClick}
      className={state == false ? "card-body-unread" : "card-body"}
      style={props.dm == null ? null : { backgroundColor: "transparent" }}
    >
      <img className="card-pfp" src={props.profilePicture} alt="pfp-img" />
      <div className="card-text-container">
        <div className="card-text">
          <p>
            <span className="blue-hover-name">{props.name}&nbsp;</span>
            <span>{props.action}&nbsp;</span>
            {props.subjectName == null ? null : (
              <span
                className="blue-hover-sub"
                style={
                  props.action.includes("group", 0) == true
                    ? { fontWeight: "800", color: "hsl(219, 85%, 26%)" }
                    : { fontWeight: "800" }
                }
              >
                {props.subjectName}&nbsp;
              </span>
            )}
            {state == false ? <span>&nbsp;</span> : null}
            <span style={{ display: "inline-block" }}>
              {state == false ? <div className="unread-dot"></div> : null}
            </span>
          </p>
        </div>
        <p className="card-post-time">{props.time} ago</p>

        {props.dm == null ? null : <div className="card-dm">{props.dm}</div>}
      </div>
      {props.post == null ? null : (
        <img className="card-post" src={props.post} alt="post-img" />
      )}
    </div>
  );
}

export default Card;
