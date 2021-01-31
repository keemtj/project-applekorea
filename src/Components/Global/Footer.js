import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StFooter>
      <StWrapper>
        <StProvision>
          * 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의
          업체에 의해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간
          계약의 당사자가 아닙니다. 보상 판매 금액은 보상 판매되는 스마트폰의
          상태 및 모델에 따라 달라집니다. 19세 이상이어야 합니다. 일부
          매장에서는 본 프로그램을 이용할 수 없으며, 일부 기기는 보상 판매
          대상이 아닙니다. Apple은 어떤 기기든 수령을 거부하거나, 그 수량을
          제한할 권리를 보유합니다. 새 Apple 기기 구매 시, 현재 소유한 기기의
          가치만큼 할인을 받을 수도 있습니다. 추가 약관은{' '}
          <a href="https://www.apple.com/kr/trade-in/">apple.com/kr/trade-in</a>
          을 참고하십시오.
        </StProvision>
        <StCategories>
          <ul>
            <li>
              <ul>
                <StIndex>쇼핑 및 알아보기</StIndex>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Music</li>
                <li>AirPods</li>
                <li>iPod touch</li>
                <li>액세서리</li>
              </ul>
            </li>
            <li>
              <ul>
                <StIndex>서비스</StIndex>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>iCloud</li>
                <li>Apple books</li>
                <li>App Store</li>
                <StIndex className={'index'}>계정</StIndex>
                <li>Apple ID 관리</li>
                <li>Apple Store 계정</li>
                <li>iCloud.com</li>
              </ul>
            </li>
            <li>
              <ul>
                <StIndex>Apple Store</StIndex>
                <li>매장 찾기</li>
                <li>온라인에서 쇼핑하기</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple 캠프</li>
                <li>Apple Store 앱</li>
                <li>리퍼 및 특가 제품</li>
                <li>금융 혜택</li>
                <li>Apple Trade In</li>
                <li>주문 상태</li>
                <li>쇼핑 도움말</li>
              </ul>
            </li>
            <li>
              <ul>
                <StIndex>비즈니스</StIndex>
                <li>Apple과 비즈니스</li>
                <li>비즈니스를 위한 제품 쇼핑하기</li>
                <StIndex className={'index'}>교육</StIndex>
                <li>Apple과 교육</li>
                <li>초중고용 제품 쇼핑하기</li>
                <li>대학 생활을 위한 제품 쇼핑하기</li>
              </ul>
            </li>
            <li>
              <ul>
                <StIndex>Apple의 가치관</StIndex>
                <li>손쉬운 사용</li>
                <li>환경</li>
                <li>개인정보 보호</li>
                <li>협력업체에 대한 책임</li>
                <StIndex className={'index'}>Apple 정보</StIndex>
                <li>Newsroom</li>
                <li>Apple 리더쉽</li>
                <li>채용 안내</li>
                <li>이벤트</li>
                <li>일자리 창출</li>
                <li>Apple 연락처</li>
              </ul>
            </li>
          </ul>
        </StCategories>
        <StPS>
          다양한 쇼핑 방법:{' '}
          <a className="link" href="https://www.apple.com/kr/retail/">
            Apple Store
          </a>
          를 방문하거나,{' '}
          <a className="link" href="https://locate.apple.com/kr/ko/">
            리셀러
          </a>
          를 찾아보거나,{' '}
          <a className={'link'} href="tel: 080-330-8877">
            080-330-8877
          </a>
          번으로 전화하세요.
        </StPS>
        <StCopyright>
          <StArticle>
            <div>
              <span>Copyright © 2021 Apple Inc. 모든 권리 보유.</span>
              <StSpan>개인정보 처리방침</StSpan>
              <StSpan>웹 사이트 이용 약관</StSpan>
              <StSpan>판매 및 환불</StSpan>
              <StSpan>법적 고지</StSpan>
              <StSpan>사이트 맵</StSpan>
            </div>
            <div>
              <span>사업자등록번호 : 120-81-84429</span>
              <span>통신판매업신고번호 : 제 2011-서울강남-00810호</span>
              <span>대표이사 : PETER DENWOOD</span>
              <span>주소 : 서울 특별시 강남구 영동대로 517</span>
              <span>대표전화 : 02-6712-6700</span>
              <span>팩스 : 02-6928-0000</span>
            </div>
          </StArticle>
          <StSpan>대한민국</StSpan>
        </StCopyright>
      </StWrapper>
    </StFooter>
  );
};

const StFooter = styled.footer`
  padding: 0rem 1.5rem;
  width: 100%;
  /* background-color: #f5f5f7; */
  background-color: #151516;
  font-size: 1.1rem;
`;

const StWrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 1.5rem 0rem;
  height: 100%;
`;

const StProvision = styled.section`
  border-bottom: 1px solid #d2d2d7;
  padding-bottom: 2rem;
  /* color: #86868b; */
  color: #515154;
  color: #6e6e73;
  line-height: 1.5;
  word-break: keep-all;
  & > a {
    color: #515154;
    text-decoration: none;
  }
`;

const StCategories = styled.section`
  padding: 2rem 0rem;
  & > ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: #515154;
    /* color: #6e6e73; */
    & > li {
      flex-grow: 1;
      & li {
        padding-bottom: 1.5rem;
      }
    }
  }
  .index {
    padding-top: 1.5rem;
  }
`;

const StIndex = styled.li`
  /* color: #1d1d1f; */
  color: white;
  font-weight: 600;
`;

const StPS = styled.div`
  border-bottom: 1px solid #d2d2d7;
  padding-bottom: 1.5rem;
  color: #86868b;

  .link {
    color: #0266cc;
    text-decoration: none;
  }
`;

const StCopyright = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

const StArticle = styled.article`
  flex-grow: 1;
  & > div:first-child {
    span:first-child {
      padding-right: 2rem;
      color: #86868b;
    }
    span + span {
      padding: 0rem 1rem;
      border-right: 1px solid #d2d2d7;
    }
    & > :last-child {
      border: none;
    }
  }
  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.2rem;
    color: #86868b;
  }
`;

const StSpan = styled.span`
  color: #515154;
  color: #6e6e73;
`;
export default Footer;
