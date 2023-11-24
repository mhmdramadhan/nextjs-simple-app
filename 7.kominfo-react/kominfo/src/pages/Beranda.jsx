// css
import '../assets/plugins/bootstrap/css/bootstrap.min.css';
import '../assets/plugins/icofont/icofont.min.css';
import '../assets/plugins/slick-carousel/slick/slick.css';
import '../assets/plugins/slick-carousel/slick/slick-theme.css';
import '../assets/plugins/css/style.css';
import './Beranda.css';
// end css

import Navbar from '../components/Navbar';
import SliderBeranda from '../components/SliderBeranda';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const Beranda = () => {
  const { profile } = useLoaderData();


  let titleBodyView;
  if (profile) {
    titleBodyView = (
      <>
        <h2 className="title-color">{profile[0].title}</h2>
        <p
          className="mt-4 mb-5"
          dangerouslySetInnerHTML={{
            __html: `${profile[0].body.substring(0, 1100)}...`,
          }}
        ></p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <SliderBeranda />
      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                {titleBodyView}
                <Link
                  to="http://kominfo.test/profile/3"
                  className="btn btn-main-2 btn-round-full btn-icon"
                >
                  Selengkapnya<i className="icofont-simple-right ml-3"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beranda;

export const loader = async () => {
  try {
    const [sliderResponse, profileResponse] = await Promise.all([
      fetch(
        'https://api-splp.layanan.go.id/t/kotabogor.go.id/Kominfo-KotaBogor/1.0/slide',
        {
          method: 'POST',
          headers: {
            accept: '*/*',
            apikey:
              'eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbi1kaXNrb21pbmZvQGtvdGFib2dvci5nby5pZCIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoiYWRtaW4tZGlza29taW5mb0Brb3RhYm9nb3IuZ28uaWQiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6IldlYnNpdGVfS29taW5mbyIsImlkIjo0MDQsInV1aWQiOiJlMmRjZDU3Yy1kNmE5LTRlYTMtYTUwZS0zY2I3OGQ4ZTdjNDYifSwiaXNzIjoiaHR0cHM6XC9cL3NwbHAubGF5YW5hbi5nby5pZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJVbmxpbWl0ZWQiOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsImdyYXBoUUxNYXhDb21wbGV4aXR5IjowLCJncmFwaFFMTWF4RGVwdGgiOjAsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6bnVsbH19LCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia290YWJvZ29yLmdvLmlkIiwibmFtZSI6IldlYnNpdGUtS29taW5mbyIsImNvbnRleHQiOiJcL3RcL2tvdGFib2dvci5nby5pZFwvS29taW5mby1Lb3RhQm9nb3JcLzEuMCIsInB1Ymxpc2hlciI6ImFkbWluQGtvdGFib2dvci5nby5pZCIsInZlcnNpb24iOiIxLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJ0b2tlbl90eXBlIjoiYXBpS2V5IiwiaWF0IjoxNjU4MTE1MjkxLCJqdGkiOiIwZWNjNWY3Yi0zMTE3LTQ3Y2QtOTgzYy03ZDUxNDQzOTFlYWMifQ==.WSMT_gEvEHeHkHX1I_QOukf4_5vdMEpW1XHbY7s90bWrzBnMWLvwbOAh2tEam2yfHxLWT2pztg_fI8KDgRIfLck7dTA7vHRV6BITBFfUpxB24iELGlCbOGJBtXWsd60vTTJktkGMMt9efRgYGQJBO3fpe5ELriMrOjx3no-RhvfPHiTUxGRiU4BRBPmaalB9EyQlPKGo8X1HNNTZ2XG4HZgIghydeQHOevD_Ug3o5iq_MRHhVrUHEq44ed_J6gEXV36UCqqJ4vyla7MIOdRdMJFFxea2tThLDxGkFU-A7BCHHuZHif2oi5zZZwsWgVSgcGrgTExrXTXnlJtVOSUscA==',
          },
          timeout: 10000,
        }
      ),
      fetch(
        'https://api-splp.layanan.go.id/t/kotabogor.go.id/Kominfo-KotaBogor/1.0/profile',
        {
          method: 'POST',
          headers: {
            accept: '*/*',
            apikey:
              'eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbi1kaXNrb21pbmZvQGtvdGFib2dvci5nby5pZCIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoiYWRtaW4tZGlza29taW5mb0Brb3RhYm9nb3IuZ28uaWQiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6IldlYnNpdGVfS29taW5mbyIsImlkIjo0MDQsInV1aWQiOiJlMmRjZDU3Yy1kNmE5LTRlYTMtYTUwZS0zY2I3OGQ4ZTdjNDYifSwiaXNzIjoiaHR0cHM6XC9cL3NwbHAubGF5YW5hbi5nby5pZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJVbmxpbWl0ZWQiOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsImdyYXBoUUxNYXhDb21wbGV4aXR5IjowLCJncmFwaFFMTWF4RGVwdGgiOjAsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6bnVsbH19LCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia290YWJvZ29yLmdvLmlkIiwibmFtZSI6IldlYnNpdGUtS29taW5mbyIsImNvbnRleHQiOiJcL3RcL2tvdGFib2dvci5nby5pZFwvS29taW5mby1Lb3RhQm9nb3JcLzEuMCIsInB1Ymxpc2hlciI6ImFkbWluQGtvdGFib2dvci5nby5pZCIsInZlcnNpb24iOiIxLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJ0b2tlbl90eXBlIjoiYXBpS2V5IiwiaWF0IjoxNjU4MTE1MjkxLCJqdGkiOiIwZWNjNWY3Yi0zMTE3LTQ3Y2QtOTgzYy03ZDUxNDQzOTFlYWMifQ==.WSMT_gEvEHeHkHX1I_QOukf4_5vdMEpW1XHbY7s90bWrzBnMWLvwbOAh2tEam2yfHxLWT2pztg_fI8KDgRIfLck7dTA7vHRV6BITBFfUpxB24iELGlCbOGJBtXWsd60vTTJktkGMMt9efRgYGQJBO3fpe5ELriMrOjx3no-RhvfPHiTUxGRiU4BRBPmaalB9EyQlPKGo8X1HNNTZ2XG4HZgIghydeQHOevD_Ug3o5iq_MRHhVrUHEq44ed_J6gEXV36UCqqJ4vyla7MIOdRdMJFFxea2tThLDxGkFU-A7BCHHuZHif2oi5zZZwsWgVSgcGrgTExrXTXnlJtVOSUscA==',
          },
          timeout: 10000,
        }
      ),
    ]);

    const sliderData = await sliderResponse.json();
    const profileData = await profileResponse.json();

    const response = {
      slider: sliderData,
      profile: profileData,
      // Gabungkan data dari panggilan API lainnya
    };

    return response;
  } catch (error) {
    console.log(error);
  }
};
