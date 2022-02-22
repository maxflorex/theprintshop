import styled from "styled-components";


const Row = styled.div`
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   min-height: ${props => props.h};
   background-color: ${props => props.color};
   background-image: url(${props => props.img});
   border-radius: ${props => props.radius || '0.6rem'};
   text-align: ${props => props.align || 'left'};
   align-content: center;
   align-items: ${props => props.align || 'start'};
   padding-top: ${props => props.pt || '4rem'};
   padding-bottom: ${props => props.pb || '4rem'};
   gap: ${props => props.gap || '0.6rem'};
   background-position: ${props => props.position || 'center'};
   background-size: cover;
   margin-left: ${props => props.ml};
   margin-right: ${props => props.mr};
   margin: ${props => props.m};
   overflow: hidden;
   width: 100%;
   height: 100%;
   padding: ${props => props.p};
   margin: ${props => props.m};
   @media (max-width: 1280px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Column = styled.div`
   display: grid;
   grid-template-columns: repeat(1, minmax(0, 1fr));
   min-height: ${props => props.h};
   background-color: ${props => props.color};
   background-image: url(${props => props.img});
   border-radius: ${props => props.radius || '0.6rem'};
   text-align: ${props => props.align || 'left'};
   align-content: center;
   align-items: ${props => props.align || 'start'};
   padding-top: ${props => props.pt || '4rem'};
   padding-bottom: ${props => props.pb || '4rem'};
   gap: ${props => props.gap || '0.6rem'};
   background-position: ${props => props.position || 'center'};
   background-size: cover;
   margin-left: ${props => props.ml || '2rem'};
   margin-right: ${props => props.mr || '2rem'};
   margin-bottom: ${props => props.mb || '2rem'};
   margin-top: ${props => props.mt || '2rem'};
   margin: ${props => props.m};
   padding: ${props => props.p};
   padding-top: ${props => props.pt};
   padding-bottom: ${props => props.pb};
   background-attachment: ${props => props.attach};
   width: ${props => props.width};
   min-height: ${props => props.h};
   overflow: hidden;
   position: ${props => props.position};
   opacity: ${props => props.opacity};
   @media (max-width: 1280px) {
      width: ${props => props.widthMd};
      background-color: ${props => props.colorMd};
   }
   @media (max-width: 758px) {
      width: ${props => props.widthSm};
      position: ${props => props.positionSm};
      background-color: ${props => props.color || 'inherit'};
      
   }
`

const Grid = styled.div`
   display: grid;
   align-content: center;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   min-height: ${props => props.h};
   background-color: ${props => props.color};
   border-radius: 0.6rem;
   margin: ${props => props.m};
   margin-top: ${props => props.mt};
   margin-bottom: ${props => props.mb};
   margin-left: ${props => props.ml};
   margin-right: ${props => props.mr};
   padding-top: ${props => props.pt};
   padding-bottom: ${props => props.pb};
   margin: ${props => props.m};
   padding: ${props => props.p};
   gap: ${props => props.gap};
   position: ${props => props.position};
   padding: ${props => props.p};
   width: ${props => props.width};
   @media (max-width: 1280px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: ${props => props.gapH};
   }
`

const Items = styled.div`
   display: grid;
   grid-template-columns: repeat(4, minmax(0, 1fr));
   min-height: ${props => props.h};
   background-color: ${props => props.color};
   gap: 2rem;
   margin-left: ${props => props.ml || '4rem'};
   margin-right: ${props => props.mr || '4rem'};
   margin-top: ${props => props.mt || '4rem'};
   margin-bottom: ${props => props.mb || '4rem'};
   padding-top: ${props => props.pt || '4rem'};
   padding-bottom: ${props => props.pb || '4rem'};
   padding: ${props => props.p};
   margin: ${props => props.m};
   align-items: start;
   font-family: ${props => props.font || 'Oswald'};
   font-weight: ${props => props.weight || 100};
   font-size: ${props => props.size || '1.4rem'};
   @media (max-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   };

`
const Items6 = styled.div`
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   min-height: ${props => props.h};
   background-color: ${props => props.color};
   gap: 2rem;
   margin-left: ${props => props.ml || '4rem'};
   margin-right: ${props => props.mr || '4rem'};
   margin-top: ${props => props.mt || '4rem'};
   margin-bottom: ${props => props.mb || '4rem'};
   padding-top: ${props => props.pt || '4rem'};
   padding-bottom: ${props => props.pb || '4rem'};
   border-radius: ${props => props.radius || '0.6rem'};
   padding: ${props => props.p};
   margin: ${props => props.m};
   align-items: start;
   font-family: ${props => props.font || 'Oswald'};
   font-weight: ${props => props.weight || 100};
   font-size: ${props => props.size || '1.4rem'};
   @media (max-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   };
