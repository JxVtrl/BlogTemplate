import { styled } from "styled-components"

export const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  grid-template-columns: 1.2fr 1fr;

  margin-top: 64px;
  margin-bottom: 64px;

  height: 400px;
  overflow: hidden;
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid rgba(17, 17, 17, 0.1);
  border-radius: 6px 0px 0px 6px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PostContainer = styled.div`
  width: 100%;
  background-color: #fff;

  padding: 48px 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PostContent = styled.div``

export const PostInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const Tag = styled.div`
  padding: 4px 8px;

  width: fit-content;
  height: 29px;

  background: #111111;
  border-radius: 2px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;

  color: #ffffff;
`

export const ReadTime = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;

  color: #111111;
`

export const Title = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  color: #111111;

  margin-top: 24px;
`

export const Description = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  color: #111111;

  opacity: 0.6;

  margin-top: 16px;
`

export const PostLink = styled.a`
  padding: 8px 16px;
  gap: 4px;

  width: 132px;
  height: 40px;

  border: 1px solid #111111;
  border-radius: 4px;

  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #111111;
`
