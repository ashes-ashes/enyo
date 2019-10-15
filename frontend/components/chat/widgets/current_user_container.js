import { connect } from 'react-redux'
import User from './user';

const mapStateToProps = (state) => ({
    type: 'current'
})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(User)