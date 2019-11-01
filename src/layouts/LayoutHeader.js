import React, { Component } from 'react';

class LayoutHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: false,
            appStore: false,
        };
    }
    onMouseOver = () => {
        this.setState({
            customer: !this.state.customer,
        });
    };
    onMouseAppOver = () => {
        this.setState({
            appStore: !this.state.appStore,
        });
    };
    render() {
        const { customer, appStore } = this.state;
        const { breadcrumb } = this.props;
        const pathname = window.location.pathname;
        const navName = breadcrumb.filter(val => val.path === pathname)[0].name;
        return (
            <div id="top_container">
                <div id="gnb_wrapper">
                    <div id="gnb_view">
                        <div id="gnb_top_box">
                            <div id="div_top_navi" className="inner">
                                <div id="bi"></div>
                                <div className="line"></div>
                                <div id="bi_retail"></div>
                                <ul id="lang_list">
                                    <li className="item selected" id="ko_KR">
                                        <a href="/setLocale?locale=ko">
                                            한국어
                                        </a>
                                    </li>
                                    <li className="item" id="en_US">
                                        <a href="/setLocale?locale=en">
                                            English
                                        </a>
                                    </li>
                                    <li className="item" id="ja_JP">
                                        <a href="/setLocale?locale=ja">
                                            日本語
                                        </a>
                                    </li>
                                    <li className="item" id="zh_CN">
                                        <a href="/setLocale?locale=zh">
                                            中文(简体)
                                        </a>
                                    </li>
                                </ul>

                                <div id="right_box">
                                    <ul id="link_list">
                                        <li id="go_facebook" className="item">
                                            <a
                                                target="blank"
                                                href="https://www.facebook.com/wiseapp101"
                                            >
                                                <div className="logo"></div>
                                                <div className="text">
                                                    페이스북
                                                </div>
                                            </a>
                                        </li>
                                        <li id="go_post" className="item">
                                            <a
                                                target="blank"
                                                href="http://post.naver.com/wiseapp101"
                                            >
                                                <div className="logo"></div>
                                                <div className="text">
                                                    블로그
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div
                                        id="button-fb-follow"
                                        style={{ display: 'none' }}
                                    >
                                        <div
                                            className="fb-like fb_iframe_widget"
                                            data-href="https://www.facebook.com/wiseapp101/"
                                            data-layout="button_count"
                                            data-action="like"
                                            data-show-faces="true"
                                            data-share="false"
                                            fb-xfbml-state="rendered"
                                            fb-iframe-plugin-query="action=like&amp;app_id=1681489152118768&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fwiseapp101%2F&amp;layout=button_count&amp;locale=ko_KR&amp;sdk=joey&amp;share=false&amp;show_faces=true"
                                        >
                                            <span>
                                                <iframe
                                                    name="f137b3ddea14f88"
                                                    width="1000px"
                                                    height="1000px"
                                                    title="fb:like Facebook Social Plugin"
                                                    frameBorder="0"
                                                    allowtransparency="true"
                                                    allowFullScreen={true}
                                                    scrolling="no"
                                                    allow="encrypted-media"
                                                    src="https://web.facebook.com/v2.5/plugins/like.php?action=like&amp;app_id=1681489152118768&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df2ea02356af5004%26domain%3Dwww.wiseapp.co.kr%26origin%3Dhttps%253A%252F%252Fwww.wiseapp.co.kr%252Ff177c2ef99fc99%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.facebook.com%2Fwiseapp101%2F&amp;layout=button_count&amp;locale=ko_KR&amp;sdk=joey&amp;share=false&amp;show_faces=true"
                                                    className=""
                                                ></iframe>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="top_line"></div>
                            <div id="div_bottom_navi" className="inner">
                                <div id="div_navi">
                                    <div id="menu">
                                        <ul>
                                            <li>
                                                <a
                                                    href="/"
                                                    onMouseEnter={
                                                        appStore === true
                                                            ? this
                                                                  .onMouseAppOver
                                                            : undefined
                                                    }
                                                >
                                                    <div
                                                        id="home"
                                                        className="item selected"
                                                    >
                                                        홈
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/dashboard/"
                                                    onMouseEnter={
                                                        this.onMouseAppOver
                                                    }
                                                >
                                                    <div
                                                        id="app_analytics"
                                                        className="item has_sub"
                                                    >
                                                        앱시장분석
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/brand/rank/"
                                                    onMouseEnter={
                                                        appStore === true
                                                            ? this
                                                                  .onMouseAppOver
                                                            : undefined
                                                    }
                                                >
                                                    <div
                                                        id="retail_analytics"
                                                        className="item"
                                                    >
                                                        소매시장분석
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="div_sub_navi">
                                    <div id="menu" className="sub">
                                        <ul>
                                            <li onMouseEnter={this.onMouseOver}>
                                                <div
                                                    id="menu_cs"
                                                    className="item"
                                                >
                                                    고객지원
                                                </div>
                                            </li>
                                            <li className="line">
                                                <div></div>
                                            </li>

                                            <li>
                                                <a href="/join">
                                                    <div
                                                        id="menu_signup"
                                                        className="item"
                                                    >
                                                        회원가입
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="line">
                                                <div></div>
                                            </li>
                                            <li>
                                                <a href="/login">
                                                    <div className="item">
                                                        로그인
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    id="div_cs_sub_navi"
                                    style={{
                                        left: '819.906px',
                                        display: !customer ? 'none' : 'block',
                                    }}
                                    onMouseLeave={this.onMouseOver}
                                >
                                    <ul id="cs_sub_navi">
                                        <a href="/notice/list/">
                                            <li className="item">
                                                <div>공지사항</div>
                                            </li>
                                        </a>
                                        <a href="/faq/list/">
                                            <li className="item">
                                                <div>FAQ</div>
                                            </li>
                                        </a>
                                        <a href="/payment/info/">
                                            <li className="item">
                                                <div>유료가입안내</div>
                                            </li>
                                        </a>
                                    </ul>
                                    <div id="menu_item_cs">고객지원</div>
                                    <div id="no_line"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="gnb_bottom_box"
                            style={{ display: !appStore ? 'none' : 'block' }}
                        >
                            <div id="div_bottom_navi_sub">
                                <div className="inner">
                                    <div
                                        id="app_analytics_sub"
                                        className="menu_sub over"
                                    >
                                        <ul>
                                            <li className="item">
                                                <ul>
                                                    <li className="title">
                                                        대시보드
                                                    </li>
                                                    <a href="/dashboard/">
                                                        <li
                                                            id="dashboard"
                                                            className="list"
                                                        >
                                                            전체 대시보드
                                                        </li>
                                                    </a>
                                                    <a href="/dashboard/myapp/">
                                                        <li
                                                            id="myapp"
                                                            className="list"
                                                        >
                                                            나의 대시보드
                                                        </li>
                                                    </a>
                                                </ul>
                                            </li>
                                            <li className="item">
                                                <ul>
                                                    <li className="title">
                                                        실사용분석
                                                    </li>
                                                    <a href="/app/rank/">
                                                        <li
                                                            id="app"
                                                            className="list"
                                                        >
                                                            앱
                                                        </li>
                                                    </a>
                                                    <a href="/category/rank/">
                                                        <li
                                                            id="category"
                                                            className="list"
                                                        >
                                                            카테고리
                                                        </li>
                                                    </a>
                                                    <a href="/publisher/rank/">
                                                        <li
                                                            id="publisher"
                                                            className="list"
                                                        >
                                                            개발사
                                                        </li>
                                                    </a>
                                                    <a href="/report/">
                                                        <li
                                                            id="report"
                                                            className="list"
                                                        >
                                                            리포트
                                                        </li>
                                                    </a>
                                                </ul>
                                            </li>
                                            <li className="item">
                                                <ul>
                                                    <li className="title">
                                                        마켓분석
                                                    </li>
                                                    <a href="/market/rank/">
                                                        <li
                                                            id="market_rank"
                                                            className="list"
                                                        >
                                                            랭킹
                                                        </li>
                                                    </a>
                                                    <a href="/aso/list/">
                                                        <li
                                                            id="aso"
                                                            className="list"
                                                        >
                                                            키워드
                                                        </li>
                                                    </a>
                                                </ul>
                                            </li>
                                            <li className="item">
                                                <ul>
                                                    <li className="title">
                                                        매출/가치분석
                                                    </li>
                                                    <a href="/revenue/app/">
                                                        <li
                                                            id="revenueApp"
                                                            className="list"
                                                        >
                                                            앱
                                                        </li>
                                                    </a>
                                                    <a href="/revenue/category/">
                                                        <li
                                                            id="revenueCategory"
                                                            className="list"
                                                        >
                                                            카테고리
                                                        </li>
                                                    </a>
                                                    <a href="/revenue/publisher/">
                                                        <li
                                                            id="revenuePublisher"
                                                            className="list"
                                                        >
                                                            개발사
                                                        </li>
                                                    </a>
                                                    <a href="/intrinsic/app/">
                                                        <li
                                                            id="appvalue"
                                                            className="list"
                                                        >
                                                            내재가치
                                                        </li>
                                                    </a>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div
                                        className="btn_close"
                                        onClick={this.onMouseAppOver}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div id="gnb_nevi_box">
                            <div id="div_navi_sub">
                                <div className="inner">
                                    <ul className="nevi_list">
                                        <li className="item">홈</li>
                                        <li className="item line"></li>
                                        <li className="item">{navName}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LayoutHeader;
