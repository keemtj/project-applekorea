// import React from 'react';
// // import styled from 'styled-components';
// import Grid from '../Layout/Grid';

// const Articles = () => {
//   return (
//     <Grid col={12} row={2} cgap={2} rgap={2} margin={0} padding={2}>
//       <StArticle1>
//         <div>
//           <StHeading3>CPU</StHeading3>
//           <div>
//             <StSubHeading>
//               <span>8코어 CPU</span>
//               <span>파워 그 자체.</span>
//             </StSubHeading>
//             <StParagraph3>
//               M1 칩은 MacBook Pro에 엄청나게 빠른 속도와 파워를 선사합니다.
//               8코어 CPU가 이전 세대 대비 최대 2.8배 더 빨라진 프로세싱 속도를
//               뽐내며 복잡한 워크플로도, 막대한 작업량도 거뜬히 처리해내죠.2
//               게다가 모든 작업에서 놀랄 만큼 탁월한 에너지 효율성을
//               발휘한답니다.
//             </StParagraph3>
//           </div>
//         </div>
//         <img src="images/image2.png" />
//       </StArticle1>
//       {/* <StArticle> */}
//       <h2>GPU</h2>
//       <p>
//         8코어 GPU 아름다움을 완성하는 야수성. M1에 탑재된 8코어 GPU는 Apple이
//         제작한 그래픽 프로세서 중 단연코 가장 앞선 성능을 자랑합니다. 세상에서
//         가장 빠른 PC용 통합 그래픽을 제공하는7 이 칩은 무려 5배나 빨라진 말도 안
//         되는 스피드의 그래픽 성능을 보여주죠.
//         <div>최대 5배 더 빠른 그래픽 성능</div>
//       </p>
//       {/* </StArticle> */}
//       {/* <StArticle> */}
//       <h2>macOS Big Sur</h2>
//       <p>
//         M1에서 빛나는 macOS Big Sur의 강력함. M1 칩의 잠재력을 끌어내도록 개발된
//         macOS Big Sur가 Mac에 대대적인 성능 향상을 비롯한 다양한 혜택을
//         선사합니다. 강력하게 업데이트된 앱, 아름다운 새 디자인, 업계를 선도하는
//         개인 정보 보호 기능과 동급 최고의 보안성까지. Apple의 최첨단
//         하드웨어에서 실행되는 최강의 소프트웨어죠.
//         <img src="images/image3.png" />
//       </p>
//       {/* </StArticle> */}
//       {/* <StArticle> */}
//       <h2>속도 및 반응성</h2>
//       <p>
//         속도 및 반응성 M1 칩과 macOS Big Sur가 만나 시스템 전체가 더욱
//         빠릿빠릿하게 돌아갑니다. MacBook Pro를 잠에서 깨우면 즉시 깨어나고,
//         사진을 넘겨보거나 Safari에서 웹서핑을 하는 등 일상적인 작업도 더욱
//         빠르게 실행되죠. 물론 가장 사용량이 많은 앱들도 이 강력한 파워에 힘입어
//         아주 매끄럽게 구동된답니다.
//         <div>켜는 즉시 강력하고 빠릿하게.</div>
//       </p>
//       {/* </StArticle> */}
//       {/* <StArticle> */}
//       <h2>사상 최대의 앱 컬렉션</h2>
//       <p>
//         M1 기반으로 제작된 강력한 앱을 실행해보세요. Rosetta 2 덕분에 기존의
//         앱도 모두 구동할 수 있습니다. 게다가 이제부터는 즐겨 사용하는 iPhone과
//         iPad 앱까지 macOS Big Sur에서 그대로 사용 가능합니다. 사상 최대의 앱
//         컬렉션을 이렇게 Mac에서 전부 만나볼 수 있게 된 거죠.
//         <img src="images/image4.png" />
//       </p>
//       {/* </StArticle> */}
//       {/* <StArticle> */}
//       <h2>한나절은 너끈한 배터리 성능</h2>
//       <p>Mac 사상 가장 긴 최대 20시간의 배터리 사용 시간.</p>
//       {/* </StArticle> */}
//     </Grid>
//   );
// };

// /* <row-start> / <column-start> / <row-end> / <column-end> */
// const StArticle1 = styled.article`
//   grid-area: 1 / 1 / 1 / 13;
//   background: ${({ theme }) => theme.color.linearGradient};
//   border-radius: 3rem;
//   margin-top: 9rem;
//   padding: 3rem 0rem 6rem 3rem;
//   display: flex;
//   width: 100%;
//   height: auto;

//   & > div {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }

//   & > img {
//     width: 100%;
//     height: auto;
//   }
// `;

// const StHeading3 = styled.h2`
//   font-size: 2rem;
//   font-weight: 500;
// `;

// const StSubHeading = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: 5rem;
//   font-weight: bolder;
//   & :first-child {
//     color: ${({ theme }) => theme.color.purple};
//   }
// `;

// const StParagraph3 = styled.p`
//   width: 30rem;
//   font-size: 1.8rem;
//   line-height: 1.5;
// `;

// export default Articles;
