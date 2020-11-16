import React, { Component } from "react";
import { is, fromJS } from "immutable";
import API from "../api/api";
import { Button } from "antd";
import { HomeStoreState } from "../interfaces/store/homeStoreState.interface";
import { Link } from "react-router-dom";

export interface IProps {
  formData: HomeStoreState;
  saveFormData: (value: Object) => void;
  clearForm: () => void;
}

export interface IState {
  msg: String;
}

export default class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      msg: "无",
    };
  }
  public componentWillMount() {
    console.log(this.props);
  }

  shouldComponentUpdate(nextProps: Object, nextState: Object) {
    // 性能优化：比较新旧props或state确定是否需要更新，减少重渲染
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  getHome = async () => {
    try {
      let result: any = await API.getHome();
      console.log(result);
      const { code, data, msg } = result;
      if (code === 1 && data) {
        this.props.saveFormData(data);
        console.log(this.props);
        this.setState({
          msg: "发送了异步请求，更新了redux formData",
        });
      } else {
        console.log(msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  clearForm = () => {
    this.setState({
      msg: "清空了redux formData",
    });
    this.props.clearForm();
  };

  render() {
    return (
      <div>
        <Button onClick={this.getHome}>获取Home数据</Button>
        <Button onClick={this.clearForm}>清空Home数据</Button>
        <Link to="/detail">路由跳转</Link>
        <div>redux状态变化：{this.state.msg}</div>
        <div>{this.props.formData.name}</div>
        <div>{this.props.formData.sex}</div>
        <div>{this.props.formData.phoneNo}</div>
      </div>
    );
  }
}