`

const Items3 = styled.div`
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));
   min-height: ${props => props.h};
   background-color: ${props => props.color};
   gap: 2rem;
   margin-left: ${props => props.ml || '4rem'};
   margin-right: ${props => props.mr || '4rem'};
   margin-top: ${props => props.mt || '4rem'};
   margin-bottom: ${props => props.mb || '4rem'};
   padding-top: ${props => props.pt || '4rem'};
   padding-bottom: ${props => props.pb || '4rem'};
   padding: ${props => props.p};
   margin: ${props => props.m};
   align-items: start;
   font-family: ${props => props.font || 'Oswald'};
   font-weight: ${props => props.weight || 100};
   font-size: ${props => props.size || '1.4rem'};
   max-height: ${props => props.maxH};
   gap: ${props => props.gap};
   @media (max-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   };
   @media (max-width: 758px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
   };
`

const Flex = styled.div`
   display: flex;
   flex-direction: ${props => props.direction || 'row'};
   flex-wrap: wrap;
   background-image: url(${props => props.img});
   background-position: ${props => props.position || 'center'};
   background-size: ${props => props.bgSize};
   background-color: ${props => props.color || 'white'};
   justify-content: ${props => props.justify || 'space-between'};
   align-items: ${props => props.align || 'center'};  
   padding-top: ${props => props.pt || '2rem'};
   padding-bottom: ${props => props.pb || '2rem'};
   padding-left: ${props => props.pl || '2rem'};
   padding-right: ${props => props.pr || '2rem'};
   margin: ${props => props.m || '2rem'};
   padding: ${props => props.p};
   border-radius: ${props => props.radius || '0.6rem'};
   box-sizing: content-box;
   min-height: ${props => props.h};
   max-height: ${props => props.hMax};
   gap: ${props => props.gap || '0.6rem'};
   overflow: hidden;
   cursor: ${props => props.cursor};
   object-fit: ${props => props.object};
   width: ${props => props.width};
   @media (max-width: 1024px) {
      justify-content: ${props => props.justify || 'center'};
      flex-direction: ${props => props.direction || 'row'};
      gap: ${props => props.gapMd || '0'};
   }
`

const Hero = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   background-color: ${props => props.color};
   background-image: url(${props => props.img});
   background-position: ${props => props.position || 'center'};
   background-size: cover;
   justify-content: center;
   align-items: center;
   margin-top: ${props => props.mt || '4rem'};
   margin-bottom: ${props => props.mb || '4rem'};
   margin-left: ${props => props.ml};
   margin-right: ${props => props.mr};
   padding-top: ${props => props.pt || '4rem'};
   padding-bottom: ${props => props.pb || '4rem'};
   padding-left: ${props => props.pl || '4rem'};
   padding-right: ${props => props.pr || '4rem'};
   padding: ${props => props.p};
   margin: ${props => props.m};
   border-radius: 0.6rem;
   min-height: ${props => props.h};
   width: ${props => props.width};
   position: relative;
   gap: ${props => props.gap || '0'};
   @media (max-width: 1280px) {
      background-image: url(${props => props.imgMd});
      display: ${props => props.display};
   };
   @media (max-width: 1024px) {
      width: ${props => props.widthMd};
   }
`

const Backdrop = styled.div`
   width: 100%;
   height: 100%;
   backdrop-filter: blur(16px) saturate(180%);
   -webkit-backdrop-filter: blur(16px) saturate(180%);
   background-color: rgba(255, 255, 255, 0.75);
   border: 1px solid rgba(209, 213, 219, 0.3);
   margin: ${props => props.m};
   border-radius: 0.6rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: ${props => props.p};
   margin: ${props => props.m};
   border-radius: ${props => props.radius || '0.6rem'};
   min-height: ${props => props.h};
`

const BackdropDark = styled.div`
   width: 100%;
   height: 100%;
   backdrop-filter: blur(16px) saturate(180%);
   -webkit-backdrop-filter: blur(16px) saturate(180%);
   background-color: rgba(17, 25, 40, 0.75);
   min-height: ${props => props.h};
   border: 1px solid rgba(255, 255, 255, 0.125);
   margin: ${props => props.m};
   border-radius: 0.6rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: ${props => props.p};
   margin: ${props => props.m};
   border-radius: ${props => props.radius || '0.6rem'};
`

export { Flex, Grid, Hero, Backdrop, Items, Column, Row, BackdropDark, Items6, Items3 }