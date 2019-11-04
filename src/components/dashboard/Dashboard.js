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

                    <div id="go_rank_post" className="post">
                        <div id="go_daily_rank" className="go_button">
                            <div className="text">일간 데이터 보기</div>
                            <div className="text2">(2019년 10월 30일)</div>
                            <div className="icon"></div>
                        </div>
                        <div id="go_weekly_rank" className="go_button">
                            <div className="text">주간 데이터 보기</div>
                            <div className="text2">
                                (2019년 10월 21일 ~ 10월 27일)
                            </div>
                            <div className="icon"></div>
                        </div>
                        <div
                            id="go_monthly_rank"
                            className="go_button"
                            style={{ width: '327px' }}
                        >
                            <div className="text">월간 데이터 보기</div>
                            <div className="text2">(2019년 9월 )</div>
                            <div className="icon"></div>
                        </div>
                    </div>

                    <div id="issue_post" className="post">
                        <div id="issue_box" className="section many left focus">
                            <div className="header">
                                <h2 className="subtitle">화제의 앱</h2>
                            </div>
                            <ul id="issue_list" className="issue_list">
                                <li className="item">
                                    <div className="title">
                                        1. 신규 인기게임
                                    </div>
                                    <a
                                        href="/app/detail/cd3d81233701e2a3d11728a85b5b587e/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="완미세계"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/R-ooTVWwFmopBuCtwDNdSFkAmVpI8AKUCRS4-_fP-rC3et7kPzkdahGsbcdWq-N4Lg=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                완미세계
                                            </div>
                                            <div className="text">
                                                주간사용자 23만, 게임전체 1위
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="/app/detail/a31f65cab0050704f7dcc20901426190/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="킹 오브 타워"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/3Xdbuwvi61oHGsFgrcmg9I-QF8mTUF8k4FKEsPR4mf43_Rq1V6HKoe8cdtowPVMcWS8=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                킹 오브 타워
                                            </div>
                                            <div className="text">
                                                주간사용자 22만, 게임-전략1위
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="/app/detail/74a6c1bd8d2b8485860126bb718aa96c/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="Rescue Cut - Rope Puzzle"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/s-if-GJLFUXJc8Y-yNRBoDCTCy8RuUpSoTbU2lDy7E0zhQk-VStn4LXjMFdMb8Uvx-0=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                Rescue Cut - Rope Puzzle
                                            </div>
                                            <div className="text">
                                                주간사용자 8만, 게임-퍼즐 1위
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="/app/detail/39d3d8ede5d1d94f7e3a5529eff9e93a/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="판타지타운"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/g2BF0Y4eXKbr15t00lqjPjIQf0UvsTesX_29QtXmpvYAmYPwTNFFMq-c8Ef8Vg3oW04=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                판타지타운
                                            </div>
                                            <div className="text">
                                                주간사용자 7만, 게임-캐주얼 1위
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="line"></li>
                                <li className="item">
                                    <div className="title">
                                        2. 사용자 증가앱
                                    </div>
                                    <a
                                        href="/app/detail/ec203f5b0709c52c6e7ff7d752623cd9/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="VIBE (바이브)"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/4vDoWPT1zcoQDvESf6z-J8PsaxUYxSy4zl0G0p8xRZgtREDhLNVQS9Iqz4G6mZjtZxJC=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                VIBE (바이브)
                                            </div>
                                            <div className="text">
                                                주간사용자 34만, 전주대비 38%
                                                증가
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="/app/detail/aabb8a4f6f4949f30b32a0da858e83f1/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="벼룩시장구인구직 – 생활밀착 일자리 서비스 앱"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/Dv28UmG7VaYAtw9k8f6Rf0T6MzbLlhYZv7lDvpUWIz1-Uln9wXhkTexfGxEEBZA2QQ=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                벼룩시장구인구직 – 생활밀착
                                                일자리 서비스 앱
                                            </div>
                                            <div className="text">
                                                주간사용자 16만, 전주대비 97%
                                                증가
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="/app/detail/2e1e2436237598852140d4c00b86c1ef/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="모바일투썸"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/3LgjZ4VyyEXnn9hvs0MgHT6k6PKpMR8kmZCvGSyArFsdaMdpVu3pLMjGkvu1tnZLFTc=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                모바일투썸
                                            </div>
                                            <div className="text">
                                                주간사용자 12만, 전주대비 192%
                                                증가
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="/app/detail/d1fe22acf8281895e005a9da761ce9a1/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="내 곁에 국민연금"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/xIQO-a4UtOb6um81RY1XYEy1UYQZf6klle8EnaoSiNcdc99zKlmv-q0ibbmF8ASt0Q=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                내 곁에 국민연금
                                            </div>
                                            <div className="text">
                                                주간사용자 11만, 전주대비 79%
                                                증가
                                            </div>
                                        </div>
                                    </a>
                                    <a
                                        href="/app/detail/914759477c8c4ae813fc5d2a261fa0ed/?tabType=usage"
                                        target="_blank"
                                    >
                                        <div
                                            className="content"
                                            title="롯데면세점"
                                        >
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/jEWgBGvHEZEbp-pMP7i3-tKkR_ftYiKOIe2r9cFtuXeNJpqHZOP4rbL_HV-ziEZYE_2B=s24')",
                                                }}
                                            ></div>
                                            <div className="title">
                                                롯데면세점
                                            </div>
                                            <div className="text">
                                                주간사용자 12만, 전주대비 78%
                                                증가
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            id="user_section_box"
                            className="section many right focus"
                        >
                            <div className="header">
                                <h2 className="subtitle">
                                    사용자 참여 많은 앱
                                </h2>
                                <a href="/usersection/">
                                    <div
                                        id="btn_go_usersection"
                                        className="detailmove"
                                    >
                                        더보기
                                    </div>
                                </a>
                            </div>
                            <ul
                                id="app_group_list"
                                className="user_section_list"
                            >
                                <li className="item">
                                    <a href="/app/detail/08a8bf4c951cf10bc7bf32af38182a18/">
                                        <div
                                            id="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/Hh0ikw1r21DxmIP_kHtCdfS_mbiiwN8WEkzVrhdiUP3_50iuQ8VFVptcxH7AFKytHv_U=s24')",
                                            }}
                                        ></div>
                                        <div
                                            id="target_name"
                                            className="has_link"
                                        >
                                            리디북스 1등 전자책 서점 RIDIBOOKS
                                            eBOOK
                                        </div>
                                        <div id="update_text">
                                            1개의 업데이트가 있습니다.
                                        </div>
                                    </a>
                                </li>
                                <li className="line"></li>
                                <li className="item">
                                    <a href="/app/detail/7daadf25b56cfbd10c35f1ceede865ac/">
                                        <div
                                            id="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/Ob9Ys8yKMeyKzZvl3cB9JNSTui1lJwjSKD60IVYnlvU2DsahysGENJE-txiRIW9_72Vd=s24')",
                                            }}
                                        ></div>
                                        <div
                                            id="target_name"
                                            className="has_link"
                                        >
                                            카카오톡 KakaoTalk
                                        </div>
                                        <div id="update_text">
                                            1개의 업데이트가 있습니다.
                                        </div>
                                    </a>
                                </li>
                                <li className="line"></li>
                                <li className="item">
                                    <a href="/app/detail/e87cb5a1a1a2b05b036b0ee6d277a472/">
                                        <div
                                            id="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/-v8mJCoIgjKNgXm4QzLgFJjuQ-bPpqvZyc-UA7Mv0jEqoVKS1vnBQeJK7lQ56sge-jo=s24')",
                                            }}
                                        ></div>
                                        <div
                                            id="target_name"
                                            className="has_link"
                                        >
                                            스타일쉐어 - 신상 옷과 화장품 후기가
                                            한 자리에
                                        </div>
                                        <div id="update_text">
                                            1개의 업데이트가 있습니다.
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            id="report_box"
                            className="section many right focus"
                        >
                            <div className="header">
                                <h2 className="subtitle">신규 리포트</h2>
                                <a href="/report/">
                                    <div
                                        id="btn_go_report"
                                        className="detailmove"
                                    >
                                        더보기
                                    </div>
                                </a>
                            </div>
                            <ul id="play_report_list" className="report_list">
                                <li
                                    className="item"
                                    title="[월간][2019년 9월 1일 ~ 9월30일] 배달앱"
                                >
                                    <div id="title">배달앱</div>
                                    <div className="term_box">
                                        <div>월간</div>
                                        <div className="line"></div>
                                        <div>2019년 9월 1일 ~ 9월30일</div>
                                    </div>
                                    <div id="icon_list">
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/NzeXFp0TGGcZoVSk_xzwdB567WurfscKr2j3pT5oKjWH00-tqBKF9LSnRK0sckgE7TQ=s16')",
                                            }}
                                            title="배달의민족"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/GeKNtsJ1KS94IOR8BfkzTyn8BGWomBkgqnokyBJX6AE0zpMm_gWub-nBl0KYnz8rTDU=s16')",
                                            }}
                                            title="배달요기요"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/ajE3qzqBI75eco54qpaAHAJNPuEg1k4pQFU1Hib3gPNksUtr7aJ-fPG4fqrFLTorkg=s16')",
                                            }}
                                            title="배달통 - 간편하게 시켜먹자!"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/mKpm_F1daoVLxlvAWeg27D_iInfk5-yBQaUX-omimva3IkfVaD140wBOG1ir9AnpWA=s16')",
                                            }}
                                            title="(공식) 맥도날드 맥딜리버리 배달"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/VVxIA_jSqBzwzRSE9SXItUNLhT62QYdFNvCWT5msNIV_NXGJHi_C3GnyLvL14-niVQ=s16')",
                                            }}
                                            title="쿠팡이츠 - 맛있는 음식을 빠르고 편하게"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/63qsVLNMNUl2htltypBEuJZHY6bhxfUpxN4yfzbIjrtNKuSejV_reDT2Oyf5N1lZBw=s16')",
                                            }}
                                            title="배고파 - 무료주문 배달앱"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/eNJWwlLUQ-2yXQ8aFVKAo2meKeTGkQ1ulBO3UbJMETVL5snoeKsRfQfGtVDCBbU1cI0=s16')",
                                            }}
                                            title="푸드플라이 – 배달앱 끝판왕"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/y83_oxdSx0_nrtx3icNWrKmkqWlUGVXF85vy9KEC8dfO2gIO84mQ-qw-oOLXbB2kloE=s16')",
                                            }}
                                            title="위메프오-전국 배달픽업/할인티켓"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/QR_X6kGGmLy7dYDcTcRHV5kZWje0QTfqptkaBdSntMePoTWE2tSgSRK3_VOwdSUOwM12=s16')",
                                            }}
                                            title="더반찬 - 반찬,배달,반찬배달,반찬쇼핑몰,반찬주문"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/OWRMOQjx2SbY6zo9B266Aw3D8oKlfM4gtqHsZq14NbOjA80P6mDxTK-zQpE1iDbdqUzY=s16')",
                                            }}
                                            title="띵동 - 신인류의 필수앱"
                                        ></div>
                                    </div>
                                </li>
                                <li
                                    className="item"
                                    title="[월간][2019년 9월 1일 ~ 9월30일] 샵5월"
                                >
                                    <div id="title">샵5월</div>
                                    <div className="term_box">
                                        <div>월간</div>
                                        <div className="line"></div>
                                        <div>2019년 9월 1일 ~ 9월30일</div>
                                    </div>
                                    <div id="icon_list">
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/XcoMnQIeJBVLHUE0cqJRB9v4b4vhAP3mhQBgNl4GFWdS-ZLibMiI8z3uDb4Mx4vSFw0=s16')",
                                            }}
                                            title="올리브영"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/LyPx53KzKkAz4TFO1-aUJiLBRciKMS0-apXvYZwYNtmAHhCuGDvk7h_3iYwnu6aereLQ=s16')",
                                            }}
                                            title="이니스프리"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/oV6XoDXlocK-OJ1rTKYmuqfa4lqQ-qL2glNuLt2fCCyA39c5jmBScw4ybzx3B4khKX0=s16')",
                                            }}
                                            title="아리따움"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/BznQ_whROE6-C3TGEBWNjXxs5Aff_2fZmxFYJvf9Fv46DPqmoeUfhVjeDHzmj6d1IQ=s16')",
                                            }}
                                            title="롯데 ON – 롭스 Love Health &amp; Beauty Store, LOHB's"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/BTXMvW0uHExnCTuCgLYqVDnDdd-mbGS2dtOpLUl6RaA0R_52wd7UW-Cb8o_EV_hWrw=s16')",
                                            }}
                                            title="미샤"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/TnrfYyHf9KpXFGAVJXFKkKQVpKo2IFm1h4Hrw1BWdeO9-8kxVu6wjhOJXGKtxgTuC73I=s16')",
                                            }}
                                            title="APMALL - 아모레퍼시픽몰"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/USjEIdnr7qC5p_0MqnI1ux_0lgfiDQSVE276sW_xcukTeJ2NwZI9yah94vnF7NWSl6U=s16')",
                                            }}
                                            title="미미박스 - 화장품 콘텐츠 가득한 뷰티 놀이터"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/JHi2HdUApJi5Gz_jgJrAae-GY2Sv3SXCw5MG8LrzjYTyHjhgXXNTFoy6nxt5sd8fqy0=s16')",
                                            }}
                                            title="에뛰드 하우스"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/Y65y0ReRV--eueiv49ZB6HyCs94McGytGH8b6EXbLuWF2IK6HcVxi60zohip_lLk5nc=s16')",
                                            }}
                                            title="랄라블라"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/UfzdPTnxQiFiwDbcwrjDusspBZFQXOzrKNsAUY8QRynfPwvYZzXQYYxJFpIjTI6KPgg=s16')",
                                            }}
                                            title="더페이스샵"
                                        ></div>
                                    </div>
                                </li>
                                <li
                                    className="item"
                                    title="[월간][2019년 9월 1일 ~ 9월30일] 홈쇼핑"
                                >
                                    <div id="title">홈쇼핑</div>
                                    <div className="term_box">
                                        <div>월간</div>
                                        <div className="line"></div>
                                        <div>2019년 9월 1일 ~ 9월30일</div>
                                    </div>
                                    <div id="icon_list">
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/qt2ZriykYloFF-Iyh5ucKFx8yQ5urwlUw9WgwPqlrwUlGGLv7AlSOA94VZAbX9gmTWQ=s16')",
                                            }}
                                            title="홈앤쇼핑 –오직 앱에서만. 10%할인 + 10%적립"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/8GOKdzqIz6T5KxHo6UWuzPX7RhVESCNdbqQf61fR-gCVNaStl4Wy4l-GUkYtcNoyfY0=s16')",
                                            }}
                                            title="GS SHOP - 당신의 가장 좋은 선택을 만듭니다"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/pQIVIKqArDEHvtBbwUTPUBhbl81COQd-DWIHg2X3h4T-OimiQ5gf5loaxzXBia0N28k=s16')",
                                            }}
                                            title="CJmall"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/16WicnAnK1HBigGjmo5et640hrxrIkj7Rb5qCm2l8ddR0yjjBpSfcDiy8cahhjEaBHc=s16')",
                                            }}
                                            title="현대Hmall - 홈쇼핑, 백화점"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/inogL0ti20TrV9aGT9Ko7v8pZD8xUEGKVLICUBOPMIq58KbolNX2LBcTK2Af2dMpBQ8=s16')",
                                            }}
                                            title="롯데홈쇼핑 – 롯데 ON"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/U4fk5FzvwR4bPYWeTPmYX_Lpm3ANMHTcMEQ9qbrWO-qucIPPA9olM1bIiAmdZLpEIPMg=s16')",
                                            }}
                                            title="SSG.COM"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/Nl1wWjPRBywf6wKB51YTCcn7XGQWDBE6kmR9G9dDIPiVomf_L869DNFSj6Ab3zrobw=s16')",
                                            }}
                                            title="롯데 ON - 롯데닷컴 (Lotte.com 롯데,백화점,홈쇼핑,쇼핑)"
                                        ></div>
                                    </div>
                                </li>
                                <li
                                    className="item"
                                    title="[월간][2019년 9월 1일 ~ 9월30일] 내비게이션 앱"
                                >
                                    <div id="title">내비게이션 앱</div>
                                    <div className="term_box">
                                        <div>월간</div>
                                        <div className="line"></div>
                                        <div>2019년 9월 1일 ~ 9월30일</div>
                                    </div>
                                    <div id="icon_list">
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/yB6ePH3QA0EMU8qTqM5tOPtpZ8bZeIYhb9Oi2RHOy9YvK5fdxIlbN1H46QtdHNC_1g=s16')",
                                            }}
                                            title="네이버 지도, 내비게이션"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/Nvrf8Z89_3S8H6YnOLgyAbe-PSSeCZnJDA8zv7LY04hEvi8atTgp_fmQ5RZ591Qpxh5G=s16')",
                                            }}
                                            title="카카오맵 - 대한민국 No.1 지도앱 ( 지도 / 내비게이션 / 대중교통 / 로드뷰 )"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/w7SvTakxVxmJUn3J-BhYeu2a_2OEXOdDtWxcxUMyGccugocTPNwhz89oRSFJ25jHBnk=s16')",
                                            }}
                                            title="T map (티맵,T맵,내비게이션)"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/mphI7NpqsF3eJ-DbwW_GeJA7nNe2oZ7_cjTomnDsO3RWhYbgTMWEhZhfTv49yiFyhQ=s16')",
                                            }}
                                            title="카카오 T - 택시, 대리운전, 주차, 내비, 카풀, 바이크"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('https://img.onestore.co.kr/thumbnails/img_sac/192_192_A20_95/data6/android/201512/23/IF1423012800820091109140134/0000163382/img/original/0000163382_DP000101_20151223174715.png')",
                                            }}
                                            title="T map"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/tmKbM_kM31bRZoU1SkKw2LB30CFdm-MZYP0XBxlJzhYuJfbulrMi_P88VOxuZszXhPk=s16')",
                                            }}
                                            title="카카오내비"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/ifZwivpbpFjw8_R88goHpCbHR5SdETffoBx8sfUxkB5ZGhxsfo5u26KXunGvpzfHBJk=s16')",
                                            }}
                                            title="원내비"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/kW0WVAdK-LOVKb87NyBAv_0b0FVZDbsiCMtcXL7YRhTXZwjRJire_asOR0-_gC96emI=s16')",
                                            }}
                                            title="원내비"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/AkYIxjj8QVz_CJ-HmosslW-RMiviCWV6T78t-xGqYOUNbU_cdkkDyqR13o4NX5DCTD0=s16')",
                                            }}
                                            title="아틀란 : 내비게이션"
                                        ></div>
                                        <div
                                            className="icon"
                                            style={{
                                                backgroundImage:
                                                    "url('//lh3.googleusercontent.com/mjAd1fr9br9KEh588JrOAxKDdEzKXOgXFB7HhZMaK3kF2ByZSSQmTB-u7DCJgE5SVkQ=s16')",
                                            }}
                                            title="mappy (맵피)"
                                        ></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="usage_rank_title" className="post sub_title_box">
                        <div className="header">
                            <div className="title">실사용분석</div>
                            <div id="baseDT">2019년 10월 21일 ~ 10월 27일</div>
                            <a href="/app/rank/">
                                <div
                                    id="btn_go_app_rank"
                                    className="detailmove"
                                >
                                    더보기
                                </div>
                            </a>
                        </div>
                    </div>

                    <div id="usage_rank_post" className="post">
                        <div className="header two">
                            <h2 className="title">랭킹</h2>
                            <div id="rank_select_box" className="select_box">
                                <div className="selected_box">
                                    <div id="name">사용자수</div>
                                    <div id="selecter"></div>
                                </div>
                                <div className="select_box_list scroll_list">
                                    <div className="item selected">
                                        <div id="name">사용자수</div>
                                        <div id="check"></div>
                                    </div>
                                    <div className="item">
                                        <div id="name">사용시간</div>
                                        <div id="check"></div>
                                    </div>
                                    <div className="item">
                                        <div id="name">사용횟수</div>
                                        <div id="check"></div>
                                    </div>
                                    <div className="item">
                                        <div id="name">데이터사용량</div>
                                        <div id="check"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header two">
                            <h2 className="title">급변동</h2>
                            <div id="inout_select_box" className="select_box">
                                <div className="selected_box">
                                    <div id="name">급성장</div>
                                    <div id="selecter"></div>
                                </div>
                                <div className="select_box_list scroll_list">
                                    <div className="item selected">
                                        <div id="name">급성장</div>
                                        <div id="check"></div>
                                    </div>
                                    <div className="item">
                                        <div id="name">급하락</div>
                                        <div id="check"></div>
                                    </div>
                                    <div className="item">
                                        <div id="name">Top100 진입</div>
                                        <div id="check"></div>
                                    </div>
                                    <div className="item">
                                        <div id="name">Top100 이탈</div>
                                        <div id="check"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="appRank"
                            className="body"
                            style={{ paddingTop: '10px' }}
                        >
                            <div
                                id="appUsedUserRank"
                                className="section many left focus"
                            >
                                <div className="header">
                                    <h2 className="subtitle">
                                        Top 10 by 사용자수
                                    </h2>
                                    <div id="unit" className="unit">
                                        <h2>명</h2>
                                    </div>
                                </div>
                                <div className="body div_tbl">
                                    <ul className="items">
                                        <li className="item hover">
                                            <ul className="columns">
                                                <li className="rank">1</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/Ob9Ys8yKMeyKzZvl3cB9JNSTui1lJwjSKD60IVYnlvU2DsahysGENJE-txiRIW9_72Vd=s40" />
                                                </li>
                                                <a href="/app/detail/7daadf25b56cfbd10c35f1ceede865ac/?tabType=usage">
                                                    <li className="name">
                                                        카카오톡 KakaoTalk
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{ width: '130px' }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct down">
                                                    -0.3%
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">2</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s40" />
                                                </li>
                                                <a href="/app/detail/f9ee0578fe1cc94de7482bd41accb329/?tabType=usage">
                                                    <li className="name">
                                                        YouTube
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '105.153px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct up">
                                                    +1.5%
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">3</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/Kbu0747Cx3rpzHcSbtM1zDriGFG74zVbtkPmVnOKpmLCS59l7IuKD5M3MKbaq_nEaZM=s40" />
                                                </li>
                                                <a href="/app/detail/33519c65afbd629507278556a665561d/?tabType=usage">
                                                    <li className="name">
                                                        네이버 - NAVER
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '94.8211px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct">-</li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">4</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/DKoidc0T3T1KvYC2stChcX9zwmjKj1pgmg3hXzGBDQXM8RG_7JjgiuS0CLOh8DUa7as=s40" />
                                                </li>
                                                <a href="/app/detail/680d03679600f7af0b4c700c6b270fe7/?tabType=usage">
                                                    <li className="name">
                                                        Google
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '70.8243px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct up">
                                                    +0.2%
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">5</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk=s40" />
                                                </li>
                                                <a href="/app/detail/40deb401b9ffe8e1df2f1cc5ba480b12/?tabType=usage">
                                                    <li className="name">
                                                        Chrome: 빠르고 안전한
                                                        브라우저
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '67.3932px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct down">
                                                    -0.4%
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">6</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/jsx9IGS1_4vW2SdP1BLxnrnC2c3PcMnNi7m7zHXHaDEnw4Ne4k-UtSO8wfZT3xB0IdM=s40" />
                                                </li>
                                                <a href="/app/detail/dc00545bd3b8828f033a02ac25b2d36d/?tabType=usage">
                                                    <li className="name">
                                                        Samsung Internet
                                                        브라우저
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '61.8364px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct down">
                                                    -0.4%
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">7</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/92AY78SXqDEtztpNoCsHRoAbajB-6OmGaRYA103OsvD_D6Q1u0HVkT6mNt7egXovaw=s40" />
                                                </li>
                                                <a href="/app/detail/58f23f40f492054a751034c6f24756f4/?tabType=usage">
                                                    <li className="name">
                                                        밴드
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '49.7957px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct up">
                                                    +1.7%
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">8</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/mra9XrLf0a4_L5IXDyFXfKssFQow1S6hYCmrgBZ-bSJPRStWtBS9Cd8lYkvLh2x5hAc=s40" />
                                                </li>
                                                <a href="/app/detail/fd76d26b1f71a5dc1115f0367017a98f/?tabType=usage">
                                                    <li className="name">
                                                        Samsung Calculator
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '42.2404px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct up">
                                                    +2.1%
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">9</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/6-_8OoH3elgCEFSTT5YVehc-M6IRy5Y7VAVa1m4yckUvSfWeXBpymRM7v3qlwFqt-m8=s40" />
                                                </li>
                                                <a href="/app/detail/4ac019df5ae5cad2b8c945d5f9c0d2ee/?tabType=usage">
                                                    <li className="name">
                                                        T전화 - 스팸차단, 녹음,
                                                        콜라 영상통화, 전화번호
                                                        검색, 로밍, baro(바로)
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '36.1943px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct up">
                                                    +1.7%
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item">
                                            <ul className="columns">
                                                <li className="rank">10</li>
                                                <li className="icon">
                                                    <img src="//lh3.googleusercontent.com/ZnFa1roZ7hpv9j-jIAcBjmjuDl2x-FnuwTE0OYvbbcwvf5VPzOQQiKBXGK7d-APTvag=s40" />
                                                </li>
                                                <a href="/app/detail/625df001d4cf8dc6365179be0512685c/?tabType=usage">
                                                    <li className="name">
                                                        Samsung Pay(삼성 페이)
                                                    </li>
                                                </a>
                                                <li
                                                    className="bar user"
                                                    style={{
                                                        width: '30.5569px',
                                                    }}
                                                ></li>
                                                <li className="val">
                                                    <div
                                                        className="blind"
                                                        style={{
                                                            width: '78px',
                                                        }}
                                                    ></div>
                                                </li>
                                                <li className="pct up">
                                                    +1.7%
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                id="appGrowthRank"
                                className="section many right focus"
                            >
                                <div className="header">
                                    <h2 className="subtitle">급성장</h2>
                                </div>
                                <div className="body div_tbl">
                                    <ul className="items">
                                        <li className="item updown hover">
                                            <ul className="columns">
                                                <li className="rank">1</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/2iVE6TcpjzHahgqZLScwAcRhFonqp5o9dFGhntH31HAec6cXmLAStwLtwpsaIRiIv3Q=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/867b1e41b0fd683726c9d5a7eee50631/?tabType=usage">
                                                    <li className="name">
                                                        롯데리아
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +314.1%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">2</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/4ObJpk4IItVMseVB0nnWHExcSjuvVoFZwIngGeRqFjSYN102qY-gcteqjAEI2FENoPU=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/45a4a3fdfc0749c214f46263c1bf3e8d/?tabType=usage">
                                                    <li className="name">
                                                        Icing On The Cake
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +242.4%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">3</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/ommfRNnV6hBXrLWcpIttmbZ587Yrt7uhr3e79W6gCPJBNvd9heuqKsMVsQC_Og_s9w=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/85192c1cd3be8b0a0a934392091cc324/?tabType=usage">
                                                    <li className="name">
                                                        Rolling Domino
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +210.6%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">4</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/3LgjZ4VyyEXnn9hvs0MgHT6k6PKpMR8kmZCvGSyArFsdaMdpVu3pLMjGkvu1tnZLFTc=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/2e1e2436237598852140d4c00b86c1ef/?tabType=usage">
                                                    <li className="name">
                                                        모바일투썸
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +192%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">5</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/wCOYf4476YzaDqHo6ALc7rHL4e6qku5Ih6HIoU0BhdCWW1rQ-BAbFOrn1srmXAm_G-U=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/e36751c5abbf372aab2ae74b7f11d930/?tabType=usage">
                                                    <li className="name">
                                                        솔루션을 갖춘 분수
                                                        계산기
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +191.6%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">6</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/51LDykvVt4B1EOfov5NmwGlHLbJ7kMd56kT7hcJb_-fUmgolJi8yJ4_mpaV8cijxSYw=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/a528e9eecf23ee6384ec3cdad24c0daf/?tabType=usage">
                                                    <li className="name">
                                                        쿠킹마마: 요리해 보아요!
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +181.4%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">7</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/9QNijhc7X4s98pPF9ncLal1gwoko-Mz0LfB09brbPW6pgsClwwnP-zXCb6ahfXYZL94=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/1ae4718bccb9590ae302f525731fd8c5/?tabType=usage">
                                                    <li className="name">
                                                        프리뮤직 - 무료음악
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +171%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">8</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/7vWt3wSHQ3edgRlDFPO9RMuvbeTADSlAfWRWEdJKSU8xLsLl4ORXDffTEBr_3bcz6Q=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/bf69c6c6f70c50aab30fee634274c38f/?tabType=usage">
                                                    <li className="name">
                                                        위플리 Weply
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +167%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">9</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/I4cNTmm-py4H2_wIkSpKBEJ7dPdofqLA6XOIzLA9wKU6TOMfh78NBIQc_-1c9WOC1w=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/ee475cf925421cc448ff02a69aa752fd/?tabType=usage">
                                                    <li className="name">
                                                        Zipline Valley - 물리학
                                                        퍼즐 게임
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +162.5%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="line"></li>
                                        <li className="item updown">
                                            <ul className="columns">
                                                <li className="rank">10</li>
                                                <li className="icon">
                                                    <img
                                                        className="icon"
                                                        src="//lh3.googleusercontent.com/f3DV_-dONQj-F3xTzmFVXlFD-wnFx8jUYgdJjTypi-qpyvCCYvVWBB0VKx4vkslfKA=s40"
                                                    />
                                                </li>
                                                <a href="/app/detail/e77c6abda9475d622f4820628c4fe061/?tabType=usage">
                                                    <li className="name">
                                                        파스텔걸
                                                    </li>
                                                </a>
                                                <li className="right">
                                                    <div
                                                        style={{
                                                            position:
                                                                'relative',
                                                        }}
                                                    >
                                                        <div className="icon2 up"></div>
                                                        <div className="pct2 up">
                                                            +141.9%
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
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

export default Dashboard;
