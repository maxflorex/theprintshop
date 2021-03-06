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
   width: ${props => props.width};
   @media (max-width: 1280px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      width: ${props => props.wMd};
      margin: ${props => props.mMd};
   }
   @media (max-width: 758px) {
      width: ${props => props.wSm};
      padding: ${props => props.pSm};
      gap: ${props => props.gapSm};
      margin: ${props => props.mSm};
      
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
   align-content: ${props => props.ac || 'center'};
   align-items: ${props => props.align || 'start'};
   justify-items: ${props => props.items};
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
   max-height: ${props => props.hMax};
   overflow: ${props => props.overflow || 'hidden'};
   position: ${props => props.position};
   opacity: ${props => props.opacity};
   object-fit: ${props => props.object};
   @media (max-width: 1280px) {
      width: ${props => props.widthMd};
      background-color: ${props => props.colorMd};
      min-height: ${props => props.hMd};
      background-image: url(${props => props.imgMd});
   }
   @media (max-width: 758px) {
      width: ${props => props.widthSm};
      position: ${props => props.positionSm};
      background-color: ${props => props.color || 'inherit'};
      max-height: ${props => props.hMaxSm};
      margin: ${props => props.mSm};
      padding: ${props => props.pSm};
      gap: ${props => props.gapSm};
      margin-top: ${props => props.mtSm};
      margin-bottom: ${props => props.mbSm};
      display: ${props => props.displaySm};
      justify-items: ${props => props.itemsSm};
      padding-bottom: ${props => props.pbSm};
      background-attachment: ${props => props.attachSm};
      height: ${props => props.hSm};
   }
   &:hover{
      background-color: ${props => props.colorH};
      cursor: ${props => props.cursor}
   }
`

const Grid = styled.div`
   display: grid;
   align-content: ${props => props.ac || 'center'};
   grid-template-columns: repeat(2, minmax(0, 1fr));
   min-height: ${props => props.h};
   background-image: url(${props => props.img});
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
      width: ${props => props.widthMd};
      background-color: ${props => props.colorMd};
      min-height: ${props => props.hMd};
   }
   @media (max-width: 758px) {
      width: ${props => props.widthSm};
      position: ${props => props.positionSm};
      background-color: ${props => props.color || 'inherit'};
      margin: ${props => props.mSm};
      gap: ${props => props.gapSm};
      padding: ${props => props.pSm};
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
   justify-items: ${props => props.justify || 'center'};
   @media (max-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
   };
   @media (max-width: 758px) {
      margin: ${props => props.mSm};
      grid-template-columns: ${props => props.gridSm};
      gap: ${props => props.gapSm}; 
   }

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
      gap: ${props => props.gapSm};
      margin: ${props => props.mSm};
   };
`

const Items3 = styled.div`
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));
   min-height: ${props => props.h};
   background-color: ${props => props.color};
   gap: ${props => props.gap || '2rem'};
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
      min-height: ${props => props.hSm};
      grid-template-columns: ${props => props.columns || 'repeat(1, minmax(0, 1fr))'};
      gap: ${props => props.gapSm};
      margin: ${props => props.mSm};
      padding: ${props => props.pSm};
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
   padding: ${props => props.p};
   border-radius: ${props => props.radius || '0.6rem'};
   border-bottom: ${props => props.bb};
   box-sizing: border-box;
   min-height: ${props => props.h};
   max-height: ${props => props.hMax};
   gap: ${props => props.gap || '0.6rem'};
   overflow: hidden;
   cursor: ${props => props.cursor};
   object-fit: ${props => props.object};
   width: ${props => props.width};
   border-bottom: ${props => props.borderb};
   margin-left: ${props => props.ml || '2rem'};
   margin-right: ${props => props.mr || '2rem'};
   margin-top: ${props => props.mt};
   margin-bottom: ${props => props.mb};
   margin: ${props => props.m};
   @media (max-width: 1024px) {
      margin: ${props => props.mMd};
      justify-content: ${props => props.justifyMd || 'center'};
      flex-direction: ${props => props.direction || 'row'};
      background-color: ${props => props.colorMd};
      gap: ${props => props.gapMd || '0'};

   }
   @media (max-width: 758px) {
      margin-top: ${props => props.mtSm};
      margin-bottom: ${props => props.mbSm};
      justify-content: ${props => props.justifySm};
      padding: ${props => props.pSm};
      margin: ${props => props.mSm};
      display: ${props => props.displaySm};
   }
   &:hover{
      background-color: ${props => props.colorH};
      cursor: ${props => props.cursor};
   }
   &:focus{
      background-color: ${props => props.colorf}; 
      outline : 'solid red 1px' ;
   }
   &:active{
      background-color: ${props => props.colora};  
   }
