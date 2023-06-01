import React from "react";
import Chef from "../Assets/restaurant chef B.jpg";
import Restaurant from "../Assets/restaurant.jpg";

const Home = () => {
  return (
    <main style={{ textAlign: "center" }}>
      <h1>Welcome to Little Lemon Restaurant</h1>
      <img src={Chef} alt="Lemon" style={{ maxWidth: "99%" }} />
      <p>
        Welcome to Little Lemon Restaurant! We are dedicated to providing a
        remarkable dining experience that combines exceptional cuisine with a
        warm and inviting atmosphere. Our passion for food and commitment to
        quality is evident in every dish we serve. At Little Lemon, we take
        pride in sourcing the freshest ingredients from local farmers and
        suppliers. Our menu is carefully crafted to showcase the vibrant flavors
        of seasonal produce. From succulent seafood to tender cuts of meat, each
        dish is thoughtfully prepared by our skilled chefs who infuse their
        culinary expertise and creativity into every plate. Indulge in a
        tantalizing appetizer that awakens your taste buds or savor our
        signature main courses, where the flavors dance harmoniously on your
        palate. Our dedicated team is always on hand to recommend the perfect
        wine pairing from our extensive collection, enhancing your dining
        experience.
      </p>
      <p>
        We understand that dietary preferences and restrictions vary, which is
        why we offer a range of options to cater to different needs. Our
        vegetarian and vegan selections are crafted with the same care and
        attention to detail, ensuring that every guest can enjoy a satisfying
        meal. As you step into our restaurant, you will be greeted by a
        welcoming ambiance that reflects the spirit of Little Lemon. Our elegant
        and cozy interior provides the perfect setting for a romantic dinner, a
        family celebration, or a gathering with friends. Immerse yourself in the
        inviting atmosphere, where friendly staff members are dedicated to
        making your experience unforgettable. From the moment you arrive until
        the last bite, we strive to create a memorable dining journey that
        delights your senses and leaves you with a longing to return. Whether
        you're seeking a culinary adventure or a comforting meal, Little Lemon
        Restaurant is the perfect destination.
      </p>

      <img src={Restaurant} style={{ width: "99%" }} alt="Salad" />
    </main>
  );
};

export default Home;
