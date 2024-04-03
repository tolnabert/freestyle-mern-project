import Landing from "../components/Landing";

const LandingPage = () => {
  const landingText = {
    heading: "Welcome to our page",
    paragraph:
      "I'm baby chia normcore venmo, echo park portland twee flannel unicorn direct trade truffaut. Beard mustache semiotics ramps fingerstache lyft. Beard flannel cupping artisan, butcher raclette salvia. Quinoa beard gatekeep flexitarian lyft marxism vinyl thundercats. Pop-up big mood affogato thundercats chambray VHS kogi af trust fund ascot.",
  };

  return (
    <Landing heading={landingText.heading} paragraph={landingText.paragraph} />
  );
};

export default LandingPage;
