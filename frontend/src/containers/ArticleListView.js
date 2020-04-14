import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";
import { Carousel } from 'antd';

class ArticleList extends React.Component {
  state = {
    articles: []
  };

  fetchArticles = () => {
    axios.get("https://missionaryfam.herokuapp.com/api/lists/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }

  render() {
    console.log(this)
    return (
      <div>
        <Carousel autoplay style={{ marginLeft: "20px" }}>
          <div>
            <h3>Angels are sent on missions of mercy to the children of God. (TA 10.3)</h3>
            <img src="https://assetsnffrgf-a.akamaihd.net/assets/m/502016247/univ/art/502016247_univ_lsr_xl.jpg" />
          </div>
          <div>
            <h3>The most eloquent prayers are but idle words if they do not express ther true sentiments of the heart(MB86.2)</h3>
            <img src="https://wol.jw.org/tw/wol/mp/r33/lp-tw/jy/2015/1316" />
          </div>
          <div>
            <h3>Tell Jesus your wants in the sincerity of you soul(Pr 114.3)</h3>
            <img src="https://assetsnffrgf-a.akamaihd.net/assets/m/1102014615/univ/art/1102014615_univ_lsr_lg.jpg" />
          </div>
          <div>
            <h3>Each has his part to act; to each is granted a measure of light adapted to the necessities of his time (GC 343.2)</h3>
            <img src="https://wol.jw.org/ko/wol/mp/r8/lp-ko/lfb/2017/904" />
          </div>
        </Carousel>,
        <Articles data={this.state.articles} /> <br />
        <h2> Create an article </h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" />
      </div>
      // <div>Working</div>
    );
  }
}

export default ArticleList;
