import { faBell, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

export default () => {
  return (
    <>
      <header className='p-3 mb-3 border-bottom bg-dark text-white'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a
              href='#'
              className='d-flex align-items-center mb-3 mb-lg-0 mr-lg-3'
            >
              <img
                src='/logo512.png'
                width='40'
                height='40'
                alt='logo'
                className='img-fluid'
              />
            </a>
            <span className='p-1 fs-4'>42Transland</span>
            <div className='d-flex ms-auto text-end align-items-center'>
              <div className='d-inline-block me-2 me-lg-3 dropdown position-static'>
                <a
                  href='#'
                  className='position-relative text-white text-decoration-none'
                  id='dropdownNotification'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <FontAwesomeIcon icon={faBell} fontSize='24' />
                </a>
                <span className='position-relative header-badge bg-danger border border-light rounded-circle'>
                  <span className='visually-hidden'>New notifications</span>
                </span>
                <div
                  className='dropdown-menu shadow notification-list'
                  aria-labelledby='dropdownNotification'
                >
                  <div className='p-2 border-bottom text-center'>
                    <h3>최근 알림</h3>
                  </div>
                  <a
                    href='#'
                    className='notification-list-item p-0 dropdown-item'
                  >
                    <div className='row border-bottom mx-3'>
                      <div className='col-md-auto m-auto'>
                        <img
                          src='seohyeonjin.png'
                          alt='seohyeonjin'
                          width='46'
                          height='46'
                          className='rounded-circle'
                        />
                      </div>
                      <div className='col'>
                        <div className='d-inline-block align-items-center py-3'>
                          <span className='notification-list-text mb-2'>
                            <span className='fw-bold text-small'>
                              Seo Hyeon Jin
                            </span>
                            님께서
                            <span className='fw-bold px-1 text-primary'>
                              친구 등록
                              <FontAwesomeIcon icon={faUser} />
                            </span>
                            요청을 보냈습니다.
                          </span>
                          <span>
                            <small>방금 전</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href='#'
                    className='notification-list-item p-0 dropdown-item'
                  >
                    <div className='row border-bottom mx-3'>
                      <div className='col-md-auto m-auto'>
                        <img
                          src='yujeong.png'
                          alt='yujeong'
                          width='46'
                          height='46'
                          className='rounded-circle'
                        />
                      </div>
                      <div className='col'>
                        <div className='d-inline-block align-items-center py-3'>
                          <span className='notification-list-text mb-2'>
                            <span className='fw-bold text-small'>Yu Jeong</span>
                            : 안녕? 뭐해? 잠시 시간 되면 답좀 해주라~~ 어제
                            겜한거 말인데~ 모드 깔아서 하는 방법좀 알려주지
                            않을래??
                          </span>
                          <span>
                            <small>10분 전</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href='#'
                    className='notification-list-item p-0 dropdown-item'
                  >
                    <div className='row border-bottom mx-3'>
                      <div className='col-md-auto m-auto'>
                        <img
                          src='jimin.jpeg'
                          alt='jimin'
                          width='46'
                          height='46'
                          className='rounded-circle'
                        />
                      </div>
                      <div className='col'>
                        <div className='d-inline-block align-items-center py-3'>
                          <span className='notification-list-text mb-2'>
                            <span className='fw-bold text-small'>Ji Min</span>:
                            야 ㅋㅋㅋㅋㅋ 겜 한판 ㄱㄱ?
                          </span>
                          <span>
                            <small>1시간 26분 전</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='d-inline-block me-2 me-lg-3'>
                <a
                  href='#'
                  className='position-relative text-white text-decoration-none'
                >
                  <FontAwesomeIcon icon={faUserGroup} fontSize='24' />
                </a>
                <span className='position-relative header-badge bg-danger border border-light rounded-circle'>
                  <span className='visually-hidden'>New notifications</span>
                </span>
              </div>
              <div className='dropdown'>
                <a
                  href='#'
                  className='link-light text-decoration-none dropdown-toggle'
                  id='dropdownUser'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img
                    src='/smun.png'
                    width='32'
                    height='32'
                    alt='smun'
                    className='me-2 rounded-circle img-fluid'
                  />
                </a>
                <ul
                  className='dropdown-menu text-small shadow'
                  aria-labelledby='dropdownUser'
                >
                  <li>
                    <span className='dropdown-item'>
                      Welcome <span className='fw-bold'>smun</span>!
                    </span>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a href='#' className='dropdown-item'>
                      내 프로필
                    </a>
                  </li>
                  <li>
                    <a href='#' className='dropdown-item'>
                      아힝흥헹
                    </a>
                  </li>
                  <li>
                    <a href='#' className='dropdown-item'>
                      인트라42
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a href='#' className='dropdown-item'>
                      로그아웃
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
