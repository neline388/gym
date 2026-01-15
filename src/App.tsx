import Navbr from "./components/Navbr";
import HeroSection from "./components/Herosection";
import FeaturesSection from "./components/FeatureSection";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import MembersSection from "./components/MemersSection";
import OurClass from "./components/OurClasses";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbr />
      <HeroSection 
      rightImageSrc={`${import.meta.env.BASE_URL}assets/HomePageGraphic.png`} 
      />
      <FeaturesSection
        cards={[
          {
            icon: <FitnessCenterRoundedIcon />,
            title: "State of the Art Facilities",
            body: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum a in lectus pellentesque.",
            href: "#facilities",
          },
          {
            icon: <GroupsRoundedIcon />,
            title: "100's of Diverse Classes",
            body: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis.",
            href: "#classes",
          },
          {
            icon: <SupportAgentRoundedIcon />,
            title: "Experts and Pro Trainers",
            body: "Fusce vestibulum viverra ut cras. Nisl tortor egestas... (replace with your text).",
            href: "#trainers",
          },
        ]}
      />
      <MembersSection
        topImageSrc={`${import.meta.env.BASE_URL}assets/BenefitsPageGraphic.png`}
        leftDecoSrc={`${import.meta.env.BASE_URL}assets/AbstractWaves.png`}
        bottomDecoSrc={`${import.meta.env.BASE_URL}assets/Sparkles.png`}
      />
      <OurClass
        title="Our Classes"
        paragraph="Pick a style that matches your schedule and goals."
        backgroundSrc={`${import.meta.env.BASE_URL}assets/Circles.png`}
        items={[
          {
            src: `${import.meta.env.BASE_URL}assets/pilates.png`,
            alt: "Pilates class",
            buttonText: "Pilates",
            onClick: () => console.log("Pilates"),
          },
          {
            src: `${import.meta.env.BASE_URL}assets/yoga.png`,
            alt: "Yoga class",
            buttonText: "Yoga",
            onClick: () => console.log("Yoga"),
          },
          {
            src: `${import.meta.env.BASE_URL}assets/bodyuilding.png`,
            alt: "Body building class",
            buttonText: "Body Building",
            onClick: () => console.log("Body Building"),
          },
        ]}
      />
      <ContactSection
        imageSrc={`${import.meta.env.BASE_URL}assets/ContactUsPageGraphic.png`}
        onSubmit={(data) => console.log(data)}
      />
      <Footer
        logoSrc={`${import.meta.env.BASE_URL}assets/HomePageText.png`}
        phone="+39 (338) 291-8765"
        email="negarlaleh1@gmil.com"
        githubUrl="https://github.com/neline388"
        linkedinUrl="https://www.linkedin.com/in/negar-laleh/"
      />
    </>
  );
}

export default App
