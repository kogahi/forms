import { connect } from 'react-redux'
import client from '../../client.js'
import actions from '../actions/actions'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSetValue(value){
            dispatch(actions.setValue(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(client)