import * as React from 'react'
import * as style from './style.scss'
import HomeHeader from '../../layouts/headerBar'
import Footer from '../../layouts/footer'
import { Icon, Pagination } from 'antd'
import './style.scss'
import Body from '../../layouts/body'

interface IProps {
    style: React.CSSProperties
}

function itemRender(current:number, type:string, originalElement:any) {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
}

class App extends React.Component<IProps> {
    render() {
      return (
        <div className={style.wrapper}>
            <HomeHeader />
            <div className="homeBody">
                <ul className="keyArtical">
                    <li className="keyLi">
                        <h1 className="articalName">
                            <a href="#">美国圣菲旧金山之行所感</a>
                        </h1>
                        <div className="articalInfo">
                            <div className="infoLi">
                                <Icon type="clock-circle" />
                                <span>2019-07-26</span>
                            </div>
                            <div className="infoLi">
                                <Icon type="eye" />
                                <span>123</span>
                            </div>
                            <div className="infoLi">
                                <Icon type="tag" />
                                <span>前端开发总结</span>
                            </div>
                        </div>
                        <div className="articalAbstract">
                            好久没有更新博客了，主要的原因…懒… 前段时间去了一趟美国，趁着开会的时间玩了一阵，还是挺开心的，见识到了很多奇特景观和异地文化。先是去了新墨西哥州的阿尔伯克基和圣菲，阿尔伯克基是中转机场，倒是没怎么停留和玩耍（貌似也没啥可玩的景点，倒是每年10月份有个热气球节，不过这次没能赶上…）。圣菲是开会的地方，从阿尔伯克基自驾过去也就1小时左右，虽说也处于美国大农村和沙滩戈壁的包围中，但却是一座非常精致的 ...
                        </div>
                        <div className="readMoreBtn">
                            <a href="#">Read more</a>
                        </div>
                        <div className="post-eof"></div>
                    </li>
                    <li className="keyLi">
                        <h1 className="articalName">
                            <a href="#">美国圣菲旧金山之行所感</a>
                        </h1>
                        <div className="articalInfo">
                            <div className="infoLi">
                                <Icon type="clock-circle" />
                                <span>2019-07-26</span>
                            </div>
                            <div className="infoLi">
                                <Icon type="eye" />
                                <span>123</span>
                            </div>
                            <div className="infoLi">
                                <Icon type="tag" />
                                <span>前端开发总结</span>
                            </div>
                        </div>
                        <div className="articalAbstract">
                            好久没有更新博客了，主要的原因…懒… 前段时间去了一趟美国，趁着开会的时间玩了一阵，还是挺开心的，见识到了很多奇特景观和异地文化。先是去了新墨西哥州的阿尔伯克基和圣菲，阿尔伯克基是中转机场，倒是没怎么停留和玩耍（貌似也没啥可玩的景点，倒是每年10月份有个热气球节，不过这次没能赶上…）。圣菲是开会的地方，从阿尔伯克基自驾过去也就1小时左右，虽说也处于美国大农村和沙滩戈壁的包围中，但却是一座非常精致的 ...
                        </div>
                        <div className="readMoreBtn">
                            <a href="#">Read more</a>
                        </div>
                        <div className="post-eof"></div>
                    </li>
                </ul>
                <div className="pages">
                    <Pagination total={500} itemRender={itemRender} hideOnSinglePage={true} />
                </div>
            </div>
            <Footer />
        </div>
      )
    }
  }
  
  export default App