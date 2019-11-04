import React, { Component } from 'react';

class Rank extends Component {
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

                    <div id="page_header_view">
                        <div className="page_section">
                            <div id="title">
                                <h1>앱</h1>
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

                        <div className="page_filter rank">
                            <div id="title">
                                <div id="baseDT">2019년 10월 21일 ~ 10월 27일</div>
                                <div id="baseDTSelecter" className=""></div>
                                <div id="dateType3" className="trans_ani">
                                    <div id="daily"><p>일간</p></div>
                                    <div id="weekly" className="selected"><p>주간</p></div>
                                    <div id="monthly"><p>월간</p></div>
                                </div>
                            </div>

                            <div id="marketType" className="three">
                                <div id="storeType" className="item">
                                    <div id="store" className="column">
                                        <div id="icon"></div>
                                        <div id="name">Google Play Store</div>

                                        <div id="selecter"></div>
                                    </div>
                                    <div id="store_list" className="sub_list" style={{"left": "-1px"}}>
                                        <div id="google" className="store_item selected">
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
                                <div id="countryType" className="item">
                                    <div id="country" className="column">
                                        <div id="name">KOREA</div>
                                        <div id="selecter"></div>
                                    </div>
                                    <div id="country_list" className="sub_list" style={{"left":" -1px"}}>
                                    </div>

                                </div>
                                <div id="categoryType" className="item more" style={{"width":" 327px"}}>
                                    <div id="category" className="column">
                                        <div id="name">카테고리 전체</div>
                                        <div id="selecter"></div>
                                    </div>

