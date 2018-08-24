import * as React from "react";
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { getItem, getList } from '../store/actions/userActions';
import storeType from '../store/types/index'
import actionType from '../store/actions/actionType'

interface interfaceProps extends storeType {
  getItem(): actionType;
  getList(start:number,end:number): actionType;
}

class User extends React.Component<interfaceProps, {}> {
  constructor(props: interfaceProps){
    super(props)
  }
  render() {
    return (
    <div>
      <span onClick={()=>{this.props.getItem();console.log(this.props)}}>{this.props.userState.name}</span>
      <span onClick={()=>{this.props.getList(1,5);console.log(this.props)}}>{this.props.userState.sex}</span>
    <span>
      
      {this.props.newsState.id}
      
      </span>
      
      </div>)
  }
}

export default connect(function mapStateToProps(state: interfaceProps, ownProps: any): interfaceProps{
  // console.log([state,ownProps])
  return state
},function mapDispatchToProps(dispatch: Dispatch, ownProps: interfaceProps){
  return bindActionCreators({
    getItem,
    getList
  },dispatch)
},function mergeProps(stateProps: any, dispatchProps: any, ownProps: any){
  // console.log([ownProps, dispatchProps, ownProps])
  return { ...ownProps, ...stateProps, ...dispatchProps};
})(User)