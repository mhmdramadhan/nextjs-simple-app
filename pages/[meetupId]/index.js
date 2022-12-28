import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
      title="test"
      address="lorem asda asdasd"
      description="asdasdasd asdasd asd"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        }
      },
      {
        params: {
          meetupId: "m2",
        }
      },
    ],
  };
}

export async function getStaticProps(contex) {
  // fetch data for a single meetups

  const meetupId = contex.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        title: 'First Meetup',
        address: 'Some Street 5, Some city',
        description: 'The First Meetups here',
      },
    },
  };
}

export default MeetupDetails;
