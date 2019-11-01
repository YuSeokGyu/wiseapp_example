import React, { Component } from 'react';
class Main extends Component {
    render() {
        return (
            <div id="middle_container">
                <div id="page_header_wrapper">
                    <div id="info_pay_view">
                        <div
                            id="info_pay_box"
                            style={{ background: '#cad9e6' }}
                        >
                            <div id="left_box">
                                <div id="info_icon"></div>
                                <div id="text">
                                    무료 회원은 일부 데이터와 기능이 제한됩니다.
                                </div>
                            </div>
                            <div id="right_box">
                                <a href="#1">
                                    <div id="btn_go_pay_info">유료가입안내</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="content_view">
                    <div id="desc_view">
                        <div id="wiseapp" className="desc_box">
                            <div className="title_div">
                                <div className="title">앱시장분석</div>
                                <div className="img"></div>
                            </div>
                            <div className="content_box">
                                <div className="top_box">
                                    <div className="bg_box"></div>
                                    <div className="text big">
                                        앱의 시장 위치와 경쟁 현황
                                    </div>
                                    <div className="text small">
                                        사용자, 매출, 설치자, 사용시간, 실행횟수
                                        파악하여 경쟁분석, 투자, 기획, 광고,
                                        마케팅 활용
                                    </div>
                                </div>

                                <div className="bottom_box">
                                    <ul className="ex_list">
                                        <li className="ex_item">
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s24')",
                                                }}
                                            ></div>