`

const FlexItems = styled.div`
   display: flex;
   flex-direction: ${props => props.direction || 'row'};
   flex-wrap: wrap;
   background-image: url(${props => props.img});
   background-position: ${props => props.position || 'center'};
   background-size: ${props => props.bgSize};
   background-color: ${props => props.color || 'white'};
   justify-content: ${props => props.justify || 'space-between'};
   align-items: ${props => props.align || 'center'};  
   padding-top: ${props => props.pt || '0'};
   padding-bottom: ${props => props.pb || '0'};
   padding-left: ${props => props.pl || '0'};
   padding-right: ${props => props.pr || '0'};
   padding: ${props => props.p};
   border-radius: ${props => props.radius || '0.6rem'};
   border-bottom: ${props => props.bb};
   box-sizing: border-box;
   min-height: ${props => props.h};
   max-height: ${props => props.hMax};
   gap: ${props => props.gap || '0.6rem'};
   overflow: hidden;
   cursor: ${props => props.cursor || 'pointer'};
   object-fit: ${props => props.object};
   width: ${props => props.width};
   border-bottom: ${props => props.borderb};
   margin-left: ${props => props.ml || '0'};
   margin-right: ${props => props.mr || '0'};
   margin-top: ${props => props.mt};
   margin-bottom: ${props => props.mb};
   margin: ${props => props.m};
   @media (max-width: 1024px) {
      margin: ${props => props.mMd};
      justify-content: ${props => props.justifyMd || 'center'};
      flex-direction: ${props => props.direction || 'row'};
      background-color: ${props => props.colorMd};
      gap: ${props => props.gapMd || '1rem'};

   }
   &:hover{
      background-color: ${props => props.colorH || 'var(--off2)'};
      cursor: ${props => props.cursor};
      box-shadow: rgba(50, 50, 93, 0.2) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;
   }
   &:focus{
      background-color: ${props => props.colorf || 'var(--accent)'}; 
      outline : 'solid red 1px' ;
   }
   &:active{
      background-color: ${props => props.colora || 'var(--accent)'};  
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
   background-attachment: ${props => props.attach};
   @media (max-width: 1280px) {
      background-image: url(${props => props.imgMd});
      display: ${props => props.display};
      background-color: ${props => props.colorMd};
      height: ${props => props.hMd};
   };
   @media (max-width: 1024px) {
      margin: ${props => props.mSm};
      border-radius: ${props => props.radius || '0.6rem'};
      width: ${props => props.widthMd};
      display: ${props => props.displayL};
   };
   @media (max-width: 768px) {
      padding: ${props => props.pSm};
   }
`

const Backdrop = styled.div`
   width: ${props => props.width || '100%'};
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
   display: ${props => props.display};
   @media (max-width: 768px) {
      padding: ${props => props.pSm};
      margin: ${props => props.mSm};      
      height: ${props => props.hSm};
      }
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
   display: ${props => props.display};
   @media (max-width: 768px) {
      margin: ${props => props.mSm};
      padding: ${props => props.pSm};      
      height: ${props => props.hSm};
      }
   &:hover {
      display: ${props => props.displayH};
   }
`

export { Flex, Grid, Hero, Backdrop, Items, Column, Row, BackdropDark, Items6, Items3, FlexItems }