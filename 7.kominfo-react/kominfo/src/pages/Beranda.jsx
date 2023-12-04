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
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';

const Beranda = () => {
  const { profile, presensi, berita, beritaKota } = useLoaderData();

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

  const convertDate = (date) => {
    const parsedDate = new Date(date);

    // Format the date as "DD Month YYYY"
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDateString = parsedDate.toLocaleDateString('en-US', options);

    return formattedDateString;
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: false,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    // fade:true,
    draggable: true,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

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
      <section className="cta-section ">
        <div className="container">
          <div className="cta position-relative">
            <div className="row agenda">
              {presensi.data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-md-3"
                    style={{ marginLeft: '50px' }}
                  >
                    <div
                      className="card my-3 mx-3"
                      style={{ height: '250px', width: '320px' }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{item.kegiatan}</h5>
                        <h6 className="font-weight-light">{item.alamat}</h6>
                        <p className="card-text">{item.keterangan}</p>
                        <div className="blog-item-meta mb-3 mt-4">
                          <span className="text-muted text-capitalize mr-3">
                            <i className="icofont-clock-time mr-2"></i>
                            {item.waktu}
                          </span>
                          <span className="text-black text-capitalize mr-3">
                            <i className="icofont-calendar mr-1"></i>
                            {item.tanggal}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Berita Kominfo Kota Bogor</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div id="news-slider" className="Modern-Slider">
                <Slider {...settings}>
                  {berita.map((item) => (
                    <div key={item.title} className="posts-slide">
                      <div className="posts-img">
                        <img
                          src={`https://kominfo.kotabogor.go.id/asset/images/web/konten/${item.image}`}
                        />
                      </div>
                      <div className="posts-content">
                        <h3 className="posts-title">
                          <Link>{item.title}</Link>
                        </h3>
                        <p
                          className="posts-description"
                          dangerouslySetInnerHTML={{
                            __html: `${item.body.substring(0, 100)}...`,
                          }}
                        />
                        <span className="posts-date">
                          <i className="fa fa-clock-o"></i>
                          {convertDate(item.date_publish)}
                        </span>
                        <Link to="" class="read-more">
                          lihat selangkapnya
                        </Link>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div>
                <i id="arr2" className="icofont-arrow-left icofont-2x"></i>
                <i id="arr1" className="icofont-arrow-right icofont-2x"></i>
              </div>
            </div>
            <div className="col-md-4">
              <div className="appoinment-wrap">
                <div id="gpr-kominfo-widget-container"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>Berita Kota Bogor</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 testimonial-wrap-2">
              <Slider {...settings2}>
                {beritaKota.map((item) => (
                  <div
                    key={item.postid}
                    className="testimonial-block style-2  gray-bg"
                  >
                    <FontAwesomeIcon icon={faQuoteRight} />
                    <img
                      src={item.gambar}
                      alt=""
                      className="img-fluid card-img-top"
                      style={{ height: '350px' }}
                    />
                    <h4 style={{ marginLeft: '-10px' }}>{item.judul}</h4>
                    <span className="">{item.tanggal}</span>
                    <div className="client-info">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${item.konten.substring(0, 200)}...`,
                        }}
                      ></p>
                    </div>
                    <Link
                      to={`https://kotabogor.go.id/index.php/show_post/detail/${item.postid}/${item.slugpost}`}
                      target="_blank"
                      className="btn btn-primary"
                      style={{ background: '#223a66' }}
                    >
                      lihat selengkapnya
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="section blog-wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>Infografis</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mt-4">
              <div className="row mt-3">
                <div className=" category mb-3">
                  <div>
                    <h5 className="mb-4 text-center">Booklet</h5>
                    <hr />
                  </div>
                  <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://kominfo.kotabogor.go.id/asset/images/web/banner/booklet_2018.jpeg"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://kominfo.kotabogor.go.id/asset/images/web/banner/booklet_2018.jpeg"
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://kominfo.kotabogor.go.id/asset/images/web/banner/booklet_2018.jpeg"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                <div className="sidebar-widget latest-post mb-3">
                  <h5>Instagram</h5>
                  <div className="appoinment-wrap">
                    <blockquote
                      style={{ width: '200px' }}
                      className="instagram-media"
                      data-instgrm-version="14"
                    >
                      <a href="https://www.instagram.com/p/CfjpuOYBCxt/"></a>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
                <div className="sidebar-widget latest-post mb-3">
                  <h5 className="mb-4">Twiter</h5>

                  <div
                    className="panel-body"
                    style={{ height: '400px', overflow: 'auto' }}
                  >
                    <div className="appoinment-wrap">
                      <a
                        className="twitter-timeline"
                        href="http://www.twitter.com/kominfobogor?ref_src=twsrc%5Etfw"
                      >
                        Tweets by @kominfobogor
                      </a>
                      <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                      ></script>
                    </div>
                  </div>
                </div>
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
    const [
      sliderResponse,
      profileResponse,
      presensiResponse,
      beritaKominfoResponse,
      beritaKotaResponse,
    ] = await Promise.all([
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
      fetch('https://presensimeeting.kotabogor.go.id/riwayat/api', {
        method: 'GET',
        mode: 'cors',
        headers: {
          accept: '*/*',
        },
        timeout: 10000,
      }),
      fetch(
        'https://api-splp.layanan.go.id/t/kotabogor.go.id/Kominfo-KotaBogor/1.0/berita',
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
        'https://api-splp.layanan.go.id/t/kotabogor.go.id/KotaBogor/1.0/berita?key=b3r1t4b0g0r',
        {
          method: 'GET',
          headers: {
            accept: '*/*',
            apikey:
              'eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbi1kaXNrb21pbmZvQGtvdGFib2dvci5nby5pZCIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoiYWRtaW4tZGlza29taW5mb0Brb3RhYm9nb3IuZ28uaWQiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6IktvdGFCb2dvciIsImlkIjo0MDcsInV1aWQiOiI2ZTk0ZmUzYi1lNGFjLTQxZmMtOGYxYS0wNjlhNDk1Y2VhNzgifSwiaXNzIjoiaHR0cHM6XC9cL3NwbHAubGF5YW5hbi5nby5pZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJVbmxpbWl0ZWQiOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsImdyYXBoUUxNYXhDb21wbGV4aXR5IjowLCJncmFwaFFMTWF4RGVwdGgiOjAsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6bnVsbH19LCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia290YWJvZ29yLmdvLmlkIiwibmFtZSI6IktvdGFCb2dvciIsImNvbnRleHQiOiJcL3RcL2tvdGFib2dvci5nby5pZFwvS290YUJvZ29yXC8xLjAiLCJwdWJsaXNoZXIiOiJhZG1pbkBrb3RhYm9nb3IuZ28uaWQiLCJ2ZXJzaW9uIjoiMS4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9XSwidG9rZW5fdHlwZSI6ImFwaUtleSIsImlhdCI6MTY2NjY2MzIyMiwianRpIjoiYTBkNDAxMzktNmY2MC00MTQzLWE1NjItZTI2MWNmNTkzNDg1In0=.G2Mfcy3Bi-ZxJJj30RMb-FZrVXvJGozy13R13sP1CIGVKRqjLdbIhENXk7v94TYwqZEEmoj2DQxxFQT5LDNmWYX1XEn-Kk9lyQAZWYK6nXwL8g0CDVat3HWtDVukQwVmp3mwQaMJ0j30BdwH99yeDvFYjV1bdLwHn6JilRV2x733llPrgx4Trhin_YGUxoYMqFhEjuSg70_8yQP6MhMs6jqsmlwYJOnQjtBz6hwDz9My9d569xoOIqd6X6_NMbWj5DO85kOBLRg61kQRbFOAhHcY6tXwptBmff5p-nPqh7RylkxZopO8KmF17hDqWRaORPYWyrSZ0gOuRVkuEkErvA==',
          },
          timeout: 10000,
        }
      ),
    ]);

    const sliderData = await sliderResponse.json();
    const profileData = await profileResponse.json();
    const presensieData = await presensiResponse.json();
    const beritaKominfoData = await beritaKominfoResponse.json();
    const beritaKotaData = await beritaKotaResponse.json();

    console.log(beritaKotaData);

    const response = {
      slider: sliderData,
      profile: profileData,
      presensi: presensieData,
      berita: beritaKominfoData,
      beritaKota: beritaKotaData['Berita Bogor'],
      // Gabungkan data dari panggilan API lainnya
    };

    return response;
  } catch (error) {
    console.log(error);
  }
};