                                            <div className="text">
                                                모바일 동영상 앱중 사용시간
                                                점유율 88%!
                                            </div>
                                            <a
                                                href="/app/detail/f9ee0578fe1cc94de7482bd41accb329/?dateType=1&amp;searchDate=2016-11-28&amp;tabType=usage"
                                                target="blank"
                                            >
                                                <div className="btn_go">
                                                    더보기
                                                </div>
                                            </a>
                                        </li>
                                        <li className="ex_item">
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw=s24')",
                                                }}
                                            ></div>

                                            <div className="text">
                                                사용시간 작년 대비 73% 성장!
                                            </div>
                                            <a
                                                href="/app/detail/1c337646f29875672b5a61192b9010f9/?dateType=1&amp;searchDate=2016-11-28&amp;tabType=usage"
                                                target="blank"
                                            >
                                                <div className="btn_go">
                                                    더보기
                                                </div>
                                            </a>
                                        </li>
                                        <li className="ex_item">
                                            <div
                                                className="icon"
                                                style={{
                                                    backgroundImage:
                                                        "url('//lh3.googleusercontent.com/R2IN1j3Um3mttEwE4wCBgwlntTOoDCevffLdK-IsYA0kn8KA21OoKx4KAGNVB-jw7Mk=s24')",
                                                }}
                                            ></div>

                                            <div className="text">
                                                금융앱 중 월 사용자수 2위!
                                            </div>
                                            <a
                                                href="/app/detail/fd1d403ca61027bf0b09e69db9d54030/?dateType=1&amp;searchDate=2016-11-28&amp;tabType=usage"
                                                target="blank"
                                            >
                                                <div className="btn_go">
                                                    더보기
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="div_search">
                                        <div className="img"></div>
                                        <form action="#1" method="get">
                                            <input
                                                type="text"
                                                id="ipt_search"
                                                className="ipt_search"
                                                placeholder="앱 검색"
                                                required=""
                                            />
                                            <input
                                                type="reset"
                                                id="reset"
                                                className="reset"
                                                value=""
                                                alt="clear"
                                            />
                                        </form>
                                    </div>

                                    <div className="div_search_result">
                                        <div className="loading"></div>
                                        <ul className="search_list"></ul>
                                        <div className="msg_box">
                                            <div className="text">
                                                데이터가 없습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="wiseretail" className="desc_box">
                            <div className="title_div">
                                <div className="title">소매시장분석</div>
                                <div className="img"></div>
                            </div>
                            <div className="content_box">
                                <div className="top_box">
                                    <div className="bg_box"></div>
                                    <div className="text big">
                                        리테일의 시장 위치와 경쟁 현황
                                    </div>
                                    <div className="text small">
                                        결제금액, 평균결제금액, 구매연령,
                                        결제수단 파악하여 경쟁 분석, 투자, 기획,
                                        전략, 마케팅 활용
                                    </div>
                                </div>
                                <div className="bottom_box">
                                    <ul className="ex_list">
                                        <li className="ex_item">
                                            <div className="brand_name">
                                                쿠팡
                                            </div>
                                            <div className="text">
                                                월 결제액 1조원 이상!
                                            </div>
                                            <a
                                                href="/brand/detail/16533/"
                                                target="blank"
                                            >
                                                <div className="btn_go">
                                                    더보기
                                                </div>
                                            </a>
                                        </li>
                                        <li className="ex_item">
                                            <div className="brand_name">
                                                스타벅스
                                            </div>
                                            <div className="text">
                                                음료업종중 결제액 압도적 1위
                                            </div>
                                            <a
                                                href="/brand/detail/16426/"
                                                target="blank"
                                            >
                                                <div className="btn_go">
                                                    더보기
                                                </div>
                                            </a>
                                        </li>
                                        <li className="ex_item">
                                            <div className="brand_name">
                                                제주항공
                                            </div>
                                            <div className="text">
                                                월 결제액 1,000억원 이상!
                                            </div>
                                            <a
                                                href="/brand/detail/16676/"
                                                target="blank"
                                            >
                                                <div className="btn_go">
                                                    더보기
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="div_search">
                                        <div className="img"></div>
                                        <form action="#1" method="get">
                                            <input
                                                type="text"
                                                id="ipt_search"
                                                className="ipt_search"
                                                placeholder="리테일 검색"
                                                required=""
                                            />
                                            <input
                                                type="reset"
                                                id="reset"
                                                className="reset"
                                                value=""
                                                alt="clear"
                                            />
                                        </form>
                                    </div>

                                    <div className="div_search_result">
                                        <div className="loading"></div>
                                        <ul className="search_list"></ul>
                                        <div className="msg_box">
                                            <div className="text">
                                                데이터가 없습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sales_view">
                    <div className="wrapper">
                        <div id="title">세일즈에 문의하기</div>
                    </div>
                    <div className="wrapper">
                        <div id="sales_form_box_wrapper">
                            <div id="sales_form_box">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="right">
                                                <div
                                                    id="reqNameTitle"
                                                    className="text sub_title"
                                                >
                                                    이름
                                                </div>
                                            </td>
                                            <td className="left">
                                                <input
                                                    type="text"
                                                    id="reqName"
                                                    placeholder="이름"
                                                    required=""
                                                />
                                            </td>
                                            <td className="right">
                                                <div
                                                    id="reqCompanyTitle"
                                                    className="text sub_title"
                                                >
                                                    회사명
                                                </div>
                                            </td>
                                            <td className="left">
                                                <input
                                                    type="text"
                                                    id="reqCompany"
                                                    placeholder="회사명"
                                                    required=""
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="right">
                                                <div
                                                    id="reqEmailTitle"
                                                    className="text sub_title"
                                                >
                                                    이메일
                                                </div>
                                            </td>
                                            <td className="left">
                                                <input
                                                    type="text"
                                                    id="reqEmail"
                                                    placeholder="회사 이메일"
                                                    required=""
                                                />
                                            </td>
                                            <td className="right">
                                                <div
                                                    id="reqTelTitle"
                                                    className="text sub_title"
                                                >
                                                    연락처
                                                </div>
                                            </td>
                                            <td className="left">
                                                <input
                                                    type="text"
                                                    id="reqTel"
                                                    placeholder="연락처"
                                                    required=""
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div id="btn_reg_sales" className="btn_rounded">
                            신청하기
                        </div>
                    </div>
                </div>

                <div id="customer_list_view">
                    <div id="desc">
                        앞서가는 400개 이상의 기업들이 와이즈앱과 함께 데이터
                        기반의 의사결정을 내리고 있습니다.
                    </div>
                    <div id="customer_list">
                        <div className="block">
                            <div className="wrapper">
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_kakao.png"
                                        alt=""
                                    />
                                </div>

                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_naver.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_skt.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_netmarble.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_kt.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="wrapper">
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_mbc.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_amorepacific.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_hyundaihomeshopping.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_kpmg.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_lotterentacar.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_hyundaimnsoft.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="wrapper">
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_truefriend.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_hanacard.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="item"
                                    style={{ marginTop: '8px' }}
                                >
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_nhis.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_citi.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="item"
                                    style={{ marginTop: '8px' }}
                                >
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_deutschebank.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="wrapper">
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_gsretail.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_nexon.png"
                                        alt=""
                                    />
                                </div>

                                <div
                                    className="item"
                                    style={{ marginTop: '-4px' }}
                                >
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_lottemart.png"
                                        alt=""
                                    />
                                </div>

                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_meritz.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="item"
                                    style={{ marginLeft: '27px' }}
                                >
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_nasmedia.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="item"
                                    style={{
                                        marginTop: '4px',
                                        marginLeft: '0px',
                                    }}
                                >
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_toss.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="wrapper">
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_shinvest.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="item"
                                    style={{ marginTop: '-4px' }}
                                >
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_miraeasset.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_dunamu.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_shinyoung.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_kcb.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="wrapper">
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_styleshare.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="item"
                                    style={{ marginTop: '2px' }}
                                >
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_goodchoice.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_yanolja.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_idus.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_pooq.png"
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src="https://www.wiseapp.co.kr/resources/img/customer/logo_client_whowho.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="banner_wrapper">
                    <div id="banner_view">
                        <div className="banner_view_inner">
                            <div id="banner">
                                <p>
                                    ‘와이즈앱/와이즈리테일’은 앱과 소매시장의
                                    사용자 행태 분석 데이터를 제공하는
                                    서비스입니다.
                                    <br />본 서비스를 제공하는 주식회사
                                    아이디어웨어는 국내외 최고의 기업들에 데이터
                                    분석 서비스를 제공해온 데이터 분석
                                    전문기업입니다.
                                    <br />
                                </p>
                                <p>
                                    ‘와이즈앱/와이즈리테일’이 제공하는 정보는
                                    특정 기업이나 서비스와 관계없이 자체 데이터
                                    분석을 통해 작성되었습니다.
                                    <br />본 정보는 표본조사를 통해 한국인의
                                    사용행태에 대한 통계적 추정치를 제공하는
                                    것입니다.
                                    <br />
                                    추정치와 다른 결과를 초래할 수 있는 다양한
                                    변수들이 존재할 수 있다는 점을 유의하시기
                                    바랍니다.
                                    <br />
                                </p>
                                <p>
                                    ‘와이즈앱/와이즈리테일’이 제공하는
                                    정보일체는 저작권법에 의하여 보호받는
                                    저작물입니다.
                                    <br />본 저작물을 무단으로 사용하거나 임의로
                                    가공, 변조하거나 사전 승낙 없이 영리목적으로
                                    이용하거나 제 3자에게 이용하게 하여서는 안
                                    됩니다.
                                    <br />본 서비스의 내용 중 일부를 공공의
                                    목적으로 인용할 경우에는 반드시 사전에
                                    승낙을 득한 후 출처를
                                    ‘와이즈앱/와이즈리테일’에서 인용하였음을
                                    밝혀야 합니다.
                                    <br />
                                    문의사항은{' '}
                                    <a
                                        id="mailto"
                                        href="mailto:wiseapp@ideaware.co.kr"
                                    >
                                        wiseapp@ideaware.co.kr
                                    </a>
                                    로 연락 주십시오.
                                </p>
                            </div>

                            <div className="button_box">
                                <div className="button_box_cell">
                                    <a href="#1">
                                        <div id="btn_company_info">
                                            서비스 소개서
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
