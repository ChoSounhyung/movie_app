import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location.state); // movie화면에서 detail을 클릭하지 않고 그냥 movie-detail 페이지로 가면 state가 undefind로 나옴
    if (location.state === undefined) {
      // 클릭하지 않고 movie-detail 페이지로 가면 user를 데려와서 home으로 redirect시킴
      history.push("/"); // home으로, history를 이용하면 url을 바꿀 수 있음
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
