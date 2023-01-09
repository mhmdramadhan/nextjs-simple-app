import executeQuery from '../api/lib/db';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const result = await executeQuery({
    query: 'SELECT * FROM meetups',
    values: [],
  });
  const meetups = await result;

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup.id.toString() },
    })),
  };
}

export async function getStaticProps(contex) {
  // fetch data for a single meetups

  const meetupId = contex.params.meetupId;

  const result = await executeQuery({
    query: 'SELECT * FROM meetups WHERE id = ?',
    values: [meetupId],
  });
  const selectedMeetup = await result[0];
  
  console.log(selectedMeetup.address)

  return {
    props: {
      meetupData: {
        id: selectedMeetup.id,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
