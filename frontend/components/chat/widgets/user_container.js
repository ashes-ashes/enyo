import { connect } from 'react-redux'
import User from './user';

const mapStateToProps = (state) => ({
    type: 'default'
})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(User)