                                    <div id="category_list" className="sub_list scroll_list" style={{"width":" 327px"}}>
                                        <div id="ALL CATEGORIES" className="category_item selected">
                                            <div id="name"><span>카테고리 전체</span><a
                                                className="categoryLink" id="0">0</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="HEALTH_AND_FITNESS" className="category_item">
                                            <div id="name"><span>건강/운동</span><a
                                                className="categoryLink" id="2">2</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div className="category_item subselecter">
                                            <div id="name"><span>게임</span></div>
                                            <div id="selecter"></div>
                                        </div>
                                        <div id="EDUCATION" className="category_item">
                                            <div id="name"><span>교육</span><a
                                                className="categoryLink" id="3">3</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="FINANCE" className="category_item">
                                            <div id="name"><span>금융</span><a
                                                className="categoryLink" id="5">5</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="WEATHER" className="category_item">
                                            <div id="name"><span>날씨</span><a
                                                className="categoryLink" id="6">6</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="NEWS_AND_MAGAZINES" className="category_item">
                                            <div id="name"><span>뉴스/ 잡지</span><a
                                                className="categoryLink" id="7">7</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="DATING" className="category_item">
                                            <div id="name"><span>데이트</span><a
                                                className="categoryLink" id="52">52</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="TOOLS" className="category_item">
                                            <div id="name"><span>도구</span><a
                                                className="categoryLink" id="9">9</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="BOOKS_AND_REFERENCE" className="category_item">
                                            <div id="name"><span>도서 및 참고자료</span><a
                                                className="categoryLink" id="10">10</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="VIDEO_PLAYERS" className="category_item">
                                            <div id="name"><span>동영상 플레이어/편집기</span><a
                                                className="categoryLink" id="47">47</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="LIBRARIES_AND_DEMO" className="category_item">
                                            <div id="name"><span>라이브러리/데모</span><a
                                                className="categoryLink" id="12">12</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="LIFESTYLE" className="category_item">
                                            <div id="name"><span>라이프스타일</span><a
                                                className="categoryLink" id="13">13</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="COMICS" className="category_item">
                                            <div id="name"><span>만화</span><a
                                                className="categoryLink" id="14">14</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="PERSONALIZATION" className="category_item">
                                            <div id="name"><span>맞춤 설정</span><a
                                                className="categoryLink" id="56">56</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="HOUSE_AND_HOME" className="category_item">
                                            <div id="name"><span>부동산/홈 인테리어</span><a
                                                className="categoryLink" id="49">49</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="BEAUTY" className="category_item">
                                            <div id="name"><span>뷰티</span><a
                                                className="categoryLink" id="55">55</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="BUSINESS" className="category_item">
                                            <div id="name"><span>비즈니스</span><a
                                                className="categoryLink" id="16">16</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="PHOTOGRAPHY" className="category_item">
                                            <div id="name"><span>사진</span><a
                                                className="categoryLink" id="17">17</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="PRODUCTIVITY" className="category_item">
                                            <div id="name"><span>생산성</span><a
                                                className="categoryLink" id="18">18</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="SOCIAL" className="category_item">
                                            <div id="name"><span>소셜</span><a
                                                className="categoryLink" id="19">19</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="SHOPPING" className="category_item">
                                            <div id="name"><span>쇼핑</span><a
                                                className="categoryLink" id="20">20</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="SPORTS" className="category_item">
                                            <div id="name"><span>스포츠</span><a
                                                className="categoryLink" id="21">21</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="FOOD_AND_DRINK" className="category_item">
                                            <div id="name"><span>식음료</span><a
                                                className="categoryLink" id="50">50</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="ENTERTAINMENT" className="category_item">
                                            <div id="name"><span>엔터테인먼트</span><a
                                                className="categoryLink" id="22">22</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="TRAVEL_AND_LOCAL" className="category_item">
                                            <div id="name"><span>여행 및 지역정보</span><a
                                                className="categoryLink" id="23">23</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="ART_AND_DESIGN" className="category_item">
                                            <div id="name"><span>예술/디자인</span><a
                                                className="categoryLink" id="54">54</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="MUSIC_AND_AUDIO" className="category_item">
                                            <div id="name"><span>음악 및 오디오</span><a
                                                className="categoryLink" id="25">25</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="MEDICAL" className="category_item">
                                            <div id="name"><span>의료</span><a
                                                className="categoryLink" id="26">26</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="EVENTS" className="category_item">
                                            <div id="name"><span>이벤트</span><a
                                                className="categoryLink" id="51">51</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="AUTO_AND_VEHICLES" className="category_item">
                                            <div id="name"><span>자동차</span><a
                                                className="categoryLink" id="46">46</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="MAPS_AND_NAVIGATION" className="category_item">
                                            <div id="name"><span>지도/내비게이션</span><a
                                                className="categoryLink" id="48">48</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="PARENTING" className="category_item">
                                            <div id="name"><span>출산/육아</span><a
                                                className="categoryLink" id="53">53</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="COMMUNICATION" className="category_item">
                                            <div id="name"><span>커뮤니케이션</span><a
                                                className="categoryLink" id="27">27</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="TRANSPORTATION" className="category_item">
                                            <div id="name"><span>교통</span><a
                                                className="categoryLink" id="4">4</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="PERSONALIZATION" className="category_item">
                                            <div id="name"><span>데코레이션</span><a
                                                className="categoryLink" id="8">8</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="APP_WALLPAPER" className="category_item">
                                            <div id="name"><span>라이브 배경화면</span><a
                                                className="categoryLink" id="11">11</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="MEDIA_AND_VIDEO" className="category_item">
                                            <div id="name"><span>미디어 및 동영상</span><a
                                                className="categoryLink" id="15">15</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="APP_WIDGETS" className="category_item">
                                            <div id="name"><span>위젯</span><a
                                                className="categoryLink" id="24">24</a></div>
                                            <div id="check"></div>
                                        </div>
                                        <div id="#" className="category_item">
                                            <div id="name"><span>해당없음</span><a
                                                className="categoryLink" id="45">45</a></div>
                                            <div id="check"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="popfilter" className="disable">
                                <div id="gender" className="subfilter">
                                    <ul className="three">
                                        <li id="all_col" className="item selected">
                                            <div id="all" className="column img"></div>
                                            <div id="all" className="column text">전체</div>
                                        </li>
                                        <li id="male_col" className="item">
                                            <div id="male" className="column img"></div>
                                            <div id="male" className="column text">남자</div>
                                        </li>
                                        <li id="female_col" className="item">
                                            <div id="female" className="column img"></div>
                                            <div id="female" className="column text">여자</div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="age" className="subfilter">
                                    <ul className="six">
                                        <li id="all_col" className="item selected">
                                            <div id="all" className="column img"></div>
                                            <div id="all" className="column text">전체</div>
                                        </li>
                                        <li id="ten_col" className="item">
                                            <div id="ten" className="column img"></div>
                                            <div id="ten" className="column text">10대</div>
                                        </li>
                                        <li id="twenty_col" className="item">
                                            <div id="twenty" className="column img"></div>
                                            <div id="twenty" className="column text">20대</div>
                                        </li>
                                        <li id="thirty_col" className="item">
                                            <div id="thirty" className="column img"></div>
                                            <div id="thirty" className="column text">30대</div>
                                        </li>
                                        <li id="forty_col" className="item">
                                            <div id="forty" className="column img"></div>
                                            <div id="forty" className="column text">40대</div>
                                        </li>
                                        <li id="fifty_col" className="item">
                                            <div id="fifty" className="column img"></div>
                                            <div id="fifty" className="column text">50대+</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="pct_filter_box" className="subfilter">
                                <div id="up_down_filter" className="disable">
                                    <div id="user" className="tab_item" title="사용자">
                                    </div>
                                    <div id="install" className="tab_item" title="설치자">
                                    </div>
                                    <div id="tot_time" className="tab_item" title="총 사용시간">
                                    </div>
                                    <div id="avg_time" className="tab_item" title="1인당 평균 사용시간(분)">
                                    </div>
                                </div>

