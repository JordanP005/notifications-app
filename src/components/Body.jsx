import React from "react";
import Card from "./Card";

function Body() {
  const [markState, setMarkState] = React.useState(false);

  const database = [
    {
      name: "Mark Webber",
      profilePicture: "assets/images/avatar-mark-webber.webp",
      action: "reacted to your recent post",
      subjectName: "My first tournament today",
      time: "1m",
      readState: false,
    },
    {
      name: "Angela Gray",
      profilePicture: "assets/images/avatar-angela-gray.webp",
      action: "followed you",
      time: "5m",
      readState: false,
    },
    {
      name: "Jacob Thompson",
      profilePicture: "assets/images/avatar-jacob-thompson.webp",
      action: "has joined your group",
      subjectName: "Chess Club",
      time: "1 day",
      readState: false,
    },
    {
      name: "Rizky Hasanuddin",
      profilePicture: "assets/images/avatar-rizky-hasanuddin.webp",
      action: "sent you a private message",
      dm: "Hello, thanks for setting up the Chess club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "5 days",
      readState: true,
    },
    {
      name: "Kimberly Smith",
      profilePicture: "assets/images/avatar-kimberly-smith.webp",
      action: "commented on your picture",
      post: "assets/images/image-chess.webp",
      time: "1 week",
      readState: true,
    },
    {
      name: "Nathan Peterson",
      profilePicture: "assets/images/avatar-nathan-peterson.webp",
      action: "reacted to your recent post",
      subjectName: "5 end-game strategies to increase your win rate",
      time: "2 weeks",
      readState: true,
    },
    {
      name: "Anna Kim",
      profilePicture: "assets/images/avatar-anna-kim.webp",
      action: "left the group",
      subjectName: "Chess Club",
      time: "3 weeks",
      readState: true,
    },
  ];

  function handleMark() {
    setMarkState(true);
    setCount(0);
  }

  let numCount = 0;
  database.map((people) => {
    if (people.readState == false) {
      numCount++;
    }
  });
  const [count, setCount] = React.useState(numCount);

  return (
    <div className="background">
      <div className="main-container">
        <div className="header-row">
          <div className="notification-container">
            <h1>Notifications</h1>
            <div className="notification-block">{count}</div>
          </div>
          <p onClick={handleMark}>Mark all as read</p>
        </div>
        <div className="card-container">
          {database.map((person, index) => {
            return (
              <Card
                name={person.name}
                profilePicture={person.profilePicture}
                action={person.action}
                subjectName={person.subjectName}
                time={person.time}
                dm={person.dm}
                post={person.post}
                state={person.readState}
                markState={markState}
                setCount={setCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
