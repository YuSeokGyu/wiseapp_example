import React, { Component } from 'react';
import ChartPie from '../../common/chart/ChartPie';

class Dashboard extends Component {
    render() {
        return (
            <div id="middle_container">
                <div id="page_header_wrapper">
                    <div id="info_pay_view">
                        <div id="info_pay_box">
                            <div id="left_box">
                                <div id="info_icon"></div>
                                <div id="text">
                                    무료 회원은 일부 데이터와 기능이 제한됩니다.
                                </div>
                            </div>
                            <div id="right_box">
                                <a href="#0">
                                    <div id="btn_go_pay_info">유료가입안내</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="content_view">
                    <div className="page_section">
                        <div id="title">
                            <h1>전체 대시보드</h1>
                        </div>
                        <div id="share">
                            <ul className="items">
                                <li>
                                    <div id="newsletter" className="item"></div>
                                </li>
                                <li>
                                    <div id="facebook" className="item"></div>
                                </li>
                                <li>
                                    <div id="twitter" className="item"></div>
                                </li>
                                <li>
                                    <div id="naverblog" className="item"></div>
                                </li>
                                <li>
                                    <div id="url" className="item"></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="usage_view_title" className="post sub_title_box">
                        <div className="header">
                            <div className="title">실사용 종합정보</div>
                            <div id="baseDT">2019년 10월 21일 ~ 10월 27일</div>
                        </div>
                    </div>

                    <div className="page_filter">
                        <div id="marketType" className="two">
                            <div id="store" className="item">
                                <div id="store" className="column">
                                    <div id="icon"></div>
                                    <div id="name">Google Play Store</div>
                                </div>
                                <div id="store_list" className="sub_list">
                                    <div
                                        id="google"
                                        className="store_item selected"
                                    >
                                        <div id="icon"></div>
                                        <div id="name">Google Play Store</div>
                                        <div id="check"></div>
                                    </div>
                                    <div id="apple" className="store_item">
                                        <div id="icon"></div>
                                        <div id="name">App Store</div>
                                        <div id="check"></div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="countryType"
                                className="item"
                                style={{ width: '490px' }}
                            >
                                <div id="country" className="column">
                                    <div id="name">KOREA</div>
                                    <div id="selecter"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <div className="body">
                            <div id="totalInfo" className="section">
                                <div className="body">
                                    <ul className="items many_col dark">
                                        <li className="leftRow">
                                            <ul className="columns">
                                                <li
                                                    id="totalUsedTime"
                                                    className="textInfo"
                                                >
                                                    <div className="wrapper">
                                                        <div className="title">
                                                            <span>
                                                                하루 스마트폰
                                                                사용시간
                                                            </span>
                                                        </div>
                                                        <div className="value">
                                                            <div className="img"></div>
                                                            <div
                                                                id="hour"
                                                                className="num"
                                                            >
                                                                3
                                                            </div>
                                                            <div className="unit bold">
                                                                시간
                                                            </div>
                                                            <div
                                                                id="min"
                                                                className="num"
                                                            >
                                                                48
                                                            </div>
                                                            <div className="unit bold">
                                                                분
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="has_graph">
                                                            <div className="chart_pie_wrapper left">
                                                                <ChartPie />
                                                            </div>
                                                        </li>
                                                        <li className="has_graph">
                                                            <div className="chart_pie_wrapper right"></div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="items may_col"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
