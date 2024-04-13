import GreetBody from "./Profile/Greet";

function PROFILE({ profile }) {
  return (
    <div ref={profile} className="profile">
      <GreetBody />
    </div>
  );
}

export default PROFILE;
