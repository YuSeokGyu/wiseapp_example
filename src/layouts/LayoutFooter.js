import React, { Component } from 'react';

class LayoutFooter extends Component {
    render() {
        return (
            <div className="bottom_container">
                <div id="bottom_wrapper">
                    <div id="bottom_view">
                        <div id="footer">
                            <div className="ci"></div>
                            <div className="ci_retail"></div>

                            <div id="footer_menu">
                                <ul>
                                    <li id="menu_terms_1" className="item">
                                        이용약관
                                    </li>
                                    <li className="line">
                                        <div></div>
                                    </li>
                                    <li id="menu_terms_2" className="item">
                                        개인정보 보호정책
                                    </li>
                                </ul>
                            </div>
                            <div id="co_info">
                                <div>
                                    ㈜ 아이디어웨어&nbsp;&nbsp;&nbsp;&nbsp; 대표
                                    : 차양명&nbsp;&nbsp;&nbsp;&nbsp; 경기도
                                    성남시 분당구 분당내곡로 159 KCC웰츠타워 A동
                                    708호&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    사업자등록번호:
                                    142-81-40509&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;통신판매업신고:
                                    2017-성남분당-0437
                                </div>
                                <div>
                                    Copyright © Ideaware Inc. All rights
                                    reserved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LayoutFooter;