                                <div className="line"></div>

                                <div id="slider_wrapper">
                                    <div id="slider_pct"
                                         className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-state-disabled ui-slider-disabled">
                                        <div className="ui-slider-range ui-widget-header ui-corner-all"
                                             style={{"left": "0%", "width": "100%"}}></div>
                                        <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"
                                              style={{"left":" 0%"}}></span><span
                                        className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0"
                                        style={{"left": "100%"}}></span></div>
                                </div>
                                <div id="slider_value">
                                    <div className="unit">-</div>
                                    <div className="all">∞</div>
                                    <div className="unit"> ~</div>
                                    <div className="all">∞</div>
                                </div>
                                <div className="val down" style={{"right":"638px", "font-size": "22px", "line-height": "12px;"}}>-∞
                                </div>
                                <div className="val down" style={{"right":"560px"}}>-300%</div>
                                <div className="val down" style={{"right":"494px"}}>-200%</div>
                                <div className="val down" style={{"right":"426px"}}>-100%</div>
                                <div className="val" style={{"right":"370px"}}>0%</div>
                                <div className="val up" style={{"right":"296px"}}>100%</div>
                                <div className="val up" style={{"right":"228px"}}>200%</div>
                                <div className="val up" style={{"right":"162px"}}>300%</div>
                                <div className="val up" style={{"right":"111px", "font-size": "22px", "line-height":"12px"}}>∞</div>
                                <div className="info_free_user_box">
                                    <div className="info_box_wrapper">
                                        <div className="info_box">
                                            <div className="info_text">프리미엄 사용자에게 지원되는 기능입니다.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rank_content_wrapper">
                    <div id="content_view">
                        <div className="page_orderby">
                            <div id="search_type_slt_box" className="select_box bold_line">
                                <div id="search_type" className="selected_box">
                                    <div id="name">전체</div>
                                    <div id="selecter">
                                    </div>
                                </div>
                                <div id="search_type_list" className="select_box_list">
                                    <div id="all" className="item selected">
                                        <div id="name">전체</div>
                                        <div id="check">
                                        </div>
                                    </div>
                                    <div id="name" className="item">
                                        <div id="name">앱이름</div>
                                        <div id="check">
                                        </div>
                                    </div>
                                    <div id="package" className="item">
                                        <div id="name">패키지명</div>
                                        <div id="check">
                                        </div>
                                    </div>
                                    <div id="corporation" className="item">
                                        <div id="name">개발사</div>
                                        <div id="check">
                                        </div>
                                    </div>
                                    <div id="providergroup" className="item disable">
                                        <div id="name">회사/그룹</div>
                                        <div id="check">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="keywordSearch">
                                <form action="javascript:void(0);" method="get">
                                    <input type="text" id="search_keyword" placeholder="전체" required=""
                                           className="ui-autocomplete-input" autoComplete="off" />
                                        <input type="reset" id="reset" value="" alt="clear" />
                                            <input type="button" id="btn_search" value="검색" required="" />
                                </form>
                            </div>

                            <div id="btn_export_excel"></div>

                            <div id="orderby_slt_box" className="select_box bold_line">
                                <div id="orderbyType" className="selected_box">
                                    <div id="name">사용자 순</div>
                                    <div id="selecter">
                                    </div>
                                </div>
                                <div id="orderbyType_list" className="select_box_list daily">
                                    <div id="userCount" className="item selected">
                                        <div id="name">사용자 순</div>
                                        <div id="check">
                                        </div>
                                    </div>
                                    <div id="totalUsedTime" className="item nonDaily">
                                        <div id="name">총 사용시간 순</div>
                                        <div id="check">
                                        </div>
                                    </div>
                                    <div id="totalExecCount" className="item nonDaily">
                                        <div id="name">총 실행횟수 순</div>
                                        <div id="check">
                                        </div>
                                    </div>

                                    <div id="totalUsedBytes" className="item nonDaily">
                                        <div id="name">총 데이터 사용량 순</div>
                                        <div id="check">
                                        </div>
                                    </div>

                                    <div id="upDownPercent" className="item">
                                        <div id="name">성장비율 순</div>
                                        <div id="check">
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div id="div_check_box">
                                <div id="chk_new_list" className="checkbox"></div>
                                <div className="chk_text">신규랭킹</div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        );
    }
}

export default Rank;
