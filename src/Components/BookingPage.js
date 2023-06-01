import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  return (
    <main
      style={{ display: "flex", textAlign: "center", justifyContent: "center" }}
    >
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
      />
    </main>
  );
};

export default BookingPage;
