import executeQuery from "./api/lib/db";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(contex) {
//   const req = contex.req;
//   const res = contex.res;

//   // fetch data from api

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from api
  const result = await executeQuery({
    query: "SELECT * FROM meetups",
    values: [],
  });
  const meetups = await result;

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup.id,
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
