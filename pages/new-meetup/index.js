import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function newMeetUpPage() {
  function addMeetUpHandler(enteredMeetUpData) {
    console.log(enteredMeetUpData);
  }

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
}

export default newMeetUpPage;
