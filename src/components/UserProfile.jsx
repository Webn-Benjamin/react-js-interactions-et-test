import propTypes from 'prop-types'
import { useCallback, useContext } from 'react'
import { Context } from '../context'
import classnames from 'classnames'

function UserProfile (props) {

  const infoPartial = <>
    <div>{props.user.username}</div>
    <div>{props.user.email}</div>
  </>

  const infoComplete = <>
    <div>username : {props.user.username}</div>
    <div>email : {props.user.email}</div>
    <div>address : {props.user.address?.suite} {props.user.address?.street} {props.user.address?.city}</div>
    <div>phone : {props.user.phone}</div>
    <div>website : {props.user.website}</div>
    <div>company : {props.user.company?.name}</div>
  </>

  const handleDelete = useCallback(event => {
    event.stopPropagation()
    props.deleteUser(props.user.id)
  }, [props])

  const { context } = useContext(Context)

  return (
    <div className={classnames('card bg-' + context.theme, { 'text-light': context.theme === 'dark' })}>
      <img
        src="https://media.istockphoto.com/photos/winter-paysage-picture-id182902156?b=1&k=20&m=182902156&s=170667a&w=0&h=T-p_uID6Nc2l3Ww5X42LlSBODHav5Qn31UHe4PRaWNc="
        className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <div className="card-text">
          {props.complete ? infoComplete : infoPartial}
        </div>
        <div className="d-flex justify-content-end">
          {props.deleteUser && <button className="btn btn-danger" onClick={handleDelete}>
            <i className="bi bi-trash3"/>
          </button>}
        </div>
      </div>
    </div>
  )
}

UserProfile.propTypes = {
  user: propTypes.object.isRequired,
  deleteUser: propTypes.func,
  complete: propTypes.bool,
}

export default UserProfile
