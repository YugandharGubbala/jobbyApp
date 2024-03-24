import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import {FaEnvelope} from 'react-icons/fa'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <ul className="ul-container">
        <li className="logo-container">
          <Link className="link" to="/">
            <img className="logo" src={websiteLogo} alt="website logo" />
          </Link>
        </li>
        <li className="home-jobs-container">
          <Link className="link" to="/">
            <ImHome aria-label="close" className="home-icon" />
            <h1 className="nav-text">Home</h1>
          </Link>
          <Link className="link" to="/jobs">
            <h1 className="nav-text">Jobs</h1>

            <FaEnvelope aria-label="close" className="home-icon" />
          </Link>
        </li>
        <li>
          <FiLogOut
            aria-label="close"
            className="home-icon"
            onClick={onClickLogout}
          />
          <button type="button" className="btn-logout" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
